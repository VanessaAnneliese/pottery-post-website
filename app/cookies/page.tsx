import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for The Pottery Post, how we use cookies on our website.",
  alternates: { canonical: "https://www.potterypost.ca/cookies" },
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Legal
      </p>
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>Cookie Policy</h1>
      <p className="text-sm mb-12" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>Last updated: May 2026</p>

      <div className="flex flex-col gap-10" style={{ color: "#3B2314", fontFamily: "system-ui, sans-serif", lineHeight: "1.75" }}>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>What Are Cookies</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They help the site function properly, remember your preferences, and provide information about how the site is used. This policy explains how Pottery Post uses cookies.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Cookies We Use</h2>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>Strictly Necessary Cookies</h3>
              <p>These cookies are essential for the website to function and cannot be disabled. They are set in response to actions you take, such as completing a purchase or submitting a form. The site cannot work properly without them.</p>
            </div>

            <div>
              <h3 className="font-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>Analytics Cookies</h3>
              <p>We may use analytics tools to understand how visitors interact with our site, which pages are visited most, how long visitors stay, and how they arrive. This information is collected in aggregate and is not used to identify individuals. You can opt out of analytics tracking through your browser settings or by using a browser extension that blocks tracking scripts.</p>
            </div>

            <div>
              <h3 className="font-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>Preference Cookies</h3>
              <p>These cookies remember choices you make on the site, such as your preferred region in the directory. They are not used for advertising purposes.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Third-Party Cookies</h2>
          <p>Some features of this site may embed content or use services from third parties (such as payment processors). These third parties may set their own cookies, which are governed by their own cookie and privacy policies.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Managing Cookies</h2>
          <p className="mb-3">You can control and delete cookies through your browser settings. Most browsers allow you to:</p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>View cookies stored on your device</li>
            <li>Block cookies from specific sites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p className="mt-3">Please note that disabling certain cookies may affect the functionality of this website. For instructions specific to your browser, visit your browser&rsquo;s help documentation.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>Contact Us</h2>
          <p>If you have questions about our use of cookies, please contact us at:</p>
          <p className="mt-3"><strong>Pottery Post</strong><br />Whitby, Ontario, Canada</p>
        </div>

      </div>
    </section>
  );
}
