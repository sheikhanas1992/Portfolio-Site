import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as PageShell, t as CONTACT } from "./SiteChrome-z50K_qlG.mjs";
import { n as Reveal } from "./CountUp-DQydTuNi.mjs";
import { n as WEB3FORMS_ACCESS_KEY, t as HONEYPOT_STYLE } from "./web3forms-oW45I0ia.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/build-BHhX-QXj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NEEDS = [
	"Product Photography",
	"Full Listing Creatives",
	"Product Videography",
	"A+ Content",
	"Main Image Split Testing",
	"Copywriting",
	"3D Rendering",
	"PPC Management",
	"Other"
];
var PRODUCT_COUNTS = [
	"Brand new, I have not launched yet",
	"1 to 2",
	"3 to 9",
	"10 to 50",
	"50+"
];
var BUDGETS = [
	"$1,000 to $2,000",
	"$2,000 to $4,000",
	"$4,000 to $10,000",
	"$10,000+",
	"Not sure, I need guidance"
];
var COUNTRY_CODES = [
	{
		code: "+1",
		label: "+1 (US/CA)"
	},
	{
		code: "+44",
		label: "+44 (UK)"
	},
	{
		code: "+971",
		label: "+971 (UAE)"
	},
	{
		code: "+61",
		label: "+61 (AU)"
	},
	{
		code: "+92",
		label: "+92 (PK)"
	},
	{
		code: "+91",
		label: "+91 (IN)"
	},
	{
		code: "+49",
		label: "+49 (DE)"
	}
];
function toggle(list, value) {
	return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}
function FieldLabel({ children, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-[0.98rem] font-semibold text-[#EDE8E0]",
		children: [children, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-1 text-[#F5C542]",
			children: "*"
		})]
	});
}
var inputClasses = "mt-2.5 w-full rounded-[12px] border border-white/[0.16] bg-[#151517] px-4 py-3.5 text-[0.95rem] font-medium text-[#EDE8E0] outline-none transition-colors placeholder:text-[#5c5c61] focus:border-[#F5C542]/60 focus:bg-[#1a1a1d]";
var inputErrorClasses = "border-[#e08d74]/60 focus:border-[#e08d74]/60";
var optionBase = "flex cursor-pointer items-center gap-3 rounded-[10px] border px-4 py-3.5 text-[0.92rem] font-medium transition-all duration-150";
var optionOn = "border-[#F5C542]/50 bg-[#F5C542]/[0.08] text-[#EDE8E0]";
var optionOff = "border-white/[0.12] bg-[#151517] text-[#c7c7cc] hover:border-white/[0.25] hover:bg-[#1a1a1d]";
function FieldError({ message }) {
	if (!message) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		role: "alert",
		className: "mt-2 text-[0.85rem] font-semibold text-[#e08d74]",
		children: message
	});
}
function CheckboxGrid({ options, selected, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 grid gap-2.5 sm:grid-cols-2",
		children: options.map((opt) => {
			const on = selected.includes(opt);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: `${optionBase} ${on ? optionOn : optionOff}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: on,
					onChange: () => onToggle(opt),
					className: "h-4 w-4 accent-[#F5C542]"
				}), opt]
			}, opt);
		})
	});
}
function RadioGrid({ name, options, selected, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 grid gap-2.5 sm:grid-cols-2",
		children: options.map((opt) => {
			const on = selected === opt;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: `${optionBase} ${on ? optionOn : optionOff}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "radio",
					name,
					checked: on,
					onChange: () => onChange(opt),
					className: "h-4 w-4 accent-[#F5C542]"
				}), opt]
			}, opt);
		})
	});
}
function StepNumber({ n }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#F5C542]/[0.12] font-mono text-[0.8rem] font-bold text-[#F5C542]",
		children: n
	});
}
var CARD_CLASSES = "rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9";
function BuildForm() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [countryCode, setCountryCode] = (0, import_react.useState)("+1");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [needs, setNeeds] = (0, import_react.useState)([]);
	const [otherNeed, setOtherNeed] = (0, import_react.useState)("");
	const [productCount, setProductCount] = (0, import_react.useState)("");
	const [asinOrUrl, setAsinOrUrl] = (0, import_react.useState)("");
	const [budget, setBudget] = (0, import_react.useState)("");
	const [comments, setComments] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const botcheckRef = (0, import_react.useRef)(null);
	const clearError = (field) => {
		setErrors((prev) => {
			if (!prev[field]) return prev;
			const next = { ...prev };
			delete next[field];
			return next;
		});
	};
	const validate = () => {
		const next = {};
		if (!name.trim()) next.name = "Enter your full name.";
		if (!email.trim()) next.email = "Enter your email address.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
		if (needs.length === 0) next.needs = "Select at least one option.";
		if (!productCount) next.productCount = "Pick one option.";
		if (!budget) next.budget = "Pick one option.";
		return next;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const foundErrors = validate();
		setErrors(foundErrors);
		if (Object.keys(foundErrors).length > 0) return;
		setStatus("loading");
		try {
			if ((await (await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					access_key: "d9b522b9-b4f8-482d-affc-d55accae0054",
					subject: "New custom package request from sheikhanas.com",
					from_name: "sheikhanas.com",
					botcheck: botcheckRef.current?.value ?? "",
					name,
					email,
					phone: phone ? `${countryCode} ${phone}` : "",
					needs: needs.join(", "),
					other_need: needs.includes("Other") ? otherNeed : "",
					product_count: productCount,
					asin_or_url: asinOrUrl,
					budget,
					comments
				})
			})).json().catch(() => null))?.success) setStatus("success");
			else setStatus("error");
		} catch {
			setStatus("error");
		}
	};
	if (status === "success") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		className: `${CARD_CLASSES} text-center`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-live": "polite",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[1.4rem] font-bold text-[#EDE8E0]",
					children: "Got it. I'll come back with scope and pricing within two working days."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]",
					children: "If you'd rather talk it through first, you can book a call."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: CONTACT.calendly,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-8 py-4 font-mono text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_8px_24px_-8px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]",
					children: ["Book a call", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "→"
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "mt-10 flex flex-col gap-6",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				name: "access_key",
				value: WEB3FORMS_ACCESS_KEY,
				readOnly: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				name: "subject",
				value: "New custom package request from sheikhanas.com",
				readOnly: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				name: "from_name",
				value: "sheikhanas.com",
				readOnly: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "text",
				name: "botcheck",
				ref: botcheckRef,
				tabIndex: -1,
				autoComplete: "off",
				"aria-hidden": "true",
				style: HONEYPOT_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: CARD_CLASSES,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNumber, { n: "1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[1.1rem] font-bold text-[#EDE8E0]",
						children: "Your details"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								required: true,
								children: "Full name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: `${inputClasses} ${errors.name ? inputErrorClasses : ""}`,
								value: name,
								onChange: (e) => {
									setName(e.target.value);
									clearError("name");
								},
								placeholder: "Your name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.name })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								required: true,
								children: "Email address"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								className: `${inputClasses} ${errors.email ? inputErrorClasses : ""}`,
								value: email,
								onChange: (e) => {
									setEmail(e.target.value);
									clearError("email");
								},
								placeholder: "you@brand.com"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.email })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Phone number" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2.5 flex gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: countryCode,
									onChange: (e) => setCountryCode(e.target.value),
									className: "w-[7.5rem] shrink-0 rounded-[12px] border border-white/[0.16] bg-[#151517] px-3 py-3.5 text-[0.9rem] font-medium text-[#EDE8E0] outline-none transition-colors focus:border-[#F5C542]/60",
									children: COUNTRY_CODES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c.code,
										children: c.label
									}, c.code))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "tel",
									className: `${inputClasses} mt-0`,
									value: phone,
									onChange: (e) => setPhone(e.target.value),
									placeholder: "Optional"
								})]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 60,
				className: CARD_CLASSES,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNumber, { n: "2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[1.1rem] font-bold text-[#EDE8E0]",
							children: "What do you need?"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[0.88rem] font-medium text-[#9a9a9e]",
						children: "Select as many as apply."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxGrid, {
						options: NEEDS,
						selected: needs,
						onToggle: (v) => {
							setNeeds((s) => toggle(s, v));
							clearError("needs");
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.needs }),
					needs.includes("Other") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Tell me what else you need" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClasses,
							value: otherNeed,
							onChange: (e) => setOtherNeed(e.target.value),
							placeholder: "Anything not listed above"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 90,
				className: CARD_CLASSES,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNumber, { n: "3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[1.1rem] font-bold text-[#EDE8E0]",
						children: "Where are you now?"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							required: true,
							children: "How many products do you have?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGrid, {
							name: "productCount",
							options: PRODUCT_COUNTS,
							selected: productCount,
							onChange: (v) => {
								setProductCount(v);
								clearError("productCount");
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.productCount })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				className: CARD_CLASSES,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNumber, { n: "4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[1.1rem] font-bold text-[#EDE8E0]",
						children: "Your ASIN or a competitor's"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Can you share your ASIN or URL, or a competitor's?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClasses,
							value: asinOrUrl,
							onChange: (e) => setAsinOrUrl(e.target.value),
							placeholder: "ASIN, Amazon URL, or a competitor's link"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2.5 text-[0.85rem] font-medium text-[#9a9a9e]",
							children: "If you're not live yet, a competitor's link works just as well."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 150,
				className: CARD_CLASSES,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNumber, { n: "5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[1.1rem] font-bold text-[#EDE8E0]",
						children: "Budget"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							required: true,
							children: "What is your budget for this project?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGrid, {
							name: "budget",
							options: BUDGETS,
							selected: budget,
							onChange: (v) => {
								setBudget(v);
								clearError("budget");
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.budget })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 180,
				className: CARD_CLASSES,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNumber, { n: "6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[1.1rem] font-bold text-[#EDE8E0]",
						children: "Additional comments"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Anything else I should know?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: `${inputClasses} min-h-[140px] resize-y`,
						value: comments,
						onChange: (e) => setComments(e.target.value),
						placeholder: "Optional"
					})]
				})]
			}),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				role: "alert",
				"aria-live": "polite",
				className: "rounded-[12px] border border-[#e08d74]/30 bg-[#e08d74]/[0.08] px-5 py-4 text-[0.95rem] font-semibold text-[#e08d74]",
				children: [
					"Something went wrong. Please try again, or email",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:ceo@cubifai.com",
						className: "underline decoration-[#e08d74]/50 underline-offset-2",
						children: "ceo@cubifai.com"
					}),
					" ",
					"directly."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-col items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: status === "loading",
					className: "self-start rounded-full bg-[#F5C542] px-9 py-[1.15rem] font-mono text-[0.82rem] font-bold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_8px_24px_-8px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.04] hover:shadow-[0_10px_28px_-6px_rgba(245,197,66,0.6)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100",
					children: status === "loading" ? "Submitting…" : "Submit →"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[0.92rem] font-medium text-[#c7c7cc]",
					children: [
						"Would rather talk first?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: CONTACT.calendly,
							target: "_blank",
							rel: "noreferrer",
							className: "font-semibold text-[#F5C542] underline decoration-[#F5C542]/40 underline-offset-4 transition-colors hover:text-[#EDE8E0]",
							children: "Book a call →"
						})
					]
				})]
			})
		]
	});
}
function BuildPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[900px] px-6 md:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "inline-flex items-center gap-2 rounded-full border border-[#F5C542]/30 bg-[#F5C542]/[0.06] px-4 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#F5C542]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "h-1.5 w-1.5 rounded-full bg-[#F5C542]"
				}), "Build your own package"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 max-w-[20ch] text-[clamp(2.4rem,7vw,4.4rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#EDE8E0]",
				children: "Let's build your package"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-[62ch] text-[1.05rem] font-medium leading-relaxed text-[#c7c7cc]",
				children: "Tell me what you need and what you've already got covered. I'll come back with scope and pricing, usually within two working days."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildForm, {})]
	}) });
}
//#endregion
export { BuildPage as component };
