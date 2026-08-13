import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduced;
}

export function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
}

/** Fades and lifts children into place once they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  distance = 20,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
  as?: "div" | "section" | "li";
}) {
  const { ref, seen } = useInViewOnce<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  const style: CSSProperties = {
    opacity: seen ? 1 : 0,
    transform: seen || reduced ? "none" : `translateY(${distance}px)`,
    transition: reduced
      ? "opacity 300ms linear"
      : `opacity 800ms ${delay}ms cubic-bezier(0.16,1,0.3,1), transform 800ms ${delay}ms cubic-bezier(0.16,1,0.3,1)`,
  };
  return (
    <Tag ref={ref as never} className={className} style={style}>
      {children}
    </Tag>
  );
}

/** Count-up figure. Monospace + tabular-nums, animates once on scroll into view. */
export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const { ref, seen } = useInViewOnce<HTMLSpanElement>();
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!seen) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1200, 1);
      setValue(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, reduced]);

  return (
    <span ref={ref} className={`font-mono tabular-nums ${className}`}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
