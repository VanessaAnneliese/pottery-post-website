// Exception-based flagging for the auto-live submission pipeline.
// Listings go live automatically on payment; this only routes the SUSPECT ones
// into the review queue (status "flagged") so the owner reads a handful, not
// hundreds. The $5 charge + brand positioning do the rest.

export interface ModerationInput {
  id?: string;
  name?: string;
  website?: string;
  email?: string;
  city?: string;
  teamSize?: string;
  independent?: boolean;
}

export interface ExistingListing {
  id: string;
  name?: string;
  city?: string;
  status: string;
}

// Names/domains that signal a chain, franchise, or large retailer rather than
// an independent pottery business. Lowercase, matched as substrings. Extend as needed.
const CHAIN_BLOCKLIST = [
  "amazon", "walmart", "costco", "ikea", "target", "home depot", "lowes",
  "etsy", "shein", "temu", "aliexpress", "ebay", "wayfair", "michaels",
  "hobby lobby", "dollarama", "dollar tree", "canadian tire", "loblaws",
  "sobeys", "metro inc", "starbucks", "mcdonald", "best buy", "staples",
];

const norm = (s?: string) => (s ?? "").trim().toLowerCase().replace(/\s+/g, " ");

export function moderateListing(
  input: ModerationInput,
  existing: ExistingListing[],
): { flagged: boolean; reasons: string[] } {
  const reasons: string[] = [];

  // Oversized team — self-reported, but a useful signal.
  if (input.teamSize === "50+") reasons.push("Team size over 50");

  // Chain / corporate blocklist across name, website, and email domain.
  const haystack = `${norm(input.name)} ${norm(input.website)} ${norm(input.email)}`;
  const hit = CHAIN_BLOCKLIST.find((b) => haystack.includes(b));
  if (hit) reasons.push(`Matches blocklist term "${hit}"`);

  // Independence attestation missing (form requires it, so this is a backstop).
  if (input.independent === false) reasons.push("Independence not attested");

  // Possible duplicate: same name + city as an existing, non-removed listing.
  const dupe = existing.some(
    (e) =>
      e.id !== input.id &&
      e.status !== "removed" &&
      norm(e.name) === norm(input.name) &&
      norm(e.city) === norm(input.city),
  );
  if (dupe) reasons.push("Possible duplicate of an existing listing");

  return { flagged: reasons.length > 0, reasons };
}
