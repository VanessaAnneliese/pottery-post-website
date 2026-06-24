import type { Metadata } from "next";
import Link from "next/link";
import QuoteBlock from "@/components/QuoteBlock";

export const metadata: Metadata = {
  title: "Seagrove, North Carolina: A Town Built on Clay | The Pottery Traveler's Guide",
  description: "More than a hundred pottery studios within eight miles of town. A guide to Seagrove, North Carolina, the most concentrated pottery community in America.",
  alternates: { canonical: "https://www.potterypost.ca/postmarks/travel-guide/seagrove" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Seagrove, North Carolina: A Town Built on Clay",
  description: "More than a hundred pottery studios within eight miles of town. A guide to Seagrove, North Carolina, the most concentrated pottery community in America.",
  url: "https://www.potterypost.ca/postmarks/travel-guide/seagrove",
  datePublished: "2026-06-24",
  publisher: { "@type": "Organization", name: "Pottery Post", url: "https://www.potterypost.ca" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pottery Postmarks", item: "https://www.potterypost.ca/postmarks" },
      { "@type": "ListItem", position: 2, name: "Travel Guide", item: "https://www.potterypost.ca/postmarks/travel-guide" },
      { "@type": "ListItem", position: 3, name: "Seagrove, North Carolina", item: "https://www.potterypost.ca/postmarks/travel-guide/seagrove" },
    ],
  },
};

export default function SeagrovePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Article header */}
      <section className="pt-12 md:pt-20 pb-8 px-6 max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "#9E8572", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif" }}>
          <Link href="/postmarks" className="hover:text-[#5C3D2E] transition-colors">Pottery Postmarks</Link>
          <span className="mx-2">/</span>
          <Link href="/postmarks/travel-guide" className="hover:text-[#5C3D2E] transition-colors">Travel Guide</Link>
          <span className="mx-2">/</span>
          Seagrove
        </p>

        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#C1440E", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
          North Carolina
        </p>
        <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
          Seagrove, North Carolina: A Town Built on Clay
        </h1>
        <div className="border-t pt-6" style={{ borderColor: "#E8D5B7" }}>
          <p className="text-xs tracking-widest uppercase" style={{ color: "#9E8572", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif" }}>
            The Pottery Traveler&rsquo;s Guide &nbsp;&middot;&nbsp; The Pottery Post
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="px-6 max-w-3xl mx-auto pb-16 md:pb-20" style={{ fontFamily: "system-ui, sans-serif", color: "#5C3D2E", lineHeight: "1.75" }}>

        <p className="text-lg mb-6">
          There are places that exist to make things, and Seagrove, North Carolina, is one of them.
        </p>
        <p className="mb-6">
          Tucked into the Piedmont between Asheboro and Robbins, Seagrove doesn&rsquo;t announce itself. The roads are quiet. The signage is modest. And then, almost without warning, you start to notice the kilns: small wooden structures beside farmhouses, smoke sometimes rising from them. A hand-painted sign at the end of a gravel driveway. A window full of mugs catching the afternoon light.
        </p>
        <p className="mb-6">
          This is where American pottery lives.
        </p>
        <p className="mb-10">
          Within eight miles of the town center, more than a hundred pottery studios line the back roads. Some families have been at it for seven generations. The clay here, a local earthenware rich with iron, has been fired since the 1750s, when German and English settlers discovered the land was unusually good for it. They made what they needed: crocks for preserving, jugs for storing, jars for the table. Utility was the whole point. Beauty followed naturally from hands that knew what they were doing.
        </p>
        <p className="mb-16 text-lg italic" style={{ color: "#9E8572" }}>
          It still does.
        </p>

        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>How to spend a day here</h2>
        <p className="mb-6">
          Arrive in the morning. The studios open early and close when the light goes, and the best conversations happen before the afternoon crowd. Stop first at the <strong>North Carolina Pottery Center</strong> on Highway 705. It&rsquo;s the only museum in the country dedicated entirely to the state&rsquo;s ceramic tradition, and an hour there will calibrate your eye for everything you&rsquo;re about to see. The exhibition traces Seagrove from the salt-glazed jugs of the 1800s to the contemporary work being made in studios less than a mile away.
        </p>
        <p className="mb-6">
          Then drive slowly. This is not a place for a schedule. The pleasures are in the detours: a barn kiln you almost missed, a sculptor working outside who waves you in, a shelf of seconds priced at what they&rsquo;re worth to a maker rather than what they&rsquo;d sell for in a city gallery. Everything you buy here came from the ground beneath your feet, more or less, shaped by someone who lives close enough to walk to work.
        </p>

        <p className="mb-3">A few studios worth the turn:</p>
        <div className="mb-10 flex flex-col gap-5 pl-5 border-l-2" style={{ borderColor: "#E8D5B7" }}>
          <div>
            <p className="font-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>Jugtown Pottery</p>
            <p style={{ color: "#6B4F3F" }}>One of the oldest working potteries in the region, a touchstone for the Seagrove tradition since 1921. The folk-art forms and distinctive orange and Chinese blue glazes are instantly recognizable.</p>
          </div>
          <div>
            <p className="font-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>Ben Owen Pottery</p>
            <p style={{ color: "#6B4F3F" }}>Now run by Ben Owen III, carrying forward a lineage that stretches back to his grandfather. His wood-fired work sits at the intersection of Japanese mingei and Carolina tradition.</p>
          </div>
          <div>
            <p className="font-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>The Potter&rsquo;s Mark</p>
            <p style={{ color: "#6B4F3F" }}>Run by Beth Gore, a gallery carrying the work of dozens of regional potters. Useful if you want a wider survey before committing to the drive between studios.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>When to go</h2>
        <p className="mb-10">
          The last weekend of October brings the <strong>Seagrove Potters Fall Festival</strong>, when studios across the region hold open houses simultaneously. It&rsquo;s the best single weekend to visit: festive without being overwhelming, and still intimate enough that you&rsquo;ll find yourself in someone&rsquo;s actual backyard, watching them trim a bowl. Spring, too, is excellent: cool, green, and unhurried.
        </p>

        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>Getting there</h2>
        <p className="mb-10">
          Seagrove sits about ninety minutes southwest of Raleigh and an hour from Greensboro. The studios are spread along Highways 705 and 220, and several of the smaller county roads that branch off them. A printed map (available at the Pottery Center) is genuinely useful. Cell service is unreliable on some of the back roads, which turns out to be part of the charm.
        </p>

        <div className="border-t pt-8" style={{ borderColor: "#E8D5B7" }}>
          <p className="text-xs tracking-widest uppercase" style={{ color: "#9E8572", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif" }}>
            The Pottery Traveler&rsquo;s Guide is a curated series on the towns, studios, and detours worth making for the love of clay.
          </p>
        </div>
      </section>

      <QuoteBlock quote="Some roads are worth travelling slowly. Especially the ones with a kiln at the end." />

      {/* Back link */}
      <section className="py-10 px-6 max-w-3xl mx-auto">
        <Link href="/postmarks/travel-guide" className="text-xs tracking-widest uppercase underline" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>
          Back to Travel Guide
        </Link>
      </section>
    </>
  );
}
