import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell } from "@/components/SiteChrome";
import { CONTACT } from "@/config/contact";

const TITLE = "Free Amazon account audit: Sheikh Anas";
const DESCRIPTION =
  "Request a free Amazon PPC, listing, creative or full account audit. Tell me about your account and I'll tell you what I see in it.";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuditPage,
});

const MARKETPLACES = ["US", "UK", "CA", "DE", "Other"];
const REVENUE_RANGES = ["Under $10K", "$10K-$25K", "$25K-$50K", "$50K-$100K", "$100K+"];
const PPC_SPEND_RANGES = ["Under $2K", "$2K-$5K", "$5K-$10K", "$10K-$25K", "$25K+"];
const AUDIT_TYPES = [
  "PPC Audit",
  "Listing / Copywriting Audit",
  "Graphic / Creative Audit",
  "Full Amazon Account Audit",
];
const IMPROVEMENT_GOALS = [
  "Reduce ACOS / TACOS",
  "Increase Sales",
  "Improve Conversion Rate",
  "Reduce Wasted Ad Spend",
  "Improve Listing Conversion",
  "Improve Images / Graphics",
  "Overall Account Performance",
];
const CONTACT_METHODS = ["Email", "WhatsApp", "Both"];

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function FieldLabel({ children, required }: { children: string; required?: boolean }) {
  return (
    <label className="block text-[0.95rem] font-medium text-[#EDE8E0]">
      {children}
      {required && <span className="ml-1 text-[#F5C542]">*</span>}
    </label>
  );
}

const inputClasses =
  "mt-2.5 w-full rounded-[12px] border border-white/[0.14] bg-[#151517] px-4 py-3 text-[0.95rem] text-[#EDE8E0] outline-none transition-colors placeholder:text-[#5c5c61] focus:border-[#F5C542]/60";

function CheckboxGrid({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex cursor-pointer items-center gap-3 rounded-[10px] border border-white/[0.1] bg-[#151517] px-4 py-3 text-[0.9rem] font-medium text-[#b4b4b8] transition-colors hover:border-white/[0.22]"
        >
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => onToggle(opt)}
            className="h-4 w-4 accent-[#F5C542]"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

function RadioGrid({
  name,
  options,
  selected,
  onChange,
}: {
  name: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex cursor-pointer items-center gap-3 rounded-[10px] border border-white/[0.1] bg-[#151517] px-4 py-3 text-[0.9rem] font-medium text-[#b4b4b8] transition-colors hover:border-white/[0.22]"
        >
          <input
            type="radio"
            name={name}
            checked={selected === opt}
            onChange={() => onChange(opt)}
            className="h-4 w-4 accent-[#F5C542]"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

function AuditForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [marketplaces, setMarketplaces] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const [asins, setAsins] = useState("");
  const [revenue, setRevenue] = useState("");
  const [ppcSpend, setPpcSpend] = useState("");
  const [auditTypes, setAuditTypes] = useState<string[]>([]);
  const [improvements, setImprovements] = useState<string[]>([]);
  const [otherImprovement, setOtherImprovement] = useState("");
  const [notes, setNotes] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !company || !storeUrl) {
      setError("Fill in your name, email, brand name and store URL first.");
      return;
    }
    if (marketplaces.length === 0) {
      setError("Pick at least one Amazon marketplace.");
      return;
    }
    if (!category || !asins) {
      setError("Add your product category and number of ASINs.");
      return;
    }
    if (auditTypes.length === 0) {
      setError("Pick at least one thing you'd like audited.");
      return;
    }
    if (!contactMethod) {
      setError("Pick a preferred contact method.");
      return;
    }
    setError("");

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / Brand name: ${company}`,
      `Amazon store / brand URL: ${storeUrl}`,
      "",
      `Amazon marketplace(s): ${marketplaces.join(", ")}`,
      `Product category: ${category}`,
      `Number of ASINs: ${asins}`,
      revenue && `Monthly Amazon revenue: ${revenue}`,
      ppcSpend && `Monthly PPC spend: ${ppcSpend}`,
      "",
      `Audit(s) requested: ${auditTypes.join(", ")}`,
      improvements.length > 0 &&
        `Improvement goals: ${improvements.join(", ")}${otherImprovement ? `, Other: ${otherImprovement}` : ""}`,
      "",
      notes && `Anything specific to look at:\n${notes}`,
      "",
      `Preferred contact method: ${contactMethod}`,
    ].filter(Boolean);

    const subject = encodeURIComponent(`Amazon audit request: ${company}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${CONTACT.emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-10">
      <div className="rounded-[20px] border border-white/[0.08] bg-[#131315] p-7 md:p-9">
        <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#F5C542]">
          1. Client information
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel required>Name</FieldLabel>
            <input
              className={inputClasses}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div>
            <FieldLabel required>Email address</FieldLabel>
            <input
              type="email"
              className={inputClasses}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@brand.com"
            />
          </div>
          <div>
            <FieldLabel required>Company / brand name</FieldLabel>
            <input
              className={inputClasses}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Brand name"
            />
          </div>
          <div>
            <FieldLabel required>Amazon store / brand URL</FieldLabel>
            <input
              type="url"
              className={inputClasses}
              value={storeUrl}
              onChange={(e) => setStoreUrl(e.target.value)}
              placeholder="https://amazon.com/stores/..."
            />
          </div>
        </div>
      </div>

      <div className="rounded-[20px] border border-white/[0.08] bg-[#131315] p-7 md:p-9">
        <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#F5C542]">
          2. Amazon account details
        </h2>

        <div className="mt-6">
          <FieldLabel required>Amazon marketplace</FieldLabel>
          <CheckboxGrid
            options={MARKETPLACES}
            selected={marketplaces}
            onToggle={(v) => setMarketplaces((s) => toggle(s, v))}
          />
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel required>Product category</FieldLabel>
            <input
              className={inputClasses}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Skincare, home, supplements"
            />
          </div>
          <div>
            <FieldLabel required>Number of ASINs</FieldLabel>
            <input
              type="number"
              min="1"
              className={inputClasses}
              value={asins}
              onChange={(e) => setAsins(e.target.value)}
              placeholder="e.g. 12"
            />
          </div>
        </div>

        <div className="mt-7">
          <FieldLabel>Monthly Amazon revenue</FieldLabel>
          <RadioGrid
            name="revenue"
            options={REVENUE_RANGES}
            selected={revenue}
            onChange={setRevenue}
          />
        </div>

        <div className="mt-7">
          <FieldLabel>Monthly PPC spend</FieldLabel>
          <RadioGrid
            name="ppcSpend"
            options={PPC_SPEND_RANGES}
            selected={ppcSpend}
            onChange={setPpcSpend}
          />
        </div>
      </div>

      <div className="rounded-[20px] border border-white/[0.08] bg-[#131315] p-7 md:p-9">
        <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#F5C542]">
          3. What would you like us to audit?
        </h2>
        <CheckboxGrid
          options={AUDIT_TYPES}
          selected={auditTypes}
          onToggle={(v) => setAuditTypes((s) => toggle(s, v))}
        />
      </div>

      <div className="rounded-[20px] border border-white/[0.08] bg-[#131315] p-7 md:p-9">
        <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#F5C542]">
          4. What would you like us to improve?
        </h2>
        <CheckboxGrid
          options={IMPROVEMENT_GOALS}
          selected={improvements}
          onToggle={(v) => setImprovements((s) => toggle(s, v))}
        />
        <div className="mt-4">
          <FieldLabel>Other</FieldLabel>
          <input
            className={inputClasses}
            value={otherImprovement}
            onChange={(e) => setOtherImprovement(e.target.value)}
            placeholder="Anything not listed above"
          />
        </div>
      </div>

      <div className="rounded-[20px] border border-white/[0.08] bg-[#131315] p-7 md:p-9">
        <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#F5C542]">
          5. Anything specific you want us to look at?
        </h2>
        <textarea
          className={`${inputClasses} min-h-[140px] resize-y`}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Optional: tell me about a specific ASIN, campaign, or problem you keep running into."
        />
      </div>

      <div className="rounded-[20px] border border-white/[0.08] bg-[#131315] p-7 md:p-9">
        <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#F5C542]">
          6. Preferred contact method
        </h2>
        <RadioGrid
          name="contactMethod"
          options={CONTACT_METHODS}
          selected={contactMethod}
          onChange={setContactMethod}
        />
      </div>

      {error && (
        <p className="rounded-[12px] border border-[#e08d74]/30 bg-[#e08d74]/[0.08] px-5 py-3 text-[0.9rem] font-medium text-[#e08d74]">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="self-start rounded-full bg-[#F5C542] px-8 py-4 font-mono text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[#0d0d0f] transition-opacity hover:opacity-85"
      >
        Request My Audit
      </button>
    </form>
  );
}

function AuditPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-[900px] px-6 md:px-10">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#F5C542]">
          Free account audit
        </p>
        <h1 className="mt-5 max-w-[20ch] text-[clamp(2.4rem,7vw,4.4rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#EDE8E0]">
          Find out what's actually wrong with your account
        </h1>
        <p className="mt-6 max-w-[62ch] text-[1.02rem] font-medium leading-relaxed text-[#b4b4b8]">
          Most accounts I look at don't have a traffic problem. They have a structure problem:
          spend keeps climbing, ACOS drifts, and campaigns stop being a growth engine and start
          being a cost. Before I take on any account, I run a free audit so you know exactly
          what's working, what's wasting money, and what to fix first, with no obligation to hire
          me afterward.
        </p>

        <div className="mt-10">
          <a
            href="#request-form"
            className="inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-7 py-3.5 font-mono text-[0.74rem] font-medium uppercase tracking-[0.14em] text-[#0d0d0f] transition-opacity hover:opacity-85"
          >
            Request a audit
          </a>
        </div>

        <div className="mt-20 border-t border-white/[0.08] pt-14">
          <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#7d7d82]">
            How I audit an account
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit",
                copy: "I go through campaign structure, search-term reports, bid history, listing content and creative, and flag exactly where spend is being wasted and where it's under-funded.",
              },
              {
                step: "02",
                title: "Fix",
                copy: "Restructure campaigns, rebuild negative targeting, correct bid logic, and fix the listing and creative issues that are capping conversion before spend goes up.",
              },
              {
                step: "03",
                title: "Scale",
                copy: "Once ACOS and TACOS are stable, reallocate budget toward what's proven to convert and expand into new targeting with a system, not guesswork.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-[20px] border border-white/[0.08] bg-[#151517] p-6"
              >
                <span className="font-mono text-[0.7rem] text-[#F5C542]">{s.step}</span>
                <h3 className="mt-3 text-[1.05rem] font-semibold text-[#EDE8E0]">{s.title}</h3>
                <p className="mt-3 text-[0.9rem] font-medium leading-relaxed text-[#b4b4b8]">
                  {s.copy}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[62ch] text-[0.95rem] font-medium leading-relaxed text-[#b4b4b8]">
            The audit itself covers PPC, listing copy, creative and overall account health,
            depending on what you ask for below. You'll get a clear read on ACOS control, TACOS
            stability and where the account's biggest opportunities actually are.
          </p>
        </div>

        <div id="request-form" className="mt-20 scroll-mt-24 border-t border-white/[0.08] pt-14">
          <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#7d7d82]">
            Request your free audit
          </h2>
          <p className="mt-4 max-w-[62ch] text-[0.95rem] font-medium leading-relaxed text-[#b4b4b8]">
            Fill this in and it opens a pre-filled email to me. I read every one myself and
            usually reply within a day or two.
          </p>
          <AuditForm />
        </div>
      </section>
    </PageShell>
  );
}
