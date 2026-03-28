import type { Metadata } from "next";
import { matches } from "@/data/matches";
import { MapPin, Calendar } from "lucide-react";
import MatchesWithPrefs from "@/components/MatchesWithPrefs";

export const metadata: Metadata = {
  title: "Match Day Guide — All 6 Toronto Matches",
  description: "Guide for all 6 FIFA World Cup 2026 matches in Toronto — transit directions, road closures, and tips.",
};

export default function MatchesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Match Day Guide</h1>
        <p className="text-gray-600 text-sm">
          Everything you need for each of Toronto&apos;s 6 World Cup matches.
        </p>
      </div>

      {/* Venue card */}
      <div className="card bg-primary/5 border-primary/20">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
            <MapPin className="text-white" size={18} />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">All matches at Toronto Stadium</h2>
            <p className="text-sm text-gray-600">Exhibition Place, 170 Princes&apos; Blvd, Toronto</p>
            <p className="text-sm text-gray-600 mt-1">Capacity: 45,000 · Field: Natural grass</p>
          </div>
        </div>
      </div>

      {/* The golden rule */}
      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-4">
        <h2 className="font-bold text-accent mb-2">The Golden Rule</h2>
        <p className="text-sm text-gray-700 font-medium">
          🚫 Don&apos;t drive. There is no public parking anywhere near Toronto Stadium,
          Exhibition Place, or the surrounding neighbourhoods on match days.
          Take TTC, GO Transit, or the free shuttle from St. Andrew Station.
        </p>
      </div>

      {/* Match cards with save capability */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Calendar size={16} className="text-gray-500" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            {matches.length} Matches · June 12 – July 2, 2026
          </h2>
        </div>
        <MatchesWithPrefs matches={matches} />
      </div>

      {/* After game tips */}
      <div className="card">
        <h2 className="font-bold text-gray-900 mb-3">After the Final Whistle</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p>• TTC extends service hours on all match nights — you won&apos;t be stranded.</p>
          <p>• The shuttle back to St. Andrew Station is your fastest post-game exit.</p>
          <p>• Rideshare surge pricing will be extreme — consider walking north to King St first.</p>
          <p>• Strachan Ave may be pedestrianized after evening games — plan accordingly.</p>
          <p>• GO Transit also runs late service back to Union Station.</p>
        </div>
      </div>
    </div>
  );
}
