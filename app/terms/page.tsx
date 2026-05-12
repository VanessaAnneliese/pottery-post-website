export default function TermsPage() {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Legal
      </p>
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>Terms of Use</h1>
      <p className="text-sm mb-12" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>Last updated: May 2026</p>

      <div className="flex flex-col gap-10" style={{ color: "#3B2314", fontFamily: "system-ui, sans-serif", lineHeight: "1.75" }}>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Agreement to Terms</h2>
          <p>By accessing or using the Pottery Post website (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Use. Pottery Post is operated from Whitby, Ontario, Canada, and these terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. If you do not agree to these terms, please do not use this Site.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Use of the Site</h2>
          <p className="mb-3">You may use this Site for lawful purposes only. You agree not to:</p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Use the Site in any way that violates applicable Canadian federal or provincial law</li>
            <li>Submit false, misleading, or fraudulent information in directory listings or purchase forms</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Use automated tools to scrape, copy, or extract content from the Site without our written permission</li>
            <li>Interfere with or disrupt the Site or its servers</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>The Pottery Directory</h2>
          <p>Directory listings are submitted by potters and guilds and are reviewed before publication. We reserve the right to decline, edit, or remove any listing at our discretion. By submitting a listing, you represent that the information provided is accurate and that you have the right to share it. You grant Pottery Post a non-exclusive, royalty-free licence to display your submitted information and images on the Site.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>The Pottery Shop</h2>
          <p>All prices are listed in Canadian dollars unless otherwise indicated. We reserve the right to cancel any order at our discretion, in which case a full refund will be issued. Shipping is available across Canada and the United States. Local pickup is available in Whitby, Ontario, Canada. All sales are final unless a piece arrives damaged, in which case please contact us within 7 days of receipt.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Intellectual Property</h2>
          <p>All content on this Site — including text, images, design, and the gallery collection — is owned by or licensed to Pottery Post and is protected by Canadian copyright law. You may not reproduce, distribute, or use any content from this Site without prior written permission, except as permitted by law.</p>
          <p className="mt-3">Gallery pieces are presented for appreciation only and are not for sale. Images of gallery pieces may not be reproduced without express permission.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Disclaimer of Warranties</h2>
          <p>This Site is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. Directory listings are provided for informational purposes only; we do not endorse or guarantee the accuracy of third-party listing information.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, Pottery Post shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this Site or any products purchased through it.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Changes to These Terms</h2>
          <p>We may update these Terms of Use from time to time. Changes will be posted on this page with an updated date. Continued use of the Site after changes are posted constitutes acceptance of the revised terms.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Contact Us</h2>
          <p>If you have questions about these Terms of Use, please contact us at:</p>
          <p className="mt-3"><strong>Pottery Post</strong><br />Whitby, Ontario, Canada</p>
        </div>

      </div>
    </section>
  );
}
