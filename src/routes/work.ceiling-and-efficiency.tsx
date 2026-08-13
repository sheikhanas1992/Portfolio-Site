import { createFileRoute } from "@tanstack/react-router";
import { CasePage, CaseHeader, Section, CaseFooter } from "@/components/case/CaseLayout";
import { MetricStrip, Bar } from "@/components/case/CaseBits";
import { clientLabel } from "@/config/disclosure";

const TITLE = "Ceiling and efficiency: an efficient account capped by its own budget";
const DESCRIPTION =
  "A twelve-month Amazon growth read on a smaller skincare account where most campaigns were profitable and running out of daily budget before the day ended.";

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
        headline="41 of 50 campaigns capped by budget, on a 3.79× return"
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

      <Section
        title="The account was profitable and starved at the same time"
        caption="82% of active campaigns, including the single largest one, were regularly running out of budget before the end of the day. A campaign that's capped isn't a campaign that failed, it's a campaign that was never given the chance to spend what it could have spent profitably."
      >
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Campaigns flagged as budget-limited" pct={82} />
          <Bar label="Return on the spend that did go out" pct={100} note="3.79×" />
        </div>
      </Section>

      <Section
        title="A narrow revenue base"
        caption="One flagship product accounted for more than half the brand's total sales on its own, with two more SKUs bringing the top three to just under 80%. A conquest campaign aimed at a competing brand ran below the account's blended ACOS, showing the strategy worked, it just wasn't funded to its own ceiling either."
      >
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Flagship SKU's share of all brand sales" pct={60} />
          <Bar label="Top three SKUs' share of total revenue" pct={79} />
          <Bar label="Competitor-conquest campaign ACOS" pct={15.5} />
        </div>
      </Section>

      <Section
        title="Buy Box slipped while budgets stayed flat"
        caption="Buy Box share dropped from 97.5% to 90.6% across the two months measured, a gap wide enough to lose sales on its own, independent of anything happening in PPC."
      >
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Buy Box share, earlier month" pct={97.5} />
          <Bar label="Buy Box share, later month" pct={90.6} />
        </div>
      </Section>

      <Section title="What I looked at">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          The headline growth rate here undersells the account, because the real ceiling wasn't
          demand or targeting, it was the daily budget field. I ranked campaigns by how often
          they hit their cap and how efficiently they were spending when they did, so the budget
          increase could go to the campaigns already proving they'd use it well instead of being
          spread evenly across all fifty. I also flagged the Buy Box drop separately from the PPC
          numbers, since a pricing or stock issue on the back end can quietly cap ad performance
          in a way that no amount of bid management fixes.
        </p>
      </Section>

      <Section title="Limits of this read">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          This account's real constraint was capital, not strategy, and lifting the daily budgets
          is the one change that would tell us the most: whether the 3.79× return holds at twice
          the spend, or whether it was only ever available at this smaller scale. That's a
          question the next reporting period answers, not this one.
        </p>
      </Section>

      <CaseFooter />
    </CasePage>
  );
}
