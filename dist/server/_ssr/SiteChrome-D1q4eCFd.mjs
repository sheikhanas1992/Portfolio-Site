import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteChrome-D1q4eCFd.js
var import_jsx_runtime = require_jsx_runtime();
var CONTACT = {
	linkedin: "https://www.linkedin.com/in/muhammad-anas-amz-brand-manager-ppc-expert/",
	email: "mailto:sheikhanas1992@gmail.com?subject=Enquiry%20from%20sheikhanas.com",
	emailAddress: "sheikhanas1992@gmail.com",
	whatsapp: "https://wa.me/923177748484?text=Hi%20Anas%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch.",
	phone: "tel:+923177748484",
	phoneDisplay: "+92 317 7748484",
	calendly: "https://calendly.com/sheikhanas1992/30min"
};
var ext = {
	target: "_blank",
	rel: "noopener noreferrer"
};
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-0 z-40 border-b border-white/[0.08] bg-[#0d0d0f]/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#EDE8E0]",
					children: "M. Anas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-8 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#work",
							className: "font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[#9a9a9e] transition-colors hover:text-[#EDE8E0]",
							children: "Work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#about",
							className: "font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[#9a9a9e] transition-colors hover:text-[#EDE8E0]",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#experience",
							className: "font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[#9a9a9e] transition-colors hover:text-[#EDE8E0]",
							children: "Experience"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/book",
					className: "rounded-full border border-white/[0.14] px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#EDE8E0] transition-colors hover:border-[#F5C542]/50 hover:text-[#F5C542]",
					children: "Book a call"
				})
			]
		})
	});
}
function ContactRow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: CONTACT.whatsapp,
				...ext,
				"aria-label": "Message Muhammad Anas on WhatsApp",
				className: "rounded-full border border-white/[0.14] px-5 py-2.5 font-mono text-[0.66rem] uppercase tracking-[0.13em] text-[#EDE8E0] transition-colors hover:border-[#F5C542]/60 hover:text-[#F5C542]",
				children: "WhatsApp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: CONTACT.email,
				"aria-label": "Email Muhammad Anas",
				className: "rounded-full border border-white/[0.14] px-5 py-2.5 font-mono text-[0.66rem] uppercase tracking-[0.13em] text-[#EDE8E0] transition-colors hover:border-[#F5C542]/60 hover:text-[#F5C542]",
				children: "Email"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: CONTACT.linkedin,
				...ext,
				"aria-label": "Muhammad Anas on LinkedIn",
				className: "rounded-full border border-white/[0.14] px-5 py-2.5 font-mono text-[0.66rem] uppercase tracking-[0.13em] text-[#EDE8E0] transition-colors hover:border-[#F5C542]/60 hover:text-[#F5C542]",
				children: "LinkedIn"
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mx-auto mt-24 flex max-w-[1100px] flex-col items-center gap-4 border-t border-white/[0.08] px-6 py-8 text-[0.72rem] text-[#7d7d82] md:flex-row md:justify-between md:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-mono uppercase tracking-[0.12em]",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Muhammad Anas"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-6 font-mono uppercase tracking-[0.12em]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/book",
					className: "transition-colors hover:text-[#EDE8E0]",
					children: "Book a call"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: CONTACT.linkedin,
					...ext,
					"aria-label": "Muhammad Anas on LinkedIn",
					className: "transition-colors hover:text-[#EDE8E0]",
					children: "LinkedIn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: CONTACT.whatsapp,
					...ext,
					"aria-label": "Message Muhammad Anas on WhatsApp",
					className: "transition-colors hover:text-[#EDE8E0]",
					children: "WhatsApp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: CONTACT.email,
					"aria-label": "Email Muhammad Anas",
					className: "transition-colors hover:text-[#EDE8E0]",
					children: "Email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: CONTACT.phone,
					"aria-label": "Call Muhammad Anas",
					className: "transition-colors hover:text-[#EDE8E0]",
					children: "Phone"
				})
			]
		})]
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#0d0d0f] text-[#EDE8E0] antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pt-28",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ContactRow as n, PageShell as r, CONTACT as t };
