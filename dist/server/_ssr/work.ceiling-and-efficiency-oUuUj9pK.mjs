import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as MetricStrip, c as Section, i as CasePage, l as clientLabel, n as CaseFooter, o as Screenshot, r as CaseHeader, t as Bar } from "./CaseBits-NWroIntv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.ceiling-and-efficiency-oUuUj9pK.js
var import_jsx_runtime = require_jsx_runtime();
var IMG = "/case-images/ceiling-and-efficiency";
function CeilingAndEfficiency() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CasePage, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseHeader, {
			label: clientLabel("caseE"),
			period: "12 months, measured against the prior year",
			headline: "41 of 50 campaigns capped by budget, on a 3.79× return",
			note: "Managed as part of my work at Sohomax"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-6 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStrip, { items: [
				{
					label: "Revenue growth, year over year",
					value: "+10.6%",
					countTo: 10.6,
					decimals: 1,
					suffix: "%",
					prefix: "+"
				},
				{
					label: "Units sold, year over year",
					value: "+9.1%",
					countTo: 9.1,
					decimals: 1,
					suffix: "%",
					prefix: "+"
				},
				{
					label: "Return on ad spend",
					value: "3.79×",
					countTo: 3.79,
					decimals: 2,
					suffix: "×"
				},
				{
					label: "Blended ACOS",
					value: "26.4%",
					countTo: 26.4,
					decimals: 1,
					suffix: "%"
				},
				{
					label: "Campaigns limited by daily budget",
					value: "82%",
					countTo: 82
				},
				{
					label: "Flagship SKU's share of all brand sales",
					value: "60%",
					countTo: 60
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
			title: "The account was profitable and starved at the same time",
			caption: "82% of active campaigns, including the single largest one, were regularly running out of budget before the end of the day. A campaign that's capped isn't a campaign that failed, it's a campaign that was never given the chance to spend what it could have spent profitably.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					label: "Campaigns flagged as budget-limited",
					pct: 82
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					label: "Return on the spend that did go out",
					pct: 100,
					note: "3.79×"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
					src: `${IMG}/campaigns.png`,
					alt: "Top PPC campaigns by sales, including the competitor-conquest campaign"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "A narrow revenue base",
			caption: "One flagship product accounted for more than half the brand's total sales on its own, with two more SKUs bringing the top three to just under 80%. A conquest campaign aimed at a competing brand ran below the account's blended ACOS, showing the strategy worked, it just wasn't funded to its own ceiling either.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Flagship SKU's share of all brand sales",
						pct: 60
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Top three SKUs' share of total revenue",
						pct: 79
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Competitor-conquest campaign ACOS",
						pct: 15.5
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
					src: `${IMG}/top-products.png`,
					alt: "Top products by ordered product sales"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Buy Box slipped while budgets stayed flat",
			caption: "Buy Box share dropped from 97.5% to 90.6% across the two months measured, a gap wide enough to lose sales on its own, independent of anything happening in PPC.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					label: "Buy Box share, earlier month",
					pct: 97.5
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					label: "Buy Box share, later month",
					pct: 90.6
				})]
			})
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
				children: "The headline growth rate here undersells the account, because the real ceiling wasn't demand or targeting, it was the daily budget field. I ranked campaigns by how often they hit their cap and how efficiently they were spending when they did, so the budget increase could go to the campaigns already proving they'd use it well instead of being spread evenly across all fifty. I also flagged the Buy Box drop separately from the PPC numbers, since a pricing or stock issue on the back end can quietly cap ad performance in a way that no amount of bid management fixes."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Limits of this read",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]",
				children: "This account's real constraint was capital, not strategy, and lifting the daily budgets is the one change that would tell us the most: whether the 3.79× return holds at twice the spend, or whether it was only ever available at this smaller scale. That's a question the next reporting period answers, not this one."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseFooter, {})
	] });
}
//#endregion
export { CeilingAndEfficiency as component };
