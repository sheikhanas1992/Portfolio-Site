import { useEffect } from "react";

/**
 * The hero avatar lives inside the prebuilt homepage bundle. Rather than
 * editing that bundle, we tag its container once it mounts so the greyscale /
 * hover behaviour in styles.css can take over, and attach the tooltip node.
 */
export function AvatarEnhancer() {
  useEffect(() => {
    let cancelled = false;
    let tries = 0;

    const enhance = () => {
      if (cancelled) return;
      const img = document.querySelector<HTMLImageElement>('#root img[alt^="Portrait"]');
      const container = img?.parentElement?.parentElement as HTMLElement | undefined;
      if (!container) {
        if (tries++ < 60) window.setTimeout(enhance, 100);
        return;
      }
      if (container.classList.contains("anas-avatar")) return;

      container.classList.add("anas-avatar");
      container.setAttribute("tabindex", "0");

      const tip = document.createElement("div");
      tip.className = "anas-avatar-tip";
      tip.setAttribute("aria-hidden", "true");
      tip.textContent = "Open for new Amazon PPC accounts: DM me or book a call";
      container.appendChild(tip);
    };

    enhance();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
