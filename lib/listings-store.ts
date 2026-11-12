import { put, list } from "@vercel/blob";
import { promises as fs } from "fs";
import path from "path";

// Where submitted (paid) directory listings live. In production this is Vercel
// Blob; in local dev (no BLOB_READ_WRITE_TOKEN) it falls back to a gitignored
// .data folder so the whole pipeline can be exercised offline.
//
// Privacy: we deliberately do NOT persist the submitter's email or phone here.
// Blob objects are public, and Stripe already holds the customer's email for
// receipts and renewals. The owner can reach a maker via the Stripe customer
// (linked by the subscription id we store).

export type ListingStatus = "live" | "flagged" | "removed" | "past_due";

export interface ListingRecord {
  id: string; // Stripe subscription id — stable key, one listing per subscription
  status: ListingStatus;
  flagReasons: string[];
  createdAt: string;
  updatedAt: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  name: string;
  // Pottery category: "potter" | "guild" | "class" | "kiln" | "supplier".
  // Maps to one of the four directory arrays in lib/directory-live.ts.
  category?: string;
  country?: string;
  city?: string;
  region?: string;
  website?: string;
  studio?: string;
  guild?: string;
  bio?: string;
  teamSize?: string;
  independent?: boolean;
  offersClasses?: boolean;
  offersKilnSharing?: boolean;
  site?: string;
}

const PREFIX = "listings/";
const TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
const useBlob = !!TOKEN;
const LOCAL_DIR = path.join(process.cwd(), ".data", "listings");

const key = (id: string) => `${PREFIX}${id}.json`;
const localPath = (id: string) => path.join(LOCAL_DIR, `${id}.json`);

export async function saveListing(rec: ListingRecord): Promise<void> {
  const data = JSON.stringify(rec, null, 2);
  if (useBlob) {
    await put(key(rec.id), data, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
      token: TOKEN,
    });
  } else {
    await fs.mkdir(LOCAL_DIR, { recursive: true });
    await fs.writeFile(localPath(rec.id), data, "utf8");
  }
}

export async function listListings(): Promise<ListingRecord[]> {
  if (useBlob) {
    const { blobs } = await list({ prefix: PREFIX, token: TOKEN });
    const recs = await Promise.all(
      blobs.map(async (b) => {
        try {
          const r = await fetch(b.url, { cache: "no-store" });
          return (await r.json()) as ListingRecord;
        } catch {
          return null;
        }
      }),
    );
    return recs.filter((r): r is ListingRecord => r !== null);
  }
  try {
    const files = await fs.readdir(LOCAL_DIR);
    const recs = await Promise.all(
      files
        .filter((f) => f.endsWith(".json"))
        .map(async (f) => JSON.parse(await fs.readFile(path.join(LOCAL_DIR, f), "utf8")) as ListingRecord),
    );
    return recs;
  } catch {
    return [];
  }
}

export async function getListing(id: string): Promise<ListingRecord | null> {
  if (useBlob) {
    const { blobs } = await list({ prefix: key(id), token: TOKEN });
    const b = blobs.find((x) => x.pathname === key(id));
    if (!b) return null;
    try {
      const r = await fetch(b.url, { cache: "no-store" });
      return (await r.json()) as ListingRecord;
    } catch {
      return null;
    }
  }
  try {
    return JSON.parse(await fs.readFile(localPath(id), "utf8")) as ListingRecord;
  } catch {
    return null;
  }
}

export async function setListingStatus(id: string, status: ListingStatus): Promise<void> {
  const rec = await getListing(id);
  if (!rec) return;
  rec.status = status;
  rec.updatedAt = new Date().toISOString();
  await saveListing(rec);
}
