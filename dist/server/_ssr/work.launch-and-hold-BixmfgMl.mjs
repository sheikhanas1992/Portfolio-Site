import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as TodoBlock, i as CasePage, l as clientLabel, n as CaseFooter, o as MetricStrip, r as CaseHeader, s as Section, t as Bar } from "./CaseBits-DGb5PIFI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.launch-and-hold-BixmfgMl.js
var import_jsx_runtime = require_jsx_runtime();
function LaunchAndHold() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CasePage, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseHeader, {
			label: clientLabel("caseB"),
			period: "6 months",
			headline: "18.3% of account revenue from a product launched from zero"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-6 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStrip, { items: [
				{
					label: "Share of account revenue from the new launch",
					value: "18.3%",
					countTo: 18.3,
					decimals: 1,
					suffix: "%"
				},
				{
					label: "Conversion on the launch listing (highest of three)",
					value: "29.79%",
					countTo: 29.79,
					decimals: 2,
					suffix: "%"
				},
				{
					label: "Featured offer share held on every listing",
					value: "99.4%+",
					countTo: 99.4,
					decimals: 1,
					suffix: "%+"
				},
				{
					label: "Blended conversion across the catalogue",
					value: "17.35%",
					countTo: 17.35,
					decimals: 2,
					suffix: "%"
				}
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Context",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-[70ch] text-[0.98rem] leading-relaxed text-[#9a9a9e]",
				children: "A three-listing catalogue across two product lines. The launch listing went live at the start of the period with no history, no reviews and no rank, and finished as the account's strongest converter. Featured offer share held above 99% throughout, including through the July algorithm shift."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Where the account stood",
			caption: "Featured offer share is reported as a range across the three listings: 99.42% to 99.87%.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#151517] px-7 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Launch listing conversion",
						pct: 29.79
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Blended catalogue conversion",
						pct: 17.35
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Share of account revenue from the launch",
						pct: 18.3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						label: "Featured offer share (lowest listing)",
						pct: 99.42
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "What I did",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodoBlock, { title: "What I did" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Limits of this read",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodoBlock, { title: "Limits of this read" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseFooter, {})
	] });
}
//#endregion
export { LaunchAndHold as component };
