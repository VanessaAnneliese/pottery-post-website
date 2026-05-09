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
      const aName = "name" in a ? (a as { name: string }).name : "";
      const bName = "name" in b ? (b as { name: string }).name : "";
      return aName.localeCompare(bName);
    }),
  }));
}
