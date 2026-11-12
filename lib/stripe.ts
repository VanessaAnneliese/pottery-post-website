import Stripe from "stripe";

// Lazily construct the server-side Stripe client. The Stripe constructor throws
// on an empty key, and importing this module must never throw (otherwise
// `next build` fails collecting page data for the checkout/webhook routes and
// the success page when STRIPE_SECRET_KEY is absent, e.g. on a deploy before the
// env var is configured). The client is built on first use at runtime.
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  return (_stripe ??= new Stripe(process.env.STRIPE_SECRET_KEY ?? ""));
}

export const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID ?? "";

// Stripe Tax stays off until the shared Anneliese Designs account has Tax
// enabled + HST registration added. Gate with STRIPE_TAX_ENABLED.
export const STRIPE_TAX_ENABLED = process.env.STRIPE_TAX_ENABLED === "true";

// Listing fields carried through Checkout as metadata, so the webhook can
// rebuild the listing after payment. Stripe metadata: <=50 keys, <=500 chars each.
// NOTE: `email` rides along so the webhook's moderation can read the domain, but
// it is NEVER written to the listings store (see lib/listings-store.ts). Phone is
// not carried at all. Pottery maps each listing into one of its four directory
// arrays via `category` (see lib/directory-live.ts).
export const LISTING_FIELDS = [
  "name", "category", "country", "city", "region", "website",
  "studio", "guild", "bio", "teamSize", "independent",
  "offersClasses", "offersKilnSharing", "email",
] as const;
