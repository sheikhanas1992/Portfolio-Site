import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as PageShell, t as CONTACT } from "./SiteChrome-BXKEnkdm.mjs";
import { n as Reveal } from "./CountUp-DQydTuNi.mjs";
import { n as WEB3FORMS_ACCESS_KEY, t as HONEYPOT_STYLE } from "./web3forms-oW45I0ia.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/audit-CZxC_Fpt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MARKETPLACES = [
	"US",
	"UK",
	"CA",
	"DE",
	"Other"
];
var REVENUE_RANGES = [
	"Under $10K",
	"$10K-$25K",
	"$25K-$50K",
	"$50K-$100K",
	"$100K+"
];
var PPC_SPEND_RANGES = [
	"Under $2K",
	"$2K-$5K",
	"$5K-$10K",
	"$10K-$25K",
	"$25K+"
];
var AUDIT_TYPES = [
	"PPC Audit",
	"Listing / Copywriting Audit",
	"Graphic / Creative Audit",
	"Full Amazon Account Audit"
];
var IMPROVEMENT_GOALS = [
	"Reduce ACOS / TACOS",
	"Increase Sales",
	"Improve Conversion Rate",
	"Reduce Wasted Ad Spend",
	"Improve Listing Conversion",
	"Improve Images / Graphics",
	"Overall Account Performance"
];
var CONTACT_METHODS = [
	"Email",
	"WhatsApp",
	"Both"
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
function FieldError({ message }) {
	if (!message) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		role: "alert",
		className: "mt-2 text-[0.85rem] font-semibold text-[#e08d74]",
		children: message
	});
}
var optionBase = "flex cursor-pointer items-center gap-3 rounded-[10px] border px-4 py-3.5 text-[0.92rem] font-medium transition-all duration-150";
var optionOn = "border-[#F5C542]/50 bg-[#F5C542]/[0.08] text-[#EDE8E0]";
var optionOff = "border-white/[0.12] bg-[#151517] text-[#c7c7cc] hover:border-white/[0.25] hover:bg-[#1a1a1d]";
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
function AuditForm() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [storeUrl, setStoreUrl] = (0, import_react.useState)("");
	const [marketplaces, setMarketplaces] = (0, import_react.useState)([]);
	const [category, setCategory] = (0, import_react.useState)("");
	const [asins, setAsins] = (0, import_react.useState)("");
	const [revenue, setRevenue] = (0, import_react.useState)("");
	const [ppcSpend, setPpcSpend] = (0, import_react.useState)("");
	const [auditTypes, setAuditTypes] = (0, import_react.useState)([]);
	const [improvements, setImprovements] = (0, import_react.useState)([]);
	const [otherImprovement, setOtherImprovement] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [contactMethod, setContactMethod] = (0, import_react.useState)("");
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
		if (!name.trim()) next.name = "Enter your name.";
		if (!email.trim()) next.email = "Enter your email address.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
		if (!company.trim()) next.company = "Enter your company or brand name.";
		if (!storeUrl.trim()) next.storeUrl = "Enter your Amazon store or brand URL.";
		if (marketplaces.length === 0) next.marketplaces = "Pick at least one Amazon marketplace.";
		if (!category.trim()) next.category = "Enter your product category.";
		if (!asins.trim()) next.asins = "Enter your number of ASINs.";
		if (auditTypes.length === 0) next.auditTypes = "Pick at least one thing you'd like audited.";
		if (!contactMethod) next.contactMethod = "Pick a preferred contact method.";
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
					subject: "New audit request from sheikhanas.com",
					from_name: "sheikhanas.com",
					botcheck: botcheckRef.current?.value ?? "",
					name,
					email,
					company,
					store_url: storeUrl,
					marketplaces: marketplaces.join(", "),
					category,
					number_of_asins: asins,
					monthly_revenue: revenue,
					monthly_ppc_spend: ppcSpend,
					audit_types: auditTypes.join(", "),
					improvement_goals: improvements.join(", "),
					other_improvement: otherImprovement,
					notes,
					preferred_contact_method: contactMethod
				})
			})).json().catch(() => null))?.success) setStatus("success");
			else setStatus("error");
		} catch {
			setStatus("error");
		}
	};
	if (status === "success") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		className: "mt-10 rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 text-center shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-live": "polite",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[1.4rem] font-bold text-[#EDE8E0]",
					children: "Got it. I'll be in touch within two working days."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]",
					children: "In the meantime, if you'd rather talk it through, you can book a call."
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
				value: "New audit request from sheikhanas.com",
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
				className: "rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNumber, { n: "1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[1.1rem] font-bold text-[#EDE8E0]",
						children: "Client information"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								required: true,
								children: "Name"
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								required: true,
								children: "Company / brand name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: `${inputClasses} ${errors.company ? inputErrorClasses : ""}`,
								value: company,
								onChange: (e) => {
									setCompany(e.target.value);
									clearError("company");
								},
								placeholder: "Brand name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.company })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								required: true,
								children: "Amazon store / brand URL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "url",
								className: `${inputClasses} ${errors.storeUrl ? inputErrorClasses : ""}`,
								value: storeUrl,
								onChange: (e) => {
									setStoreUrl(e.target.value);
									clearError("storeUrl");
								},
								placeholder: "https://amazon.com/stores/..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.storeUrl })
						] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 60,
				className: "rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNumber, { n: "2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[1.1rem] font-bold text-[#EDE8E0]",
							children: "Amazon account details"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								required: true,
								children: "Amazon marketplace"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxGrid, {
								options: MARKETPLACES,
								selected: marketplaces,
								onToggle: (v) => {
									setMarketplaces((s) => toggle(s, v));
									clearError("marketplaces");
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.marketplaces })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 grid gap-5 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								required: true,
								children: "Product category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: `${inputClasses} ${errors.category ? inputErrorClasses : ""}`,
								value: category,
								onChange: (e) => {
									setCategory(e.target.value);
									clearError("category");
								},
								placeholder: "e.g. Skincare, home, supplements"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.category })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								required: true,
								children: "Number of ASINs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: "1",
								className: `${inputClasses} ${errors.asins ? inputErrorClasses : ""}`,
								value: asins,
								onChange: (e) => {
									setAsins(e.target.value);
									clearError("asins");
								},
								placeholder: "e.g. 12"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.asins })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Monthly Amazon revenue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGrid, {
							name: "revenue",
							options: REVENUE_RANGES,
							selected: revenue,
							onChange: setRevenue
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Monthly PPC spend" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGrid, {
							name: "ppcSpend",
							options: PPC_SPEND_RANGES,
							selected: ppcSpend,
							onChange: setPpcSpend
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 90,
				className: "rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNumber, { n: "3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[1.1rem] font-bold text-[#EDE8E0]",
						children: "What would you like us to audit?"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxGrid, {
						options: AUDIT_TYPES,
						selected: auditTypes,
						onToggle: (v) => {
							setAuditTypes((s) => toggle(s, v));
							clearError("auditTypes");
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.auditTypes })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				className: "rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNumber, { n: "4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[1.1rem] font-bold text-[#EDE8E0]",
							children: "What would you like us to improve?"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxGrid, {
							options: IMPROVEMENT_GOALS,
							selected: improvements,
							onToggle: (v) => setImprovements((s) => toggle(s, v))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Other" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClasses,
							value: otherImprovement,
							onChange: (e) => setOtherImprovement(e.target.value),
							placeholder: "Anything not listed above"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 150,
				className: "rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNumber, { n: "5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[1.1rem] font-bold text-[#EDE8E0]",
						children: "Anything specific you want us to look at?"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: `${inputClasses} mt-7 min-h-[140px] resize-y`,
					value: notes,
					onChange: (e) => setNotes(e.target.value),
					placeholder: "Optional: tell me about a specific ASIN, campaign, or problem you keep running into."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 180,
				className: "rounded-[20px] border border-white/[0.1] bg-[#131315] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNumber, { n: "6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[1.1rem] font-bold text-[#EDE8E0]",
						children: "Preferred contact method"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGrid, {
						name: "contactMethod",
						options: CONTACT_METHODS,
						selected: contactMethod,
						onChange: (v) => {
							setContactMethod(v);
							clearError("contactMethod");
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.contactMethod })]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: status === "loading",
				className: "mt-2 self-start rounded-full bg-[#F5C542] px-9 py-[1.15rem] font-mono text-[0.82rem] font-bold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_8px_24px_-8px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.04] hover:shadow-[0_10px_28px_-6px_rgba(245,197,66,0.6)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100",
				children: status === "loading" ? "Submitting…" : "Request My Audit →"
			})
		]
	});
}
function AuditPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[900px] px-6 md:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-2 rounded-full border border-[#F5C542]/30 bg-[#F5C542]/[0.06] px-4 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#F5C542]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "h-1.5 w-1.5 rounded-full bg-[#F5C542]"
					}), "Free account audit"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 max-w-[20ch] text-[clamp(2.4rem,7vw,4.4rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#EDE8E0]",
					children: "Find out what's actually wrong with your account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-[62ch] text-[1.05rem] font-medium leading-relaxed text-[#c7c7cc]",
					children: "Most accounts I look at don't have a traffic problem. They have a structure problem: spend keeps climbing, ACOS drifts, and campaigns stop being a growth engine and start being a cost."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-[62ch] text-[1.05rem] font-medium leading-relaxed text-[#c7c7cc]",
					children: "Before I take on any account, I run a free audit so you know exactly what's working, what's wasting money, and what to fix first. No obligation to hire me afterward."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#request-form",
						className: "inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-8 py-4 font-mono text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_8px_24px_-8px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.04] hover:shadow-[0_10px_28px_-6px_rgba(245,197,66,0.6)] active:scale-[0.98]",
						children: ["Request an audit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: "→"
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-24 border-t border-white/[0.1] pt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "h-px w-6 bg-[#F5C542]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c7c7cc]",
						children: "What I actually look at"
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 sm:grid-cols-3",
					children: [
						{
							step: "01",
							title: "The structure",
							copy: "Campaign architecture, match types, duplication, and where the same keyword is competing against itself. Most wasted spend in an Amazon account is structural, not a bidding mistake, and it does not show up in a dashboard summary."
						},
						{
							step: "02",
							title: "The spend",
							copy: "Search term reports, bid history, placement data and budget caps. I separate spend that is genuinely unprofitable from spend that only looks unprofitable because it is being measured against the wrong target."
						},
						{
							step: "03",
							title: "The page it lands on",
							copy: "Titles, bullets, images, A+ content and featured offer share. A campaign cannot fix a listing that does not convert, so I read the pages alongside the ads rather than treating them as someone else's problem."
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 90,
						className: "group rounded-[20px] border border-white/[0.1] bg-[#151517] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#F5C542]/30 hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.6)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#F5C542]/[0.12] font-mono text-[0.78rem] font-bold text-[#F5C542] transition-colors group-hover:bg-[#F5C542]/[0.2]",
								children: s.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-[1.15rem] font-bold text-[#EDE8E0]",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[0.92rem] font-medium leading-relaxed text-[#c7c7cc]",
								children: s.copy
							})
						]
					}, s.step))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-24 border-t border-white/[0.1] pt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "h-px w-6 bg-[#F5C542]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c7c7cc]",
							children: "What you get back"
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-[62ch] text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]",
						children: "A written document, not a call and a verbal summary. It covers:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-4",
						children: [
							"What's working, and should be funded harder, with the numbers that prove it.",
							"What's costing you money, separated into what to stop now and what to restructure.",
							"What to fix first, in priority order, with the reasoning behind the sequence.",
							"What I'd need to know more about, because an honest audit says where the data ran out rather than guessing past it."
						].map((point, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[auto_1fr] gap-3 text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "mt-[0.6em] h-[3px] w-3 rounded-full bg-[#F5C542]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
							})
						}, point))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-[62ch] text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]",
						children: "You can act on it yourself, hand it to your current manager, or use it to decide whether to work with me. All three are fine."
					}) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-24 border-t border-white/[0.1] pt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "h-px w-6 bg-[#F5C542]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c7c7cc]",
							children: "What this isn't"
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-[62ch] text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]",
						children: "I will not tell you the account is broken if it isn't. If your PPC is already in good shape, the audit will say so, and it will say what I would do next rather than inventing a problem to solve."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-[62ch] text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]",
						children: "Free audits that always find a crisis are a sales tactic. This one is a read."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#request-form",
							className: "inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-8 py-4 font-mono text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_8px_24px_-8px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.04] hover:shadow-[0_10px_28px_-6px_rgba(245,197,66,0.6)] active:scale-[0.98]",
							children: ["Request an audit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								children: "→"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "request-form",
				className: "mt-24 scroll-mt-24 border-t border-white/[0.1] pt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "h-px w-6 bg-[#F5C542]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c7c7cc]",
							children: "Request your free audit"
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-[62ch] text-[0.98rem] font-medium leading-relaxed text-[#c7c7cc]",
						children: "Fill this in and it comes straight to me. I read every one myself and usually reply within a day or two."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditForm, {})
				]
			})
		]
	}) });
}
//#endregion
export { AuditPage as component };
