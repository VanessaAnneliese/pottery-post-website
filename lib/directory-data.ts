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
  {
    name: "Ontario Crafts Council",
    city: "Toronto",
    province: "Ontario",
    country: "CA",
    website: "https://ontariocrafts.ca",
    bio: "Supporting craft and craft artists across Ontario.",
  },
  {
    name: "Craft Council of British Columbia",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
    website: "https://craftcouncilbc.ca",
  },
  {
    name: "New York Ceramics & Glass Fair",
    city: "New York",
    province: "New York",
    country: "US",
  },
];

export const potters: Potter[] = [
  {
    name: "Jane Doe",
    studio: "Earthen Studio",
    city: "Whitby",
    province: "Ontario",
    country: "CA",
    bio: "Wheel-thrown stoneware with a focus on functional everyday pieces.",
  },
  {
    name: "Marie Tremblay",
    city: "Montreal",
    province: "Quebec",
    country: "CA",
    bio: "Hand-built vessels inspired by the St. Lawrence River.",
  },
  {
    name: "Sam Park",
    studio: "Park Ceramics",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
  },
  {
    name: "Laura Chen",
    city: "Portland",
    province: "Oregon",
    country: "US",
    bio: "Raku and wood-fired ceramics.",
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
