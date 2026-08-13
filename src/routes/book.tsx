import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell, ContactRow } from "@/components/SiteChrome";
import { CONTACT } from "@/config/contact";

const TITLE = "Book a call: Sheikh Anas, Amazon PPC";
const DESCRIPTION =
  "Book a twenty-minute call about Amazon PPC, account structure and profitable scaling.";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading");

  useEffect(() => {
    // Calendly widget script is loaded lazily, only on this route.
    const existing = document.getElementById("calendly-widget-script");
    const timeout = window.setTimeout(() => {
      setStatus((s) => (s === "ready" ? s : "failed"));
    }, 8000);

    const onLoad = () => setStatus("ready");
    const onError = () => setStatus("failed");

    if (existing) {
      setStatus("ready");
    } else {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.id = "calendly-widget-css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.id = "calendly-widget-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.addEventListener("load", onLoad);
      script.addEventListener("error", onError);
      document.body.appendChild(script);
    }

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <PageShell>
      <section className="mx-auto max-w-[1100px] px-6 md:px-10">
        <h1 className="text-[clamp(2.4rem,8vw,5rem)] font-black uppercase leading-[0.88] tracking-[-0.03em] text-[#EDE8E0]">
          Book a call
        </h1>
        <p className="mt-6 max-w-[52ch] text-[1.05rem] font-medium leading-relaxed text-[#b4b4b8]">
          Twenty minutes. Tell me what you're working on and I'll tell you what I'd look at
          first.
        </p>

        <div className="relative mt-12 min-h-[700px] w-full overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#151517]">
          {status !== "failed" && (
            <div
              className="calendly-inline-widget h-[700px] w-full"
              data-url={CONTACT.calendly}
              style={{ minWidth: "320px", minHeight: "700px" }}
            />
          )}

          {status === "loading" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#151517]">
              <span
                aria-hidden
                className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-[#F5C542]"
              />
              <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#b4b4b8]">
                Loading calendar…
              </p>
            </div>
          )}

          {status === "failed" && (
            <div className="flex min-h-[700px] flex-col items-center justify-center gap-5 px-6 text-center">
              <p className="max-w-[40ch] text-[0.98rem] font-medium text-[#b4b4b8]">
                The calendar couldn't load here. You can still book directly on Calendly.
              </p>
              <a
                href={CONTACT.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#F5C542] px-6 py-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0d0d0f] shadow-[0_4px_14px_-4px_rgba(245,197,66,0.5)] transition-transform duration-200 hover:scale-[1.05]"
              >
                Open the booking page
              </a>
            </div>
          )}
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-6 bg-[#F5C542]" />
            <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c7c7cc]">
              Prefer not to use a calendar?
            </h2>
          </div>
          <div className="mt-5">
            <ContactRow />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
