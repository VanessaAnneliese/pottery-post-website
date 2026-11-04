"use client";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "pp-favorites";
const EMPTY: ReadonlySet<string> = new Set();
let favorites: Set<string> = loadInitial();
const listeners = new Set<() => void>();
let storageBound = false;

function loadInitial(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? new Set(arr.filter((x) => typeof x === "string")) : new Set();
  } catch {
    return new Set();
  }
}

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites]));
  } catch {}
}

function emit() {
  for (const l of listeners) l();
}

function bindStorageSync() {
  if (storageBound || typeof window === "undefined") return;
  storageBound = true;
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) {
      favorites = loadInitial();
      emit();
    }
  });
}

function subscribe(listener: () => void): () => void {
  bindStorageSync();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): ReadonlySet<string> {
  return favorites;
}

function getServerSnapshot(): ReadonlySet<string> {
  return EMPTY;
}

export function toggleFavorite(key: string): void {
  const next = new Set(favorites);
  if (next.has(key)) next.delete(key);
  else next.add(key);
  favorites = next;
  persist();
  emit();
}

export function useFavorites(): ReadonlySet<string> {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
