import { createFileRoute } from "@tanstack/react-router";
import { CasePage, CaseHeader, Section, CaseFooter } from "@/components/case/CaseLayout";
import { MetricStrip, Bar } from "@/components/case/CaseBits";
import { clientLabel } from "@/config/disclosure";

const TITLE = "Scale and concentration: a 10.4× revenue year, and its risk";
const DESCRIPTION =
  "A twelve-month Amazon growth read on a skincare account that grew 10.4× while three SKUs carried most of the revenue.";

export const Route = createFileRoute("/work/scale-and-concentration")({
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
  component: ScaleAndConcentration,
});

function ScaleAndConcentration() {
  return (
    <CasePage>
      <CaseHeader
        label={clientLabel("caseC")}
        period="12 months, measured against the prior year"
        headline="10.4× revenue growth on one hero product line"
      />

      <div className="px-6 md:px-10">
        <MetricStrip
          items={[
            { label: "Revenue growth, year over year", value: "10.4×", countTo: 10.4, decimals: 1, suffix: "×" },
            { label: "Units sold, year over year", value: "11.7×", countTo: 11.7, decimals: 1, suffix: "×" },
            { label: "Return on ad spend", value: "4.33×", countTo: 4.33, decimals: 2, suffix: "×" },
            { label: "Blended ACOS", value: "23.12%", countTo: 23.12, decimals: 2, suffix: "%" },
            { label: "Featured offer share", value: "88.5%", countTo: 88.5, decimals: 1, suffix: "%" },
            { label: "Product page views, year over year", value: "+266%", countTo: 266, suffix: "%", prefix: "+" },
          ]}
        />
      </div>

      <Section
        title="Where the revenue actually sits"
        caption="Three SKUs out of a much larger catalogue carried nearly three-quarters of total revenue. That's not unusual for a fast-scaling account, but it changes what 'risk' means: a stockout or a rank drop on any one of these three does more damage than the same event anywhere else in the catalogue."
      >
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Top three SKUs' share of total revenue" pct={72} />
          <Bar label="Everything else in the catalogue, combined" pct={28} />
        </div>
      </Section>

      <Section
        title="Two kinds of spend, two different jobs"
        caption="Brand-defense campaigns exist to stop competitors from sitting on your own product pages. They cost more to run than they'll ever 'earn' on paper, and comparing their ACOS to a core campaign's ACOS misreads what each one is for."
      >
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Brand-defense campaign ACOS" pct={26.88} />
          <Bar label="Core product-line ACOS" pct={15} />
        </div>
      </Section>

      <Section title="What I looked at">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          The growth number was never in question here, the account had already found a hero
          product and demand was doing a lot of the work. What needed a second pair of eyes was
          the spend behind it: whether the brand-defense budget was sized to the actual threat
          and not just left running at whatever level it started at, and whether the newer,
          lower-margin SKUs in the same product family were being fed enough traffic to build
          their own review base instead of permanently living off the flagship's halo. I split
          reporting by SKU tier so brand-defense, hero-product and supporting-product spend
          stopped being read as one blended number, and set ACOS targets per tier instead of one
          account-wide target that made the defense campaigns look "inefficient" when they were
          doing their job.
        </p>
      </Section>

      <Section title="Limits of this read">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          A 10.4× year is partly a market story: this category was growing fast on its own, and
          not every account riding a hot category gets to keep this growth rate once demand
          normalizes. The concentration in three SKUs is the number I'd watch most closely going
          into the next twelve months, since it's the one structural risk that doesn't fix itself
          with more ad spend.
        </p>
      </Section>

      <CaseFooter />
    </CasePage>
  );
}
