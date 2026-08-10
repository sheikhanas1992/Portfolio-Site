import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const CARDS = [
  {
    to: "/work/traffic-and-conversion",
    label: "a DTC body-care brand on Amazon US",
    period: "12 months, measured against the prior year",
    metric: "2.11× revenue",
    context:
      "Traffic and conversion contributed in almost equal measure — 1.46 × 1.38 = 2.01 on units.",
  },
  {
    to: "/work/launch-and-hold",
    label: "an outdoor electrical and EV accessories brand",
    period: "6 months",
    metric: "18.3% of account revenue",
    context:
      "A listing launched from zero finished as the account's strongest converter at 29.79%.",
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
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {CARDS.map((c, i) => (
            <a
              key={c.to}
              href={c.to}
              className="group block rounded-[20px] border border-white/[0.08] bg-[#151517] p-7 transition-colors hover:border-[#F5C542]/40"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "none" : "translateY(18px)",
                transition: `opacity 700ms ${i * 100}ms ease, transform 700ms ${i * 100}ms cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#F5C542]">
                {c.period}
              </div>
              <h3 className="mt-4 font-mono text-[clamp(1.6rem,3.4vw,2.2rem)] leading-none tabular-nums text-[#EDE8E0]">
                {c.metric}
              </h3>
              <p className="mt-4 text-[0.95rem] text-[#EDE8E0]">{c.label}</p>
              <p className="mt-3 max-w-[46ch] text-[0.9rem] leading-relaxed text-[#9a9a9e]">
                {c.context}
              </p>
              <span className="mt-6 inline-block font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#F5C542] transition-opacity group-hover:opacity-70">
                Read the case study →
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
