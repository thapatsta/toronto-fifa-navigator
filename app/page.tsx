import type { Metadata } from "next";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import MatchCard from "@/components/MatchCard";
import { matches } from "@/data/matches";
import { MapPin, Calendar, BookOpen, Music } from "lucide-react";

export const metadata: Metadata = {
  title: "Toronto FIFA Navigator — Your World Cup 2026 Guide",
};

export default function HomePage() {
  const nextMatch = matches.find((m) => new Date(m.date + "T12:00:00") >= new Date());

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
      {/* Hero */}
      <div className="text-center space-y-3">
        <div className="text-5xl mb-2">🏆</div>
        <h1 className="text-2xl font-extrabold text-gray-900 leading-tight">
          Toronto FIFA Navigator
        </h1>
        <p className="text-gray-600 text-base">
          Toronto is hosting 6 FIFA World Cup matches this summer.
          Here&apos;s everything you need to know about what&apos;s closed,
          what&apos;s open, and how to get around.
        </p>
      </div>

      {/* Countdown */}
      <div className="card">
        <CountdownTimer />
      </div>

      {/* Next match quick card */}
      {nextMatch && (
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Next Match in Toronto
          </h2>
          <MatchCard match={nextMatch} />
        </div>
      )}

      {/* Big three nav cards */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 gap-3">
          <Link href="/closures" className="card flex items-center gap-4 hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="text-accent" size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                Is My Street Affected?
              </h3>
              <p className="text-sm text-gray-500">Road closures, restrictions & transit map</p>
            </div>
            <span className="ml-auto text-gray-300 text-xl">→</span>
          </Link>

          <Link href="/matches" className="card flex items-center gap-4 hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <Calendar className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                Match Day Guide
              </h3>
              <p className="text-sm text-gray-500">All 6 matches with transit & getting there</p>
            </div>
            <span className="ml-auto text-gray-300 text-xl">→</span>
          </Link>

          <Link href="/fan-festival" className="card flex items-center gap-4 hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
              <Music className="text-transit" size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                Fan Festival Guide
              </h3>
              <p className="text-sm text-gray-500">Fort York & The Bentway — June 11 to July 19</p>
            </div>
            <span className="ml-auto text-gray-300 text-xl">→</span>
          </Link>

          <Link href="/guide" className="card flex items-center gap-4 hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
              <BookOpen className="text-purple-700" size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                Visitor Guide
              </h3>
              <p className="text-sm text-gray-500">Transit, weather, money, safety & more</p>
            </div>
            <span className="ml-auto text-gray-300 text-xl">→</span>
          </Link>
        </div>
      </div>

      {/* Quick facts */}
      <div className="bg-primary/5 rounded-2xl p-4">
        <h2 className="text-sm font-bold text-primary mb-3">The Quick Facts</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><span>📍</span><span>All matches at Toronto Stadium, Exhibition Place</span></li>
          <li className="flex gap-2"><span>📅</span><span>6 matches — June 12 to July 2, 2026</span></li>
          <li className="flex gap-2"><span>🎪</span><span>Fan Festival: June 11–July 19 at Fort York & The Bentway</span></li>
          <li className="flex gap-2"><span>🚗</span><span>No parking near venues — take TTC, GO, or the free shuttle</span></li>
          <li className="flex gap-2"><span>🌉</span><span>Garrison Crossing Bridge closed all tournament — use Strachan or Bathurst</span></li>
        </ul>
      </div>

      {/* All matches list */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
          All Toronto Matches
        </h2>
        <div className="space-y-3">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
}
