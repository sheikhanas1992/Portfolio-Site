import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as require_react_dom } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-v1TGIEdP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
/**
* The hero avatar lives inside the prebuilt homepage bundle. Rather than
* editing that bundle, we tag its container once it mounts so the greyscale /
* hover behaviour in styles.css can take over, and attach the tooltip node.
*/
function AvatarEnhancer() {
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		let tries = 0;
		const enhance = () => {
			if (cancelled) return;
			const container = document.querySelector("#root img[alt^=\"Portrait\"]")?.parentElement?.parentElement;
			if (!container) {
				if (tries++ < 60) window.setTimeout(enhance, 100);
				return;
			}
			if (container.classList.contains("anas-avatar")) return;
			container.classList.add("anas-avatar");
			container.setAttribute("tabindex", "0");
			const tip = document.createElement("div");
			tip.className = "anas-avatar-tip";
			tip.setAttribute("aria-hidden", "true");
			tip.textContent = "Open for new Amazon PPC accounts: DM me or book a call";
			container.appendChild(tip);
		};
		enhance();
		return () => {
			cancelled = true;
		};
	}, []);
	return null;
}
var CARDS = [
	{
		to: "/work/scale-and-concentration",
		label: "a Korean skincare brand scaling fast off one hero anti-aging line",
		period: "12 months, measured against the prior year",
		metric: "10.4× revenue",
		context: "Growth was real, but three SKUs out of a much larger catalogue carried 72% of it."
	},
	{
		to: "/work/promotion-and-exposure",
		label: "a Korean regenerative-skincare brand built around a single flagship ampoule",
		period: "12 months, measured against the prior year",
		metric: "+42.4% revenue",
		context: "40% of the period's sales landed inside a single four-day promotional window."
	},
	{
		to: "/work/ceiling-and-efficiency",
		label: "a Korean skincare brand growing against a fixed daily ad budget",
		period: "12 months, measured against the prior year",
		metric: "3.79× return on ad spend",
		context: "82% of campaigns, including the largest, were regularly capped by daily budget."
	}
];
function Cards() {
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = window.setTimeout(() => setShown(true), 60);
		return () => window.clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "selected-work",
		className: "px-6 py-24 md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1100px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[clamp(2.4rem,9vw,6rem)] font-black uppercase leading-[0.85] tracking-[-0.03em] text-[#EDE8E0]",
				children: "Selected work"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5",
				children: CARDS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: c.to,
					className: "group relative block overflow-hidden rounded-[20px] border border-white/[0.1] bg-[#151517] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F5C542]/50 hover:bg-[#1a1a1d] hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.7)]",
					style: {
						opacity: shown ? 1 : 0,
						transform: shown ? "none" : "translateY(18px)",
						transition: `opacity 700ms ${i * 100}ms ease, transform 700ms ${i * 100}ms cubic-bezier(0.16,1,0.3,1)`
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#F5C542] transition-transform duration-300 group-hover:scale-x-100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#F5C542]",
							children: c.period
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-mono text-[clamp(1.6rem,3.4vw,2.2rem)] font-medium leading-none tabular-nums text-[#EDE8E0]",
							children: c.metric
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[0.95rem] font-semibold text-[#EDE8E0]",
							children: c.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-[46ch] text-[0.92rem] font-medium leading-relaxed text-[#b4b4b8]",
							children: c.context
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-6 inline-flex items-center gap-1.5 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#F5C542] transition-all duration-200 group-hover:gap-2.5",
							children: ["Read the case study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								children: "→"
							})]
						})
					]
				}, c.to))
			})]
		})
	});
}
/**
* The homepage is a prebuilt bundle that mounts itself into #root. This
* component inserts a host node directly after the hero section and portals
* the "Selected work" cards into it, without touching the bundle's own DOM.
*/
function SelectedWorkIsland() {
	const [host, setHost] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		let tries = 0;
		const node = document.createElement("div");
		node.id = "selected-work-host";
		const attach = () => {
			if (cancelled) return;
			const hero = document.querySelector("#root section");
			if (hero?.parentElement) {
				hero.parentElement.insertBefore(node, hero.nextSibling);
				setHost(node);
				return;
			}
			if (tries++ < 60) window.setTimeout(attach, 100);
		};
		attach();
		return () => {
			cancelled = true;
			node.remove();
		};
	}, []);
	return host ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cards, {}), host) : null;
}
function Index() {
	(0, import_react.useEffect)(() => {
		if (document.getElementById("portfolio-bundle")) return;
		const script = document.createElement("script");
		script.id = "portfolio-bundle";
		script.type = "module";
		script.crossOrigin = "anonymous";
		script.src = "/assets/index-CvwBBh1I.js";
		document.body.appendChild(script);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "root",
			suppressHydrationWarning: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarEnhancer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedWorkIsland, {})
	] });
}
//#endregion
export { Index as component };
