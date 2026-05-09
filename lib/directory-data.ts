export type Guild = {
  name: string;
  city: string;
  province: string;
  country: "CA" | "US";
  website?: string;
  phone?: string;
  bio?: string;
};

export type Potter = {
  name: string;
  studio?: string;
  guild?: string;
  city: string;
  province: string;
  country: "CA" | "US";
  website?: string;
  phone?: string;
  bio?: string;
};

export const guilds: Guild[] = [
  // British Columbia
  {
    name: "Potters Guild of British Columbia",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
    website: "https://www.galleryofbcceramics.com",
    bio: "Established in 1955, one of Canada's oldest and largest ceramic arts organizations.",
  },
  {
    name: "BCPotters Guild",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
    website: "https://www.bcpotters.com",
  },
  // Alberta
  {
    name: "Edmonton Potters' Guild",
    city: "Edmonton",
    province: "Alberta",
    country: "CA",
    website: "https://www.edmontonpottersguild.com",
    bio: "A pottery studio and guild community in Edmonton, Alberta.",
  },
  // Ontario
  {
    name: "Kawartha Potters' Guild",
    city: "Peterborough",
    province: "Ontario",
    country: "CA",
    website: "https://kawarthapottersguild.com",
    bio: "Home of the Canadian Ceramics Directory & Showcase, celebrating contemporary Canadian clay artists.",
  },
  {
    name: "Kingston Potters' Guild",
    city: "Kingston",
    province: "Ontario",
    country: "CA",
    website: "https://kingstonpottersguild.ca",
    bio: "Established in 1967, one of the oldest pottery guilds in Ontario.",
  },
  {
    name: "Mississauga Potters' Guild",
    city: "Mississauga",
    province: "Ontario",
    country: "CA",
    website: "https://mississaugapotters.com",
  },
  {
    name: "Pine Tree Potters' Guild",
    city: "Aurora",
    province: "Ontario",
    country: "CA",
    website: "https://www.pinetreepotters.ca",
  },
  {
    name: "Potters' Guild of Hamilton and Region",
    city: "Hamilton",
    province: "Ontario",
    country: "CA",
  },
  // Prince Edward Island
  {
    name: "PEI Potters Studio Co-op",
    city: "Charlottetown",
    province: "Prince Edward Island",
    country: "CA",
    website: "https://peipottersstudio.ca",
    bio: "A cooperative pottery studio in the heart of Charlottetown, open to beginner and experienced ceramic artists alike.",
  },
  // Oregon
  {
    name: "Oregon Potters Association",
    city: "Portland",
    province: "Oregon",
    country: "US",
    website: "https://www.oregonpotters.org",
    bio: "An organization dedicated to educating, inspiring, and transforming lives through clay.",
  },
  // Colorado
  {
    name: "Colorado Potters Guild",
    city: "Denver",
    province: "Colorado",
    country: "US",
    website: "https://coloradopotters.org",
  },
  // New York
  {
    name: "Hudson River Potters",
    city: "Hudson Valley",
    province: "New York",
    country: "US",
    website: "https://www.hudsonriverpotters.net",
    bio: "An organization encompassing over 40 potters living and working in New York's Hudson Valley.",
  },
  // California
  {
    name: "Berkeley Potters Guild",
    city: "Berkeley",
    province: "California",
    country: "US",
    website: "https://berkeleypotters.com",
    bio: "A cooperative of professional local potters based in Berkeley.",
  },
  // Maryland
  {
    name: "Potters' Guild of Frederick",
    city: "Frederick",
    province: "Maryland",
    country: "US",
    website: "https://www.pottersguildoffrederick.com",
  },
  {
    name: "Potters Guild of Baltimore",
    city: "Baltimore",
    province: "Maryland",
    country: "US",
    website: "https://www.pottersguild.org",
  },
  // Michigan
  {
    name: "The Potters Guild of Ann Arbor",
    city: "Ann Arbor",
    province: "Michigan",
    country: "US",
    website: "https://www.pottersguild.net",
    bio: "A cooperative non-profit organization comprising over fifty member potters.",
  },
  // New Jersey
  {
    name: "Potters Guild of New Jersey",
    city: "New Jersey",
    province: "New Jersey",
    country: "US",
    website: "https://pottersguildnj.org",
    bio: "Founded in 1987 to promote the development of New Jersey's ceramic artists.",
  },
  // Virginia
  {
    name: "Blue Ridge Potters Guild",
    city: "Blue Ridge",
    province: "Virginia",
    country: "US",
    website: "https://www.blueridgepotters.com",
    bio: "Celebrating pottery and ceramic arts across Virginia.",
  },
  // Washington
  {
    name: "Spokane Potters' Guild",
    city: "Spokane",
    province: "Washington",
    country: "US",
    website: "https://spokanepottersguild.org",
    bio: "A non-profit, volunteer-based organization founded in 1977.",
  },
];

export const potters: Potter[] = [
  // Alberta
  {
    name: "Heather",
    studio: "Pottery By Heather",
    city: "Bon Accord",
    province: "Alberta",
    country: "CA",
    website: "https://potterybyheather.com",
    bio: "Handmade pottery and functional art from a working studio just north of Edmonton. Open by appointment.",
  },
  {
    name: "Linh Ly",
    studio: "Starfishly Clay Works",
    city: "Calgary",
    province: "Alberta",
    country: "CA",
    website: "https://www.starfishlyclay.com",
    bio: "Limited edition, artisan hand-thrown pottery with a modern twist. Based in Calgary.",
  },
  // British Columbia
  {
    name: "Kate Metten",
    studio: "Kate Metten Ceramics",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
    website: "https://www.katemetten.com",
    bio: "Wheel-thrown modernist pottery tableware glazed with hand-derived recipes from local materials. Studio on Main Street, Vancouver.",
  },
  {
    name: "Mary Fox",
    studio: "Mary Fox Pottery",
    city: "Ladysmith",
    province: "British Columbia",
    country: "CA",
    website: "https://maryfoxpottery.ca",
    bio: "Self-taught exploratory potter based in Ladysmith on Vancouver Island.",
  },
  {
    name: "Sarah Pike",
    studio: "Sarah Pike Pottery",
    city: "Fernie",
    province: "British Columbia",
    country: "CA",
    website: "https://www.sarahpikepottery.com",
    bio: "Full-time potter making functional slab-built pottery in a home studio on the edge of a ski town in Fernie, BC.",
  },
  // Ontario
  {
    name: "Karen Gray",
    studio: "The Potter's Studio & Gallery",
    city: "Huntsville",
    province: "Ontario",
    country: "CA",
    website: "https://thepottersstudio.com",
    bio: "Original Canadian Sgraffito pottery made in Muskoka. Gallery and working pottery studio in downtown Huntsville.",
  },
  {
    name: "Naomi Clement",
    studio: "Naomi Clement Ceramics",
    city: "Stratford",
    province: "Ontario",
    country: "CA",
    website: "https://naomiclement.com",
    bio: "Ceramic artist and workshop instructor creating functional ceramics from her home studio in Stratford, Ontario.",
  },
  // Quebec
  {
    name: "Céline Fafard",
    studio: "Parceline Céramique",
    city: "Montreal",
    province: "Quebec",
    country: "CA",
    website: "https://parcelineceramique.com",
    bio: "Handmade pottery on the wheel from high-quality stoneware and porcelain. Studio open by appointment in Montreal.",
  },
  // Manitoba
  {
    name: "Crystal Nykoluk",
    city: "Winnipeg",
    province: "Manitoba",
    country: "CA",
    website: "https://www.crystalnykoluk.com",
    bio: "Ceramic artist and earthshaper living and working in Winnipeg.",
  },
  // Nova Scotia
  {
    name: "Joan Bruneau",
    studio: "Nova Terra Cotta",
    city: "Lunenburg",
    province: "Nova Scotia",
    country: "CA",
    website: "https://joanbruneau.com",
    bio: "Established Nova Terra Cotta in Lunenburg in 1995. Work exhibited throughout North America and held in private and public collections.",
  },
  {
    name: "Toni Losey",
    city: "Dartmouth",
    province: "Nova Scotia",
    country: "CA",
    website: "https://www.toniloseypottery.com",
    bio: "Creates complex, highly saturated organic ceramic sculptures through the abstraction and reinterpretation of common plant life.",
  },
  {
    name: "Jessie Wright",
    studio: "JAW Pottery",
    city: "Halifax",
    province: "Nova Scotia",
    country: "CA",
    website: "https://jawpottery.com",
    bio: "Self-taught potter creating modern handmade ceramics from a small-batch studio in Halifax.",
  },
  // Saskatchewan
  {
    name: "Paula Cooley",
    city: "Saskatoon",
    province: "Saskatchewan",
    country: "CA",
    website: "https://paulacooley.com",
    bio: "Full-time ceramics artist with an active studio practice since 1999, creating both functional pottery and sculptural ceramics.",
  },
  // Oregon
  {
    name: "Sarah Wolf",
    studio: "Wolf Ceramics",
    city: "Hood River",
    province: "Oregon",
    country: "US",
    website: "https://wolfceramics.com",
    bio: "Woman-led handmade pottery studio making contemporary ceramic dinnerware from a production studio in Hood River, Oregon.",
  },
  // Colorado
  {
    name: "Curt Hammerly",
    studio: "Hammerly Ceramics",
    city: "Denver",
    province: "Colorado",
    country: "US",
    website: "https://www.hammerlyceramics.com",
    bio: "Designs and crafts one-of-a-kind porcelain mugs and ceramic art from a studio outside Denver.",
  },
  // New York
  {
    name: "Jessica Weinberg",
    studio: "Firehouse Pottery Co.",
    city: "Hudson Valley",
    province: "New York",
    country: "US",
    website: "https://www.firehousepotteryco.com",
    bio: "Handmade ceramics and tableware in regional stonewares and terra cotta, continuing the tradition of Americana makers in the Hudson Valley.",
  },
  // North Carolina
  {
    name: "Sam Dougherty",
    studio: "Sam Dougherty Pottery",
    city: "Stokes County",
    province: "North Carolina",
    country: "US",
    website: "https://samdoughertypottery.com",
    bio: "Full-time studio potter near Hanging Rock State Park, making functional handcrafted pottery and dinnerware with a wood-fired kiln.",
  },
  // Texas
  {
    name: "Stephen Salter",
    studio: "Stephen Salter Pottery",
    city: "Dallas",
    province: "Texas",
    country: "US",
    website: "https://stephensalterpottery.com",
    bio: "Brings meaningful handcrafted ceramics to the Oak Cliff community in Dallas. Started in 2018 after an apprenticeship at The Barn Pottery.",
  },
];

export function groupByProvince<T extends { province: string; country: string }>(
  items: T[]
): { province: string; country: string; items: T[] }[] {
  const map = new Map<string, T[]>();
  const sorted = [...items].sort((a, b) =>
    a.province.localeCompare(b.province)
  );
  for (const item of sorted) {
    const key = item.province;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
  }
  return Array.from(map.entries()).map(([province, items]) => ({
    province,
    country: items[0].country,
    items: items.sort((a, b) => {
      const lastName = (n: string) => n.trim().split(" ").slice(-1)[0];
      const aName = "name" in a ? lastName((a as { name: string }).name) : "";
      const bName = "name" in b ? lastName((b as { name: string }).name) : "";
      return aName.localeCompare(bName);
    }),
  }));
}
