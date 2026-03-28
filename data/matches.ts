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
}

export const matches: Match[] = [
  {
    id: "match-1",
    date: "2026-06-12",
    time: "3:00 PM ET",
    homeTeam: "Canada",
    awayTeam: "European Playoff A Winner (Bosnia & Herzegovina vs Italy — TBD Mar 31)",
    awayShort: "Euro PO A Winner",
    homeFlag: "🇨🇦",
    awayFlag: "🏴",
    stage: "Group Stage",
    group: "Group F",
    notes: "Canada's first-ever home FIFA World Cup match. European Playoff A final is Bosnia & Herzegovina vs Italy on March 31, 2026.",
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
  },
  {
    id: "match-5",
    date: "2026-06-26",
    time: "3:00 PM ET",
    homeTeam: "Senegal",
    awayTeam: "FIFA Playoff 2 Winner (Bolivia vs Iraq — TBD Mar 31)",
    awayShort: "FIFA PO 2 Winner",
    homeFlag: "🇸🇳",
    awayFlag: "🏴",
    stage: "Group Stage",
    group: "Group I",
    notes: "FIFA Intercontinental Playoff 2 final is Bolivia vs Iraq on March 31, 2026.",
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
