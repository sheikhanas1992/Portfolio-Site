import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";
import { Reveal } from "@/components/CountUp";
import { DISCLOSURE_FOOTER } from "@/config/disclosure";

export function CaseHeader({
  label,
  period,
  headline,
  note,
}: {
  label: string;
  period: string;
  headline: string;
  note?: string;
}) {
  return (
    <header className="mx-auto max-w-[1100px] px-6 md:px-10">
      <Reveal>
        <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#F5C542]">
          {period}
        </p>
        <h1 className="mt-5 max-w-[22ch] text-[clamp(2rem,5.4vw,3.6rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#EDE8E0]">
          {headline}
        </h1>
        <p className="mt-5 max-w-[56ch] text-[1.05rem] font-medium leading-relaxed text-[#b4b4b8]">
          {label}
        </p>
        {note && (
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 font-mono text-[0.66rem] font-medium uppercase tracking-[0.12em] text-[#9a9a9e]">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#F5C542]" />
            {note}
          </p>
        )}
      </Reveal>
    </header>
  );
}

export function Section({
  title,
  caption,
  children,
}: {
  title: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section" className="mx-auto mt-14 max-w-[1100px] px-6 md:px-10">
      <div className="rounded-[24px] border border-white/[0.09] bg-[#111113] p-6 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] md:p-9">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-6 bg-[#F5C542]" />
          <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c7c7cc]">
            {title}
          </h2>
        </div>
        <div className="mt-7">{children}</div>
        {caption && (
          <p className="mt-7 max-w-[70ch] border-t border-white/[0.07] pt-6 text-[0.9rem] font-medium leading-relaxed text-[#9a9a9e]">
            {caption}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export function CaseFooter() {
  return (
    <Reveal as="section" className="mx-auto mt-16 max-w-[1100px] px-6 md:px-10">
      <div className="relative overflow-hidden rounded-[24px] border border-[#F5C542]/25 bg-gradient-to-b from-[#1a1712] to-[#151517] p-8 text-center md:p-12">
        <p className="text-[1.3rem] font-bold leading-snug text-[#EDE8E0] md:text-[1.5rem]">
          Want the version of this that applies to your account?
        </p>
        <p className="mx-auto mt-3 max-w-[46ch] text-[0.95rem] font-medium text-[#b4b4b8]">
          Twenty minutes, no pitch deck. Send me the account and I'll tell you what I'd look at first.
        </p>
        <Link
          to="/book"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-8 py-4 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_8px_24px_-8px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.04] hover:shadow-[0_10px_28px_-6px_rgba(245,197,66,0.6)] active:scale-[0.98]"
        >
          Book a call
          <span aria-hidden>→</span>
        </Link>
      </div>
      <p className="mt-8 max-w-[70ch] text-[0.78rem] font-medium leading-relaxed text-[#7d7d82]">
        {DISCLOSURE_FOOTER}
      </p>
    </Reveal>
  );
}

export function CasePage({ children }: { children: ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
