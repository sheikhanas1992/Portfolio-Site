import { createFileRoute } from "@tanstack/react-router";
import { CasePage, CaseHeader, Section, CaseFooter } from "@/components/case/CaseLayout";
import { MetricStrip, Bar, Screenshot } from "@/components/case/CaseBits";
import { clientLabel } from "@/config/disclosure";

const IMG = "/case-images/promotion-and-exposure";

const TITLE = "42% revenue growth with hero campaigns running near a 10× return";
const DESCRIPTION =
  "A two-month Amazon growth read on a regenerative skincare brand built around two flagship ampoules, growing revenue 42% at a 4.50× return on ad spend.";

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
        period="Two months, measured against the same window last year"
        headline="42% revenue growth with hero campaigns running near a 10× return"
        note="Managed as part of my work at Sohomax"
      />

      <div className="px-6 md:px-10">
        <MetricStrip
          items={[
            { label: "Revenue growth, year over year", value: "+42.4%", countTo: 42.4, decimals: 1, suffix: "%", prefix: "+" },
            { label: "Units sold, year over year", value: "+61.4%", countTo: 61.4, decimals: 1, suffix: "%", prefix: "+" },
            { label: "Return on ad spend", value: "4.50×", countTo: 4.5, decimals: 2, suffix: "×" },
            { label: "Blended ACOS", value: "22.2%", countTo: 22.2, decimals: 1, suffix: "%" },
            { label: "Best hero campaign ACOS", value: "10.4%", countTo: 10.4, decimals: 1, suffix: "%" },
            { label: "Share of store sales driven by ads", value: "~50%", countTo: 50 },
          ]}
        />
      </div>

      <Section title="Where the account stood">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          In the same 61 days a year earlier, the brand sold 43,816 units for $1,957,835.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          This period it did $2,788,458 across 70,694 units and 65,941 order items, at an average
          sales value of $42.29 per order item. That is the highest average order value of any
          account in this set, on a catalogue built around premium ampoules rather than volume
          SKUs.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Advertising drove roughly half of total store sales in the window.
        </p>
      </Section>

      <Section title="The daily sales trend">
        <Screenshot src={`${IMG}/trend.png`} alt="Daily sales and units trend chart" />
        <p className="mt-4 max-w-[70ch] text-[0.9rem] italic leading-relaxed text-[#9a9a9e]">
          Seller Central's own daily trend chart, unedited.
        </p>
        <p className="mt-5 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Daily volume held a baseline of roughly $23,000 to $43,000 through both months, with one
          clear step-change: a four-day promotional surge peaking at $378,016 and 10,743 units in
          a single day.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          The baseline outside that window sat durably ahead of where the account was a year
          earlier, which is the more sustainable signal than the promotional peak.
        </p>
      </Section>

      <Section title="Two hero campaigns at a 9× return">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="First hero campaign" pct={10.4} note="10.4% ACOS, 9.6× ROAS" />
          <Bar label="Second hero campaign" pct={11.0} note="11.0% ACOS, 9.1× ROAS" />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          The account's two largest campaigns by spend were also its two most efficient.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          That is an unusual shape. In most accounts the biggest campaign is the one carrying the
          loosest efficiency, and getting the largest line to also be the leanest is what let the
          rest of the budget go toward reach without dragging the blended number out of range.
        </p>
      </Section>

      <Section title="Awareness spend, judged on the right terms">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Hero campaign ACOS" pct={10.4} />
          <Bar label="Celebrity video campaign ACOS" pct={37.8} />
          <Bar label="Sponsored Products overall" pct={21.0} note="21.0% ACOS, 4.76× ROAS" />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          A celebrity-fronted video campaign ran at 37.8% ACOS, and that is the correct number for
          it.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Awareness and direct response do different jobs. Reporting the video separately from
          Sponsored Products meant it was funded on branded search lift rather than flagged as a
          leak by a blended figure that would have made it look like the account's biggest
          problem.
        </p>
        <div className="mt-6">
          <Screenshot src={`${IMG}/campaigns.png`} alt="Top PPC campaigns by sales" />
        </div>
      </Section>

      <Section title="A promotional playbook that works">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Share of period sales from the four-day event" pct={40.0} />
          <Bar label="Sales generated in that window" pct={100} note="$1,106,701" />
          <Bar label="Units in that window" pct={100} note="31,816" />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Forty percent of the period's revenue landed inside four days.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          That is proof of a repeatable promotional engine and of an account that knows how to
          convert at volume when it opens the taps. Documenting exactly how the window performed
          turned it from a spike into a template the brand can plan the rest of the calendar
          around.
        </p>
      </Section>

      <Section title="The products carrying the brand">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Top three SKUs' share of total revenue" pct={49} />
          <Bar label="Everything else, combined" pct={51} />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Three SKUs accounted for $1,377,522 of the brand's $2.79M.
        </p>
        <div className="mt-5 flex flex-col gap-4">
          <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <strong className="font-bold text-[#EDE8E0]">The flagship ampoule</strong> did
            $742,550, 26.6% of brand sales, on 16,826 units. Live since 2020, it carries $54,346
            in ad spend returning $328,549 at a 16.5% ACOS, and holds a 99.28% featured offer
            share.
          </p>
          <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <strong className="font-bold text-[#EDE8E0]">The second hero ampoule</strong> did
            $513,788 on 12,004 units despite launching only sixteen months earlier. It is the
            most ad-efficient of the three heroes at 14.9% ACOS and 6.71× ROAS, on a 96.14%
            featured offer share.
          </p>
          <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <strong className="font-bold text-[#EDE8E0]">The larger-size variant</strong> is the
            quiet winner in the catalogue. Launched three months before the window, it did
            $240,458 at a 9.2% ACOS and 10.83× ROAS, the best efficiency of any SKU in the
            portfolio, on only $16,426 of ad-attributed spend.
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
                Reported the video campaign separately from direct response.
              </strong>{" "}
              Leadership could fund reach and efficiency on their own terms instead of one blended
              ACOS pushing them to cut the spend feeding branded search.
            </span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <span aria-hidden className="mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
            <span>
              <strong className="font-bold text-[#EDE8E0]">
                Compared on-promotion and off-promotion weeks directly.
              </strong>{" "}
              That separated the promotional lift from the underlying baseline, and showed the
              baseline itself had grown, which is the number that actually justifies next year's
              budget.
            </span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <span aria-hidden className="mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
            <span>
              <strong className="font-bold text-[#EDE8E0]">
                Ranked SKUs by ad efficiency, not by revenue.
              </strong>{" "}
              The best-converting product in the catalogue was ninth by sales and running at 9.2%
              ACOS on a small spend base. Ranking by revenue alone would have kept it invisible.
            </span>
          </li>
        </ul>
      </Section>

      <Section title="What comes next">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          The promotional engine is proven and the hero campaigns are running near a 9× return.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          The nearest growth is funding the larger-size variant already converting at 9.2% ACOS,
          and tightening the sheet-mask campaigns running at roughly double the ampoules'
          efficiency.
        </p>
      </Section>

      <CaseFooter />
    </CasePage>
  );
}
