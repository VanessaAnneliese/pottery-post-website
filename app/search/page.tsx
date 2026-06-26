import Link from "next/link";
import { guilds, potters, type Guild, type Potter } from "@/lib/directory-data";

function highlight(text: string, query: string) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part)
      ? <mark key={i} style={{ background: "var(--c-accent)", color: "var(--c-light)", borderRadius: "2px", padding: "0 2px" }}>{part}</mark>
      : part
  );
}

function matches(text: string | undefined, q: string) {
  return text?.toLowerCase().includes(q.toLowerCase()) ?? false;
}

function GuildResult({ guild, query }: { guild: Guild; query: string }) {
  return (
    <div className="py-5 border-b" style={{ borderColor: "var(--c-surface)" }}>
      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>Guild</p>
      <p className="font-bold text-lg" style={{ fontFamily: "Georgia, serif" }}>{highlight(guild.name, query)}</p>
      <p className="text-sm mt-1" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
        {guild.city}, {guild.province} &middot; {guild.country === "CA" ? "Canada" : guild.country === "US" ? "United States" : guild.country === "EU" ? "Europe" : "Australia"}
      </p>
      {guild.bio && (
        <p className="text-sm mt-2" style={{ color: "var(--c-primary)", fontFamily: "system-ui, sans-serif" }}>{highlight(guild.bio, query)}</p>
      )}
      {guild.website && (
        <a href={guild.website} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-xs tracking-widest uppercase underline" style={{ color: "var(--c-accent-deep)", fontFamily: "system-ui, sans-serif" }}>
          Website
        </a>
      )}
    </div>
  );
}

function PotterResult({ potter, query }: { potter: Potter; query: string }) {
  return (
    <div className="py-5 border-b" style={{ borderColor: "var(--c-surface)" }}>
      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>Potter</p>
      <p className="font-bold text-lg" style={{ fontFamily: "Georgia, serif" }}>
        {highlight(potter.name, query)}{potter.studio ? <span style={{ fontWeight: "normal" }}>, {highlight(potter.studio, query)}</span> : ""}
      </p>
      <p className="text-sm mt-1" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
        {potter.city}, {potter.province} &middot; {potter.country === "CA" ? "Canada" : potter.country === "US" ? "United States" : potter.country === "EU" ? "Europe" : "Australia"}
      </p>
      {potter.bio && (
        <p className="text-sm mt-2" style={{ color: "var(--c-primary)", fontFamily: "system-ui, sans-serif" }}>{highlight(potter.bio, query)}</p>
      )}
      {potter.website && (
        <a href={potter.website} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-xs tracking-widest uppercase underline" style={{ color: "var(--c-accent-deep)", fontFamily: "system-ui, sans-serif" }}>
          Website
        </a>
      )}
    </div>
  );
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  const matchedGuilds = query
    ? guilds.filter((g) =>
        matches(g.name, query) ||
        matches(g.city, query) ||
        matches(g.province, query) ||
        matches(g.bio, query)
      )
    : [];

  const matchedPotters = query
    ? potters.filter((p) =>
        matches(p.name, query) ||
        matches(p.studio, query) ||
        matches(p.city, query) ||
        matches(p.province, query) ||
        matches(p.bio, query) ||
        matches(p.guild, query)
      )
    : [];

  const total = matchedGuilds.length + matchedPotters.length;

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--c-muted)", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Search
      </p>
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>
        {query ? `Results for "${query}"` : "Search the Directory"}
      </h1>

      {query && (
        <p className="mb-10 text-sm" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
          {total === 0 ? "No results found." : `${total} result${total !== 1 ? "s" : ""} found.`}
        </p>
      )}

      {!query && (
        <p className="mt-6 max-w-lg" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
          Use the search bar in the navigation to find potters, guilds, cities, or provinces.
        </p>
      )}

      {matchedGuilds.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "var(--c-accent)" }}>Guilds</h2>
          {matchedGuilds.map((g) => <GuildResult key={g.name} guild={g} query={query} />)}
        </div>
      )}

      {matchedPotters.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "var(--c-accent)" }}>Potters</h2>
          {matchedPotters.map((p) => <PotterResult key={p.name} potter={p} query={query} />)}
        </div>
      )}

      {query && total === 0 && (
        <div className="mt-10">
          <p className="mb-6" style={{ color: "var(--c-primary)", fontFamily: "system-ui, sans-serif" }}>
            Can&rsquo;t find who you&rsquo;re looking for? They may not be listed yet.
          </p>
          <Link
            href="/directory/submit"
            className="px-6 py-3 text-xs tracking-widest uppercase font-bold rounded-sm bg-[var(--c-accent)] hover:bg-[var(--c-accent-mid)] transition-colors"
            style={{ color: "var(--c-light)", fontFamily: "system-ui, sans-serif" }}
          >
            Add a listing
          </Link>
        </div>
      )}
    </section>
  );
}
