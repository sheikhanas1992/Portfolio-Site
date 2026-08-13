import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const CARDS = [
  {
    to: "/work/traffic-and-conversion",
    label: "a DTC body-care brand on Amazon US",
    period: "12 months, measured against the prior year",
    metric: "2.11× revenue",
    context:
      "Traffic and conversion contributed in almost equal measure: 1.46 × 1.38 = 2.01 on units.",
  },
  {
    to: "/work/launch-and-hold",
    label: "an outdoor electrical and EV accessories brand",
    period: "6 months",
    metric: "18.3% of account revenue",
    context:
      "A listing launched from zero finished as the account's strongest converter at 29.79%.",
  },
  {
    to: "/work/scale-and-concentration",
    label: "a Korean skincare brand scaling fast off one hero anti-aging line",
    period: "12 months, measured against the prior year",
    metric: "10.4× revenue",
    context: "Growth was real, but three SKUs out of a much larger catalogue carried 72% of it.",
  },
  {
    to: "/work/promotion-and-exposure",
    label: "a Korean regenerative-skincare brand built around a single flagship ampoule",
    period: "12 months, measured against the prior year",
    metric: "+42.4% revenue",
    context: "40% of the period's sales landed inside a single four-day promotional window.",
  },
  {
    to: "/work/ceiling-and-efficiency",
    label: "a Korean skincare brand growing against a fixed daily ad budget",
    period: "12 months, measured against the prior year",
    metric: "3.79× return on ad spend",
    context: "82% of campaigns, including the largest, were regularly capped by daily budget.",
  },
];

function Cards() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setShown(true), 60);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section id="selected-work" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-[clamp(2.4rem,9vw,6rem)] font-black uppercase leading-[0.85] tracking-[-0.03em] text-[#EDE8E0]">
          Selected work
        </h2>
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
          {CARDS.map((c, i) => (
            <a
              key={c.to}
              href={c.to}
              className="group relative block overflow-hidden rounded-[20px] border border-white/[0.1] bg-[#151517] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F5C542]/50 hover:bg-[#1a1a1d] hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.7)]"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "none" : "translateY(18px)",
                transition: `opacity 700ms ${i * 100}ms ease, transform 700ms ${i * 100}ms cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#F5C542] transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#F5C542]">
                {c.period}
              </div>
              <h3 className="mt-4 font-mono text-[clamp(1.6rem,3.4vw,2.2rem)] font-medium leading-none tabular-nums text-[#EDE8E0]">
                {c.metric}
              </h3>
              <p className="mt-4 text-[0.95rem] font-semibold text-[#EDE8E0]">{c.label}</p>
              <p className="mt-3 max-w-[46ch] text-[0.92rem] font-medium leading-relaxed text-[#b4b4b8]">
                {c.context}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#F5C542] transition-all duration-200 group-hover:gap-2.5">
                Read the case study
                <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * The homepage is a prebuilt bundle that mounts itself into #root. This
 * component inserts a host node directly after the hero section and portals
 * the "Selected work" cards into it, without touching the bundle's own DOM.
 */
export function SelectedWorkIsland() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    let tries = 0;
    const node = document.createElement("div");
    node.id = "selected-work-host";

    const attach = () => {
      if (cancelled) return;
      const hero = document.querySelector("#root section");
      if (hero?.parentElement) {
        hero.parentElement.insertBefore(node, hero.nextSibling);
        setHost(node);
        return;
      }
      if (tries++ < 60) window.setTimeout(attach, 100);
    };
    attach();

    return () => {
      cancelled = true;
      node.remove();
    };
  }, []);

  return host ? createPortal(<Cards />, host) : null;
}
