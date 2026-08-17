import { Link } from "@tanstack/react-router";
import type { ReactNode, SVGProps } from "react";
import { CONTACT } from "@/config/contact";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8.25h4.75V23H.5V8.25ZM8.5 8.25h4.55v2.01h.06c.63-1.2 2.18-2.47 4.49-2.47 4.8 0 5.7 3.16 5.7 7.27V23h-4.75v-6.98c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V23H8.5V8.25Z" />
    </svg>
  );
}

function GmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="2" y="4.5" width="20" height="15" rx="2" />
      <path d="M3 6.5 12 13 21 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.02 2C6.5 2 2.04 6.46 2.04 11.98c0 1.85.5 3.58 1.36 5.07L2 22l5.1-1.34a9.96 9.96 0 0 0 4.92 1.3h.01c5.52 0 9.98-4.46 9.98-9.98C21.99 6.46 17.54 2 12.02 2Zm5.86 14.13c-.25.7-1.24 1.28-2.03 1.45-.55.12-1.26.21-3.66-.78-2.98-1.24-4.9-4.26-5.05-4.46-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.25-.28.55-.35.73-.35s.37 0 .53.01c.17.01.4-.06.62.48.25.6.85 2.08.92 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.12.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.65-.15.27.1 1.7.8 1.99.95.3.15.5.22.57.35.07.13.07.75-.18 1.45Z" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.08] bg-[#0d0d0f]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a
          href="/"
          className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#EDE8E0]"
        >
          S. Anas
        </a>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/#work"
            className="rounded-full border border-white/[0.12] px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#d8d8dc] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F5C542]/50 hover:bg-[#F5C542]/[0.08] hover:text-[#F5C542]"
          >
            Work
          </a>
          <a
            href="/#about"
            className="rounded-full border border-white/[0.12] px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#d8d8dc] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F5C542]/50 hover:bg-[#F5C542]/[0.08] hover:text-[#F5C542]"
          >
            About
          </a>
          <a
            href="/#experience"
            className="rounded-full border border-white/[0.12] px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#d8d8dc] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F5C542]/50 hover:bg-[#F5C542]/[0.08] hover:text-[#F5C542]"
          >
            Experience
          </a>
          <Link
            to="/audit"
            className="rounded-full border border-white/[0.12] px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#d8d8dc] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F5C542]/50 hover:bg-[#F5C542]/[0.08] hover:text-[#F5C542]"
          >
            Get an audit
          </Link>
        </div>
        <Link
          to="/book"
          className="rounded-full bg-[#F5C542] px-5 py-2.5 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_4px_14px_-4px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.05] active:scale-[0.97]"
        >
          Book a call
        </Link>
      </nav>
    </header>
  );
}

export function ContactRow() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={CONTACT.whatsapp}
        {...ext}
        aria-label="Message Sheikh Anas on WhatsApp"
        className="rounded-full border border-white/[0.16] px-5 py-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-[#EDE8E0] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F5C542]/70 hover:bg-[#F5C542]/[0.08] hover:text-[#F5C542]"
      >
        WhatsApp
      </a>
      <a
        href={CONTACT.email}
        aria-label="Email Sheikh Anas"
        className="rounded-full border border-white/[0.16] px-5 py-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-[#EDE8E0] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F5C542]/70 hover:bg-[#F5C542]/[0.08] hover:text-[#F5C542]"
      >
        Email
      </a>
      <a
        href={CONTACT.linkedin}
        {...ext}
        aria-label="Sheikh Anas on LinkedIn"
        className="rounded-full border border-white/[0.16] px-5 py-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-[#EDE8E0] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F5C542]/70 hover:bg-[#F5C542]/[0.08] hover:text-[#F5C542]"
      >
        LinkedIn
      </a>
      <div className="ml-1 flex items-center gap-2.5">
        <a
          href={CONTACT.linkedin}
          {...ext}
          aria-label="Sheikh Anas on LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.16] text-[#c7c7cc] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F5C542]/60 hover:text-[#F5C542]"
        >
          <LinkedInIcon className="h-[16px] w-[16px]" />
        </a>
        <a
          href={CONTACT.email}
          aria-label="Email Sheikh Anas"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.16] text-[#c7c7cc] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F5C542]/60 hover:text-[#F5C542]"
        >
          <GmailIcon className="h-[17px] w-[17px]" />
        </a>
        <a
          href={CONTACT.whatsapp}
          {...ext}
          aria-label="Message Sheikh Anas on WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.16] text-[#c7c7cc] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F5C542]/60 hover:text-[#F5C542]"
        >
          <WhatsAppIcon className="h-[17px] w-[17px]" />
        </a>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 flex max-w-[1100px] flex-col items-center gap-4 border-t border-white/[0.1] px-6 py-10 text-[0.8rem] font-semibold text-[#c7c7cc] md:flex-row md:justify-between md:px-10">
      <span className="font-mono uppercase tracking-[0.12em] text-[#c7c7cc]">
        © {new Date().getFullYear()} Sheikh Anas
      </span>
      <div className="flex gap-6 font-mono uppercase tracking-[0.12em]">
        <a href={CONTACT.linkedin} {...ext} className="transition-colors hover:text-[#EDE8E0]">
          LinkedIn
        </a>
        <a href={CONTACT.email} className="transition-colors hover:text-[#EDE8E0]">
          Email
        </a>
        <a href={CONTACT.whatsapp} {...ext} className="transition-colors hover:text-[#EDE8E0]">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-[#EDE8E0] antialiased">
      <SiteHeader />
      <main className="pt-28">{children}</main>
      <SiteFooter />
    </div>
  );
}
