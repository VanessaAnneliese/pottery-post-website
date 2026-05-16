export default function FAQPage() {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Help
      </p>
      <h1 className="text-4xl font-bold mb-10" style={{ fontFamily: "Georgia, serif" }}>Frequently Asked Questions</h1>

      <div className="flex flex-col gap-14" style={{ color: "#3B2314", fontFamily: "system-ui, sans-serif", lineHeight: "1.75" }}>

        {/* General */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Georgia, serif" }}>General</h2>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-bold mb-2">What is the Pottery Post?</h3>
              <p style={{ color: "#5C3D2E" }}>The Pottery Post is a home for people who love pottery — potters, guilds, pottery class providers, pottery supply shops, collectors, and admirers alike. We run a Pottery Directory spanning Canada, the United States, Europe, and Australia, and a curated Pottery Gallery. Everything here is reviewed in person, made by hand, by real people.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Where is the Pottery Post based?</h3>
              <p style={{ color: "#5C3D2E" }}>We&rsquo;re based in Whitby, Ontario, Canada.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">How do I get in touch?</h3>
              <p style={{ color: "#5C3D2E" }}>You can reach us at <a href="mailto:info@potterypost.ca" className="underline" style={{ color: "#009999" }}>info@potterypost.ca</a>. For specific questions about either the directory or gallery, use <a href="mailto:directory@potterypost.ca" className="underline" style={{ color: "#009999" }}>directory@potterypost.ca</a> for the directory, and <a href="mailto:gallery@potterypost.ca" className="underline" style={{ color: "#009999" }}>gallery@potterypost.ca</a> for the gallery.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Is the Pottery Post affiliated with any specific pottery guild or school?</h3>
              <p style={{ color: "#5C3D2E" }}>No. We are independent. We celebrate the entire pottery world and are not affiliated with or endorsed by any guild, school, or manufacturer.</p>
            </div>
          </div>
        </div>

        {/* Potters Directory */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Georgia, serif" }}>Pottery Directory</h2>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-bold mb-2">How do I add myself to the Pottery Directory?</h3>
              <p style={{ color: "#5C3D2E" }}>Use the <a href="/directory/submit" className="underline" style={{ color: "#009999" }}>Add Your Listing</a> form. We review every submission by hand before it goes live, so please allow some time for your listing to appear.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Is it free to be listed?</h3>
              <p style={{ color: "#5C3D2E" }}>Yes, completely. Listing in the Pottery Post directory is free.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">How long does it take for my listing to appear?</h3>
              <p style={{ color: "#5C3D2E" }}>Every listing is reviewed and added by a real person. Please allow some time — we do our best to work through submissions promptly.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">I&rsquo;m already listed but need to update my information. What do I do?</h3>
              <p style={{ color: "#5C3D2E" }}>Use the <a href="/directory/update" className="underline" style={{ color: "#009999" }}>Update Your Listing</a> form and fill in only the fields you need changed. We&rsquo;ll take care of the rest.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Can I request to be removed from the directory?</h3>
              <p style={{ color: "#5C3D2E" }}>Yes. Visit the <a href="/directory/update" className="underline" style={{ color: "#009999" }}>Update Your Listing</a> page and use the &ldquo;Remove your listing&rdquo; option at the bottom of the form.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Can I add a photo to my listing?</h3>
              <p style={{ color: "#5C3D2E" }}>Yes. You can include two photos of your work when submitting or updating your listing. Photos must be JPG or PNG and under 2MB each.</p>
            </div>
          </div>
        </div>

        {/* Potter Guilds Directory */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Georgia, serif" }}>Potter Guilds Directory</h2>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-bold mb-2">Can my pottery guild be listed in the directory?</h3>
              <p style={{ color: "#5C3D2E" }}>Absolutely. Use the <a href="/directory/submit" className="underline" style={{ color: "#009999" }}>Add Your Listing</a> form and select &ldquo;Guild&rdquo; as your listing type. We welcome guilds from Canada, the United States, Europe, and Australia.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What information do you need from a guild?</h3>
              <p style={{ color: "#5C3D2E" }}>Guild name, location (city and region), a website if you have one, and a short description of your guild. A phone number and contact email are optional but helpful.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Our guild has changed its name or location. How do we update our listing?</h3>
              <p style={{ color: "#5C3D2E" }}>Use the <a href="/directory/update" className="underline" style={{ color: "#009999" }}>Update Your Listing</a> form with your guild name and the changes you need made.</p>
            </div>
          </div>
        </div>

        {/* Pottery Class Directory */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Georgia, serif" }}>Pottery Class Directory</h2>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-bold mb-2">I offer pottery classes. Can I be listed?</h3>
              <p style={{ color: "#5C3D2E" }}>Yes. Use the <a href="/directory/submit" className="underline" style={{ color: "#009999" }}>Add Your Listing</a> form and select &ldquo;Class / Teaching Studio&rdquo; as your listing type. We list individual potters who teach, studio collectives, and dedicated teaching spaces.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Can I be listed as both a potter and a class provider?</h3>
              <p style={{ color: "#5C3D2E" }}>Yes. You can have a listing under both Potters and Classes. Simply submit two listings, or note both when submitting a single form.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">My class schedule has changed. How do I update the listing?</h3>
              <p style={{ color: "#5C3D2E" }}>Use the <a href="/directory/update" className="underline" style={{ color: "#009999" }}>Update Your Listing</a> form and include the updated details in the notes field.</p>
            </div>
          </div>
        </div>

        {/* Pottery Supply Shop Directory */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Georgia, serif" }}>Pottery Supply Shop Directory</h2>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-bold mb-2">Can my pottery supply shop be listed?</h3>
              <p style={{ color: "#5C3D2E" }}>Yes. We list pottery supply shops — businesses that sell clay, glazes, tools, kilns, and related supplies to potters. Use the <a href="/directory/submit" className="underline" style={{ color: "#009999" }}>Add Your Listing</a> form and select &ldquo;Supply Shop&rdquo;.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Does my shop need a physical location to be listed?</h3>
              <p style={{ color: "#5C3D2E" }}>Not necessarily. Online-only supply shops that serve the pottery community are welcome, provided they have a working website and are an established business.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Can I advertise or sponsor a listing?</h3>
              <p style={{ color: "#5C3D2E" }}>We don&rsquo;t currently offer paid placements or advertising in the directory. All listings are treated equally.</p>
            </div>
          </div>
        </div>

        {/* Pottery Gallery */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Georgia, serif" }}>Pottery Gallery</h2>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-bold mb-2">What is the Pottery Gallery?</h3>
              <p style={{ color: "#5C3D2E" }}>The Pottery Gallery is a curated collection of handmade pottery gathered with love. Each collection is selected by the Pottery Post team. Pieces are verified in person before going live — we only show the real thing.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Are the pieces in the gallery for sale?</h3>
              <p style={{ color: "#5C3D2E" }}>No. The Pottery Gallery is a celebration, not a shop. The pieces are not for sale by the Pottery Post. Where possible, we encourage you to contact potters directly for purchasing inquiries.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">How often does the gallery change?</h3>
              <p style={{ color: "#5C3D2E" }}>Collections rotate in early Spring and Fall. Past collections are preserved in The Archive.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">How do I submit my work to the gallery?</h3>
              <p style={{ color: "#5C3D2E" }}>Each collection is open to submissions. Visit the <a href="/gallery" className="underline" style={{ color: "#009999" }}>Pottery Gallery</a> page to learn how the process works and to submit a piece for consideration.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What happens to pieces after the collection ends?</h3>
              <p style={{ color: "#5C3D2E" }}>When submitting a piece, potters choose one of three options for what happens after the collection closes. <strong>Keep it with Pottery Post</strong> — the piece becomes part of a permanent collection, a gift to the Pottery Post and the community it&rsquo;s building. <strong>Donate it</strong> — the piece is passed on to a local pottery school, guild, or charity chosen by the Pottery Post, where it will continue to be loved and used. <strong>Arrange your own return</strong> — the potter coordinates pickup or return shipping at their own cost; the Pottery Post does not cover shipping fees. Whatever the choice, every past collection is preserved in The Archive on the gallery page.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
