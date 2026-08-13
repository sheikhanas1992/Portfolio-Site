import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CountUp-DQydTuNi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	}, []);
	return reduced;
}
function useInViewOnce() {
	const ref = (0, import_react.useRef)(null);
	const [seen, setSeen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || seen) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setSeen(true);
				io.disconnect();
			}
		}, { threshold: .25 });
		io.observe(el);
		return () => io.disconnect();
	}, [seen]);
	return {
		ref,
		seen
	};
}
/** Fades and lifts children into place once they scroll into view. */
function Reveal({ children, delay = 0, distance = 20, className = "", as: Tag = "div" }) {
	const { ref, seen } = useInViewOnce();
	const reduced = usePrefersReducedMotion();
	const style = {
		opacity: seen ? 1 : 0,
		transform: seen || reduced ? "none" : `translateY(${distance}px)`,
		transition: reduced ? "opacity 300ms linear" : `opacity 800ms ${delay}ms cubic-bezier(0.16,1,0.3,1), transform 800ms ${delay}ms cubic-bezier(0.16,1,0.3,1)`
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className,
		style,
		children
	});
}
/** Count-up figure. Monospace + tabular-nums, animates once on scroll into view. */
function CountUp({ to, decimals = 0, prefix = "", suffix = "", className = "" }) {
	const { ref, seen } = useInViewOnce();
	const reduced = usePrefersReducedMotion();
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!seen) return;
		if (reduced) {
			setValue(to);
			return;
		}
		let raf = 0;
		const start = performance.now();
		const tick = (now) => {
			const p = Math.min((now - start) / 1200, 1);
			setValue(to * (1 - Math.pow(1 - p, 3)));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		seen,
		to,
		reduced
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: `font-mono tabular-nums ${className}`,
		children: [
			prefix,
			value.toFixed(decimals),
			suffix
		]
	});
}
//#endregion
export { usePrefersReducedMotion as i, Reveal as n, useInViewOnce as r, CountUp as t };
