import { CountUp, useInViewOnce, usePrefersReducedMotion } from "@/components/CountUp";

export function MetricStrip({
  items,
}: {
  items: { label: string; value: string; countTo?: number; decimals?: number; prefix?: string; suffix?: string }[];
}) {
  return (
    <div className="mx-auto mt-14 grid max-w-[1100px] gap-px overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.06] px-0 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((m) => (
        <div key={m.label} className="bg-[#151517] p-6">
          <div className="font-mono text-[1.5rem] leading-none tabular-nums text-[#EDE8E0]">
            {m.countTo !== undefined ? (
              <CountUp
                to={m.countTo}
                decimals={m.decimals ?? 0}
                prefix={m.prefix ?? ""}
                suffix={m.suffix ?? ""}
              />
            ) : (
              m.value
            )}
          </div>
          <div className="mt-3 text-[0.62rem] uppercase tracking-[0.15em] text-[#7d7d82]">
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/** A raw screenshot, framed to match the rest of the case-page components. */
export function Screenshot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#151517]">
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
      {caption && (
        <figcaption className="border-t border-white/[0.08] px-6 py-4 text-[0.8rem] leading-relaxed text-[#7d7d82]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** A row of smaller screenshots side by side (product photography, etc.) */
export function ScreenshotRow({ items }: { items: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.src}
          className="overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#151517] p-4"
        >
          <img src={it.src} alt={it.alt} loading="lazy" className="mx-auto block max-h-[220px] w-auto" />
        </div>
      ))}
    </div>
  );
}

/** Horizontal bar that draws in via scaleX on entry. */
export function Bar({ label, pct, note }: { label: string; pct: number; note?: string }) {
  const { ref, seen } = useInViewOnce<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  return (
    <div ref={ref} className="py-4">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <span className="text-[0.95rem] text-[#EDE8E0]">{label}</span>
        <span className="font-mono text-[0.95rem] tabular-nums text-[#F5C542]">
          {note ?? <CountUp to={pct} decimals={1} suffix="%" />}
        </span>
      </div>
      <div className="mt-3 h-[6px] w-full overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className="h-full origin-left rounded-full bg-[#F5C542]"
          style={{
            transform: `scaleX(${seen ? Math.min(pct, 100) / 100 : 0})`,
            transition: reduced
              ? "opacity 200ms linear"
              : "transform 1100ms cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
    </div>
  );
}
