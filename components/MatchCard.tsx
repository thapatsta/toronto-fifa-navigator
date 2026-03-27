"use client";

import { useState } from "react";
import { Match } from "@/data/matches";
import { formatDate } from "@/lib/utils";
import { ChevronDown, ChevronUp, MapPin, Clock } from "lucide-react";
import TransitOption from "./TransitOption";

interface MatchCardProps {
  match: Match;
  showDetails?: boolean;
}

export default function MatchCard({ match, showDetails = false }: MatchCardProps) {
  const [expanded, setExpanded] = useState(showDetails);

  return (
    <div className="card overflow-hidden">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              match.stage === "Group Stage"
                ? "bg-blue-100 text-blue-800"
                : "bg-purple-100 text-purple-800"
            }`}>
              {match.stage}
            </span>
            {match.group && (
              <span className="text-xs text-gray-500">{match.group}</span>
            )}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1.5 font-bold text-gray-900">
              <span>{match.homeFlag}</span>
              <span className="text-base">{match.homeTeam}</span>
            </span>
            <span className="text-gray-400 text-sm font-normal">vs</span>
            <span className="flex items-center gap-1.5 font-bold text-gray-900">
              <span>{match.awayFlag}</span>
              <span className="text-base leading-snug">{match.awayTeam}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
        <span className="flex items-center gap-1">
          <Clock size={13} />
          {formatDate(match.date)} · {match.time}
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={13} />
          Toronto Stadium, Exhibition Place
        </span>
      </div>

      {match.notes && (
        <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2 mb-3">
          📌 {match.notes}
        </p>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between text-sm font-semibold text-primary hover:text-primary-light transition-colors py-2 border-t border-gray-100"
      >
        <span>Getting There & Match Day Info</span>
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {expanded && (
        <div className="mt-3 space-y-3 border-t border-gray-50 pt-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <TransitOption
              icon="🚌"
              method="TTC Streetcar"
              description="Harbourfront (509) or Bathurst (511) streetcar to Fleet Street stop. Increased frequency on match days."
              color="green"
            />
            <TransitOption
              icon="🚆"
              method="GO Transit"
              description="GO train to Exhibition Station. Must have a valid GO fare — station is customer-only on match days."
              color="blue"
            />
            <TransitOption
              icon="🚌"
              method="Free Shuttle"
              description="Free shuttle bus from St. Andrew Station (Line 1) to Fleet Street hub. Quick and free."
              color="green"
            />
            <TransitOption
              icon="🚶"
              method="Walking"
              description="Walk south from King & Strachan or King & Bathurst. Cross via Strachan or Bathurst (Garrison Bridge is closed)."
              color="blue"
            />
            <TransitOption
              icon="🚗"
              method="Driving"
              description="DON'T DRIVE. No public parking available anywhere near the venue. Seriously."
              color="red"
            />
            <TransitOption
              icon="🚕"
              method="Rideshare / Taxi"
              description="Drop-off at designated areas only — NOT near the stadium. Expect surge pricing and long waits."
              color="orange"
            />
          </div>
          <div className="bg-blue-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-blue-900 mb-1">After the Game</p>
            <p className="text-xs text-blue-800">
              TTC extends service hours for late-night crowds. Expect busy streetcars — the shuttle back to St. Andrew Station is your fastest option.
              Rideshare surge pricing will be high — consider walking to King St and grabbing transit from there.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
