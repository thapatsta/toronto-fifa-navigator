"use client";

import { Match } from "@/data/matches";
import { useTournamentPrefs } from "@/hooks/useTournamentPrefs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getDirectionsUrl } from "@/lib/tournament";

interface Props {
  matches: Match[];
}

function formatDay(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return {
    weekday: d.toLocaleDateString("en-CA", { weekday: "short" }).toUpperCase(),
    month:   d.toLocaleDateString("en-CA", { month: "short" }).toUpperCase(),
    day:     d.getDate(),
  };
}

export default function MatchCardWithPrefs({ matches }: Props) {
  const { prefs, loaded, toggleSavedMatch } = useTournamentPrefs();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const nextMatchIndex = matches.findIndex((m) => new Date(m.date + "T00:00:00") >= today);

  return (
    <>
      {matches.map((match, i) => {
        const isNext  = i === nextMatchIndex;
        const isPast  = new Date(match.date + "T23:59:00") < today;
        const isSaved = loaded && prefs.savedMatchIds.includes(match.id);
        const isFollowed = loaded && prefs.followedTeam &&
          (match.homeTeam.includes(prefs.followedTeam) || match.awayTeam.includes(prefs.followedTeam));
        const d = formatDay(match.date);
        const stagger = `stagger-${Math.min(i + 1, 6)}`;

        return (
          <div
            key={match.id}
            className={`animate-fade-up ${stagger}`}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: isNext
                ? "2px solid var(--red)"
                : isFollowed
                ? "2px solid var(--navy)"
                : isSaved
                ? "2px solid var(--gold)"
                : "1.5px solid var(--border)",
              boxShadow: isNext
                ? "0 4px 24px rgba(204,41,54,0.12)"
                : isFollowed
                ? "0 4px 20px rgba(13,27,42,0.1)"
                : "0 1px 4px rgba(13,27,42,0.05)",
              opacity: isPast ? 0.5 : 1,
              transition: "box-shadow 0.2s ease",
            }}
          >
            {/* Card header row */}
            <div
              style={{
                background: isNext
                  ? "var(--red)"
                  : isFollowed
                  ? "var(--navy)"
                  : isPast
                  ? "#e8e3da"
                  : "var(--cream-2, #ede7d9)",
                padding: "0.5rem 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.3rem" }}>
                  <span
                    className="display"
                    style={{ fontSize: "1.6rem", color: (isNext || isFollowed) ? "white" : "var(--navy)", lineHeight: 1 }}
                  >
                    {d.day}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                    <span className="label" style={{ fontSize: "0.55rem", color: (isNext || isFollowed) ? "rgba(255,255,255,0.7)" : "var(--muted)" }}>
                      {d.month}
                    </span>
                    <span className="label" style={{ fontSize: "0.55rem", color: (isNext || isFollowed) ? "rgba(255,255,255,0.7)" : "var(--muted)" }}>
                      {d.weekday}
                    </span>
                  </div>
                </div>
                <span style={{ width: "1px", height: "20px", background: (isNext || isFollowed) ? "rgba(255,255,255,0.25)" : "var(--border)" }} />
                <span className="label" style={{ fontSize: "0.6rem", color: (isNext || isFollowed) ? "rgba(255,255,255,0.8)" : "var(--muted)" }}>
                  {match.time}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
                {isNext && (
                  <span className="label" style={{ background: "white", color: "var(--red)", fontSize: "0.55rem", padding: "2px 7px", borderRadius: "99px" }}>
                    Next Up
                  </span>
                )}
                {isFollowed && !isNext && (
                  <span className="label" style={{ background: "rgba(255,255,255,0.2)", color: "white", fontSize: "0.55rem", padding: "2px 7px", borderRadius: "99px" }}>
                    {prefs.followedFlag} Your Team
                  </span>
                )}
                {isPast && (
                  <span className="label" style={{ color: "var(--muted)", fontSize: "0.55rem" }}>Final</span>
                )}
                {/* Significance label */}
                {match.significance && !isPast && (
                  <span
                    className="label"
                    style={{
                      fontSize: "0.55rem", padding: "2px 7px", borderRadius: "99px",
                      background: match.significance === "Knockout match"
                        ? "rgba(120,0,200,0.15)"
                        : (isNext || isFollowed) ? "rgba(255,255,255,0.15)" : "rgba(232,160,32,0.15)",
                      color: match.significance === "Knockout match"
                        ? "#6b21a8"
                        : (isNext || isFollowed) ? "rgba(255,255,255,0.9)" : "var(--gold)",
                      border: match.significance === "Knockout match" ? "1px solid rgba(120,0,200,0.2)" : "none",
                    }}
                  >
                    {match.significance}
                  </span>
                )}
                <span
                  className="label"
                  style={{
                    fontSize: "0.55rem", padding: "2px 7px", borderRadius: "99px",
                    background: match.stage === "Group Stage"
                      ? ((isNext || isFollowed) ? "rgba(255,255,255,0.2)" : "rgba(13,27,42,0.08)")
                      : "rgba(120,0,200,0.1)",
                    color: match.stage === "Group Stage"
                      ? ((isNext || isFollowed) ? "white" : "var(--navy)")
                      : "#6b21a8",
                  }}
                >
                  {match.group ?? match.stage}
                </span>
              </div>
            </div>

            {/* Main match body */}
            <div style={{ background: "var(--card)", padding: "0.9rem 1rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem", textAlign: "center" }}>
                  <span style={{ fontSize: "2.4rem", lineHeight: 1 }}>{match.homeFlag}</span>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "var(--navy)", lineHeight: 1.2 }}>
                    {match.homeShort ?? match.homeTeam}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", padding: "0 0.5rem" }}>
                  <span className="display" style={{ fontSize: "1.4rem", color: "var(--border)", letterSpacing: "0.05em" }}>VS</span>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem", textAlign: "center" }}>
                  <span style={{ fontSize: "2.4rem", lineHeight: 1 }}>{match.awayFlag}</span>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "var(--navy)", lineHeight: 1.2 }}>
                    {match.awayShort ?? match.awayTeam}
                  </span>
                </div>
              </div>

              {/* Utility note */}
              {match.utilityNote && !isPast && (
                <p style={{
                  marginTop: "0.6rem", fontSize: "0.72rem", color: "var(--muted)",
                  fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4,
                }}>
                  {match.utilityNote}
                </p>
              )}

              {/* Actions row: Save · Match Day Info · Directions */}
              <div style={{ marginTop: "0.7rem", paddingTop: "0.6rem", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                {/* Save */}
                {loaded && (
                  <button
                    onClick={() => toggleSavedMatch(match.id)}
                    aria-label={isSaved ? "Unsave match" : "Save match"}
                    style={{
                      fontSize: "0.7rem", color: isSaved ? "var(--red)" : "var(--muted)",
                      background: isSaved ? "rgba(204,41,54,0.07)" : "transparent",
                      border: `1px solid ${isSaved ? "var(--red)" : "var(--border)"}`,
                      borderRadius: "8px", cursor: "pointer",
                      fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                      letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: "4px",
                      padding: "4px 9px",
                      transition: "all 0.15s",
                    }}
                  >
                    {isSaved ? "✓ Saved" : "+ Save"}
                  </button>
                )}
                {/* Separator */}
                <span style={{ color: "var(--border)", fontSize: "0.7rem" }}>·</span>
                {/* Match Day Info */}
                <Link
                  href={`/matches/${match.id}`}
                  style={{
                    display: "flex", alignItems: "center", gap: "3px",
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem",
                    letterSpacing: "0.05em", textTransform: "uppercase",
                    color: "var(--muted)",
                    textDecoration: "none", padding: "4px 9px",
                    border: "1px solid var(--border)", borderRadius: "8px",
                  }}
                >
                  Match Day Info
                </Link>
                {/* Separator */}
                <span style={{ color: "var(--border)", fontSize: "0.7rem" }}>·</span>
                {/* Directions */}
                <a
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "3px",
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem",
                    letterSpacing: "0.05em", textTransform: "uppercase",
                    color: (isNext || isFollowed) ? "var(--red)" : "var(--muted)",
                    textDecoration: "none",
                  }}
                >
                  Directions <ArrowRight size={11} />
                </a>
              </div>

              {match.notes && (
                <p style={{
                  marginTop: "0.5rem", fontSize: "0.7rem", color: "#92400e",
                  background: "#fef3c7", borderRadius: "8px", padding: "0.35rem 0.6rem",
                  lineHeight: 1.4,
                  display: "-webkit-box", WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>
                  📌 {match.notes}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
