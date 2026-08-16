import type { CSSProperties } from "react";

export const WEB3FORMS_ACCESS_KEY = "d9b522b9-b4f8-482d-affc-d55accae0054";
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/** Off screen but not display: none, so a bot's blind autofill still reaches
 * it while a real visitor never sees it. Web3Forms discards any submission
 * where this field arrives non-empty. */
export const HONEYPOT_STYLE: CSSProperties = {
  position: "absolute",
  left: "-9999px",
  width: "1px",
  height: "1px",
  overflow: "hidden",
};
