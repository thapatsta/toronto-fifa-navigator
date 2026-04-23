"use client";

import { useState } from "react";
import Link from "next/link";
import { matches } from "@/data/matches";
import { getMatchesForTeam } from "@/lib/tournament";
import { useTournamentPrefs } from "@/hooks/useTournamentPrefs";
import TeamSelector from "./TeamSelector";
import { Bookmark, ChevronRight, Star } from "lucide-react";

export default function MyTournament() {
  const { prefs, loaded, setFollowedTeam, toggleSavedMatch } = useTournamentPrefs();
  const [showSelector, setShowSelector] = useState(false);

  if (!loaded) return null;

  const savedMatches = matches.filter((m) => prefs.savedMatchIds.includes(m.id));
  const teamMatches  = prefs.followedTeam ? getMatchesForTeam(prefs.followedTeam) : [];
  const hasContent   = savedMatches.length > 0 || prefs.followedTeam;

  return (
    <>
      {/* Team selector overlay */}
      {showSelector && (
        <TeamSelector
          currentTeam={prefs.followedTeam}
          onSelect={setFollowedTeam}
          onDismiss={() => setShowSelector(false)}
        />
      )}

      {!hasContent ? (
        /* ── COMPACT MODE: small inline prompt when no team followed ── */
        <section className="px-4 pb-5 max-w-2xl mx-auto">
          <button
            type="button"
            onClick={() => setShowSelector(true)}
            style={{
              width: "100%",
              borderRadius: "14px",
              border: "1.5px dashed var(--border)",
              background: "var(--card)",
              padding: "0.75rem 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "border-color 0.15s, box-shadow 0.15s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "10px",
                background: "rgba(13,27,42,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Star size={14} style={{ color: "var(--navy)" }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                  fontSize: "0.9rem", color: "var(--navy)", lineHeight: 1.2,
                }}>
                  Follow a team
                </p>
                <p style={{ fontSize: "0.7rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
                  Get a personalized match plan
                </p>
              </div>
            </div>
            <ChevronRight size={16} style={{ color: "var(--muted)" }} />
          </button>
        </section>
      ) : (
        /* ── FULL MODE: section with followed team + saved matches ── */
        <section className="px-4 pb-7 max-w-2xl mx-auto">
          {/* Section header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
            <h2 className="display" style={{ fontSize: "1.9rem", color: "var(--navy)", lineHeight: 1 }}>
              My Match Plan
            </h2>
            <button
              type="button"
              onClick={() => setShowSelector(true)}
              style={{
                display: "flex", alignItems: "center", gap: "0.3rem",
                padding: "4px 12px", borderRadius: "99px",
                border: "1.5px solid var(--border)",
                background: prefs.followedTeam ? "var(--navy)" : "transparent",
                color: prefs.followedTeam ? "white" : "var(--muted)",
                cursor: "pointer", fontSize: "0.72rem",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, letterSpacing: "0.05em",
                transition: "all 0.15s",
                maxWidth: "160px", overflow: "hidden",
                whiteSpace: "nowrap", textOverflow: "ellipsis",
                flexShrink: 0,
              }}
            >
              {prefs.followedTeam
                ? <>{prefs.followedFlag} {prefs.followedTeam}</>
                : <><Star size={12} /> Follow a team</>
              }
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {/* Followed team matches */}
            {prefs.followedTeam && teamMatches.map((match) => {
              const isSaved = prefs.savedMatchIds.includes(match.id);
              return (
                <MatchRow
                  key={match.id}
                  match={match}
                  isSaved={isSaved}
                  onToggle={() => toggleSavedMatch(match.id)}
                  accent="var(--navy)"
                  label={`${prefs.followedFlag} ${prefs.followedTeam}`}
                />
              );
            })}

            {/* Saved matches not in followed team */}
            {savedMatches
              .filter((m) => !teamMatches.find((tm) => tm.id === m.id))
              .map((match) => (
                <MatchRow
                  key={match.id}
                  match={match}
                  isSaved={true}
                  onToggle={() => toggleSavedMatch(match.id)}
                  accent="var(--red)"
                  label="Saved"
                />
              ))
            }
          </div>
        </section>
      )}
    </>
  );
}

function MatchRow({
  match,
  isSaved,
  onToggle,
  accent,
  label,
}: {
  match: (typeof matches)[0];
  isSaved: boolean;
  onToggle: () => void;
  accent: string;
  label: string;
}) {
  const dateObj = new Date(match.date + "T12:00:00");
  const dateStr = dateObj.toLocaleDateString("en-CA", { month: "short", day: "numeric", weekday: "short" });

  return (
    <div
      style={{
        borderRadius: "14px", border: "1.5px solid var(--border)",
        background: "var(--card)", overflow: "hidden",
        display: "flex", alignItems: "stretch",
      }}
    >
      {/* Accent bar */}
      <div style={{ width: "4px", background: accent, flexShrink: 0 }} />

      {/* Content */}
      <div style={{ flex: 1, padding: "0.75rem 0.85rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        {/* Date */}
        <div style={{ flexShrink: 0, textAlign: "center", minWidth: "40px" }}>
          <p className="label" style={{ fontSize: "0.55rem", color: "var(--muted)" }}>
            {dateStr.split(",")[0].toUpperCase()}
          </p>
          <p className="display" style={{ fontSize: "1.4rem", color: "var(--navy)", lineHeight: 1 }}>
            {dateObj.getDate()}
          </p>
          <p className="label" style={{ fontSize: "0.5rem", color: "var(--muted)" }}>
            {dateStr.split(" ")[1]?.toUpperCase()}
          </p>
        </div>

        <div style={{ width: "1px", height: "36px", background: "var(--border)", flexShrink: 0 }} />

        {/* Match info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="label" style={{ fontSize: "0.55rem", color: accent, marginBottom: "2px" }}>
            {label.toUpperCase()}
          </p>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--navy)", lineHeight: 1.2 }}>
            {match.homeFlag} {match.homeShort ?? match.homeTeam} vs {match.awayShort ?? match.awayTeam} {match.awayFlag}
          </p>
          <p style={{ fontSize: "0.7rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginTop: "2px" }}>
            {match.time}
          </p>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexShrink: 0 }}>
          <button
            type="button"
            onClick={onToggle}
            aria-label={isSaved ? "Unsave match" : "Save match"}
            style={{
              padding: "5px", borderRadius: "8px",
              border: "1px solid", borderColor: isSaved ? "var(--red)" : "var(--border)",
              background: isSaved ? "rgba(204,41,54,0.08)" : "transparent",
              color: isSaved ? "var(--red)" : "var(--muted)",
              cursor: "pointer", display: "flex",
            }}
          >
            <Bookmark size={13} fill={isSaved ? "currentColor" : "none"} />
          </button>
          <Link href={`/matches/${match.id}`} style={{ color: "var(--muted)", display: "flex" }}>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
