"use client";

import Link from "next/link";
import { useFavorites } from "@/lib/favorites";

// Renders a link to the saved directory listings, only when the viewer has
// favorites saved on this device. Opens the directory in favorites view.
export default function FavoritesLink({ className }: { className?: string }) {
  const favorites = useFavorites();
  if (favorites.size === 0) return null;
  return (
    <Link
      href="/directory?favorites=1"
      className={className ?? "text-sm tracking-widest uppercase underline"}
      style={{ color: "var(--c-teal)", fontFamily: "system-ui, sans-serif" }}
    >
      See my favorites ({favorites.size})
    </Link>
  );
}
