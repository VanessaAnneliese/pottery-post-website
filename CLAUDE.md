@AGENTS.md

# Site context — Pottery Post

**This site:** Pottery Post — tagline "For Makers & Admirers". Design credit: Anneliese Designs.
- **Domain:** https://www.potterypost.ca — **LIVE / public**
- **Repo:** https://github.com/VanessaAnneliese/pottery-post-website
- **Vercel:** own project. **package.json name:** `pottery-post`
- **Nav labels:** Pottery Directory / Pottery Gallery / Pottery Postmarks
- **Metadata title:** "Pottery Post | For Makers and Admirers"

**Palette** (tokens in `app/globals.css`):
- Primary brown `#5C3D2E` (deep `#3B2314`)
- Accent terracotta `#D4622A` (deep `#C1440E`)
- Secondary accent teal `#009999`
- Background cream `#F5F0E8`, sand surfaces `#E8D5B7`

**⚠️ Folder trap:** the real project lives in `~/Documents/I love the Pottery Post/Pottery Post Website`. An OLD empty folder `~/Documents/💛🌼 I love Pottery Post/Pottery Post Website` still exists — do NOT work there. Always open this ("I love **the** Pottery Post") folder.

## Clone family
This is one of **5 clone sites**: Pottery, Village, Wellness, Nature, Handy Post. Each has its own folder + GitHub repo + Vercel project and shares this template. (Anneliese Designs / Cameron Witkowski / Kathy Terry are *separate* sites, not part of this family.)

**Per-site differences live ONLY in these files** — everything else is shared template code and should stay in sync across clones:
- `lib/site-config.ts` — brand name, tagline, nav labels, design credit
- `app/globals.css` — colour tokens (`--c-*`)
- `app/layout.tsx` — metadata (title, description, domain, canonical, OG)
- `package.json` — `name` field

## Directory data conventions (`lib/directory-data.ts`)
The directory is four exported arrays, each with its own type (read the type defs at the top of the file — they are the source of truth). To add a submitted listing, use `/add-listing`.

- **Arrays / types:** `guilds` (Guild), `potters` (Potter), `teachingStudios` (TeachingStudio), `suppliers` (Supplier). A maker who also teaches goes in `potters` with `offersClasses: true` — don't duplicate across arrays.
- **`country` is the enum `CA | US | EU | AU`, not a country name.** Map by region: Canada→`CA`, USA→`US`, Europe + transcontinental (e.g. Turkey/Türkiye)→`EU`, Australia/NZ→`AU`. The real country/state/province name goes in `province` (e.g. a Turkish studio is `province: "Turkey"`, `country: "EU"`).
- **No email field.** A submitted email is not stored here — it belongs in the submissions pipeline. Omit optional booleans when the answer is "no"; only set `offersClasses` / `offersKilnSharing` to `true`.
- **Insertion:** entries are grouped by geography under `// Region — City` comment headers. Add to the matching group with a short comment, matching surrounding formatting; don't reorder the rest.
- **Never fabricate** a bio or missing field. Trim a cut-off bio to its last complete sentence and flag what was incomplete.
