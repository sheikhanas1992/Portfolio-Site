import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { PageShell } from "@/components/SiteChrome";
import { Reveal } from "@/components/CountUp";
import { CONTACT } from "@/config/contact";
import { HONEYPOT_STYLE, WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/config/web3forms";

const TITLE = "Build your package: Sheikh Anas";
const DESCRIPTION =
  "Tell me what you need and what you already have covered. I'll come back with scope and pricing, usually within two working days.";

export const Route = createFileRoute("/build")({
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
  component: BuildPage,
});

const NEEDS = [
  "Product Photography",
  "Full Listing Creatives",
  "Product Videography",
  "A+ Content",
  "Main Image Split Testing",
  "Copywriting",
  "3D Rendering",
  "PPC Management",
  "Other",
];

const PRODUCT_COUNTS = ["Brand new, I have not launched yet", "1 to 2", "3 to 9", "10 to 50", "50+"];

const BUDGETS = [
  "$1,000 to $2,000",
  "$2,000 to $4,000",
  "$4,000 to $10,000",
  "$10,000+",
  "Not sure, I need guidance",
];

const COUNTRY_CODES = [
  { code: "+1", label: "+1 (US/CA)" },
  { code: "+44", label: "+44 (UK)" },
  { code: "+971", label: "+971 (UAE)" },
  { code: "+61", label: "+61 (AU)" },
  { code: "+92", label: "+92 (PK)" },
  { code: "+91", label: "+91 (IN)" },
  { code: "+49", label: "+49 (DE)" },
];

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

const optionBase =
  "flex cursor-pointer items-center gap-3 rounded-[10px] border px-4 py-3.5 text-[0.92rem] font-medium transition-all duration-150";
const optionOn = "border-[#F5C542]/50 bg-[#F5C542]/[0.08] text-[#EDE8E0]";
const optionOff = "border-white/[0.12] bg-[#151517] text-[#c7c7cc] hover:border-white/[0.25] hover:bg-[#1a1a1d]";

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-2 text-[0.85rem] font-semibold text-[#e08d74]">
      {message}
    </p>
  );
}

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
            <input type="checkbox" checked={on} onChange={() => onToggle(opt)} className="h-4 w-4 accent-[#F5C542]" />
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

const CARD_CLASSES =
  "rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9";

type Errors = Partial<Record<"name" | "email" | "needs" | "productCount" | "budget", string>>;
type Status = "idle" | "loading" | "success" | "error";

function BuildForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);
  const [otherNeed, setOtherNeed] = useState("");
  const [productCount, setProductCount] = useState("");
  const [asinOrUrl, setAsinOrUrl] = useState("");
  const [budget, setBudget] = useState("");
  const [comments, setComments] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const botcheckRef = useRef<HTMLInputElement>(null);

  const clearError = (field: keyof Errors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!name.trim()) next.name = "Enter your full name.";
    if (!email.trim()) next.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (needs.length === 0) next.needs = "Select at least one option.";
    if (!productCount) next.productCount = "Pick one option.";
    if (!budget) next.budget = "Pick one option.";
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
          subject: "New custom package request from sheikhanas.com",
          from_name: "sheikhanas.com",
          botcheck: botcheckRef.current?.value ?? "",
          name,
          email,
          phone: phone ? `${countryCode} ${phone}` : "",
          needs: needs.join(", "),
          other_need: needs.includes("Other") ? otherNeed : "",
          product_count: productCount,
          asin_or_url: asinOrUrl,
          budget,
          comments,
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
      <Reveal className={`${CARD_CLASSES} text-center`}>
        <div aria-live="polite">
          <h2 className="text-[1.4rem] font-bold text-[#EDE8E0]">
            Got it. I'll come back with scope and pricing within two working days.
          </h2>
          <p className="mt-4 text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]">
            If you'd rather talk it through first, you can book a call.
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
      <input type="hidden" name="subject" value="New custom package request from sheikhanas.com" readOnly />
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

      <Reveal className={CARD_CLASSES}>
        <div className="flex items-center gap-4">
          <StepNumber n="1" />
          <h2 className="text-[1.1rem] font-bold text-[#EDE8E0]">Your details</h2>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel required>Full name</FieldLabel>
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
          <div className="sm:col-span-2">
            <FieldLabel>Phone number</FieldLabel>
            <div className="mt-2.5 flex gap-2.5">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-[7.5rem] shrink-0 rounded-[12px] border border-white/[0.16] bg-[#151517] px-3 py-3.5 text-[0.9rem] font-medium text-[#EDE8E0] outline-none transition-colors focus:border-[#F5C542]/60"
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                className={`${inputClasses} mt-0`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Optional"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={60} className={CARD_CLASSES}>
        <div className="flex items-center gap-4">
          <StepNumber n="2" />
          <h2 className="text-[1.1rem] font-bold text-[#EDE8E0]">What do you need?</h2>
        </div>
        <p className="mt-2 text-[0.88rem] font-medium text-[#9a9a9e]">Select as many as apply.</p>
        <CheckboxGrid
          options={NEEDS}
          selected={needs}
          onToggle={(v) => {
            setNeeds((s) => toggle(s, v));
            clearError("needs");
          }}
        />
        <FieldError message={errors.needs} />
        {needs.includes("Other") && (
          <div className="mt-4">
            <FieldLabel>Tell me what else you need</FieldLabel>
            <input
              className={inputClasses}
              value={otherNeed}
              onChange={(e) => setOtherNeed(e.target.value)}
              placeholder="Anything not listed above"
            />
          </div>
        )}
      </Reveal>

      <Reveal delay={90} className={CARD_CLASSES}>
        <div className="flex items-center gap-4">
          <StepNumber n="3" />
          <h2 className="text-[1.1rem] font-bold text-[#EDE8E0]">Where are you now?</h2>
        </div>
        <div className="mt-7">
          <FieldLabel required>How many products do you have?</FieldLabel>
          <RadioGrid
            name="productCount"
            options={PRODUCT_COUNTS}
            selected={productCount}
            onChange={(v) => {
              setProductCount(v);
              clearError("productCount");
            }}
          />
          <FieldError message={errors.productCount} />
        </div>
      </Reveal>

      <Reveal delay={120} className={CARD_CLASSES}>
        <div className="flex items-center gap-4">
          <StepNumber n="4" />
          <h2 className="text-[1.1rem] font-bold text-[#EDE8E0]">Your ASIN or a competitor's</h2>
        </div>
        <div className="mt-7">
          <FieldLabel>Can you share your ASIN or URL, or a competitor's?</FieldLabel>
          <input
            className={inputClasses}
            value={asinOrUrl}
            onChange={(e) => setAsinOrUrl(e.target.value)}
            placeholder="ASIN, Amazon URL, or a competitor's link"
          />
          <p className="mt-2.5 text-[0.85rem] font-medium text-[#9a9a9e]">
            If you're not live yet, a competitor's link works just as well.
          </p>
        </div>
      </Reveal>

      <Reveal delay={150} className={CARD_CLASSES}>
        <div className="flex items-center gap-4">
          <StepNumber n="5" />
          <h2 className="text-[1.1rem] font-bold text-[#EDE8E0]">Budget</h2>
        </div>
        <div className="mt-7">
          <FieldLabel required>What is your budget for this project?</FieldLabel>
          <RadioGrid
            name="budget"
            options={BUDGETS}
            selected={budget}
            onChange={(v) => {
              setBudget(v);
              clearError("budget");
            }}
          />
          <FieldError message={errors.budget} />
        </div>
      </Reveal>

      <Reveal delay={180} className={CARD_CLASSES}>
        <div className="flex items-center gap-4">
          <StepNumber n="6" />
          <h2 className="text-[1.1rem] font-bold text-[#EDE8E0]">Additional comments</h2>
        </div>
        <div className="mt-7">
          <FieldLabel>Anything else I should know?</FieldLabel>
          <textarea
            className={`${inputClasses} min-h-[140px] resize-y`}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Optional"
          />
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

      <div className="mt-2 flex flex-col items-start gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="self-start rounded-full bg-[#F5C542] px-9 py-[1.15rem] font-mono text-[0.82rem] font-bold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_8px_24px_-8px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.04] hover:shadow-[0_10px_28px_-6px_rgba(245,197,66,0.6)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
        >
          {status === "loading" ? "Submitting…" : "Submit →"}
        </button>
        <p className="text-[0.92rem] font-medium text-[#c7c7cc]">
          Would rather talk first?{" "}
          <a
            href={CONTACT.calendly}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#F5C542] underline decoration-[#F5C542]/40 underline-offset-4 transition-colors hover:text-[#EDE8E0]"
          >
            Book a call →
          </a>
        </p>
      </div>
    </form>
  );
}

function BuildPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-[900px] px-6 md:px-10">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#F5C542]/30 bg-[#F5C542]/[0.06] px-4 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#F5C542]">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#F5C542]" />
            Build your own package
          </p>
          <h1 className="mt-6 max-w-[20ch] text-[clamp(2.4rem,7vw,4.4rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#EDE8E0]">
            Let's build your package
          </h1>
          <p className="mt-6 max-w-[62ch] text-[1.05rem] font-medium leading-relaxed text-[#c7c7cc]">
            Tell me what you need and what you've already got covered. I'll come back with scope
            and pricing, usually within two working days.
          </p>
        </Reveal>

        <BuildForm />
      </section>
    </PageShell>
  );
}
