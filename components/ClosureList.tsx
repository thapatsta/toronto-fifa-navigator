"use client";

import { useState } from "react";
import { fullTournamentClosures, matchDayClosures, transitEnhancements, Closure } from "@/data/closures";
import { Search } from "lucide-react";

const typeLabels: Record<Closure["type"], { label: string; className: string }> = {
  road_closure: { label: "Road Closed", className: "tag-closure" },
  restriction: { label: "Restricted", className: "tag-restriction" },
  parking: { label: "Parking", className: "tag-restriction" },
  transit_change: { label: "Transit", className: "tag-transit" },
  cycling: { label: "Cycling", className: "tag-cycling" },
  pedestrian: { label: "Pedestrian", className: "tag-transit" },
};

interface ClosureListProps {
  matchDay?: boolean;
}

export default function ClosureList({ matchDay = false }: ClosureListProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "full_tournament" | "match_day_only">("all");

  const allItems = matchDay
    ? [...fullTournamentClosures, ...matchDayClosures, ...transitEnhancements]
    : [...fullTournamentClosures, ...transitEnhancements.filter((t) => t.scope === "full_tournament")];

  const filtered = allItems.filter((c) => {
    const matchesSearch =
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.area.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || c.scope === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search closures..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as typeof filter)}
          className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="all">All Closures</option>
          <option value="full_tournament">Full Tournament</option>
          <option value="match_day_only">Match Days Only</option>
        </select>
      </div>

      <div className="space-y-3">
        {filtered.length === 0 && (
          <p className="text-gray-500 text-sm text-center py-6">No closures match your search.</p>
        )}
        {filtered.map((closure) => {
          const typeInfo = typeLabels[closure.type];
          return (
            <div key={closure.id} className="card">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-sm text-gray-900">{closure.name}</h3>
                    <span className={typeInfo.className}>{typeInfo.label}</span>
                    {closure.scope === "full_tournament" ? (
                      <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                        All Tournament
                      </span>
                    ) : (
                      <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                        Match Days Only
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{closure.description}</p>
                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <span className="text-xs font-semibold text-gray-700">Alternative: </span>
                    <span className="text-xs text-gray-600">{closure.alternative}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">📍 {closure.area}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
