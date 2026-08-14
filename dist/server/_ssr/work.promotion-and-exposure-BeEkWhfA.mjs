import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as MetricStrip, c as clientLabel, i as CasePage, n as CaseFooter, o as Screenshot, r as CaseHeader, s as Section, t as Bar } from "./CaseBits-BNa5C6ik.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.promotion-and-exposure-BeEkWhfA.js
var import_jsx_runtime = require_jsx_runtime();
var IMG = "/case-images/promotion-and-exposure";
function PromotionAndExposure() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CasePage, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseHeader, {
			label: clientLabel("caseD"),
			period: "12 months, measured against the prior year",
			headline: "42% revenue growth built on one high-intensity promotion",
			note: "Managed as part of my work at Sohomax"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-6 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStrip, { items: [
				{
					label: "Revenue growth, year over year",
					value: "+42.4%",
					countTo: 42.4,
					decimals: 1,
					suffix: "%",
					prefix: "+"
				},
				{
					label: "Units sold, year over year",
					value: "+61.4%",
					countTo: 61.4,
					decimals: 1,
					suffix: "%",
					prefix: "+"
				},
				{
					label: "Return on ad spend",
					value: "4.50×",
					countTo: 4.5,
					decimals: 2,
					suffix: "×"
				},
				{
					label: "Blended ACOS",
					value: "22.2%",
					countTo: 22.2,
					decimals: 1,
					suffix: "%"
				},
				{
					label: "Best-performing hero campaign ACOS",
					value: "10.4%",
					countTo: 10.4,
					decimals: 1,
					suffix: "%"
				},
				{
					label: "Share of period sales from one promotional event",
					value: "40%",
					countTo: 40
				}
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "The daily sales trend",
			caption: "Seller Central's own daily trend chart, unedited.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
				src: `${IMG}/trend.png`,
				alt: "Daily sales and units trend chart"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Awareness spend versus direct-response spend",
			caption: "A celebrity-fronted video campaign ran at more than 3× the ACOS of the account's hero campaigns. On paper that reads as underperformance. In practice, video and direct-response campaigns are rarely comparable on ACOS alone, one is selling on the spot, the other is building recognition that pays off in searches it doesn't get credited for.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Hero campaign ACOS (lowest of two)",
						pct: 10.4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Hero campaign ACOS (second)",
						pct: 11
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Celebrity-endorsement video campaign ACOS",
						pct: 37.8
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
					src: `${IMG}/campaigns.png`,
					alt: "Top PPC campaigns by sales"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Concentration and timing risk",
			caption: "Just under half of revenue sat in three SKUs, and 40% of the period's total sales landed inside a single four-day promotional window. One slower month, outside the promotion, finished 36% behind the prior year, which is the clearest evidence that this account's calendar matters as much as its campaign structure.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					label: "Top three SKUs' share of total revenue",
					pct: 49
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					label: "Share of period sales from the four-day promotion",
					pct: 40
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
					src: `${IMG}/top-products.png`,
					alt: "Top products by ordered product sales"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "From the account",
			caption: "Seller Central and Advertising Console, as pulled for this read.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
					src: `${IMG}/snapshot.png`,
					alt: "Sales snapshot"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
					src: `${IMG}/ads-overview.png`,
					alt: "Advertising performance overview"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "What I looked at",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]",
				children: "The question worth answering wasn't whether the promotion worked, the sales spike made that obvious. It was whether the rest of the calendar was pulling its weight. I compared on-promotion and off-promotion weeks side by side and flagged the video campaign separately from the direct-response campaigns so leadership could judge each on the right terms, instead of one blended ACOS number making the awareness spend look like a mistake. I also flagged the single down month as a seasonality note rather than folding it into the year-over-year headline, since averaging it away would have hidden a real gap in the non-promotional months."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Limits of this read",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]",
				children: "This is a promotion-driven number as much as a PPC one. Take out the four-day event and the growth story looks meaningfully smaller, which is worth saying plainly rather than letting the headline number carry more weight than it should. The next twelve months are a better test of the account's structure than this one was."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseFooter, {})
	] });
}
//#endregion
export { PromotionAndExposure as component };
