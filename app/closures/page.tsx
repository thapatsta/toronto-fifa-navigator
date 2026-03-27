"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import ClosureList from "@/components/ClosureList";
import { AlertTriangle, Info } from "lucide-react";

const ClosureMap = dynamic(() => import("@/components/ClosureMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center">
      <p className="text-gray-400 text-sm">Loading map...</p>
    </div>
  ),
});

export default function ClosuresPage() {
  const [matchDay, setMatchDay] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Road Closures & Transit</h1>
        <p className="text-gray-600 text-sm">
          Based on the City of Toronto Mobility Plan, March 26, 2026. Additional details expected in May 2026.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex gap-3">
        <button
          onClick={() => setMatchDay(false)}
          className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors ${
            !matchDay ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Non-Match Day
        </button>
        <button
          onClick={() => setMatchDay(true)}
          className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors ${
            matchDay ? "bg-accent text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Match Day 🔴
        </button>
      </div>

      {matchDay && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex gap-2 text-sm text-amber-800">
          <AlertTriangle size={16} className="shrink-0 mt-0.5" />
          <div>
            <strong>Match Day Mode</strong> — showing additional closures active on June 12, 17, 20, 23, 26, and July 2.
            All tournament-wide closures also remain in effect.
          </div>
        </div>
      )}

      {/* Map legend */}
      <div className="flex flex-wrap gap-3 text-xs">
        <span className="flex items-center gap-1.5"><span className="w-4 h-1 bg-[#1a237e] rounded inline-block" /> TTC-only / Pedestrian</span>
        <span className="flex items-center gap-1.5"><span className="w-4 h-1 bg-[#c62828] rounded inline-block" /> Closed road</span>
        <span className="flex items-center gap-1.5"><span className="w-4 h-1 bg-[#ef6c00] rounded inline-block" /> Restricted area</span>
        <span className="flex items-center gap-1.5"><span className="w-4 h-1 bg-[#2e7d32] rounded inline-block" style={{borderTop: "2px dashed #2e7d32", background: "transparent"}} /> Walking/shuttle route</span>
      </div>

      {/* Map */}
      <ClosureMap matchDay={matchDay} />

      {/* Source note */}
      <div className="flex gap-2 text-xs text-gray-500 bg-gray-50 rounded-xl p-3">
        <Info size={13} className="shrink-0 mt-0.5" />
        <span>
          Map coordinates are approximate. Official detailed maps will be available at{" "}
          <a href="https://toronto.ca/fifa" className="underline text-primary" target="_blank" rel="noopener noreferrer">
            toronto.ca/fifa
          </a>{" "}
          closer to the tournament.
        </span>
      </div>

      {/* List */}
      <div>
        <h2 className="text-base font-bold text-gray-900 mb-3">All Closures & Transit Changes</h2>
        <ClosureList matchDay={matchDay} />
      </div>
    </div>
  );
}
