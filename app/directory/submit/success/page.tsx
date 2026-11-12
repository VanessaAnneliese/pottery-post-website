import type { Metadata } from "next";
import Link from "next/link";
import { getStripe } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Listing Confirmed",
  robots: { index: false },
};

export default async function SubmitSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  let paid = false;
  let name = "";
  if (session_id) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(session_id);
      paid = session.status === "complete" || session.payment_status === "paid";
      name = (session.metadata?.name as string) ?? "";
    } catch {
      // Fall through to the generic message if the session can't be read.
    }
  }

  return (
    <section className="py-24 px-6 max-w-2xl mx-auto text-center">
      <p
        className="text-xs tracking-widest uppercase mb-2"
        style={{ color: "var(--c-muted)", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}
      >
        Pottery Directory
      </p>
      <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: "Georgia, serif", color: "var(--c-primary)" }}>
        {paid ? "You're in." : "Thank you."}
      </h1>
      <p className="text-lg mb-4" style={{ color: "var(--c-primary-deep)", fontFamily: "system-ui, sans-serif" }}>
        {paid ? (
          <>
            Payment received{name ? <>, <strong>{name}</strong></> : ""}. Your listing is being set up and will
            appear in the directory shortly.
          </>
        ) : (
          <>Your submission is being processed. If anything looks off, email us and we&rsquo;ll sort it out.</>
        )}
      </p>
      <p className="text-sm mb-10" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
        A receipt and renewal reminders come straight from Stripe, where the charge appears as Anneliese Designs. Your
        subscription renews once a year and you can cancel anytime from the receipt link.
      </p>
      <Link
        href="/directory"
        className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm bg-[var(--c-accent)] hover:bg-[var(--c-accent-mid)] transition-colors"
        style={{ color: "var(--c-light)", fontFamily: "system-ui, sans-serif" }}
      >
        Browse the directory
      </Link>
    </section>
  );
}
