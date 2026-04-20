export interface Match {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  homeShort?: string;  // Short display name for cards (falls back to homeTeam)
  awayShort?: string;  // Short display name for cards (falls back to awayTeam)
  homeFlag: string;
  awayFlag: string;
  stage: string;
  group?: string;
  notes?: string;
  significance?: string;  // Short label shown on card: "Canada opener", "Knockout match", etc.
  utilityNote?: string;   // Practical note for match card: "Best for after-work fans", etc.
}

export const matches: Match[] = [
  {
    id: "match-1",
    date: "2026-06-12",
    time: "3:00 PM ET",
    homeTeam: "Canada",
    awayTeam: "Bosnia and Herzegovina",
    awayShort: "Bosnia & Herz.",
    homeFlag: "🇨🇦",
    awayFlag: "🇧🇦",
    stage: "Group Stage",
    group: "Group F",
    significance: "Canada opener",
    utilityNote: "Canada's first-ever home World Cup match. Expect the largest crowds of the tournament.",
  },
  {
    id: "match-2",
    date: "2026-06-17",
    time: "7:00 PM ET",
    homeTeam: "Ghana",
    awayTeam: "Panama",
    homeFlag: "🇬🇭",
    awayFlag: "🇵🇦",
    stage: "Group Stage",
    group: "Group L",
    significance: "Evening kickoff",
    utilityNote: "Best for after-work fans — evening start means more time to get there.",
  },
  {
    id: "match-3",
    date: "2026-06-20",
    time: "4:00 PM ET",
    homeTeam: "Germany",
    awayTeam: "Côte d'Ivoire",
    homeFlag: "🇩🇪",
    awayFlag: "🇨🇮",
    stage: "Group Stage",
    group: "Group C",
    significance: "Weekend match",
    utilityNote: "Weekend afternoon kickoff — great for families and casual fans.",
  },
  {
    id: "match-4",
    date: "2026-06-23",
    time: "7:00 PM ET",
    homeTeam: "Croatia",
    awayTeam: "Panama",
    homeFlag: "🇭🇷",
    awayFlag: "🇵🇦",
    stage: "Group Stage",
    group: "Group L",
    significance: "Evening kickoff",
    utilityNote: "Evening match — transit demand heaviest in the hour before kickoff.",
  },
  {
    id: "match-5",
    date: "2026-06-26",
    time: "3:00 PM ET",
    homeTeam: "Senegal",
    awayTeam: "Iraq",
    homeFlag: "🇸🇳",
    awayFlag: "🇮🇶",
    stage: "Group Stage",
    group: "Group I",
    significance: "Afternoon kickoff",
    utilityNote: "Afternoon start — allow extra travel time on a busy mid-tournament Friday.",
  },
  {
    id: "match-6",
    date: "2026-07-02",
    time: "7:00 PM ET",
    homeTeam: "Group K Runner-up",
    awayTeam: "Group L Runner-up",
    homeShort: "Grp K Runner-up",
    awayShort: "Grp L Runner-up",
    homeFlag: "⚽",
    awayFlag: "⚽",
    stage: "Round of 32",
    significance: "Knockout match",
    utilityNote: "Knockout stage — one result ends a team's tournament. Expect elevated demand.",
    notes: "Group K: Portugal, Uzbekistan, Colombia + playoff winner. Group L: England, Croatia, Ghana, Panama.",
  },
];

export function getNextMatch(): Match | null {
  const now = new Date();
  const upcoming = matches.filter((m) => new Date(m.date) >= now);
  return upcoming.length > 0 ? upcoming[0] : null;
}

export function isMatchDay(date?: Date): Match | null {
  const checkDate = date || new Date();
  const dateStr = checkDate.toISOString().split("T")[0];
  return matches.find((m) => m.date === dateStr) || null;
}

export const MATCH_DAYS = matches.map((m) => m.date);
