import { NextRequest, NextResponse } from "next/server";
import { getStripe, STRIPE_PRICE_ID, STRIPE_TAX_ENABLED, LISTING_FIELDS } from "@/lib/stripe";
import { siteConfig } from "@/lib/site-config";

// Creates a Stripe Checkout Session for a $5/yr directory-listing subscription.
// The submitted listing data rides along as metadata so the webhook can publish
// the listing once payment succeeds. One shared Anneliese Designs Stripe account
// serves every Post site; the charge shows as "Anneliese Designs" on statements,
// which custom_text tells the subscriber below.
export async function POST(request: NextRequest) {
  if (!STRIPE_PRICE_ID) {
    return NextResponse.json({ error: "Payments are not configured." }, { status: 500 });
  }

  const data = await request.formData();
  const origin = request.headers.get("origin") ?? new URL(request.url).origin;

  // Honeypot: a bot filled the hidden field. Pretend success, create nothing.
  if (((data.get("company_website") as string) ?? "").trim()) {
    return NextResponse.json({ url: `${origin}/directory/submit/success` });
  }

  const name = ((data.get("name") as string) ?? "").trim();
  const email = ((data.get("email") as string) ?? "").trim();
  const independent = data.get("independent") === "yes";

  if (!name || !email || !independent) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Carry the listing through to the webhook as metadata (trimmed to Stripe's limits).
  const metadata: Record<string, string> = {};
  for (const field of LISTING_FIELDS) {
    const value = ((data.get(field) as string) ?? "").toString().trim();
    if (value) metadata[field] = value.slice(0, 480);
  }
  metadata.site = siteConfig.brandName;

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: STRIPE_PRICE_ID, quantity: 1 }],
      customer_email: email || undefined,
      automatic_tax: { enabled: STRIPE_TAX_ENABLED },
      ...(STRIPE_TAX_ENABLED ? { billing_address_collection: "required" as const } : {}),
      success_url: `${origin}/directory/submit/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/directory/submit?canceled=1`,
      custom_text: {
        submit: {
          message:
            `${siteConfig.brandName} is run by Anneliese Designs, the business that appears on your receipt and card statement.`,
        },
      },
      metadata,
      subscription_data: { metadata },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Could not start checkout." }, { status: 500 });
  }
}
