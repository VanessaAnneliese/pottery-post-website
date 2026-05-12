export default function PrivacyPage() {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Legal
      </p>
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>Privacy Policy</h1>
      <p className="text-sm mb-12" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>Last updated: May 2026</p>

      <div className="flex flex-col gap-10" style={{ color: "#3B2314", fontFamily: "system-ui, sans-serif", lineHeight: "1.75" }}>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Overview</h2>
          <p>Pottery Post (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is operated from Whitby, Ontario, Canada. We are committed to protecting your personal information in accordance with the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and applicable provincial privacy legislation.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Information We Collect</h2>
          <p className="mb-3">We may collect the following types of personal information:</p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li><strong>Contact information</strong> — name, email address, phone number, and mailing address when you submit a directory listing, make a purchase, or contact us.</li>
            <li><strong>Directory listing information</strong> — studio name, location, website, bio, and photos you voluntarily submit for inclusion in the Pottery Directory.</li>
            <li><strong>Transaction information</strong> — order details and payment information when you purchase from The Pottery Shop. Payment processing is handled by a third-party provider; we do not store full payment card details.</li>
            <li><strong>Usage information</strong> — pages visited, time spent on the site, and referring URLs, collected through cookies and analytics tools. See our Cookie Policy for details.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>How We Use Your Information</h2>
          <p className="mb-3">We use the information we collect to:</p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Review, approve, and publish directory listing submissions</li>
            <li>Process and fulfill orders from the Pottery Shop</li>
            <li>Respond to inquiries and provide customer support</li>
            <li>Improve the website and understand how visitors use it</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-3">We do not sell, rent, or share your personal information with third parties for their own marketing purposes.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Directory Listings</h2>
          <p>Information you submit for a directory listing — including your name, studio name, location, website, bio, and photos — will be displayed publicly on this website if approved. By submitting a listing, you consent to this public display. You may request removal of your listing at any time by contacting us.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Data Retention</h2>
          <p>We retain personal information only as long as necessary for the purposes for which it was collected, or as required by law. Directory listing information is retained until you request its removal.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Your Rights</h2>
          <p className="mb-3">Under PIPEDA, you have the right to:</p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Access the personal information we hold about you</li>
            <li>Correct inaccurate information</li>
            <li>Withdraw consent for the use of your information (subject to legal or contractual restrictions)</li>
            <li>Request deletion of your personal information where applicable</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, please contact us at the address below.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Third-Party Services</h2>
          <p>This website may use third-party services such as analytics providers and payment processors. These services have their own privacy policies and data practices. We encourage you to review them independently.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy or our handling of your personal information, please contact us at:</p>
          <p className="mt-3"><strong>Pottery Post</strong><br />Whitby, Ontario, Canada</p>
        </div>

      </div>
    </section>
  );
}
