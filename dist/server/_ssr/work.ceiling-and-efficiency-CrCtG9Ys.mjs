import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as MetricStrip, c as clientLabel, i as CasePage, n as CaseFooter, o as Screenshot, r as CaseHeader, s as Section, t as Bar } from "./CaseBits-vQZorFOm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.ceiling-and-efficiency-CrCtG9Ys.js
var import_jsx_runtime = require_jsx_runtime();
var IMG = "/case-images/ceiling-and-efficiency";
function CeilingAndEfficiency() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CasePage, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseHeader, {
			label: clientLabel("caseE"),
			period: "12 months, measured against the prior year",
			headline: "A 3.79× return delivered with 82% of campaigns still capped by budget",
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
			title: "Profitable growth with the handbrake on",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Campaigns flagged as budget-limited",
						pct: 82
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Return on the spend that did go out",
						pct: 100,
						note: "3.79×"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]",
					children: "The account grew 10.6% while 82% of campaigns, including the largest, ran out of budget before the end of the day."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]",
					children: "Every one of those caps is demonstrated headroom: proven demand, already converting at 3.79×, with no budget left to serve it. This is the rarest position an account can be in, because the growth lever is already identified and validated."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
						src: `${IMG}/campaigns.png`,
						alt: "Top PPC campaigns by sales, including the competitor-conquest campaign"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "A flagship with real pull",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]",
					children: "One product drove more than half of total brand sales."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]",
					children: "The conquest campaign targeting a competing brand ran at 15.5% ACOS, well below the account average, proving the brand can take share directly from a rival profitably. It was capped too."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
						src: `${IMG}/top-products.png`,
						alt: "Top products by ordered product sales"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Featured offer share, caught early",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Buy Box share, earlier month",
						pct: 97.5
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Buy Box share, later month",
						pct: 90.6
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]",
					children: "Featured offer share moved from 97.5% to 90.6% across the two months measured."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]",
					children: "Catching it mattered, because a back-end pricing or stock issue quietly limits ad performance in a way no bid change can fix. Flagging it separately put it in front of the right team while it was still a small number."
				})
			]
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
			title: "What I did",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-bold text-[#EDE8E0]",
								children: "Ranked all fifty campaigns by cap frequency and efficiency."
							}),
							" ",
							"Any budget increase could go to the campaigns already proving they would use it well, rather than being spread evenly across the account."
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-bold text-[#EDE8E0]",
								children: "Attached a return to every line."
							}),
							" ",
							"A vague request for more budget became a funded, prioritised list."
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] leading-relaxed text-[#c7c7cc]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "mt-[0.55em] h-[3px] w-3 rounded-full bg-[#F5C542]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-bold text-[#EDE8E0]",
								children: "Separated the featured offer share drop from PPC."
							}),
							" ",
							"It went to the team that could actually fix it, instead of being read as an advertising problem."
						] })]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "What comes next",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]",
				children: "This account has the clearest scaling path of the three: demand is proven, the return is documented at 3.79×, and the only variable left is spend."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-[70ch] text-[0.98rem] leading-relaxed text-[#c7c7cc]",
				children: "Lifting the caps on the ranked campaigns is the next move, and it is the one that turns a 10.6% year into something considerably larger."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseFooter, {})
	] });
}
//#endregion
export { CeilingAndEfficiency as component };
