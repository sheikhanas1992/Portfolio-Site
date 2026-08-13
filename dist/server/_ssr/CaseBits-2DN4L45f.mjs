import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as PageShell } from "./SiteChrome-ChobPlJu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CaseBits-2DN4L45f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var disclosure = {
	caseA: {
		nameApproved: false,
		name: ""
	},
	caseB: {
		nameApproved: false,
		name: ""
	},
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
	caseA: "a DTC body-care brand on Amazon US",
	caseB: "an outdoor electrical and EV accessories brand",
	caseC: "a Korean skincare brand scaling fast off one hero anti-aging line",
	caseD: "a Korean regenerative-skincare brand built around a single flagship ampoule",
	caseE: "a Korean skincare brand growing against a fixed daily ad budget"
};
function clientLabel(key) {
	const entry = disclosure[key];
	return entry.nameApproved && entry.name ? entry.name : ANON_LABELS[key];
}
var DISCLOSURE_FOOTER = "Client name withheld under agreement. Figures are expressed as indices and ratios rather than absolute values.";
function CaseHeader({ label, period, headline }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto max-w-[1100px] px-6 md:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#F5C542]",
				children: period
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 max-w-[22ch] text-[clamp(2rem,5.4vw,3.6rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#EDE8E0]",
				children: headline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-[56ch] text-[1rem] leading-relaxed text-[#9a9a9e]",
				children: label
			})
		]
	});
}
function Section({ title, caption, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto mt-20 max-w-[1100px] px-6 md:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#7d7d82]",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children
			}),
			caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-[70ch] text-[0.85rem] leading-relaxed text-[#7d7d82]",
				children: caption
			})
		]
	});
}
function CaseFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto mt-24 max-w-[1100px] px-6 md:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[20px] border border-white/[0.08] bg-[#151517] p-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[1.05rem] text-[#EDE8E0]",
				children: "Want the version of this that applies to your account?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/book",
				className: "mt-6 inline-flex rounded-full border border-white/[0.14] px-7 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#EDE8E0] transition-colors hover:border-[#F5C542]/60 hover:text-[#F5C542]",
				children: "Book a call"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 max-w-[70ch] text-[0.72rem] leading-relaxed text-[#5c5c61]",
			children: DISCLOSURE_FOOTER
		})]
	});
}
function CasePage({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children });
}
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	}, []);
	return reduced;
}
function useInViewOnce() {
	const ref = (0, import_react.useRef)(null);
	const [seen, setSeen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || seen) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setSeen(true);
				io.disconnect();
			}
		}, { threshold: .25 });
		io.observe(el);
		return () => io.disconnect();
	}, [seen]);
	return {
		ref,
		seen
	};
}
/** Count-up figure. Monospace + tabular-nums, animates once on scroll into view. */
function CountUp({ to, decimals = 0, prefix = "", suffix = "", className = "" }) {
	const { ref, seen } = useInViewOnce();
	const reduced = usePrefersReducedMotion();
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!seen) return;
		if (reduced) {
			setValue(to);
			return;
		}
		let raf = 0;
		const start = performance.now();
		const tick = (now) => {
			const p = Math.min((now - start) / 1200, 1);
			setValue(to * (1 - Math.pow(1 - p, 3)));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		seen,
		to,
		reduced
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: `font-mono tabular-nums ${className}`,
		children: [
			prefix,
			value.toFixed(decimals),
			suffix
		]
	});
}
function MetricStrip({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto mt-14 grid max-w-[1100px] gap-px overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.06] px-0 sm:grid-cols-2 lg:grid-cols-3",
		children: items.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-[#151517] p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-[1.5rem] leading-none tabular-nums text-[#EDE8E0]",
				children: m.countTo !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
					to: m.countTo,
					decimals: m.decimals ?? 0,
					prefix: m.prefix ?? "",
					suffix: m.suffix ?? ""
				}) : m.value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 text-[0.62rem] uppercase tracking-[0.15em] text-[#7d7d82]",
				children: m.label
			})]
		}, m.label))
	});
}
/** A raw screenshot, framed to match the rest of the case-page components. */
function Screenshot({ src, alt, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#151517]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			loading: "lazy",
			className: "block w-full"
		}), caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "border-t border-white/[0.08] px-6 py-4 text-[0.8rem] leading-relaxed text-[#7d7d82]",
			children: caption
		})]
	});
}
/** A row of smaller screenshots side by side (product photography, etc.) */
function ScreenshotRow({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-4 sm:grid-cols-3",
		children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#151517] p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: it.src,
				alt: it.alt,
				loading: "lazy",
				className: "mx-auto block max-h-[220px] w-auto"
			})
		}, it.src))
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
				className: "text-[0.95rem] text-[#EDE8E0]",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[0.95rem] tabular-nums text-[#F5C542]",
				children: note ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
					to: pct,
					decimals: 1,
					suffix: "%"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 h-[6px] w-full overflow-hidden rounded-full bg-white/[0.07]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full origin-left rounded-full bg-[#F5C542]",
				style: {
					transform: `scaleX(${seen ? Math.min(pct, 100) / 100 : 0})`,
					transition: reduced ? "opacity 200ms linear" : "transform 1100ms cubic-bezier(0.16,1,0.3,1)"
				}
			})
		})]
	});
}
//#endregion
export { CountUp as a, ScreenshotRow as c, useInViewOnce as d, usePrefersReducedMotion as f, CasePage as i, Section as l, CaseFooter as n, MetricStrip as o, CaseHeader as r, Screenshot as s, Bar as t, clientLabel as u };
