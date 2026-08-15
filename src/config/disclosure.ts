// Client identities are withheld under agreement.
// Flip `nameApproved` to true and fill `name` once written approval exists;
// components read from here so no copy has to change.
export const disclosure = {
  caseC: { nameApproved: false, name: "" },
  caseD: { nameApproved: false, name: "" },
  caseE: { nameApproved: false, name: "" },
} as const;

export const ANON_LABELS = {
  caseC: "a dermatological skincare brand scaling on a hero cream line",
  caseD: "a regenerative skincare brand built around two flagship ampoules",
  caseE: "a pharmaceutical skincare brand growing against a fixed daily ad budget",
} as const;

export function clientLabel(key: keyof typeof disclosure): string {
  const entry = disclosure[key];
  return entry.nameApproved && entry.name ? entry.name : ANON_LABELS[key];
}

export const DISCLOSURE_FOOTER =
  "Client name withheld under agreement. Figures are expressed as indices and ratios rather than absolute values.";
