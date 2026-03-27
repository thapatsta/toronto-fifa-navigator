import type { Metadata } from "next";
import { MapPin, Calendar, Music, Users, Clock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "FIFA Fan Festival Toronto 2026",
  description: "Everything about the FIFA Fan Festival at Fort York and The Bentway — June 11 to July 19, 2026.",
};

export default function FanFestivalPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-1">FIFA Fan Festival</h1>
        <p className="text-gray-600 text-sm">
          Toronto&apos;s free FIFA hub — live matches on big screens, cultural events, and fan experiences.
        </p>
      </div>

      {/* Key info cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="card">
          <div className="flex items-center gap-2 mb-1">
            <Calendar size={14} className="text-primary" />
            <span className="text-xs font-semibold text-gray-500">Dates</span>
          </div>
          <p className="text-sm font-bold text-gray-900">June 11 – July 19</p>
          <p className="text-xs text-gray-500">Up to 22 days</p>
        </div>
        <div className="card">
          <div className="flex items-center gap-2 mb-1">
            <MapPin size={14} className="text-primary" />
            <span className="text-xs font-semibold text-gray-500">Location</span>
          </div>
          <p className="text-sm font-bold text-gray-900">Fort York & The Bentway</p>
          <p className="text-xs text-gray-500">250 Fort York Blvd</p>
        </div>
        <div className="card">
          <div className="flex items-center gap-2 mb-1">
            <Users size={14} className="text-primary" />
            <span className="text-xs font-semibold text-gray-500">Daily Capacity</span>
          </div>
          <p className="text-sm font-bold text-gray-900">Up to 20,000</p>
          <p className="text-xs text-gray-500">per day</p>
        </div>
        <div className="card">
          <div className="flex items-center gap-2 mb-1">
            <Music size={14} className="text-primary" />
            <span className="text-xs font-semibold text-gray-500">Admission</span>
          </div>
          <p className="text-sm font-bold text-gray-900">Free</p>
          <p className="text-xs text-gray-500">Details TBC</p>
        </div>
      </div>

      {/* Fort York Boulevard note */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
        <h2 className="font-bold text-green-900 mb-2 flex items-center gap-2">
          <span>🚶</span> Fort York Blvd is Pedestrian-Only
        </h2>
        <p className="text-sm text-green-800">
          Fort York Boulevard between Angelique St and Lake Shore Blvd West is pedestrian-only for the full
          22 days of the Fan Festival. Walk right in from Bathurst St or Strachan Ave.
        </p>
      </div>

      {/* Getting there */}
      <div className="card">
        <h2 className="font-bold text-gray-900 mb-4">Getting to the Fan Festival</h2>
        <div className="space-y-3">
          {[
            {
              icon: "🚌",
              title: "TTC Streetcar (Best Option)",
              desc: "Harbourfront (509) or Bathurst (511) streetcar to Fleet Street stop. Walk south into the festival grounds.",
              color: "green",
            },
            {
              icon: "🚌",
              title: "Free Shuttle",
              desc: "Shuttle bus from St. Andrew Station (Line 1 subway) to Fleet Street hub. Runs during all festival hours.",
              color: "green",
            },
            {
              icon: "🚶",
              title: "Walk from Bathurst Station",
              desc: "Walk south on Bathurst Street to Fort York Blvd. About 20 minutes from Bloor-Bathurst. A nice stroll.",
              color: "blue",
            },
            {
              icon: "⚠️",
              title: "Note: Garrison Bridge is Closed",
              desc: "Garrison Crossing Bridge is closed for the festival duration. Cross via Strachan Ave or Bathurst St instead.",
              color: "orange",
            },
            {
              icon: "🚗",
              title: "Driving",
              desc: "Don't. No parking available near Fort York or Exhibition Place. Fort York Blvd is pedestrian-only.",
              color: "red",
            },
          ].map((opt) => (
            <div
              key={opt.title}
              className={`rounded-xl p-3 ${
                opt.color === "green" ? "bg-green-50" :
                opt.color === "blue" ? "bg-blue-50" :
                opt.color === "orange" ? "bg-amber-50" : "bg-red-50"
              }`}
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span>{opt.icon}</span>
                <span className="text-xs font-bold text-gray-900">{opt.title}</span>
              </div>
              <p className="text-xs text-gray-700">{opt.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What to expect */}
      <div className="card">
        <h2 className="font-bold text-gray-900 mb-3">What to Expect</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p>⚽ Watch all World Cup matches live on giant screens</p>
          <p>🎵 Live music and entertainment</p>
          <p>🍽️ Food vendors and concessions</p>
          <p>🎮 Interactive fan activities and FIFA experiences</p>
          <p>🏛️ Set at the historic Fort York National Historic Site</p>
          <p>🌿 At The Bentway — Toronto&apos;s linear park under the Gardiner Expressway</p>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Full programming details will be announced closer to the festival.
          Check{" "}
          <a href="https://torontofwc26.ca" className="text-primary underline" target="_blank" rel="noopener noreferrer">
            torontofwc26.ca
          </a>{" "}
          for updates.
        </p>
      </div>

      {/* Accessible access */}
      <div className="card border-blue-100">
        <h2 className="font-bold text-gray-900 mb-2">Accessibility</h2>
        <div className="space-y-1.5 text-sm text-gray-700">
          <p>♿ Accessible pick-up/drop-off available near the Fan Festival</p>
          <p>🚌 Exhibition Loop open on match days for accessible ramp deployment</p>
          <p>🅿️ One accessible parking lot at Exhibition Place on match days</p>
        </div>
      </div>

      {/* Official links */}
      <div className="flex flex-col gap-2">
        <a
          href="https://torontofwc26.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between card hover:shadow-md transition-shadow"
        >
          <div>
            <p className="text-sm font-semibold text-primary">Official Toronto 2026 Site</p>
            <p className="text-xs text-gray-500">torontofwc26.ca</p>
          </div>
          <ExternalLink size={16} className="text-gray-400" />
        </a>
        <a
          href="https://toronto.ca/fifa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between card hover:shadow-md transition-shadow"
        >
          <div>
            <p className="text-sm font-semibold text-primary">City of Toronto FIFA Info</p>
            <p className="text-xs text-gray-500">toronto.ca/fifa</p>
          </div>
          <ExternalLink size={16} className="text-gray-400" />
        </a>
      </div>
    </div>
  );
}
