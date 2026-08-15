import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BywGaijp.js
var router_BywGaijp_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CSgAGudh.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
/**
* Pointer-only custom cursor: a 6px dot that tracks with no delay and a 34px
* ring that follows with a spring lag, magnetically attracted to interactive
* elements. Hand-rolled springs (no new dependency).
*
* Renders nothing on touch devices or under prefers-reduced-motion.
*/
var HOVER_SELECTOR = "a, button, [data-cursor=\"hover\"]";
var MAGNET_RADIUS = 60;
var MAGNET_STRENGTH = .35;
function step(s, target, stiffness, damping, dt) {
	const a = stiffness * (target - s.x) - damping * s.v;
	s.v += a * dt;
	s.x += s.v * dt;
}
function CustomCursor() {
	const [active, setActive] = (0, import_react.useState)(false);
	const dotRef = (0, import_react.useRef)(null);
	const ringRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		setActive(fine && !reduced);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		const root = document.documentElement;
		root.classList.add("custom-cursor-active");
		const target = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2
		};
		const ringTarget = { ...target };
		const dot = {
			x: {
				x: target.x,
				v: 0
			},
			y: {
				x: target.y,
				v: 0
			}
		};
		const ring = {
			x: {
				x: target.x,
				v: 0
			},
			y: {
				x: target.y,
				v: 0
			}
		};
		const scale = {
			x: 1,
			v: 0
		};
		let hovering = false;
		let raf = 0;
		let last = performance.now();
		const onMove = (e) => {
			target.x = e.clientX;
			target.y = e.clientY;
			ringTarget.x = e.clientX;
			ringTarget.y = e.clientY;
			const el = document.elementFromPoint(e.clientX, e.clientY);
			const interactive = el instanceof Element ? el.closest(HOVER_SELECTOR) : null;
			hovering = !!interactive;
			if (interactive) {
				const r = interactive.getBoundingClientRect();
				const cx = r.left + r.width / 2;
				const cy = r.top + r.height / 2;
				const dx = cx - e.clientX;
				const dy = cy - e.clientY;
				const dist = Math.hypot(dx, dy);
				if (dist < MAGNET_RADIUS) {
					const pull = MAGNET_STRENGTH * (1 - dist / MAGNET_RADIUS);
					ringTarget.x = e.clientX + dx * pull;
					ringTarget.y = e.clientY + dy * pull;
				}
			}
		};
		const tick = (now) => {
			const dt = Math.min((now - last) / 1e3, .05);
			last = now;
			step(dot.x, target.x, 300, 28, dt);
			step(dot.y, target.y, 300, 28, dt);
			step(ring.x, ringTarget.x, 120, 18, dt);
			step(ring.y, ringTarget.y, 120, 18, dt);
			step(scale, hovering ? 60 / 34 : 1, 220, 24, dt);
			if (dotRef.current) {
				dotRef.current.style.transform = `translate3d(${dot.x.x - 3}px, ${dot.y.x - 3}px, 0) scale(${hovering ? 0 : 1})`;
				dotRef.current.style.opacity = hovering ? "0" : "1";
			}
			if (ringRef.current) {
				ringRef.current.style.transform = `translate3d(${ring.x.x - 17}px, ${ring.y.x - 17}px, 0) scale(${scale.x})`;
				ringRef.current.style.borderColor = hovering ? "#ffffff" : "rgba(255,255,255,0.6)";
			}
			raf = requestAnimationFrame(tick);
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		raf = requestAnimationFrame(tick);
		return () => {
			window.removeEventListener("mousemove", onMove);
			cancelAnimationFrame(raf);
			root.classList.remove("custom-cursor-active");
		};
	}, [active]);
	if (!active) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dotRef,
		"aria-hidden": true,
		className: "pointer-events-none fixed left-0 top-0 z-[9999] h-[6px] w-[6px] rounded-full bg-white",
		style: {
			mixBlendMode: "difference",
			transition: "opacity 150ms linear"
		}
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: ringRef,
		"aria-hidden": true,
		className: "pointer-events-none fixed left-0 top-0 z-[9999] h-[34px] w-[34px] rounded-full border border-white/60",
		style: { mixBlendMode: "difference" }
	})] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.svg",
			type: "image/svg+xml"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-CmBOOpbJ.mjs");
var TITLE$5 = "Sheikh Anas: Amazon PPC Management for 6 to 8 Figure Brands";
var DESCRIPTION$5 = "Amazon PPC management and account scaling for 6 to 8 figure brands. Campaign structure, ACOS control and profitable growth.";
var Route$5 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: TITLE$5 },
			{
				name: "description",
				content: DESCRIPTION$5
			},
			{
				property: "og:title",
				content: TITLE$5
			},
			{
				property: "og:description",
				content: DESCRIPTION$5
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#0d0d0f"
			}
		],
		links: [{
			rel: "stylesheet",
			href: "/assets/index-BJkMaPo7.css"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./audit-BLE9r0d6.mjs");
var TITLE$4 = "Free Amazon account audit: Sheikh Anas";
var DESCRIPTION$4 = "Request a free Amazon PPC, listing, creative or full account audit. Tell me about your account and I'll tell you what I see in it.";
var Route$4 = createFileRoute("/audit")({
	head: () => ({ meta: [
		{ title: TITLE$4 },
		{
			name: "description",
			content: DESCRIPTION$4
		},
		{
			property: "og:title",
			content: TITLE$4
		},
		{
			property: "og:description",
			content: DESCRIPTION$4
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./book-CrxthBBV.mjs");
var TITLE$3 = "Book a call: Sheikh Anas, Amazon PPC";
var DESCRIPTION$3 = "Book a twenty-minute call about Amazon PPC, account structure and profitable scaling.";
var Route$3 = createFileRoute("/book")({
	head: () => ({ meta: [
		{ title: TITLE$3 },
		{
			name: "description",
			content: DESCRIPTION$3
		},
		{
			property: "og:title",
			content: TITLE$3
		},
		{
			property: "og:description",
			content: DESCRIPTION$3
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./work.ceiling-and-efficiency-rlruN86Y.mjs");
var TITLE$2 = "Ceiling and efficiency: an efficient account capped by its own budget";
var DESCRIPTION$2 = "A twelve-month Amazon growth read on a smaller skincare account where most campaigns were profitable and running out of daily budget before the day ended.";
var Route$2 = createFileRoute("/work/ceiling-and-efficiency")({
	head: () => ({ meta: [
		{ title: TITLE$2 },
		{
			name: "description",
			content: DESCRIPTION$2
		},
		{
			property: "og:title",
			content: TITLE$2
		},
		{
			property: "og:description",
			content: DESCRIPTION$2
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./work.promotion-and-exposure-BeEkWhfA.mjs");
var TITLE$1 = "Promotion and exposure: 42% growth, and where it came from";
var DESCRIPTION$1 = "A twelve-month Amazon growth read on a skincare account where a single promotional event and a celebrity awareness campaign both did their jobs, at very different costs.";
var Route$1 = createFileRoute("/work/promotion-and-exposure")({
	head: () => ({ meta: [
		{ title: TITLE$1 },
		{
			name: "description",
			content: DESCRIPTION$1
		},
		{
			property: "og:title",
			content: TITLE$1
		},
		{
			property: "og:description",
			content: DESCRIPTION$1
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./work.scale-and-concentration-BEpUyvlT.mjs");
var TITLE = "Scale and concentration: a 10.4× revenue year, and its risk";
var DESCRIPTION = "A twelve-month Amazon growth read on a skincare account that grew 10.4× while three SKUs carried most of the revenue.";
var Route = createFileRoute("/work/scale-and-concentration")({
	head: () => ({ meta: [
		{ title: TITLE },
		{
			name: "description",
			content: DESCRIPTION
		},
		{
			property: "og:title",
			content: TITLE
		},
		{
			property: "og:description",
			content: DESCRIPTION
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AuditRoute: Route$4.update({
		id: "/audit",
		path: "/audit",
		getParentRoute: () => Route$6
	}),
	BookRoute: Route$3.update({
		id: "/book",
		path: "/book",
		getParentRoute: () => Route$6
	}),
	WorkCeilingAndEfficiencyRoute: Route$2.update({
		id: "/work/ceiling-and-efficiency",
		path: "/work/ceiling-and-efficiency",
		getParentRoute: () => Route$6
	}),
	WorkPromotionAndExposureRoute: Route$1.update({
		id: "/work/promotion-and-exposure",
		path: "/work/promotion-and-exposure",
		getParentRoute: () => Route$6
	}),
	WorkScaleAndConcentrationRoute: Route.update({
		id: "/work/scale-and-concentration",
		path: "/work/scale-and-concentration",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter, router_BywGaijp_exports as t };
