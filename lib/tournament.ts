import { matches, Match } from "@/data/matches";

// Tournament window constants
export const FAN_FEST_START = new Date("2026-06-11T00:00:00");
export const FAN_FEST_END   = new Date("2026-07-20T00:00:00"); // exclusive

export type TournamentState =
  | "pre_tournament"    // before June 11
  | "match_day"         // Toronto match today
  | "tournament_active" // in window, no Toronto match today
  | "post_tournament";  // after July 19

export interface TournamentStatus {
  state: TournamentState;
  todayMatch: Match | null;
  nextMatch: Match | null;
  daysUntilNext: number | null;
}

export function getTournamentStatus(now?: Date): TournamentStatus {
  const today = now || new Date();
  const todayStr = today.toISOString().split("T")[0];

  const todayMatch = matches.find((m) => m.date === todayStr) || null;

  const nextMatch =
    matches.find((m) => {
      const d = new Date(m.date + "T00:00:00");
      return d > today && m.date !== todayStr;
    }) || null;

  const daysUntilNext = nextMatch
    ? Math.ceil(
        (new Date(nextMatch.date + "T00:00:00").getTime() - today.getTime()) /
          (1000 * 60 * 60 * 24)
      )
    : null;

  if (todayMatch) {
    return { state: "match_day", todayMatch, nextMatch, daysUntilNext };
  }
  if (today >= FAN_FEST_END) {
    return { state: "post_tournament", todayMatch: null, nextMatch: null, daysUntilNext: null };
  }
  if (today >= FAN_FEST_START) {
    return { state: "tournament_active", todayMatch: null, nextMatch, daysUntilNext };
  }
  return { state: "pre_tournament", todayMatch: null, nextMatch, daysUntilNext };
}

/** Google Maps directions URL to Exhibition Place — works on all platforms */
export function getDirectionsUrl(): string {
  return "https://www.google.com/maps/dir/?api=1&destination=Exhibition+Place,+Toronto,+ON&travelmode=transit";
}

/** All teams playing in Toronto matches (for team preference feature) */
export const TORONTO_TEAMS = [
  { name: "Canada",        flag: "🇨🇦", country: "Canada" },
  { name: "Ghana",         flag: "🇬🇭", country: "Ghana" },
  { name: "Panama",        flag: "🇵🇦", country: "Panama" },
  { name: "Germany",       flag: "🇩🇪", country: "Germany" },
  { name: "Côte d'Ivoire", flag: "🇨🇮", country: "Côte d'Ivoire" },
  { name: "Croatia",       flag: "🇭🇷", country: "Croatia" },
  { name: "Senegal",       flag: "🇸🇳", country: "Senegal" },
];

/** Returns the Toronto matches involving a given team name */
export function getMatchesForTeam(teamName: string): Match[] {
  return matches.filter(
    (m) =>
      m.homeTeam.includes(teamName) || m.awayTeam.includes(teamName)
  );
}
