export type { Country, Guild, Potter, TeachingStudio, Supplier } from "./directory-data";

import type { Country } from "./directory-data";

export function groupByProvince<T extends { province: string; country: Country }>(
  items: T[]
): { province: string; country: Country; items: T[] }[] {
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
