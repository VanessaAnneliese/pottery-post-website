import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import {
  saveListing,
  listListings,
  getListing,
  setListingStatus,
  type ListingRecord,
} from "@/lib/listings-store";
import { moderateListing } from "@/lib/listing-moderation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET ?? "";

function subId(ref: string | { id: string } | null | undefined): string | undefined {
  if (!ref) return undefined;
  return typeof ref === "string" ? ref : ref.id;
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") ?? "";

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", (err as Error).message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      // A subscription checkout completed → create/publish the listing.
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.mode !== "subscription") break;

        const id = subId(session.subscription as string | { id: string } | null);
        if (!id) break;

        const m = (session.metadata ?? {}) as Record<string, string>;
        // email rides in metadata for moderation only — never persisted (privacy).
        const base = {
          name: m.name ?? "",
          category: m.category,
          country: m.country,
          city: m.city,
          region: m.region,
          website: m.website,
          studio: m.studio,
          guild: m.guild,
          bio: m.bio,
          teamSize: m.teamSize,
          independent: m.independent === "yes",
          offersClasses: m.offersClasses === "yes",
          offersKilnSharing: m.offersKilnSharing === "yes",
          site: m.site,
        };

        const existing = await listListings();
        const { flagged, reasons } = moderateListing(
          { id, name: base.name, website: base.website, email: m.email, city: base.city, teamSize: base.teamSize, independent: base.independent },
          existing.map((e) => ({ id: e.id, name: e.name, city: e.city, status: e.status })),
        );

        const now = new Date().toISOString();
        const record: ListingRecord = {
          id,
          status: flagged ? "flagged" : "live",
          flagReasons: reasons,
          createdAt: now,
          updatedAt: now,
          stripeCustomerId: subId(session.customer as string | { id: string } | null),
          stripeSubscriptionId: id,
          ...base,
        };
        await saveListing(record);
        break;
      }

      // Subscription cancelled (or ended) → remove the listing.
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        await setListingStatus(sub.id, "removed");
        break;
      }

      // A renewal (or first) invoice failed → mark the listing past_due.
      case "invoice.payment_failed": {
        const inv = event.data.object as Stripe.Invoice & { subscription?: string | { id: string } };
        const id = subId(inv.subscription);
        if (id) await setListingStatus(id, "past_due");
        break;
      }

      // Payment succeeded → if a past_due listing recovered, bring it back live.
      case "invoice.paid": {
        const inv = event.data.object as Stripe.Invoice & { subscription?: string | { id: string } };
        const id = subId(inv.subscription);
        if (id) {
          const rec = await getListing(id);
          if (rec && rec.status === "past_due") await setListingStatus(id, "live");
        }
        break;
      }

      default:
        break;
    }
    // Refresh the directory so published/removed listings appear right away.
    revalidatePath("/directory");
  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json({ error: "Handler error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
