import { createFileRoute } from "@tanstack/react-router";
import { CasePage, CaseHeader, Section, CaseFooter } from "@/components/case/CaseLayout";
import { MetricStrip, Bar, TodoBlock } from "@/components/case/CaseBits";
import { CountUp, useInViewOnce, usePrefersReducedMotion } from "@/components/CountUp";
import { clientLabel } from "@/config/disclosure";

const TITLE = "Traffic and conversion — Amazon growth case study";
const DESCRIPTION =
  "A twelve-month Amazon growth read, decomposed into sessions and conversion rate. Figures shown as indices and ratios.";

export const Route = createFileRoute("/work/traffic-and-conversion")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrafficAndConversion,
});

function Decomposition() {
  const { ref, seen } = useInViewOnce<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  const parts = [
    { q: "1.46", label: "Sessions" },
    { q: "1.38", label: "Conversion rate" },
  ];
  return (
    <div
      ref={ref}
      className="rounded-[20px] border border-white/[0.08] bg-[#151517] p-8"
      style={{
        opacity: seen ? 1 : 0,
        transform: seen || reduced ? "none" : "translateY(16px)",
        transition: reduced ? "opacity 300ms linear" : "opacity 700ms ease, transform 700ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <p className="font-mono text-[0.66rem] uppercase tracking-[0.15em] text-[#7d7d82]">
        Units = Sessions × Conversion rate
      </p>
      <div className="mt-8 flex flex-wrap items-end gap-6">
        {parts.map((p, i) => (
          <div key={p.label} className="flex items-end gap-6">
            {i > 0 && (
              <span className="pb-3 font-mono text-[1.6rem] text-[#7d7d82]" aria-hidden>
                ×
              </span>
            )}
            <div>
              <div className="font-mono text-[clamp(2rem,5vw,3.2rem)] leading-none tabular-nums text-[#EDE8E0]">
                <CountUp to={Number(p.q)} decimals={2} />
              </div>
              <div className="mt-3 text-[0.6rem] uppercase tracking-[0.15em] text-[#7d7d82]">
                {p.label}
              </div>
            </div>
          </div>
        ))}
        <span className="pb-3 font-mono text-[1.6rem] text-[#7d7d82]" aria-hidden>
          =
        </span>
        <div>
          <div className="font-mono text-[clamp(2.4rem,6vw,4rem)] leading-none tabular-nums text-[#F5C542]">
            <CountUp to={2.01} decimals={2} />
          </div>
          <div className="mt-3 text-[0.6rem] uppercase tracking-[0.15em] text-[#7d7d82]">
            Units ordered
          </div>
        </div>
      </div>
    </div>
  );
}

function Mechanism({
  label,
  kind,
  rows,
  quote,
}: {
  label: string;
  kind: string;
  rows: string[];
  quote: string;
}) {
  return (
    <article className="rounded-[20px] border border-white/[0.08] bg-[#151517] p-7">
      <div className="flex flex-wrap items-baseline gap-3">
        <h3 className="text-[1.05rem] font-semibold text-[#EDE8E0]">{label}</h3>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#F5C542]">
          {kind}
        </span>
      </div>
      <ul className="mt-5 space-y-2.5">
        {rows.map((r) => (
          <li
            key={r}
            className="grid grid-cols-[auto_1fr] gap-3 font-mono text-[0.85rem] tabular-nums leading-relaxed text-[#9a9a9e]"
          >
            <span aria-hidden className="mt-[0.55em] h-px w-3 bg-[#F5C542] opacity-60" />
            <span>{r}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[0.95rem] leading-relaxed text-[#EDE8E0]">{quote}</p>
    </article>
  );
}

function TrafficAndConversion() {
  return (
    <CasePage>
      <CaseHeader
        label={clientLabel("caseA")}
        period="12 months, measured against the prior year"
        headline="2.11× revenue"
      />

      <div className="px-6 md:px-10">
        <MetricStrip
          items={[
            { label: "Revenue, indexed (100 base)", value: "211", countTo: 211 },
            { label: "Units ordered, indexed (100 base)", value: "201", countTo: 201 },
            { label: "Sessions, indexed (100 base)", value: "146", countTo: 146 },
            { label: "Unit session percentage (from 7.34%)", value: "10.13%", countTo: 10.13, decimals: 2, suffix: "%" },
            { label: "Avg selling price, indexed (100 base)", value: "105", countTo: 105 },
            { label: "Revenue multiple", value: "2.11×", countTo: 2.11, decimals: 2, suffix: "×" },
          ]}
        />
      </div>

      <Section
        title="The decomposition"
        caption="Traffic and conversion contributed in almost equal measure. Neither alone explains the result."
      >
        <Decomposition />
      </Section>

      <Section
        title="Contribution to net growth"
        caption="Shares are each SKU's revenue change as a proportion of the brand's total revenue change, so decliners carry a negative share and the column sums to 100%."
      >
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Top three listings combined" pct={83.5} />
          <Bar label="Newly launched listings combined" pct={33.9} />
          <Bar label="Gross gains vs offsetting declines" pct={85} note="≈ 6×" />
        </div>
      </Section>

      <Section title="Two mechanisms">
        <div className="grid gap-5 md:grid-cols-2">
          <Mechanism
            label="Flavour A"
            kind="Traffic-led"
            rows={[
              "Sessions 4.47×",
              "Conversion essentially flat: 8.32% → 8.46%",
              "77% of the brand's entire session gain",
            ]}
            quote="This SKU became the catalogue's entry point."
          />
          <Mechanism
            label="Flavour B"
            kind="Conversion-led"
            rows={["Sessions 1.13×", "Conversion 4.80% → 12.72%"]}
            quote="Units nearly tripled on flat traffic. Nothing about acquisition changed. The listing simply started converting."
          />
        </div>
      </Section>

      <Section title="What I did">
        {/* TODO: copy needed */}
        <TodoBlock title="What I did" />
      </Section>

      <Section title="Limits of this read">
        {/* TODO: copy needed */}
        <TodoBlock title="Limits of this read" />
      </Section>

      <CaseFooter />
    </CasePage>
  );
}
