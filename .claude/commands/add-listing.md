---
description: Add a submitted directory listing to lib/directory-data.ts
argument-hint: [paste the submission, or leave blank to be prompted]
---

You are adding a directory listing submitted by a visitor (usually pasted from an email or form) to `lib/directory-data.ts`.

## The submission

$ARGUMENTS

If the section above is empty, ask the user to paste the submission, then continue.

## How to add it — follow these steps exactly

1. **Read the schema first.** Read the top of `lib/directory-data.ts` (the `Country` type and the `Guild` / `Potter` / `TeachingStudio` / `Supplier` type definitions). Trust what you read there over anything in this file — the schema is the source of truth and may have changed.

2. **Pick the array** the listing belongs in, based on what was submitted:
   - `potters` — an individual maker or a maker's studio/brand. Use the `studio` field for a studio/brand name when the person's name is also given.
   - `guilds` — a guild, association, or collective.
   - `teachingStudios` — a studio whose main offering is classes/teaching.
   - `suppliers` — a shop selling clay, tools, glazes, equipment.
   When ambiguous (e.g. a potter who also teaches), prefer `potters` with `offersClasses: true` rather than duplicating into two arrays — match how similar existing entries are handled.

3. **Map the fields** to the schema:
   - **Country** is the `CA | US | EU | AU` enum, NOT the country name. Map by region: Canada→`CA`, USA→`US`, Europe **and** nearby/transcontinental countries like Turkey/Türkiye→`EU`, Australia/NZ→`AU`. Put the actual country or state/province name in the `province` field (e.g. a Turkish studio is `province: "Turkey"`, `country: "EU"`). If the region genuinely doesn't fit the four buckets, stop and ask the user.
   - **Only include fields that exist in the type.** There is no email field — a submitted email address is NOT stored here (it belongs in the submissions pipeline). "Offers classes: No" / "Kiln sharing: No" means simply omit the optional boolean; only set `offersClasses: true` / `offersKilnSharing: true` when the answer is yes.
   - Normalise the website to a full `https://` URL. Preserve accented characters (e.g. Kütahya, Bilgiç) exactly.

4. **Insert in the right place.** Entries are grouped by geography with `// Region — City` comment headers. Find the matching group (or the closest one) and add the new entry there with a brief `// Country — City` comment above it, matching the surrounding indentation and comma style. Do not reformat or reorder anything else.

5. **Flag problems — do not invent data.** If the submission is cut off mid-sentence, contradictory, or missing something required by the type (name, city, province, country), add what you safely can and tell the user exactly what was incomplete and what you did about it. Never fabricate a bio or fill a gap with a guess. Trim a dangling partial sentence to the last complete sentence rather than leaving it broken.

6. **Report** concisely: which array, the mapped `country`/`province`, which fields you dropped (and why), and anything you flagged. Then ask whether to commit (and, if yes, whether to push — pushing triggers the Vercel deploy). Commit only the `lib/directory-data.ts` change unless told otherwise.
