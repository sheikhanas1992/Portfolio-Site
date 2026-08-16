import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { PageShell } from "@/components/SiteChrome";
import { Reveal } from "@/components/CountUp";
import { CONTACT } from "@/config/contact";
import { HONEYPOT_STYLE, WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/config/web3forms";

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
    <label className="block text-[0.98rem] font-semibold text-[#EDE8E0]">
      {children}
      {required && <span className="ml-1 text-[#F5C542]">*</span>}
    </label>
  );
}

const inputClasses =
  "mt-2.5 w-full rounded-[12px] border border-white/[0.16] bg-[#151517] px-4 py-3.5 text-[0.95rem] font-medium text-[#EDE8E0] outline-none transition-colors placeholder:text-[#5c5c61] focus:border-[#F5C542]/60 focus:bg-[#1a1a1d]";

const inputErrorClasses = "border-[#e08d74]/60 focus:border-[#e08d74]/60";

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-2 text-[0.85rem] font-semibold text-[#e08d74]">
      {message}
    </p>
  );
}

const optionBase =
  "flex cursor-pointer items-center gap-3 rounded-[10px] border px-4 py-3.5 text-[0.92rem] font-medium transition-all duration-150";
const optionOn = "border-[#F5C542]/50 bg-[#F5C542]/[0.08] text-[#EDE8E0]";
const optionOff = "border-white/[0.12] bg-[#151517] text-[#c7c7cc] hover:border-white/[0.25] hover:bg-[#1a1a1d]";

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
      {options.map((opt) => {
        const on = selected.includes(opt);
        return (
          <label key={opt} className={`${optionBase} ${on ? optionOn : optionOff}`}>
            <input
              type="checkbox"
              checked={on}
              onChange={() => onToggle(opt)}
              className="h-4 w-4 accent-[#F5C542]"
            />
            {opt}
          </label>
        );
      })}
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
      {options.map((opt) => {
        const on = selected === opt;
        return (
          <label key={opt} className={`${optionBase} ${on ? optionOn : optionOff}`}>
            <input
              type="radio"
              name={name}
              checked={on}
              onChange={() => onChange(opt)}
              className="h-4 w-4 accent-[#F5C542]"
            />
            {opt}
          </label>
        );
      })}
    </div>
  );
}

function StepNumber({ n }: { n: string }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5C542]/[0.12] font-mono text-[0.8rem] font-bold text-[#F5C542]">
      {n}
    </span>
  );
}

type AuditErrors = Partial<
  Record<
    "name" | "email" | "company" | "storeUrl" | "marketplaces" | "category" | "asins" | "auditTypes" | "contactMethod",
    string
  >
>;
type AuditStatus = "idle" | "loading" | "success" | "error";

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

  const [errors, setErrors] = useState<AuditErrors>({});
  const [status, setStatus] = useState<AuditStatus>("idle");
  const botcheckRef = useRef<HTMLInputElement>(null);

  const clearError = (field: keyof AuditErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validate = (): AuditErrors => {
    const next: AuditErrors = {};
    if (!name.trim()) next.name = "Enter your name.";
    if (!email.trim()) next.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!company.trim()) next.company = "Enter your company or brand name.";
    if (!storeUrl.trim()) next.storeUrl = "Enter your Amazon store or brand URL.";
    if (marketplaces.length === 0) next.marketplaces = "Pick at least one Amazon marketplace.";
    if (!category.trim()) next.category = "Enter your product category.";
    if (!asins.trim()) next.asins = "Enter your number of ASINs.";
    if (auditTypes.length === 0) next.auditTypes = "Pick at least one thing you'd like audited.";
    if (!contactMethod) next.contactMethod = "Pick a preferred contact method.";
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const foundErrors = validate();
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New audit request from sheikhanas.com",
          from_name: "sheikhanas.com",
          botcheck: botcheckRef.current?.value ?? "",
          name,
          email,
          company,
          store_url: storeUrl,
          marketplaces: marketplaces.join(", "),
          category,
          number_of_asins: asins,
          monthly_revenue: revenue,
          monthly_ppc_spend: ppcSpend,
          audit_types: auditTypes.join(", "),
          improvement_goals: improvements.join(", "),
          other_improvement: otherImprovement,
          notes,
          preferred_contact_method: contactMethod,
        }),
      });
      const data = await res.json().catch(() => null);
      if (data?.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Reveal className="mt-10 rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 text-center shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9">
        <div aria-live="polite">
          <h2 className="text-[1.4rem] font-bold text-[#EDE8E0]">Got it. I'll be in touch within two working days.</h2>
          <p className="mt-4 text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]">
            In the meantime, if you'd rather talk it through, you can book a call.
          </p>
          <a
            href={CONTACT.calendly}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-8 py-4 font-mono text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_8px_24px_-8px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
          >
            Book a call
            <span aria-hidden>→</span>
          </a>
        </div>
      </Reveal>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6" noValidate>
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} readOnly />
      <input type="hidden" name="subject" value="New audit request from sheikhanas.com" readOnly />
      <input type="hidden" name="from_name" value="sheikhanas.com" readOnly />
      <input
        type="text"
        name="botcheck"
        ref={botcheckRef}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={HONEYPOT_STYLE}
      />

      <Reveal className="rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9">
        <div className="flex items-center gap-4">
          <StepNumber n="1" />
          <h2 className="text-[1.1rem] font-bold text-[#EDE8E0]">Client information</h2>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel required>Name</FieldLabel>
            <input
              className={`${inputClasses} ${errors.name ? inputErrorClasses : ""}`}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                clearError("name");
              }}
              placeholder="Your name"
            />
            <FieldError message={errors.name} />
          </div>
          <div>
            <FieldLabel required>Email address</FieldLabel>
            <input
              type="email"
              className={`${inputClasses} ${errors.email ? inputErrorClasses : ""}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearError("email");
              }}
              placeholder="you@brand.com"
            />
            <FieldError message={errors.email} />
          </div>
          <div>
            <FieldLabel required>Company / brand name</FieldLabel>
            <input
              className={`${inputClasses} ${errors.company ? inputErrorClasses : ""}`}
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
                clearError("company");
              }}
              placeholder="Brand name"
            />
            <FieldError message={errors.company} />
          </div>
          <div>
            <FieldLabel required>Amazon store / brand URL</FieldLabel>
            <input
              type="url"
              className={`${inputClasses} ${errors.storeUrl ? inputErrorClasses : ""}`}
              value={storeUrl}
              onChange={(e) => {
                setStoreUrl(e.target.value);
                clearError("storeUrl");
              }}
              placeholder="https://amazon.com/stores/..."
            />
            <FieldError message={errors.storeUrl} />
          </div>
        </div>
      </Reveal>

      <Reveal delay={60} className="rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9">
        <div className="flex items-center gap-4">
          <StepNumber n="2" />
          <h2 className="text-[1.1rem] font-bold text-[#EDE8E0]">Amazon account details</h2>
        </div>

        <div className="mt-7">
          <FieldLabel required>Amazon marketplace</FieldLabel>
          <CheckboxGrid
            options={MARKETPLACES}
            selected={marketplaces}
            onToggle={(v) => {
              setMarketplaces((s) => toggle(s, v));
              clearError("marketplaces");
            }}
          />
          <FieldError message={errors.marketplaces} />
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel required>Product category</FieldLabel>
            <input
              className={`${inputClasses} ${errors.category ? inputErrorClasses : ""}`}
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                clearError("category");
              }}
              placeholder="e.g. Skincare, home, supplements"
            />
            <FieldError message={errors.category} />
          </div>
          <div>
            <FieldLabel required>Number of ASINs</FieldLabel>
            <input
              type="number"
              min="1"
              className={`${inputClasses} ${errors.asins ? inputErrorClasses : ""}`}
              value={asins}
              onChange={(e) => {
                setAsins(e.target.value);
                clearError("asins");
              }}
              placeholder="e.g. 12"
            />
            <FieldError message={errors.asins} />
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
      </Reveal>

      <Reveal delay={90} className="rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9">
        <div className="flex items-center gap-4">
          <StepNumber n="3" />
          <h2 className="text-[1.1rem] font-bold text-[#EDE8E0]">What would you like us to audit?</h2>
        </div>
        <div className="mt-7">
          <CheckboxGrid
            options={AUDIT_TYPES}
            selected={auditTypes}
            onToggle={(v) => {
              setAuditTypes((s) => toggle(s, v));
              clearError("auditTypes");
            }}
          />
          <FieldError message={errors.auditTypes} />
        </div>
      </Reveal>

      <Reveal delay={120} className="rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9">
        <div className="flex items-center gap-4">
          <StepNumber n="4" />
          <h2 className="text-[1.1rem] font-bold text-[#EDE8E0]">What would you like us to improve?</h2>
        </div>
        <div className="mt-7">
          <CheckboxGrid
            options={IMPROVEMENT_GOALS}
            selected={improvements}
            onToggle={(v) => setImprovements((s) => toggle(s, v))}
          />
        </div>
        <div className="mt-4">
          <FieldLabel>Other</FieldLabel>
          <input
            className={inputClasses}
            value={otherImprovement}
            onChange={(e) => setOtherImprovement(e.target.value)}
            placeholder="Anything not listed above"
          />
        </div>
      </Reveal>

      <Reveal delay={150} className="rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9">
        <div className="flex items-center gap-4">
          <StepNumber n="5" />
          <h2 className="text-[1.1rem] font-bold text-[#EDE8E0]">Anything specific you want us to look at?</h2>
        </div>
        <textarea
          className={`${inputClasses} mt-7 min-h-[140px] resize-y`}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Optional: tell me about a specific ASIN, campaign, or problem you keep running into."
        />
      </Reveal>

      <Reveal delay={180} className="rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9">
        <div className="flex items-center gap-4">
          <StepNumber n="6" />
          <h2 className="text-[1.1rem] font-bold text-[#EDE8E0]">Preferred contact method</h2>
        </div>
        <div className="mt-7">
          <RadioGrid
            name="contactMethod"
            options={CONTACT_METHODS}
            selected={contactMethod}
            onChange={(v) => {
              setContactMethod(v);
              clearError("contactMethod");
            }}
          />
          <FieldError message={errors.contactMethod} />
        </div>
      </Reveal>

      {status === "error" && (
        <p
          role="alert"
          aria-live="polite"
          className="rounded-[12px] border border-[#e08d74]/30 bg-[#e08d74]/[0.08] px-5 py-4 text-[0.95rem] font-semibold text-[#e08d74]"
        >
          Something went wrong. Please try again, or email{" "}
          <a href="mailto:ceo@cubifai.com" className="underline decoration-[#e08d74]/50 underline-offset-2">
            ceo@cubifai.com
          </a>{" "}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 self-start rounded-full bg-[#F5C542] px-9 py-[1.15rem] font-mono text-[0.82rem] font-bold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_8px_24px_-8px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.04] hover:shadow-[0_10px_28px_-6px_rgba(245,197,66,0.6)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === "loading" ? "Submitting…" : "Request My Audit →"}
      </button>
    </form>
  );
}

function AuditPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-[900px] px-6 md:px-10">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#F5C542]/30 bg-[#F5C542]/[0.06] px-4 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#F5C542]">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#F5C542]" />
            Free account audit
          </p>
          <h1 className="mt-6 max-w-[20ch] text-[clamp(2.4rem,7vw,4.4rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#EDE8E0]">
            Find out what's actually wrong with your account
          </h1>
          <p className="mt-6 max-w-[62ch] text-[1.05rem] font-medium leading-relaxed text-[#c7c7cc]">
            Most accounts I look at don't have a traffic problem. They have a structure problem:
            spend keeps climbing, ACOS drifts, and campaigns stop being a growth engine and start
            being a cost.
          </p>
          <p className="mt-4 max-w-[62ch] text-[1.05rem] font-medium leading-relaxed text-[#c7c7cc]">
            Before I take on any account, I run a free audit so you know exactly what's working,
            what's wasting money, and what to fix first. No obligation to hire me afterward.
          </p>

          <div className="mt-10">
            <a
              href="#request-form"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-8 py-4 font-mono text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_8px_24px_-8px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.04] hover:shadow-[0_10px_28px_-6px_rgba(245,197,66,0.6)] active:scale-[0.98]"
            >
              Request an audit
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>

        <div className="mt-24 border-t border-white/[0.1] pt-14">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-[#F5C542]" />
              <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c7c7cc]">
                What I actually look at
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "The structure",
                copy: "Campaign architecture, match types, duplication, and where the same keyword is competing against itself. Most wasted spend in an Amazon account is structural, not a bidding mistake, and it does not show up in a dashboard summary.",
              },
              {
                step: "02",
                title: "The spend",
                copy: "Search term reports, bid history, placement data and budget caps. I separate spend that is genuinely unprofitable from spend that only looks unprofitable because it is being measured against the wrong target.",
              },
              {
                step: "03",
                title: "The page it lands on",
                copy: "Titles, bullets, images, A+ content and featured offer share. A campaign cannot fix a listing that does not convert, so I read the pages alongside the ads rather than treating them as someone else's problem.",
              },
            ].map((s, i) => (
              <Reveal
                key={s.step}
                delay={i * 90}
                className="group rounded-[20px] border border-white/[0.1] bg-[#151517] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#F5C542]/30 hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.6)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5C542]/[0.12] font-mono text-[0.78rem] font-bold text-[#F5C542] transition-colors group-hover:bg-[#F5C542]/[0.2]">
                  {s.step}
                </span>
                <h3 className="mt-4 text-[1.15rem] font-bold text-[#EDE8E0]">{s.title}</h3>
                <p className="mt-3 text-[0.92rem] font-medium leading-relaxed text-[#c7c7cc]">
                  {s.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-white/[0.1] pt-14">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-[#F5C542]" />
              <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c7c7cc]">
                What you get back
              </h2>
            </div>
          </Reveal>
          <p className="mt-6 max-w-[62ch] text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]">
            A written document, not a call and a verbal summary. It covers:
          </p>
          <ul className="mt-6 space-y-4">
            {[
              "What's working, and should be funded harder, with the numbers that prove it.",
              "What's costing you money, separated into what to stop now and what to restructure.",
              "What to fix first, in priority order, with the reasoning behind the sequence.",
              "What I'd need to know more about, because an honest audit says where the data ran out rather than guessing past it.",
            ].map((point, i) => (
              <Reveal key={point} delay={i * 60}>
                <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]">
                  <span aria-hidden className="mt-[0.6em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
                  <span>{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className="mt-6 max-w-[62ch] text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]">
              You can act on it yourself, hand it to your current manager, or use it to decide
              whether to work with me. All three are fine.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 border-t border-white/[0.1] pt-14">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-[#F5C542]" />
              <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c7c7cc]">
                What this isn't
              </h2>
            </div>
          </Reveal>
          <p className="mt-6 max-w-[62ch] text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]">
            I will not tell you the account is broken if it isn't. If your PPC is already in good
            shape, the audit will say so, and it will say what I would do next rather than
            inventing a problem to solve.
          </p>
          <p className="mt-4 max-w-[62ch] text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]">
            Free audits that always find a crisis are a sales tactic. This one is a read.
          </p>
          <div className="mt-8">
            <a
              href="#request-form"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-8 py-4 font-mono text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_8px_24px_-8px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.04] hover:shadow-[0_10px_28px_-6px_rgba(245,197,66,0.6)] active:scale-[0.98]"
            >
              Request an audit
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div id="request-form" className="mt-24 scroll-mt-24 border-t border-white/[0.1] pt-14">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-[#F5C542]" />
              <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c7c7cc]">
                Request your free audit
              </h2>
            </div>
          </Reveal>
          <p className="mt-5 max-w-[62ch] text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]">
            Fill this in and it comes straight to me. I read every one myself and usually reply
            within a day or two.
          </p>
          <AuditForm />
        </div>
      </section>
    </PageShell>
  );
}
