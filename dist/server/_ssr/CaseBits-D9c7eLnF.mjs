import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as PageShell } from "./SiteChrome-FFUh6CQl.mjs";
import { i as usePrefersReducedMotion, n as Reveal, r as useInViewOnce, t as CountUp } from "./CountUp-DQydTuNi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CaseBits-D9c7eLnF.js
var import_jsx_runtime = require_jsx_runtime();
var disclosure = {
	caseC: {
		nameApproved: false,
		name: ""
	},
	caseD: {
		nameApproved: false,
		name: ""
	},
	caseE: {
		nameApproved: false,
		name: ""
	}
};
var ANON_LABELS = {
	caseC: "a dermatological skincare brand scaling on a hero cream line",
	caseD: "a regenerative skincare brand built around two flagship ampoules",
	caseE: "a pharmaceutical skincare brand growing against a fixed daily ad budget"
};
function clientLabel(key) {
	const entry = disclosure[key];
	return entry.nameApproved && entry.name ? entry.name : ANON_LABELS[key];
}
var DISCLOSURE_FOOTER = "Client name withheld under agreement. Figures are expressed as indices and ratios rather than absolute values.";
function CaseHeader({ label, period, headline, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "mx-auto max-w-[1100px] px-6 md:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#F5C542]",
				children: period
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 max-w-[22ch] text-[clamp(2rem,5.4vw,3.6rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#EDE8E0]",
				children: headline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-[56ch] text-[1.05rem] font-medium italic leading-relaxed text-[#c7c7cc]",
				children: label
			}),
			note && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 font-mono text-[0.66rem] font-medium uppercase tracking-[0.12em] text-[#c7c7cc]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "h-1.5 w-1.5 rounded-full bg-[#F5C542]"
				}), note]
			})
		] })
	});
}
function Section({ title, caption, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		as: "section",
		className: "mx-auto mt-14 max-w-[1100px] px-6 md:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[24px] border border-white/[0.09] bg-[#111113] p-6 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "h-px w-6 bg-[#F5C542]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c7c7cc]",
						children: title
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7",
					children
				}),
				caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-7 max-w-[70ch] border-t border-white/[0.09] pt-6 text-[0.95rem] font-medium leading-relaxed text-[#c7c7cc]",
					children: caption
				})
			]
		})
	});
}
function CaseFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		as: "section",
		className: "mx-auto mt-16 max-w-[1100px] px-6 md:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[24px] border border-[#F5C542]/25 bg-gradient-to-b from-[#1a1712] to-[#151517] p-8 text-center md:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[1.3rem] font-bold leading-snug text-[#EDE8E0] md:text-[1.5rem]",
					children: "Want the version of this that applies to your account?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-[46ch] text-[0.95rem] font-medium text-[#c7c7cc]",
					children: "Twenty minutes, no pitch deck. Send me the account and I'll tell you what I'd look at first."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/book",
					className: "mt-8 inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-8 py-4 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_8px_24px_-8px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.04] hover:shadow-[0_10px_28px_-6px_rgba(245,197,66,0.6)] active:scale-[0.98]",
					children: ["Book a call", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "→"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 max-w-[70ch] text-[0.82rem] font-medium leading-relaxed text-[#c7c7cc]",
			children: DISCLOSURE_FOOTER
		})]
	});
}
function CasePage({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children });
}
function MetricStrip({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto mt-14 grid max-w-[1100px] gap-px overflow-hidden rounded-[20px] border border-white/[0.1] bg-white/[0.08] px-0 sm:grid-cols-2 lg:grid-cols-3",
		children: items.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			delay: i * 60,
			className: "bg-[#151517] p-6 transition-colors duration-200 hover:bg-[#1a1a1d]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-[1.65rem] font-medium leading-none tabular-nums text-[#EDE8E0]",
				children: m.countTo !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
					to: m.countTo,
					decimals: m.decimals ?? 0,
					prefix: m.prefix ?? "",
					suffix: m.suffix ?? ""
				}) : m.value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#c7c7cc]",
				children: m.label
			})]
		}, m.label))
	});
}
/** A raw screenshot, framed to match the rest of the case-page components. */
function Screenshot({ src, alt, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "group overflow-hidden rounded-[16px] border border-white/[0.1] bg-[#151517] transition-colors duration-200 hover:border-[#F5C542]/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				loading: "lazy",
				className: "block w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
			})
		}), caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "border-t border-white/[0.08] px-6 py-4 text-[0.85rem] font-medium leading-relaxed text-[#c7c7cc]",
			children: caption
		})]
	});
}
/** Horizontal bar that draws in via scaleX on entry. */
function Bar({ label, pct, note }) {
	const { ref, seen } = useInViewOnce();
	const reduced = usePrefersReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[1rem] font-medium text-[#EDE8E0]",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[1rem] font-semibold tabular-nums text-[#F5C542]",
				children: note ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
					to: pct,
					decimals: 1,
					suffix: "%"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 h-[8px] w-full overflow-hidden rounded-full bg-white/[0.08]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full origin-left rounded-full bg-gradient-to-r from-[#F5C542] to-[#f7d466]",
				style: {
					transform: `scaleX(${seen ? Math.min(pct, 100) / 100 : 0})`,
					transition: reduced ? "opacity 200ms linear" : "transform 1100ms cubic-bezier(0.16,1,0.3,1)"
				}
			})
		})]
	});
}
//#endregion
export { MetricStrip as a, clientLabel as c, CasePage as i, CaseFooter as n, Screenshot as o, CaseHeader as r, Section as s, Bar as t };
