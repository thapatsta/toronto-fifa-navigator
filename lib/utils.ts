import { matches, Match } from "@/data/matches";

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatShortDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
  });
}

export function getCountdownToNextMatch(): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isMatchDay: boolean;
  isPast: boolean;
} | null {
  const nextMatch = matches.find((m) => {
    const matchDate = new Date(m.date + "T12:00:00");
    return matchDate >= new Date(new Date().toDateString());
  });

  if (!nextMatch) return null;

  const now = new Date();
  const matchTime = new Date(nextMatch.date + "T" + convertTimeTo24h(nextMatch.time));
  const diff = matchTime.getTime() - now.getTime();

  if (diff < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isMatchDay: true, isPast: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  const isMatchDay = days === 0;

  return { days, hours, minutes, seconds, isMatchDay, isPast: false };
}

function convertTimeTo24h(timeStr: string): string {
  const [time, period] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`;
}

export function getCurrentStatus(): {
  type: "match_day" | "fan_festival" | "normal";
  match?: Match;
  message: string;
} {
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const todayMatch = matches.find((m) => m.date === todayStr);
  if (todayMatch) {
    return {
      type: "match_day",
      match: todayMatch,
      message: `Match Day: ${todayMatch.homeTeam} vs ${todayMatch.awayTeam} — ${todayMatch.time}`,
    };
  }

  const fanFestStart = new Date("2026-06-11");
  const fanFestEnd = new Date("2026-07-19");
  if (today >= fanFestStart && today <= fanFestEnd) {
    return {
      type: "fan_festival",
      message: "FIFA Fan Festival Open Today — Fort York & The Bentway",
    };
  }

  return {
    type: "normal",
    message: "No Match Today",
  };
}
