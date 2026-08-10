// Client identities are withheld under agreement.
// Flip `nameApproved` to true and fill `name` once written approval exists;
// components read from here so no copy has to change.
export const disclosure = {
  caseA: { nameApproved: false, name: "" },
  caseB: { nameApproved: false, name: "" },
} as const;

export const ANON_LABELS = {
  caseA: "a DTC body-care brand on Amazon US",
  caseB: "an outdoor electrical and EV accessories brand",
} as const;

export function clientLabel(key: keyof typeof disclosure): string {
  const entry = disclosure[key];
  return entry.nameApproved && entry.name ? entry.name : ANON_LABELS[key];
}

export const DISCLOSURE_FOOTER =
  "Client name withheld under agreement. Figures are expressed as indices and ratios rather than absolute values.";
