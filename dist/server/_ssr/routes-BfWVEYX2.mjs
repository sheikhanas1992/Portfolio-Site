import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as require_react_dom } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BfWVEYX2.js
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
var FIGURE_RE = /(\$[\d,.]+[KMB]?|\d+(?:\.\d+)?%|\d+(?:\.\d+)?×)/g;
/** Splits a headline on embedded dollar/percent/multiplier figures and
* renders those substrings in the accent color so the numbers read first. */
function Headline({ text }) {
	const parts = text.split(FIGURE_RE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: parts.map((part, i) => i % 2 === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "font-black text-[#F5C542]",
		children: part
	}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, i)) });
}
var CARDS = [
	{
		to: "/work/scale-and-concentration",
		period: "Two months, measured against the same window last year",
		headline: "How I turned $480K in Amazon sales into $5M, at a 4.33× return on ad spend.",
		context: "Three SKUs carried $3.58M of $5.01M in sales, the clearest sign of a hero product that's landed."
	},
	{
		to: "/work/promotion-and-exposure",
		period: "Two months, measured against the same window last year",
		headline: "How I grew an Amazon brand from $2M to $2.8M, turning every $1 in ads into $4.50.",
		context: "A single four-day window drove 40% of the period's revenue, proof of a repeatable promotional engine."
	},
	{
		to: "/work/ceiling-and-efficiency",
		period: "Two months, measured against the same window last year",
		headline: "How I hit $157K in Amazon sales at 3.79× ROAS, with 80% of campaigns budget-capped.",
		context: "41 of 50 campaigns ran out of budget daily: proven demand with room still to grow."
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
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[clamp(2.4rem,9vw,6rem)] font-black uppercase leading-[0.85] tracking-[-0.03em] text-[#EDE8E0]",
					children: "Case studies"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-[58ch] text-[1.05rem] font-medium leading-relaxed text-[#c7c7cc]",
					children: "A sample of the accounts I've run, written up with the parts most case studies skip."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5",
					children: CARDS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: c.to,
						className: "group relative block overflow-hidden rounded-[20px] border border-white/[0.16] bg-gradient-to-b from-[#1c1c1f] to-[#141416] p-7 shadow-[0_16px_36px_-18px_rgba(0,0,0,0.75)] transition-all duration-300 max-md:border-[#F5C542]/35 max-md:from-[#202023] max-md:to-[#161618] max-md:shadow-[0_20px_44px_-16px_rgba(0,0,0,0.8),0_0_36px_-14px_rgba(245,197,66,0.22)] hover:-translate-y-2 hover:border-[#F5C542]/60 hover:from-[#212124] hover:to-[#18181a] hover:shadow-[0_32px_64px_-18px_rgba(0,0,0,0.85),0_0_56px_-16px_rgba(245,197,66,0.35)]",
						style: {
							opacity: shown ? 1 : 0,
							transform: shown ? "none" : "translateY(18px)",
							transition: `opacity 700ms ${i * 100}ms ease, transform 700ms ${i * 100}ms cubic-bezier(0.16,1,0.3,1)`
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#F5C542] via-[#F5C542]/60 to-transparent opacity-60 transition-opacity duration-300 max-md:opacity-90 group-hover:opacity-100"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F5C542]/0 blur-3xl transition-colors duration-500 max-md:bg-[#F5C542]/[0.07] group-hover:bg-[#F5C542]/10"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#F5C542]",
								children: c.period
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-[clamp(1.1rem,4.2vw,1.35rem)] font-bold normal-case leading-[1.35] text-[#EDE8E0]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headline, { text: c.headline })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-[46ch] text-[0.92rem] font-medium leading-relaxed text-[#c7c7cc]",
								children: c.context
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-7 inline-flex items-center gap-2 rounded-full border border-[#F5C542]/45 bg-[#F5C542]/[0.08] px-5 py-2.5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#F5C542] transition-all duration-300 max-md:border-[#F5C542]/70 max-md:bg-[#F5C542]/[0.14] group-hover:gap-3 group-hover:border-[#F5C542] group-hover:bg-[#F5C542] group-hover:text-[#0d0d0f] group-hover:shadow-[0_12px_28px_-8px_rgba(245,197,66,0.55)]",
								children: ["Read the case study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "transition-transform duration-300 group-hover:translate-x-1",
									children: "→"
								})]
							})
						]
					}, c.to))
				})
			]
		})
	});
}
/**
* The homepage is a prebuilt bundle that mounts itself into #root. This
* component inserts a host node directly after the hero section and portals
* the "Case studies" cards into it, without touching the bundle's own DOM.
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
		script.src = "/assets/index-C4R-8SkR.js";
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
