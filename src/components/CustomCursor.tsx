import { useEffect, useRef, useState } from "react";

/**
 * Pointer-only custom cursor: a 6px dot that tracks with no delay and a 34px
 * ring that follows with a spring lag, magnetically attracted to interactive
 * elements. Hand-rolled springs (no new dependency).
 *
 * Renders nothing on touch devices or under prefers-reduced-motion.
 */
const HOVER_SELECTOR = 'a, button, [data-cursor="hover"]';
const MAGNET_RADIUS = 60;
const MAGNET_STRENGTH = 0.35;

type Spring = { x: number; v: number };

function step(s: Spring, target: number, stiffness: number, damping: number, dt: number) {
  const a = stiffness * (target - s.x) - damping * s.v;
  s.v += a * dt;
  s.x += s.v * dt;
}

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setActive(fine && !reduced);
  }, []);

  useEffect(() => {
    if (!active) return;
    const root = document.documentElement;
    root.classList.add("custom-cursor-active");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringTarget = { ...target };
    const dot = { x: { x: target.x, v: 0 } as Spring, y: { x: target.y, v: 0 } as Spring };
    const ring = { x: { x: target.x, v: 0 } as Spring, y: { x: target.y, v: 0 } as Spring };
    const scale = { x: 1, v: 0 } as Spring;
    let hovering = false;
    let raf = 0;
    let last = performance.now();

    const onMove = (e: MouseEvent) => {
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

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
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

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[6px] w-[6px] rounded-full bg-white"
        style={{ mixBlendMode: "difference", transition: "opacity 150ms linear" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[34px] w-[34px] rounded-full border border-white/60"
        style={{ mixBlendMode: "difference" }}
      />
    </>
  );
}
