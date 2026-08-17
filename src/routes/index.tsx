import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { AvatarEnhancer } from "@/components/home/AvatarEnhancer";
import { SelectedWorkIsland } from "@/components/home/SelectedWorkIsland";

const TITLE = "Sheikh Anas: Amazon PPC Management for 6 to 8 Figure Brands";
const DESCRIPTION =
  "Amazon PPC management and account scaling for 6 to 8 figure brands. Campaign structure, ACOS control and profitable growth.";

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
    links: [{ rel: "stylesheet", href: "/assets/index-CmAgYLGj.css" }],
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
    script.src = "/assets/index-CGvQAk5k.js";
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
