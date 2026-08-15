import { createFileRoute } from "@tanstack/react-router";
import { CasePage, CaseHeader, Section, CaseFooter } from "@/components/case/CaseLayout";
import { MetricStrip, Bar, Screenshot } from "@/components/case/CaseBits";
import { clientLabel } from "@/config/disclosure";

const IMG = "/case-images/scale-and-concentration";

const TITLE = "10.4× revenue growth, held at a 4.33× return on ad spend";
const DESCRIPTION =
  "A two-month Amazon growth read on a dermatological skincare brand that grew revenue 10.4× behind one hero cream line, at a 4.33× return on ad spend.";

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
        period="Two months, measured against the same window last year"
        headline="10.4× revenue growth, held at a 4.33× return on ad spend"
        note="Managed as part of my work at Sohomax"
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

      <Section title="Where the account stood">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          In the same 61 days a year earlier, the brand sold 16,887 units for $480,197.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          This period it did $5.01M across 197,431 units and 187,848 order items, at an average
          order value of $26.68. The account was now doing in a single week roughly what it had
          done across the entire comparable window twelve months before.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          June was the strongest month on record for the brand at $3.18M, with a four-day
          promotional event pushing one day past $455,000 and 21,000 units.
        </p>
      </Section>

      <Section title="The daily sales trend">
        <Screenshot src={`${IMG}/trend.png`} alt="Daily sales and units trend chart" />
        <p className="mt-4 max-w-[70ch] text-[0.9rem] italic leading-relaxed text-[#9a9a9e]">
          Seller Central's own daily trend chart, unedited.
        </p>
        <p className="mt-5 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Daily volume held a baseline of roughly $45,000 to $70,000 through most of both months,
          with two clear step-changes: the four-day promotional surge, and a sustained halo
          through the following week as the lift carried forward.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          The baseline itself grew month over month outside those windows, which is the more
          durable signal than the spike.
        </p>
      </Section>

      <Section title="Traffic grew 3.7×. Revenue grew 4.6×.">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Page views, July on July" pct={69} note="+266%" />
          <Bar label="Ordered product sales, July on July" pct={92} note="+356%" />
          <Bar label="Units sold, July on July" pct={100} note="+386%" />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Comparing July to July, traffic grew 266% while sales grew 356% and units grew 386%.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Revenue outpaced traffic by a wide margin, which means most of the growth came from
          converting visitors better rather than simply buying more of them. That gap is the
          difference between an account that scales and one that only spends.
        </p>
      </Section>

      <Section title="Efficiency held while spend scaled">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Blended ACOS" pct={23.12} />
          <Bar label="Return on ad spend" pct={100} note="4.33×" />
          <Bar label="Best-performing line campaign ACOS" pct={14.14} />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Advertising delivered $2,079,770 in attributed sales on $480,845 of spend across 48.5M
          impressions and 439,854 clicks, converting 75,525 purchases at a 0.91% CTR.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          The newer product line ran considerably tighter than the account average: 15.62% ACOS
          at 6.40× on Sponsored Products, and 14.14% ACOS at 7.07× on Sponsored Brands. Both sat
          well inside target while the account's absolute spend was still climbing.
        </p>
      </Section>

      <Section title="Featured offer share improved 1,763 basis points">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Featured offer share, this period" pct={88.5} />
          <Bar label="Year-over-year improvement" pct={100} note="+1,763 bps" />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Buy Box share improved by more than seventeen percentage points year over year.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          On an account growing this fast, that is not a cosmetic number. Every point of featured
          offer share is a point of demand the brand captures itself rather than handing to a
          reseller, and it compounds against every advertising dollar spent driving traffic to the
          listing.
        </p>
      </Section>

      <Section title="The products carrying the brand">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Top three SKUs' share of total revenue" pct={72} />
          <Bar label="Everything else, combined" pct={28} />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Three SKUs carried $3.58M of the brand's $5.01M in sales.
        </p>
        <div className="mt-5 flex flex-col gap-4">
          <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <strong className="font-bold text-[#EDE8E0]">The flagship cream</strong> did
            $1,831,063, 37% of brand sales, on 81,768 units. It also carried the largest single
            advertising investment in the account: $142,579 in spend returning $527,034 in
            attributed sales across 20,552 ad-driven orders.
          </p>
          <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <strong className="font-bold text-[#EDE8E0]">The newest hero SKU</strong> did
            $980,960, 20% of brand sales, despite only becoming available seven months earlier.
            It holds a 96.7% featured offer share, the highest of any high-volume SKU in the
            portfolio, and converts at 4.28× ROAS.
          </p>
          <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <strong className="font-bold text-[#EDE8E0]">The premium-tier product</strong> did
            $772,254 at a 96.1% featured offer share and 4.39× ROAS, on lower unit velocity than
            the top two. It wins on price point and margin quality rather than volume, which
            makes it the most efficient candidate for incremental Sponsored Brands investment.
          </p>
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
      </Section>

      <Section title="What I did">
        <ul className="space-y-5">
          <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <span aria-hidden className="mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
            <span>
              <strong className="font-bold text-[#EDE8E0]">
                Split reporting by product line rather than by campaign type.
              </strong>{" "}
              The newer line's 14 to 16% ACOS was invisible inside a 23.12% blended figure.
              Separating it is what justified moving incremental budget toward it.
            </span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <span aria-hidden className="mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
            <span>
              <strong className="font-bold text-[#EDE8E0]">
                Read traffic growth against revenue growth, not in isolation.
              </strong>{" "}
              A 266% traffic increase looks like an advertising win. Sitting it next to a 356%
              sales increase showed the conversion side was doing more of the work, and redirected
              the optimisation effort onto listings and creative.
            </span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <span aria-hidden className="mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
            <span>
              <strong className="font-bold text-[#EDE8E0]">
                Flagged featured offer share as a growth metric, not a health metric.
              </strong>{" "}
              Two mid-tier SKUs were sitting at 78% and 86% against the top three's 96%. That gap
              was the clearest unlocked revenue in the catalogue and it had nothing to do with
              bids.
            </span>
          </li>
        </ul>
      </Section>

      <Section title="What comes next">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          With the top three established and featured offer share at 88.5%, the lever moves from
          proving demand to widening the base.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          The two mid-tier SKUs reaching the same featured offer consistency as the top three is
          the nearest available growth, followed by continuing to shift incremental spend toward
          the newer line converting at 14 to 16%.
        </p>
      </Section>

      <CaseFooter />
    </CasePage>
  );
}
