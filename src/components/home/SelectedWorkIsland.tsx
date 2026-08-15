import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const FIGURE_RE = /(\$[\d,.]+[KMB]?|\d+(?:\.\d+)?%|\d+(?:\.\d+)?×)/g;

/** Splits a headline on embedded dollar/percent/multiplier figures and
 * renders those substrings in the accent color so the numbers read first. */
function Headline({ text }: { text: string }) {
  const parts = text.split(FIGURE_RE);
  return (
    <>
      {parts.map((part, i) =>
        // split() with a capturing group alternates unmatched/matched text,
        // so odd indices are always the captured figures.
        i % 2 === 1 ? (
          <span key={i} className="font-black text-[#F5C542]">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

const CARDS = [
  {
    to: "/work/scale-and-concentration",
    period: "Two months, measured against the same window last year",
    headline: "How I turned $480K in Amazon sales into $5M, at a 4.33× return on ad spend.",
    context: "Three SKUs carried $3.58M of $5.01M in sales, the clearest sign of a hero product that's landed.",
  },
  {
    to: "/work/promotion-and-exposure",
    period: "Two months, measured against the same window last year",
    headline: "How I grew an Amazon brand from $2M to $2.8M, turning every $1 in ads into $4.50.",
    context: "A single four-day window drove 40% of the period's revenue, proof of a repeatable promotional engine.",
  },
  {
    to: "/work/ceiling-and-efficiency",
    period: "Two months, measured against the same window last year",
    headline: "How I hit $157K in Amazon sales at 3.79× ROAS, with 80% of campaigns budget-capped.",
    context: "41 of 50 campaigns ran out of budget daily: proven demand with room still to grow.",
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
          Case studies
        </h2>
        <p className="mt-6 max-w-[58ch] text-[1.05rem] font-medium leading-relaxed text-[#c7c7cc]">
          A sample of the accounts I've run, written up with the parts most case studies skip.
        </p>
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
          {CARDS.map((c, i) => (
            <a
              key={c.to}
              href={c.to}
              className="group relative block overflow-hidden rounded-[20px] border border-white/[0.16] bg-gradient-to-b from-[#1c1c1f] to-[#141416] p-7 shadow-[0_16px_36px_-18px_rgba(0,0,0,0.75)] transition-all duration-300 max-md:border-[#F5C542]/35 max-md:from-[#202023] max-md:to-[#161618] max-md:shadow-[0_20px_44px_-16px_rgba(0,0,0,0.8),0_0_36px_-14px_rgba(245,197,66,0.22)] hover:-translate-y-2 hover:border-[#F5C542]/60 hover:from-[#212124] hover:to-[#18181a] hover:shadow-[0_32px_64px_-18px_rgba(0,0,0,0.85),0_0_56px_-16px_rgba(245,197,66,0.35)]"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "none" : "translateY(18px)",
                transition: `opacity 700ms ${i * 100}ms ease, transform 700ms ${i * 100}ms cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#F5C542] via-[#F5C542]/60 to-transparent opacity-60 transition-opacity duration-300 max-md:opacity-90 group-hover:opacity-100"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F5C542]/0 blur-3xl transition-colors duration-500 max-md:bg-[#F5C542]/[0.07] group-hover:bg-[#F5C542]/10"
              />
              <div className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#F5C542]">
                {c.period}
              </div>
              <h3 className="mt-4 text-[clamp(1.1rem,4.2vw,1.35rem)] font-bold normal-case leading-[1.35] text-[#EDE8E0]">
                <Headline text={c.headline} />
              </h3>
              <p className="mt-4 max-w-[46ch] text-[0.92rem] font-medium leading-relaxed text-[#c7c7cc]">
                {c.context}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#F5C542]/45 bg-[#F5C542]/[0.08] px-5 py-2.5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#F5C542] transition-all duration-300 max-md:border-[#F5C542]/70 max-md:bg-[#F5C542]/[0.14] group-hover:gap-3 group-hover:border-[#F5C542] group-hover:bg-[#F5C542] group-hover:text-[#0d0d0f] group-hover:shadow-[0_12px_28px_-8px_rgba(245,197,66,0.55)]">
                Read the case study
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
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
 * the "Case studies" cards into it, without touching the bundle's own DOM.
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
