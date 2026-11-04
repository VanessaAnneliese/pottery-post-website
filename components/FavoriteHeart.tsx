"use client";
import { toggleFavorite, useFavorites } from "@/lib/favorites";

export default function FavoriteHeart({ listingKey, name }: { listingKey: string; name: string }) {
  const favorites = useFavorites();
  const active = favorites.has(listingKey);
  return (
    <button
      type="button"
      onClick={() => toggleFavorite(listingKey)}
      aria-pressed={active}
      aria-label={active ? `Remove ${name} from favorites` : `Save ${name} to favorites`}
      title={active ? "Remove from favorites" : "Save to favorites"}
      className={`align-middle ml-2 inline-flex items-center transition-colors ${active ? "text-[var(--c-accent)]" : "text-[var(--c-muted)] hover:text-[var(--c-accent)]"}`}
      style={{ background: "none", border: "none", padding: 2, cursor: "pointer", lineHeight: 0, transform: "translateY(-2px)" }}
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}
