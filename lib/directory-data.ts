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
