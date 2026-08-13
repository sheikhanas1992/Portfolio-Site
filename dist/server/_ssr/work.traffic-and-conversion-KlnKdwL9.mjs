import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as CountUp, d as useInViewOnce, f as usePrefersReducedMotion, i as CasePage, l as Section, n as CaseFooter, o as MetricStrip, r as CaseHeader, t as Bar, u as clientLabel } from "./CaseBits-2DN4L45f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.traffic-and-conversion-KlnKdwL9.js
var import_jsx_runtime = require_jsx_runtime();
function Decomposition() {
	const { ref, seen } = useInViewOnce();
	const reduced = usePrefersReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "rounded-[20px] border border-white/[0.08] bg-[#151517] p-8",
		style: {
			opacity: seen ? 1 : 0,
			transform: seen || reduced ? "none" : "translateY(16px)",
			transition: reduced ? "opacity 300ms linear" : "opacity 700ms ease, transform 700ms cubic-bezier(0.16,1,0.3,1)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[0.66rem] uppercase tracking-[0.15em] text-[#7d7d82]",
			children: "Units = Sessions × Conversion rate"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap items-end gap-6",
			children: [
				[{
					q: "1.46",
					label: "Sessions"
				}, {
					q: "1.38",
					label: "Conversion rate"
				}].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-6",
					children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pb-3 font-mono text-[1.6rem] text-[#7d7d82]",
						"aria-hidden": true,
						children: "×"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[clamp(2rem,5vw,3.2rem)] leading-none tabular-nums text-[#EDE8E0]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							to: Number(p.q),
							decimals: 2
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-[0.6rem] uppercase tracking-[0.15em] text-[#7d7d82]",
						children: p.label
					})] })]
				}, p.label)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pb-3 font-mono text-[1.6rem] text-[#7d7d82]",
					"aria-hidden": true,
					children: "="
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[clamp(2.4rem,6vw,4rem)] leading-none tabular-nums text-[#F5C542]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
						to: 2.01,
						decimals: 2
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 text-[0.6rem] uppercase tracking-[0.15em] text-[#7d7d82]",
					children: "Units ordered"
				})] })
			]
		})]
	});
}
function Mechanism({ label, kind, rows, quote }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-[20px] border border-white/[0.08] bg-[#151517] p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[1.05rem] font-semibold text-[#EDE8E0]",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#F5C542]",
					children: kind
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-2.5",
				children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[auto_1fr] gap-3 font-mono text-[0.85rem] tabular-nums leading-relaxed text-[#9a9a9e]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "mt-[0.55em] h-px w-3 bg-[#F5C542] opacity-60"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r })]
				}, r))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-[0.95rem] leading-relaxed text-[#EDE8E0]",
				children: quote
			})
		]
	});
}
function TrafficAndConversion() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CasePage, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseHeader, {
			label: clientLabel("caseA"),
			period: "12 months, measured against the prior year",
			headline: "2.11× revenue"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-6 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStrip, { items: [
				{
					label: "Revenue, indexed (100 base)",
					value: "211",
					countTo: 211
				},
				{
					label: "Units ordered, indexed (100 base)",
					value: "201",
					countTo: 201
				},
				{
					label: "Sessions, indexed (100 base)",
					value: "146",
					countTo: 146
				},
				{
					label: "Unit session percentage (from 7.34%)",
					value: "10.13%",
					countTo: 10.13,
					decimals: 2,
					suffix: "%"
				},
				{
					label: "Avg selling price, indexed (100 base)",
					value: "105",
					countTo: 105
				},
				{
					label: "Revenue multiple",
					value: "2.11×",
					countTo: 2.11,
					decimals: 2,
					suffix: "×"
				}
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "The decomposition",
			caption: "Traffic and conversion contributed in almost equal measure. Neither alone explains the result.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Decomposition, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Contribution to net growth",
			caption: "Shares are each SKU's revenue change as a proportion of the brand's total revenue change, so decliners carry a negative share and the column sums to 100%.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Top three listings combined",
						pct: 83.5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Newly launched listings combined",
						pct: 33.9
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Gross gains vs offsetting declines",
						pct: 85,
						note: "≈ 6×"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Two mechanisms",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mechanism, {
					label: "Flavour A",
					kind: "Traffic-led",
					rows: [
						"Sessions 4.47×",
						"Conversion essentially flat: 8.32% → 8.46%",
						"77% of the brand's entire session gain"
					],
					quote: "This SKU became the catalogue's entry point."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mechanism, {
					label: "Flavour B",
					kind: "Conversion-led",
					rows: ["Sessions 1.13×", "Conversion 4.80% → 12.72%"],
					quote: "Units nearly tripled on flat traffic. Nothing about acquisition changed. The listing simply started converting."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "What I did",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]",
				children: "I broke the growth number down into sessions and conversion rate before touching a single bid, because \"revenue is up\" doesn't tell you what to do next and \"sessions are up but conversion is flat\" does. That split showed two SKUs pulling in opposite ways: one had turned into the catalogue's front door on traffic alone, the other was converting nearly three times better than it had the year before with no meaningful change in sessions. I moved budget toward the traffic-led SKU's top terms, since it was proving it could absorb more spend, and left the conversion-led SKU's campaigns mostly alone rather than \"optimising\" a listing that had already found what worked."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Limits of this read",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]",
				children: "Two SKUs did almost all of the work here, and one of them jumped from under 5% conversion to nearly 13% inside the year, most likely from a listing or pricing change that sits outside PPC reporting. I can show what happened to the numbers with confidence. I can't fully separate how much of that conversion jump was the ad account versus the page it was sending traffic to."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseFooter, {})
	] });
}
//#endregion
export { TrafficAndConversion as component };
