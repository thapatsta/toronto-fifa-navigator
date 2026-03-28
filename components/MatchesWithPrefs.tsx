"use client";

import { Match } from "@/data/matches";
import MatchCard from "./MatchCard";
import { useTournamentPrefs } from "@/hooks/useTournamentPrefs";

interface Props {
  matches: Match[];
}

export default function MatchesWithPrefs({ matches }: Props) {
  const { prefs, loaded, toggleSavedMatch } = useTournamentPrefs();

  return (
    <div className="space-y-3">
      {matches.map((match) => (
        <MatchCard
          key={match.id}
          match={match}
          showDetails={false}
          saved={loaded && prefs.savedMatchIds.includes(match.id)}
          onToggleSave={loaded ? toggleSavedMatch : undefined}
        />
      ))}
    </div>
  );
}
