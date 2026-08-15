import { createFileRoute } from "@tanstack/react-router";
import { CasePage, CaseHeader, Section, CaseFooter } from "@/components/case/CaseLayout";
import { MetricStrip, Bar, Screenshot } from "@/components/case/CaseBits";
import { clientLabel } from "@/config/disclosure";

const IMG = "/case-images/ceiling-and-efficiency";

const TITLE = "A 3.79× return delivered with 82% of campaigns still capped by budget";
const DESCRIPTION =
  "A twelve-month Amazon growth read on a brand growing against a fixed daily ad budget, delivering a 3.79× return on ad spend.";

export const Route = createFileRoute("/work/ceiling-and-efficiency")({
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
  component: CeilingAndEfficiency,
});

function CeilingAndEfficiency() {
  return (
    <CasePage>
      <CaseHeader
        label={clientLabel("caseE")}
        period="12 months, measured against the prior year"
        headline="A 3.79× return delivered with 82% of campaigns still capped by budget"
        note="Managed as part of my work at Sohomax"
      />

      <div className="px-6 md:px-10">
        <MetricStrip
          items={[
            { label: "Revenue growth, year over year", value: "+10.6%", countTo: 10.6, decimals: 1, suffix: "%", prefix: "+" },
            { label: "Units sold, year over year", value: "+9.1%", countTo: 9.1, decimals: 1, suffix: "%", prefix: "+" },
            { label: "Return on ad spend", value: "3.79×", countTo: 3.79, decimals: 2, suffix: "×" },
            { label: "Blended ACOS", value: "26.4%", countTo: 26.4, decimals: 1, suffix: "%" },
            { label: "Campaigns limited by daily budget", value: "82%", countTo: 82 },
            { label: "Flagship SKU's share of all brand sales", value: "60%", countTo: 60 },
          ]}
        />
      </div>

      <Section title="The daily sales trend" caption="Seller Central's own daily trend chart, unedited.">
        <Screenshot src={`${IMG}/trend.png`} alt="Daily sales and units trend chart" />
      </Section>

      <Section title="Profitable growth with the handbrake on">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Campaigns flagged as budget-limited" pct={82} />
          <Bar label="Return on the spend that did go out" pct={100} note="3.79×" />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          The account grew 10.6% while 82% of campaigns, including the largest, ran out of budget
          before the end of the day.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          Every one of those caps is demonstrated headroom: proven demand, already converting at
          3.79×, with no budget left to serve it. This is the rarest position an account can be
          in, because the growth lever is already identified and validated.
        </p>
        <div className="mt-6">
          <Screenshot src={`${IMG}/campaigns.png`} alt="Top PPC campaigns by sales, including the competitor-conquest campaign" />
        </div>
      </Section>

      <Section title="A flagship with real pull">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Flagship SKU's share of all brand sales" pct={60} />
          <Bar label="Top three SKUs' share of total revenue" pct={79} />
          <Bar label="Competitor-conquest campaign ACOS" pct={15.5} />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          One product drove more than half of total brand sales.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          The conquest campaign targeting a competing brand ran at 15.5% ACOS, well below the
          account average, proving the brand can take share directly from a rival profitably. It
          was capped too.
        </p>
        <div className="mt-6">
          <Screenshot src={`${IMG}/top-products.png`} alt="Top products by ordered product sales" />
        </div>
      </Section>

      <Section title="Featured offer share, caught early">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Buy Box share, earlier month" pct={97.5} />
          <Bar label="Buy Box share, later month" pct={90.6} />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          Featured offer share moved from 97.5% to 90.6% across the two months measured.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          Catching it mattered, because a back-end pricing or stock issue quietly limits ad
          performance in a way no bid change can fix. Flagging it separately put it in front of
          the right team while it was still a small number.
        </p>
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
                Ranked all fifty campaigns by cap frequency and efficiency.
              </strong>{" "}
              Any budget increase could go to the campaigns already proving they would use it
              well, rather than being spread evenly across the account.
            </span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <span aria-hidden className="mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
            <span>
              <strong className="font-bold text-[#EDE8E0]">Attached a return to every line.</strong>{" "}
              A vague request for more budget became a funded, prioritised list.
            </span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <span aria-hidden className="mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
            <span>
              <strong className="font-bold text-[#EDE8E0]">
                Separated the featured offer share drop from PPC.
              </strong>{" "}
              It went to the team that could actually fix it, instead of being read as an
              advertising problem.
            </span>
          </li>
        </ul>
      </Section>

      <Section title="What comes next">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          This account has the clearest scaling path of the three: demand is proven, the return is
          documented at 3.79×, and the only variable left is spend.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          Lifting the caps on the ranked campaigns is the next move, and it is the one that turns
          a 10.6% year into something considerably larger.
        </p>
      </Section>

      <CaseFooter />
    </CasePage>
  );
}
