import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { AvatarEnhancer } from "@/components/home/AvatarEnhancer";
import { SelectedWorkIsland } from "@/components/home/SelectedWorkIsland";

const TITLE = "Muhammad Anas — Senior PPC & Performance Marketing Manager";
const DESCRIPTION =
  "Senior PPC & Performance Marketing Manager. Amazon advertising, search-term optimisation and profitable account scaling for global ecommerce brands.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0d0d0f" },
    ],
    links: [{ rel: "stylesheet", href: "/assets/index-BHHXTpWw.css" }],
  }),
  component: Index,
});

// The portfolio is a prebuilt static bundle that mounts itself into #root.
// It is loaded after hydration so React never clears the mounted DOM.
function Index() {
  useEffect(() => {
    if (document.getElementById("portfolio-bundle")) return;
    const script = document.createElement("script");
    script.id = "portfolio-bundle";
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.src = "/assets/index-jjHCjgPz.js";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div id="root" suppressHydrationWarning />
      <AvatarEnhancer />
      <SelectedWorkIsland />
    </>
  );
}
