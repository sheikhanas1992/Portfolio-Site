import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as ContactRow, r as PageShell, t as CONTACT } from "./SiteChrome-D1q4eCFd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-DAfhFb03.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BookPage() {
	const [status, setStatus] = (0, import_react.useState)("loading");
	(0, import_react.useEffect)(() => {
		const existing = document.getElementById("calendly-widget-script");
		const timeout = window.setTimeout(() => {
			setStatus((s) => s === "ready" ? s : "failed");
		}, 8e3);
		const onLoad = () => setStatus("ready");
		const onError = () => setStatus("failed");
		if (existing) setStatus("ready");
		else {
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = "https://assets.calendly.com/assets/external/widget.css";
			link.id = "calendly-widget-css";
			document.head.appendChild(link);
			const script = document.createElement("script");
			script.id = "calendly-widget-script";
			script.src = "https://assets.calendly.com/assets/external/widget.js";
			script.async = true;
			script.addEventListener("load", onLoad);
			script.addEventListener("error", onError);
			document.body.appendChild(script);
		}
		return () => {
			window.clearTimeout(timeout);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1100px] px-6 md:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-[clamp(2.4rem,8vw,5rem)] font-black uppercase leading-[0.88] tracking-[-0.03em] text-[#EDE8E0]",
				children: "Book a call"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-[52ch] text-[1rem] leading-relaxed text-[#9a9a9e]",
				children: "Twenty minutes. Tell me what you're working on and I'll tell you what I'd look at first."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-12 min-h-[700px] w-full overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#151517]",
				children: [
					status !== "failed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "calendly-inline-widget h-[700px] w-full",
						"data-url": CONTACT.calendly,
						style: {
							minWidth: "320px",
							minHeight: "700px"
						}
					}),
					status === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#151517]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-[#F5C542]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#7d7d82]",
							children: "Loading calendar…"
						})]
					}),
					status === "failed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-[700px] flex-col items-center justify-center gap-5 px-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-[40ch] text-[0.95rem] text-[#9a9a9e]",
							children: "The calendar couldn't load here. You can still book directly on Calendly."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: CONTACT.calendly,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-full border border-white/[0.14] px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[#EDE8E0] transition-colors hover:border-[#F5C542]/60 hover:text-[#F5C542]",
							children: "Open the booking page"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#7d7d82]",
					children: "Prefer not to use a calendar?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {})
				})]
			})
		]
	}) });
}
//#endregion
export { BookPage as component };
