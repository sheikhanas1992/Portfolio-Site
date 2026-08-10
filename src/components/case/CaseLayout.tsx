import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";
import { DISCLOSURE_FOOTER } from "@/config/disclosure";

export function CaseHeader({
  label,
  period,
  headline,
}: {
  label: string;
  period: string;
  headline: string;
}) {
  return (
    <header className="mx-auto max-w-[1100px] px-6 md:px-10">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#F5C542]">
        {period}
      </p>
      <h1 className="mt-5 max-w-[22ch] text-[clamp(2rem,5.4vw,3.6rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#EDE8E0]">
        {headline}
      </h1>
      <p className="mt-5 max-w-[56ch] text-[1rem] leading-relaxed text-[#9a9a9e]">{label}</p>
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
    <section className="mx-auto mt-20 max-w-[1100px] px-6 md:px-10">
      <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#7d7d82]">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
      {caption && (
        <p className="mt-6 max-w-[70ch] text-[0.85rem] leading-relaxed text-[#7d7d82]">
          {caption}
        </p>
      )}
    </section>
  );
}

export function CaseFooter() {
  return (
    <section className="mx-auto mt-24 max-w-[1100px] px-6 md:px-10">
      <div className="rounded-[20px] border border-white/[0.08] bg-[#151517] p-8 text-center">
        <p className="text-[1.05rem] text-[#EDE8E0]">
          Want the version of this that applies to your account?
        </p>
        <Link
          to="/book"
          className="mt-6 inline-flex rounded-full border border-white/[0.14] px-7 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#EDE8E0] transition-colors hover:border-[#F5C542]/60 hover:text-[#F5C542]"
        >
          Book a call
        </Link>
      </div>
      <p className="mt-8 max-w-[70ch] text-[0.72rem] leading-relaxed text-[#5c5c61]">
        {DISCLOSURE_FOOTER}
      </p>
    </section>
  );
}

export function CasePage({ children }: { children: ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
