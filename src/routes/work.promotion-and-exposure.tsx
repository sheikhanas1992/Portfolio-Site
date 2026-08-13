import { createFileRoute } from "@tanstack/react-router";
import { CasePage, CaseHeader, Section, CaseFooter } from "@/components/case/CaseLayout";
import { MetricStrip, Bar, Screenshot, ScreenshotRow } from "@/components/case/CaseBits";
import { clientLabel } from "@/config/disclosure";

const IMG = "/case-images/promotion-and-exposure";

const TITLE = "Promotion and exposure: 42% growth, and where it came from";
const DESCRIPTION =
  "A twelve-month Amazon growth read on a skincare account where a single promotional event and a celebrity awareness campaign both did their jobs, at very different costs.";

export const Route = createFileRoute("/work/promotion-and-exposure")({
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
  component: PromotionAndExposure,
});

function PromotionAndExposure() {
  return (
    <CasePage>
      <CaseHeader
        label={clientLabel("caseD")}
        period="12 months, measured against the prior year"
        headline="42% revenue growth built on one high-intensity promotion"
      />

      <div className="px-6 md:px-10">
        <MetricStrip
          items={[
            { label: "Revenue growth, year over year", value: "+42.4%", countTo: 42.4, decimals: 1, suffix: "%", prefix: "+" },
            { label: "Units sold, year over year", value: "+61.4%", countTo: 61.4, decimals: 1, suffix: "%", prefix: "+" },
            { label: "Return on ad spend", value: "4.50×", countTo: 4.5, decimals: 2, suffix: "×" },
            { label: "Blended ACOS", value: "22.2%", countTo: 22.2, decimals: 1, suffix: "%" },
            { label: "Best-performing hero campaign ACOS", value: "10.4%", countTo: 10.4, decimals: 1, suffix: "%" },
            { label: "Share of period sales from one promotional event", value: "40%", countTo: 40 },
          ]}
        />
      </div>

      <Section title="The daily sales trend" caption="Seller Central's own daily trend chart, unedited.">
        <Screenshot src={`${IMG}/trend.png`} alt="Daily sales and units trend chart" />
      </Section>

      <Section
        title="Awareness spend versus direct-response spend"
        caption="A celebrity-fronted video campaign ran at more than 3× the ACOS of the account's hero campaigns. On paper that reads as underperformance. In practice, video and direct-response campaigns are rarely comparable on ACOS alone, one is selling on the spot, the other is building recognition that pays off in searches it doesn't get credited for."
      >
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Hero campaign ACOS (lowest of two)" pct={10.4} />
          <Bar label="Hero campaign ACOS (second)" pct={11.0} />
          <Bar label="Celebrity-endorsement video campaign ACOS" pct={37.8} />
        </div>
        <div className="mt-6">
          <Screenshot src={`${IMG}/campaigns.png`} alt="Top PPC campaigns by sales" />
        </div>
      </Section>

      <Section
        title="Concentration and timing risk"
        caption="Just under half of revenue sat in three SKUs, and 40% of the period's total sales landed inside a single four-day promotional window. One slower month, outside the promotion, finished 36% behind the prior year, which is the clearest evidence that this account's calendar matters as much as its campaign structure."
      >
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Top three SKUs' share of total revenue" pct={49} />
          <Bar label="Share of period sales from the four-day promotion" pct={40} />
        </div>
        <div className="mt-6">
          <Screenshot src={`${IMG}/top-products.png`} alt="Top products by ordered product sales" />
        </div>
      </Section>

      <Section title="From the account" caption="Seller Central and Advertising Console, as pulled for this read.">
        <div className="grid gap-6 md:grid-cols-2">
          <Screenshot src={`${IMG}/snapshot.png`} alt="Sales snapshot" />
          <Screenshot src={`${IMG}/ads-overview.png`} alt="Advertising performance overview" />
        </div>
        <div className="mt-6">
          <ScreenshotRow
            items={[
              { src: `${IMG}/product-1.png`, alt: "Hero product packaging" },
              { src: `${IMG}/product-2.png`, alt: "Second product packaging" },
              { src: `${IMG}/product-3.png`, alt: "Third product packaging" },
            ]}
          />
        </div>
      </Section>

      <Section title="What I looked at">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          The question worth answering wasn't whether the promotion worked, the sales spike made
          that obvious. It was whether the rest of the calendar was pulling its weight. I compared
          on-promotion and off-promotion weeks side by side and flagged the video campaign
          separately from the direct-response campaigns so leadership could judge each on the
          right terms, instead of one blended ACOS number making the awareness spend look like a
          mistake. I also flagged the single down month as a seasonality note rather than folding
          it into the year-over-year headline, since averaging it away would have hidden a real
          gap in the non-promotional months.
        </p>
      </Section>

      <Section title="Limits of this read">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          This is a promotion-driven number as much as a PPC one. Take out the four-day event and
          the growth story looks meaningfully smaller, which is worth saying plainly rather than
          letting the headline number carry more weight than it should. The next twelve months
          are a better test of the account's structure than this one was.
        </p>
      </Section>

      <CaseFooter />
    </CasePage>
  );
}
