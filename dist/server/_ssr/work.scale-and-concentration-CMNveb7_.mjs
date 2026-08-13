import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as MetricStrip, c as Section, i as CasePage, l as clientLabel, n as CaseFooter, o as Screenshot, r as CaseHeader, s as ScreenshotRow, t as Bar } from "./CaseBits-NWroIntv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.scale-and-concentration-CMNveb7_.js
var import_jsx_runtime = require_jsx_runtime();
var IMG = "/case-images/scale-and-concentration";
function ScaleAndConcentration() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CasePage, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseHeader, {
			label: clientLabel("caseC"),
			period: "12 months, measured against the prior year",
			headline: "10.4× revenue growth on one hero product line",
			note: "Managed as part of my work at Sohomax"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-6 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStrip, { items: [
				{
					label: "Revenue growth, year over year",
					value: "10.4×",
					countTo: 10.4,
					decimals: 1,
					suffix: "×"
				},
				{
					label: "Units sold, year over year",
					value: "11.7×",
					countTo: 11.7,
					decimals: 1,
					suffix: "×"
				},
				{
					label: "Return on ad spend",
					value: "4.33×",
					countTo: 4.33,
					decimals: 2,
					suffix: "×"
				},
				{
					label: "Blended ACOS",
					value: "23.12%",
					countTo: 23.12,
					decimals: 2,
					suffix: "%"
				},
				{
					label: "Featured offer share",
					value: "88.5%",
					countTo: 88.5,
					decimals: 1,
					suffix: "%"
				},
				{
					label: "Product page views, year over year",
					value: "+266%",
					countTo: 266,
					suffix: "%",
					prefix: "+"
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
			title: "Where the revenue actually sits",
			caption: "Three SKUs out of a much larger catalogue carried nearly three-quarters of total revenue. That's not unusual for a fast-scaling account, but it changes what 'risk' means: a stockout or a rank drop on any one of these three does more damage than the same event anywhere else in the catalogue.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					label: "Top three SKUs' share of total revenue",
					pct: 72
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					label: "Everything else in the catalogue, combined",
					pct: 28
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
					src: `${IMG}/top-products.png`,
					alt: "Top products by ordered product sales"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Two kinds of spend, two different jobs",
			caption: "Brand-defense campaigns exist to stop competitors from sitting on your own product pages. They cost more to run than they'll ever 'earn' on paper, and comparing their ACOS to a core campaign's ACOS misreads what each one is for.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					label: "Brand-defense campaign ACOS",
					pct: 26.88
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					label: "Core product-line ACOS",
					pct: 15
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
					src: `${IMG}/campaigns.png`,
					alt: "Top PPC campaigns by sales"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "From the account",
			caption: "Seller Central and Advertising Console, as pulled for this read.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
					src: `${IMG}/snapshot.png`,
					alt: "Sales snapshot"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
					src: `${IMG}/ads-overview.png`,
					alt: "Advertising performance overview"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenshotRow, { items: [
					{
						src: `${IMG}/product-1.png`,
						alt: "Hero product packaging"
					},
					{
						src: `${IMG}/product-2.png`,
						alt: "Second product packaging"
					},
					{
						src: `${IMG}/product-3.png`,
						alt: "Third product packaging"
					}
				] })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "What I looked at",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]",
				children: "The growth number was never in question here, the account had already found a hero product and demand was doing a lot of the work. What needed a second pair of eyes was the spend behind it: whether the brand-defense budget was sized to the actual threat and not just left running at whatever level it started at, and whether the newer, lower-margin SKUs in the same product family were being fed enough traffic to build their own review base instead of permanently living off the flagship's halo. I split reporting by SKU tier so brand-defense, hero-product and supporting-product spend stopped being read as one blended number, and set ACOS targets per tier instead of one account-wide target that made the defense campaigns look \"inefficient\" when they were doing their job."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Limits of this read",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]",
				children: "A 10.4× year is partly a market story: this category was growing fast on its own, and not every account riding a hot category gets to keep this growth rate once demand normalizes. The concentration in three SKUs is the number I'd watch most closely going into the next twelve months, since it's the one structural risk that doesn't fix itself with more ad spend."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseFooter, {})
	] });
}
//#endregion
export { ScaleAndConcentration as component };
