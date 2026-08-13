import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as PageShell, t as CONTACT } from "./SiteChrome-ChobPlJu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/audit-C_XukcP5.js
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
		className: "block text-[0.95rem] font-medium text-[#EDE8E0]",
		children: [children, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-1 text-[#F5C542]",
			children: "*"
		})]
	});
}
var inputClasses = "mt-2.5 w-full rounded-[12px] border border-white/[0.14] bg-[#151517] px-4 py-3 text-[0.95rem] text-[#EDE8E0] outline-none transition-colors placeholder:text-[#5c5c61] focus:border-[#F5C542]/60";
function CheckboxGrid({ options, selected, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 grid gap-2.5 sm:grid-cols-2",
		children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "flex cursor-pointer items-center gap-3 rounded-[10px] border border-white/[0.1] bg-[#151517] px-4 py-3 text-[0.9rem] font-medium text-[#b4b4b8] transition-colors hover:border-white/[0.22]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				checked: selected.includes(opt),
				onChange: () => onToggle(opt),
				className: "h-4 w-4 accent-[#F5C542]"
			}), opt]
		}, opt))
	});
}
function RadioGrid({ name, options, selected, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 grid gap-2.5 sm:grid-cols-2",
		children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "flex cursor-pointer items-center gap-3 rounded-[10px] border border-white/[0.1] bg-[#151517] px-4 py-3 text-[0.9rem] font-medium text-[#b4b4b8] transition-colors hover:border-white/[0.22]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "radio",
				name,
				checked: selected === opt,
				onChange: () => onChange(opt),
				className: "h-4 w-4 accent-[#F5C542]"
			}), opt]
		}, opt))
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
	const [error, setError] = (0, import_react.useState)("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email || !company || !storeUrl) {
			setError("Fill in your name, email, brand name and store URL first.");
			return;
		}
		if (marketplaces.length === 0) {
			setError("Pick at least one Amazon marketplace.");
			return;
		}
		if (!category || !asins) {
			setError("Add your product category and number of ASINs.");
			return;
		}
		if (auditTypes.length === 0) {
			setError("Pick at least one thing you'd like audited.");
			return;
		}
		if (!contactMethod) {
			setError("Pick a preferred contact method.");
			return;
		}
		setError("");
		const lines = [
			`Name: ${name}`,
			`Email: ${email}`,
			`Company / Brand name: ${company}`,
			`Amazon store / brand URL: ${storeUrl}`,
			"",
			`Amazon marketplace(s): ${marketplaces.join(", ")}`,
			`Product category: ${category}`,
			`Number of ASINs: ${asins}`,
			revenue && `Monthly Amazon revenue: ${revenue}`,
			ppcSpend && `Monthly PPC spend: ${ppcSpend}`,
			"",
			`Audit(s) requested: ${auditTypes.join(", ")}`,
			improvements.length > 0 && `Improvement goals: ${improvements.join(", ")}${otherImprovement ? `, Other: ${otherImprovement}` : ""}`,
			"",
			notes && `Anything specific to look at:\n${notes}`,
			"",
			`Preferred contact method: ${contactMethod}`
		].filter(Boolean);
		const subject = encodeURIComponent(`Amazon audit request: ${company}`);
		const body = encodeURIComponent(lines.join("\n"));
		window.location.href = `mailto:${CONTACT.emailAddress}?subject=${subject}&body=${body}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "mt-10 flex flex-col gap-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#131315] p-7 md:p-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#F5C542]",
					children: "1. Client information"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							required: true,
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClasses,
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Your name"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							required: true,
							children: "Email address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							className: inputClasses,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "you@brand.com"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							required: true,
							children: "Company / brand name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClasses,
							value: company,
							onChange: (e) => setCompany(e.target.value),
							placeholder: "Brand name"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							required: true,
							children: "Amazon store / brand URL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "url",
							className: inputClasses,
							value: storeUrl,
							onChange: (e) => setStoreUrl(e.target.value),
							placeholder: "https://amazon.com/stores/..."
						})] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#131315] p-7 md:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#F5C542]",
						children: "2. Amazon account details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							required: true,
							children: "Amazon marketplace"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxGrid, {
							options: MARKETPLACES,
							selected: marketplaces,
							onToggle: (v) => setMarketplaces((s) => toggle(s, v))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 grid gap-5 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							required: true,
							children: "Product category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClasses,
							value: category,
							onChange: (e) => setCategory(e.target.value),
							placeholder: "e.g. Skincare, home, supplements"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							required: true,
							children: "Number of ASINs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: "1",
							className: inputClasses,
							value: asins,
							onChange: (e) => setAsins(e.target.value),
							placeholder: "e.g. 12"
						})] })]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#131315] p-7 md:p-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#F5C542]",
					children: "3. What would you like us to audit?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxGrid, {
					options: AUDIT_TYPES,
					selected: auditTypes,
					onToggle: (v) => setAuditTypes((s) => toggle(s, v))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#131315] p-7 md:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#F5C542]",
						children: "4. What would you like us to improve?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxGrid, {
						options: IMPROVEMENT_GOALS,
						selected: improvements,
						onToggle: (v) => setImprovements((s) => toggle(s, v))
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#131315] p-7 md:p-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#F5C542]",
					children: "5. Anything specific you want us to look at?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: `${inputClasses} min-h-[140px] resize-y`,
					value: notes,
					onChange: (e) => setNotes(e.target.value),
					placeholder: "Optional: tell me about a specific ASIN, campaign, or problem you keep running into."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[20px] border border-white/[0.08] bg-[#131315] p-7 md:p-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#F5C542]",
					children: "6. Preferred contact method"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGrid, {
					name: "contactMethod",
					options: CONTACT_METHODS,
					selected: contactMethod,
					onChange: setContactMethod
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-[12px] border border-[#e08d74]/30 bg-[#e08d74]/[0.08] px-5 py-3 text-[0.9rem] font-medium text-[#e08d74]",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "self-start rounded-full bg-[#F5C542] px-8 py-4 font-mono text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[#0d0d0f] transition-opacity hover:opacity-85",
				children: "Request My Audit"
			})
		]
	});
}
function AuditPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[900px] px-6 md:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#F5C542]",
				children: "Free account audit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 max-w-[20ch] text-[clamp(2.4rem,7vw,4.4rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#EDE8E0]",
				children: "Find out what's actually wrong with your account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-[62ch] text-[1.02rem] font-medium leading-relaxed text-[#b4b4b8]",
				children: "Most accounts I look at don't have a traffic problem. They have a structure problem: spend keeps climbing, ACOS drifts, and campaigns stop being a growth engine and start being a cost. Before I take on any account, I run a free audit so you know exactly what's working, what's wasting money, and what to fix first, with no obligation to hire me afterward."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#request-form",
					className: "inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-7 py-3.5 font-mono text-[0.74rem] font-medium uppercase tracking-[0.14em] text-[#0d0d0f] transition-opacity hover:opacity-85",
					children: "Request a audit"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 border-t border-white/[0.08] pt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#7d7d82]",
						children: "How I audit an account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 sm:grid-cols-3",
						children: [
							{
								step: "01",
								title: "Audit",
								copy: "I go through campaign structure, search-term reports, bid history, listing content and creative, and flag exactly where spend is being wasted and where it's under-funded."
							},
							{
								step: "02",
								title: "Fix",
								copy: "Restructure campaigns, rebuild negative targeting, correct bid logic, and fix the listing and creative issues that are capping conversion before spend goes up."
							},
							{
								step: "03",
								title: "Scale",
								copy: "Once ACOS and TACOS are stable, reallocate budget toward what's proven to convert and expand into new targeting with a system, not guesswork."
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[20px] border border-white/[0.08] bg-[#151517] p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[0.7rem] text-[#F5C542]",
									children: s.step
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-[1.05rem] font-semibold text-[#EDE8E0]",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[0.9rem] font-medium leading-relaxed text-[#b4b4b8]",
									children: s.copy
								})
							]
						}, s.step))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-[62ch] text-[0.95rem] font-medium leading-relaxed text-[#b4b4b8]",
						children: "The audit itself covers PPC, listing copy, creative and overall account health, depending on what you ask for below. You'll get a clear read on ACOS control, TACOS stability and where the account's biggest opportunities actually are."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "request-form",
				className: "mt-20 scroll-mt-24 border-t border-white/[0.08] pt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#7d7d82]",
						children: "Request your free audit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-[62ch] text-[0.95rem] font-medium leading-relaxed text-[#b4b4b8]",
						children: "Fill this in and it opens a pre-filled email to me. I read every one myself and usually reply within a day or two."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditForm, {})
				]
			})
		]
	}) });
}
//#endregion
export { AuditPage as component };
