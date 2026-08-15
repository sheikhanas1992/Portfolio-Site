import { createFileRoute } from "@tanstack/react-router";
import { CasePage, CaseHeader, Section, CaseFooter } from "@/components/case/CaseLayout";
import { MetricStrip, Bar, Screenshot } from "@/components/case/CaseBits";
import { clientLabel } from "@/config/disclosure";

const IMG = "/case-images/promotion-and-exposure";

const TITLE = "42% revenue growth and a 4.50× return on ad spend";
const DESCRIPTION =
  "A twelve-month Amazon growth read on a regenerative skincare brand that grew revenue 42% at a 4.50× return on ad spend.";

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
        headline="42% revenue growth and a 4.50× return on ad spend"
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
            { label: "Share of period sales from one promotional event", value: "40%", countTo: 40 },
          ]}
        />
      </div>

      <Section title="The daily sales trend" caption="Seller Central's own daily trend chart, unedited.">
        <Screenshot src={`${IMG}/trend.png`} alt="Daily sales and units trend chart" />
      </Section>

      <Section title="Hero campaigns running near a 10× return">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Hero campaign ACOS, best" pct={10.4} />
          <Bar label="Hero campaign ACOS, second" pct={11.0} />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Two campaigns held ACOS around 10%, roughly a 10× return on the spend driving the
          majority of direct sales.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          These were the account's engine. Everything else was measured against what they proved
          was possible.
        </p>
      </Section>

      <Section title="Awareness spend, judged on the right terms">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Video campaign ACOS" pct={37.8} />
          <Bar label="Hero campaign ACOS" pct={10.4} />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          The celebrity-fronted video campaign ran at 37.8%, and that is the correct number for
          it.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Awareness and direct response do different jobs. Reporting them separately meant the
          video was funded on reach rather than flagged as a leak by a blended figure.
        </p>
        <div className="mt-6">
          <Screenshot src={`${IMG}/campaigns.png`} alt="Top PPC campaigns by sales" />
        </div>
      </Section>

      <Section title="A promotional playbook that works">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Share of period sales from the four-day promotion" pct={40.0} />
          <Bar label="Top three SKUs' share of total revenue" pct={49.0} />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Forty percent of the year's sales landed inside a single four-day window.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          That is proof of a repeatable promotional engine, and of an account that knows how to
          convert at volume when it opens the taps. Just under half of revenue sat in the top
          three SKUs, giving a clear, funded core to scale from.
        </p>
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
                Compared on-promotion and off-promotion weeks directly.
              </strong>{" "}
              This turned a sales spike into a documented pattern the account can plan around,
              rather than a one-off it hopes to repeat.
            </span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <span aria-hidden className="mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
            <span>
              <strong className="font-bold text-[#EDE8E0]">
                Reported video separately from direct response.
              </strong>{" "}
              Leadership could fund each on its own terms instead of a blended ACOS pushing them
              to cut the awareness spend feeding the peaks.
            </span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <span aria-hidden className="mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
            <span>
              <strong className="font-bold text-[#EDE8E0]">
                Protected the hero campaigns' targets.
              </strong>{" "}
              Both stayed near 10% ACOS through a year of rising spend.
            </span>
          </li>
        </ul>
      </Section>

      <Section title="What comes next">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          The promotional engine is proven.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          The opportunity is spreading that intensity across more of the calendar, using the
          four-day playbook as the template for a second and third event rather than a single
          annual peak.
        </p>
      </Section>

      <CaseFooter />
    </CasePage>
  );
}
