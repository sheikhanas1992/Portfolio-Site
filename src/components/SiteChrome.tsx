import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { CONTACT } from "@/config/contact";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.08] bg-[#0d0d0f]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a
          href="/"
          className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#EDE8E0]"
        >
          M. Anas
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/#work"
            className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[#9a9a9e] transition-colors hover:text-[#EDE8E0]"
          >
            Work
          </a>
          <a
            href="/#about"
            className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[#9a9a9e] transition-colors hover:text-[#EDE8E0]"
          >
            About
          </a>
          <a
            href="/#experience"
            className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[#9a9a9e] transition-colors hover:text-[#EDE8E0]"
          >
            Experience
          </a>
        </div>
        <Link
          to="/book"
          className="rounded-full border border-white/[0.14] px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#EDE8E0] transition-colors hover:border-[#F5C542]/50 hover:text-[#F5C542]"
        >
          Book a call
        </Link>
      </nav>
    </header>
  );
}

export function ContactRow() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={CONTACT.whatsapp}
        {...ext}
        aria-label="Message Muhammad Anas on WhatsApp"
        className="rounded-full border border-white/[0.14] px-5 py-2.5 font-mono text-[0.66rem] uppercase tracking-[0.13em] text-[#EDE8E0] transition-colors hover:border-[#F5C542]/60 hover:text-[#F5C542]"
      >
        WhatsApp
      </a>
      <a
        href={CONTACT.email}
        aria-label="Email Muhammad Anas"
        className="rounded-full border border-white/[0.14] px-5 py-2.5 font-mono text-[0.66rem] uppercase tracking-[0.13em] text-[#EDE8E0] transition-colors hover:border-[#F5C542]/60 hover:text-[#F5C542]"
      >
        Email
      </a>
      <a
        href={CONTACT.linkedin}
        {...ext}
        aria-label="Muhammad Anas on LinkedIn"
        className="rounded-full border border-white/[0.14] px-5 py-2.5 font-mono text-[0.66rem] uppercase tracking-[0.13em] text-[#EDE8E0] transition-colors hover:border-[#F5C542]/60 hover:text-[#F5C542]"
      >
        LinkedIn
      </a>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 flex max-w-[1100px] flex-col items-center gap-4 border-t border-white/[0.08] px-6 py-8 text-[0.72rem] text-[#7d7d82] md:flex-row md:justify-between md:px-10">
      <span className="font-mono uppercase tracking-[0.12em]">
        © {new Date().getFullYear()} Muhammad Anas
      </span>
      <div className="flex flex-wrap gap-6 font-mono uppercase tracking-[0.12em]">
        <Link to="/book" className="transition-colors hover:text-[#EDE8E0]">
          Book a call
        </Link>
        <a
          href={CONTACT.linkedin}
          {...ext}
          aria-label="Muhammad Anas on LinkedIn"
          className="transition-colors hover:text-[#EDE8E0]"
        >
          LinkedIn
        </a>
        <a
          href={CONTACT.whatsapp}
          {...ext}
          aria-label="Message Muhammad Anas on WhatsApp"
          className="transition-colors hover:text-[#EDE8E0]"
        >
          WhatsApp
        </a>
        <a
          href={CONTACT.email}
          aria-label="Email Muhammad Anas"
          className="transition-colors hover:text-[#EDE8E0]"
        >
          Email
        </a>
        <a
          href={CONTACT.phone}
          aria-label="Call Muhammad Anas"
          className="transition-colors hover:text-[#EDE8E0]"
        >
          Phone
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
