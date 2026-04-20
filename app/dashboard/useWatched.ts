"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "zts_watched_videos";

/**
 * Client-side tracking of which videos a buyer has marked watched.
 * Persists to localStorage so it survives refreshes and doesn't require
 * a backend. Per-device; clearing browser storage resets progress.
 */
export function useWatched() {
  const [watched, setWatched] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  // Load on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setWatched(new Set(parsed.filter((v): v is string => typeof v === "string")));
        }
      }
    } catch {
      // Corrupt storage; ignore.
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((s: Set<string>) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...s]));
    } catch {
      // Storage full or blocked; silently fail.
    }
  }, []);

  const toggle = useCallback(
    (id: string) => {
      setWatched((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const markWatched = useCallback(
    (id: string) => {
      setWatched((prev) => {
        if (prev.has(id)) return prev;
        const next = new Set(prev);
        next.add(id);
        persist(next);
        return next;
      });
    },
    [persist]
  );

  return { watched, toggle, markWatched, hydrated };
}
