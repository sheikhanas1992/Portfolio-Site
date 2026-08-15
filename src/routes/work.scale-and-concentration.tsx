import { createFileRoute } from "@tanstack/react-router";
import { CasePage, CaseHeader, Section, CaseFooter } from "@/components/case/CaseLayout";
import { MetricStrip, Bar, Screenshot } from "@/components/case/CaseBits";
import { clientLabel } from "@/config/disclosure";

const IMG = "/case-images/scale-and-concentration";

const TITLE = "10.4× revenue growth on one hero product line";
const DESCRIPTION =
  "A twelve-month Amazon growth read on a skincare brand that grew revenue 10.4× behind one hero anti-aging line.";

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
        note="Managed as part of my work at Sohomax"
      />

      <div className="px-6 md:px-10">
        <MetricStrip
          items={[
            { label: "Revenue growth, year over year", value: "10.4×", countTo: 10.4, decimals: 1, suffix: "×" },
            { label: "Units sold, year over year", value: "11.7×", countTo: 11.7, decimals: 1, suffix: "×" },
            { label: "Return on ad spend", value: "4.33×", countTo: 4.33, decimals: 2, suffix: "×" },
            { label: "Blended ACOS", value: "23.12%", countTo: 23.12, decimals: 2, suffix: "%" },
            { label: "Hero product line ACOS", value: "15.0%", countTo: 15.0, decimals: 1, suffix: "%" },
            { label: "Featured offer share", value: "88.5%", countTo: 88.5, decimals: 1, suffix: "%" },
            { label: "Product page views, year over year", value: "+266%", countTo: 266, suffix: "%", prefix: "+" },
          ]}
        />
      </div>

      <Section title="The daily sales trend" caption="Seller Central's own daily trend chart, unedited.">
        <Screenshot src={`${IMG}/trend.png`} alt="Daily sales and units trend chart" />
      </Section>

      <Section title="Traffic grew 3.7×. Revenue grew 10.4×.">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Product page views, year over year" pct={35} note="+266%" />
          <Bar label="Revenue, year over year" pct={100} note="10.4×" />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          Traffic roughly tripled while revenue grew more than tenfold.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          Most of the growth came from converting visitors better, not from buying more of them.
          That gap is the difference between an account that scales and one that just spends.
        </p>
      </Section>

      <Section title="ACOS held at 23% while spend climbed">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Blended ACOS" pct={23.12} />
          <Bar label="Hero product line ACOS" pct={15.0} />
          <Bar label="Return on ad spend" pct={100} note="4.33×" />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          The hero line ran at 15% ACOS, well inside target, through a period of fast-rising spend.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          Reading it separately from the rest of the catalogue is what made that visible. Averaged
          into one account-wide number, the account's strongest performer would have looked
          ordinary.
        </p>
      </Section>

      <Section title="A proven hero line carrying the catalogue">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Top three SKUs' share of total revenue" pct={72} />
          <Bar label="Everything else, combined" pct={28} />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          Three SKUs carried nearly three-quarters of revenue, which is what a hero product looks
          like when it lands.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          It also gives the account something most catalogues never get: a proven winner to
          protect and build outward from, instead of a flat spread of SKUs with no clear signal
          about where to invest.
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
              <strong className="font-bold text-[#EDE8E0]">Split reporting by SKU tier.</strong>{" "}
              Hero and supporting products stopped being read as one blended number, and each got
              an ACOS target sized to its own job.
            </span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <span aria-hidden className="mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
            <span>
              <strong className="font-bold text-[#EDE8E0]">
                Aligned listings and creative to converting search terms.
              </strong>{" "}
              The pages were treated as part of the campaign, not a separate problem. That is
              where most of the gap between 3.7× traffic and 10.4× revenue came from.
            </span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <span aria-hidden className="mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
            <span>
              <strong className="font-bold text-[#EDE8E0]">
                Funded the supporting SKUs to stand on their own.
              </strong>{" "}
              Traffic was freed for newer products in the family to build their own review base
              rather than living permanently on the flagship's halo.
            </span>
          </li>
        </ul>
      </Section>

      <Section title="What comes next">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          With the hero line established and featured offer share at 88.5%, the lever moves from
          proving demand to widening the base.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          The next twelve months are about turning that halo into second and third products that
          stand alone, using the flagship's rank and review velocity as the launch platform.
        </p>
      </Section>

      <CaseFooter />
    </CasePage>
  );
}
