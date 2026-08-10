import { createFileRoute } from "@tanstack/react-router";
import { CasePage, CaseHeader, Section, CaseFooter } from "@/components/case/CaseLayout";
import { MetricStrip, Bar, TodoBlock } from "@/components/case/CaseBits";
import { clientLabel } from "@/config/disclosure";

const TITLE = "Launch and hold — a launch that took 18.3% of account revenue";
const DESCRIPTION =
  "A six-month read on launching a listing from zero and holding featured offer share above 99%. Figures shown as ratios and percentages.";

export const Route = createFileRoute("/work/launch-and-hold")({
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
  component: LaunchAndHold,
});

function LaunchAndHold() {
  return (
    <CasePage>
      <CaseHeader
        label={clientLabel("caseB")}
        period="6 months"
        headline="18.3% of account revenue from a product launched from zero"
      />

      <div className="px-6 md:px-10">
        <MetricStrip
          items={[
            {
              label: "Share of account revenue from the new launch",
              value: "18.3%",
              countTo: 18.3,
              decimals: 1,
              suffix: "%",
            },
            {
              label: "Conversion on the launch listing (highest of three)",
              value: "29.79%",
              countTo: 29.79,
              decimals: 2,
              suffix: "%",
            },
            {
              label: "Featured offer share held on every listing",
              value: "99.4%+",
              countTo: 99.4,
              decimals: 1,
              suffix: "%+",
            },
            {
              label: "Blended conversion across the catalogue",
              value: "17.35%",
              countTo: 17.35,
              decimals: 2,
              suffix: "%",
            },
          ]}
        />
      </div>

      <Section title="Context">
        <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]">
          A three-listing catalogue across two product lines. The launch listing went live at
          the start of the period with no history, no reviews and no rank, and finished as the
          account's strongest converter. Featured offer share held above 99% throughout,
          including through the July algorithm shift.
        </p>
      </Section>

      <Section
        title="Where the account stood"
        caption="Featured offer share is reported as a range across the three listings: 99.42% to 99.87%."
      >
        <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4">
          <Bar label="Launch listing conversion" pct={29.79} />
          <Bar label="Blended catalogue conversion" pct={17.35} />
          <Bar label="Share of account revenue from the launch" pct={18.3} />
          <Bar label="Featured offer share (lowest listing)" pct={99.42} />
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
