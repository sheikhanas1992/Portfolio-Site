import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as require_react_dom } from "../_libs/@tanstack/react-router+deps.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DoDSo8U4.js
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
			tip.textContent = "I'm open to work — DM me or book a call";
			container.appendChild(tip);
		};
		enhance();
		return () => {
			cancelled = true;
		};
	}, []);
	return null;
}
var CARDS = [{
	to: "/work/traffic-and-conversion",
	label: "a DTC body-care brand on Amazon US",
	period: "12 months, measured against the prior year",
	metric: "2.11× revenue",
	context: "Traffic and conversion contributed in almost equal measure — 1.46 × 1.38 = 2.01 on units."
}, {
	to: "/work/launch-and-hold",
	label: "an outdoor electrical and EV accessories brand",
	period: "6 months",
	metric: "18.3% of account revenue",
	context: "A listing launched from zero finished as the account's strongest converter at 29.79%."
}];
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
				className: "mt-12 grid gap-5 md:grid-cols-2",
				children: CARDS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: c.to,
					className: "group block rounded-[20px] border border-white/[0.08] bg-[#151517] p-7 transition-colors hover:border-[#F5C542]/40",
					style: {
						opacity: shown ? 1 : 0,
						transform: shown ? "none" : "translateY(18px)",
						transition: `opacity 700ms ${i * 100}ms ease, transform 700ms ${i * 100}ms cubic-bezier(0.16,1,0.3,1)`
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#F5C542]",
							children: c.period
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-mono text-[clamp(1.6rem,3.4vw,2.2rem)] leading-none tabular-nums text-[#EDE8E0]",
							children: c.metric
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[0.95rem] text-[#EDE8E0]",
							children: c.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-[46ch] text-[0.9rem] leading-relaxed text-[#9a9a9e]",
							children: c.context
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-6 inline-block font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#F5C542] transition-opacity group-hover:opacity-70",
							children: "Read the case study →"
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
		script.src = "/assets/index-jjHCjgPz.js";
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
