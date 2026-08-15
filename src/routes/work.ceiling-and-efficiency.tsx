import { createFileRoute } from "@tanstack/react-router";
import { CasePage, CaseHeader, Section, CaseFooter } from "@/components/case/CaseLayout";
import { MetricStrip, Bar, Screenshot } from "@/components/case/CaseBits";
import { clientLabel } from "@/config/disclosure";

const IMG = "/case-images/ceiling-and-efficiency";

const TITLE = "A 3.79× return delivered with 82% of campaigns capped by budget";
const DESCRIPTION =
  "A two-month Amazon growth read on a pharmaceutical skincare brand growing against a fixed daily ad budget, delivering a 3.79× return on ad spend.";

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
        period="Two months, measured against the same window last year"
        headline="A 3.79× return delivered with 82% of campaigns capped by budget"
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
            { label: "ACOS on the largest campaign in the account", value: "15.5%", countTo: 15.5, decimals: 1, suffix: "%" },
          ]}
        />
      </div>

      <Section title="Where the account stood">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          In the same 61 days a year earlier, the brand sold 5,783 units for $142,036.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          This period it did $157,046 across 6,311 units and 5,986 order items, at an average
          sales value of $26.24. Advertising covered roughly 29% of total store sales, across a
          catalogue of 29 actively advertised products.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          The account ran 50 campaigns. Eight were delivering without a budget constraint.
        </p>
      </Section>

      <Section title="The daily sales trend">
        <Screenshot src={`${IMG}/trend.png`} alt="Daily sales and units trend chart" />
        <p className="mt-4 max-w-[70ch] text-[0.9rem] italic leading-relaxed text-[#9a9a9e]">
          Seller Central's own daily trend chart, unedited.
        </p>
        <p className="mt-5 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Daily volume held a baseline of roughly $1,300 to $3,800, with a four-day promotional
          run peaking at $16,642 and 797 units in a single day.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          That window alone generated $45,045 in sales, about 29% of the entire 61-day total.
        </p>
      </Section>

      <Section title="Profitable growth with the handbrake on">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Campaigns flagged as budget-limited" pct={82} note="82.0% (41 of 50)" />
          <Bar label="Return on the spend that did go out" pct={100} note="3.79×" />
          <Bar label="Campaigns delivering unconstrained" pct={100} note="8" />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          The account grew while 41 of 50 campaigns, including the single largest, ran out of
          budget before the end of the day.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Every one of those caps is demonstrated headroom: proven demand, already converting at
          3.79×, with no budget left to serve it. This is the rarest position an account can be
          in, because the growth lever is identified and validated before a dollar of new spend
          is committed.
        </p>
      </Section>

      <Section title="The largest campaign was also one of the leanest">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Competitor-conquest campaign" pct={15.5} note="15.5% ACOS, 6.46× ROAS" />
          <Bar label="Sales from that campaign" pct={100} note="$7,162 on $1,108 spend" />
          <Bar label="Blended account ACOS" pct={26.4} />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          The biggest campaign in the account, a conquest play targeting a rival brand's search
          terms, ran at 15.5% ACOS against a 26.4% account average.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          It was out of budget. A campaign taking share directly from a competitor at better than
          twice the account's blended efficiency was being switched off by a daily cap every
          afternoon.
        </p>
        <div className="mt-6">
          <Screenshot src={`${IMG}/campaigns.png`} alt="Top PPC campaigns by sales, including the competitor-conquest campaign" />
        </div>
      </Section>

      <Section title="The most efficient placement was a $98 test">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Video test campaign" pct={8.9} note="8.9% ACOS, 11.19× ROAS" />
          <Bar label="Total spend on it" pct={100} note="$98.68" />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          A small Sponsored Brands Video test converted at 8.9% ACOS and 11.19× return.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          At under a hundred dollars of spend it contributed almost nothing to the account's
          totals, which is exactly why it needed flagging. The most efficient placement in the
          entire account was invisible in every summary view, and it was the clearest scaling
          candidate on the list.
        </p>
      </Section>

      <Section title="Featured offer share, caught early">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Featured offer share, June" pct={97.5} />
          <Bar label="Featured offer share, July" pct={90.6} />
          <Bar label="Days below 80%" pct={100} note="7" />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Featured offer share dropped nearly seven points across the two months, with seven
          individual days falling below 80% and a low of 68%.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Catching it mattered, because a back-end pricing or stock issue quietly caps ad
          performance in a way no bid change can fix. Flagging it separately from PPC put it in
          front of the team that could act on it while it was still a small number.
        </p>
      </Section>

      <Section title="The products carrying the brand">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Flagship SKU's share of all brand sales" pct={60} />
          <Bar label="Top three SKUs' share of total revenue" pct={79} />
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Three SKUs carried $124,642 of the brand's $157,046.
        </p>
        <div className="mt-5 flex flex-col gap-4">
          <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <strong className="font-bold text-[#EDE8E0]">The flagship cream</strong> did $93,836
            on 3,659 units, holding a 95.81% featured offer share and drawing 656,998 impressions
            and 6,099 clicks. It carries the account's largest per-SKU ad investment at $6,522,
            returning $25,342 across 942 ad-driven orders at a 25.7% ACOS.
          </p>
          <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <strong className="font-bold text-[#EDE8E0]">The newer variant</strong> did $18,419
            since launching sixteen months earlier, at a 27.9% ACOS. It also holds the lowest
            featured offer share of any top SKU at 93.28%, which was worth surfacing given how
            much revenue rides on it.
          </p>
          <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <strong className="font-bold text-[#EDE8E0]">The refill SKU</strong> is the
            efficiency story. At $11,421 in sales it is only fourth by revenue, but it converts
            at a 13.7% ACOS and 7.28× ROAS on a 97.30% featured offer share. As an attach product
            riding the flagship's install base, it is the strongest incremental candidate in the
            catalogue.
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
                Ranked all 50 campaigns by cap frequency and efficiency while capped.
              </strong>{" "}
              Any budget increase could go to the campaigns already proving they would use it
              well, rather than being spread evenly across the account.
            </span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <span aria-hidden className="mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
            <span>
              <strong className="font-bold text-[#EDE8E0]">
                Attached a return to every line before requesting budget.
              </strong>{" "}
              A vague ask for more spend became a prioritised list where each row carried a
              documented ROAS. The conquest campaign at 15.5% and the video test at 8.9% led it.
            </span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]">
            <span aria-hidden className="mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]" />
            <span>
              <strong className="font-bold text-[#EDE8E0]">
                Separated the featured offer share drop from PPC reporting.
              </strong>{" "}
              It went to the team that could actually fix it, instead of being read as an
              advertising problem and chased with bid changes that would not have moved it.
            </span>
          </li>
        </ul>
      </Section>

      <Section title="What comes next">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Demand is proven, the return is documented at 3.79×, and the only variable left is
          spend.
        </p>
        <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]">
          Lifting the caps on the ranked campaigns is the next move, starting with the conquest
          campaign and the video test, both of which are converting at better than twice the
          account average on budgets that run out before the day does.
        </p>
      </Section>

      <CaseFooter />
    </CasePage>
  );
}
