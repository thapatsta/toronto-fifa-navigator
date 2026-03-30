"use client";

import { useState, useEffect, useCallback } from "react";
import { trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "fifa-toronto-prefs";

export interface TournamentPrefs {
  followedTeam: string | null;   // team name e.g. "Canada"
  followedFlag: string | null;   // emoji e.g. "🇨🇦"
  savedMatchIds: string[];        // e.g. ["match-1", "match-3"]
  onboardingDismissed: boolean;
}

const DEFAULT_PREFS: TournamentPrefs = {
  followedTeam: null,
  followedFlag: null,
  savedMatchIds: [],
  onboardingDismissed: false,
};

export function useTournamentPrefs() {
  const [prefs, setPrefs] = useState<TournamentPrefs>(DEFAULT_PREFS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setPrefs({ ...DEFAULT_PREFS, ...JSON.parse(raw) });
    } catch {
      // localStorage unavailable or corrupt — use defaults
    }
    setLoaded(true);
  }, []);

  const save = useCallback((updated: TournamentPrefs) => {
    setPrefs(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // silent fail
    }
  }, []);

  const setFollowedTeam = useCallback(
    (team: string | null, flag: string | null) => {
      save({ ...prefs, followedTeam: team, followedFlag: flag });
      if (team) {
        trackEvent("team_follow", { team });
      }
    },
    [prefs, save]
  );

  const toggleSavedMatch = useCallback(
    (matchId: string) => {
      const already = prefs.savedMatchIds.includes(matchId);
      save({
        ...prefs,
        savedMatchIds: already
          ? prefs.savedMatchIds.filter((id) => id !== matchId)
          : [...prefs.savedMatchIds, matchId],
      });
      trackEvent(already ? "match_unsave" : "match_save", { match_id: matchId });
    },
    [prefs, save]
  );

  const dismissOnboarding = useCallback(() => {
    save({ ...prefs, onboardingDismissed: true });
  }, [prefs, save]);

  return {
    prefs,
    loaded,
    setFollowedTeam,
    toggleSavedMatch,
    dismissOnboarding,
  };
}
