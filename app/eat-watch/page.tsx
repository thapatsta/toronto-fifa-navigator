"use client";

import { useState } from "react";
import { restaurants } from "@/data/restaurants";
import { watchParties } from "@/data/watchParties";
import RestaurantCard from "@/components/RestaurantCard";
import NeighbourhoodFilter from "@/components/NeighbourhoodFilter";
import { Monitor, UtensilsCrossed } from "lucide-react";

const countryGroups = [
  { country: "Canada", flag: "🇨🇦" },
  { country: "Ghana", flag: "🇬🇭" },
  { country: "Panama", flag: "🇵🇦" },
  { country: "Germany", flag: "🇩🇪" },
  { country: "Côte d'Ivoire", flag: "🇨🇮" },
  { country: "Croatia", flag: "🇭🇷" },
  { country: "Senegal", flag: "🇸🇳" },
];

export default function EatWatchPage() {
  const [activeTab, setActiveTab] = useState<"eat" | "watch">("eat");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState("");

  const allNeighbourhoods = [...new Set(watchParties.map((w) => w.neighbourhood))].filter(
    (n) => n !== "Multiple Locations"
  );

  const filteredRestaurants = restaurants.filter((r) => {
    const matchCountry = !selectedCountry || r.country === selectedCountry;
    return matchCountry;
  });

  const filteredBars = watchParties.filter((w) => {
    const matchN = !selectedNeighbourhood || w.neighbourhood === selectedNeighbourhood;
    return matchN;
  });

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Eat & Watch</h1>
        <p className="text-gray-600 text-sm">
          Eat like the teams playing in Toronto. Watch the games across the city.
        </p>
      </div>

      {/* Tab toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("eat")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            activeTab === "eat" ? "bg-primary text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          <UtensilsCrossed size={15} />
          Eat Like the Teams
        </button>
        <button
          onClick={() => setActiveTab("watch")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            activeTab === "watch" ? "bg-primary text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          <Monitor size={15} />
          Watch Parties & Bars
        </button>
      </div>

      {activeTab === "eat" && (
        <div className="space-y-6">
          {/* Country filter pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCountry("")}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedCountry === "" ? "bg-primary text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              All
            </button>
            {countryGroups.map(({ country, flag }) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCountry === country ? "bg-primary text-white" : "bg-gray-100 text-gray-700"
                }`}
              >
                {flag} {country}
              </button>
            ))}
          </div>

          {/* Grouped by country */}
          {selectedCountry ? (
            <div>
              <h2 className="font-bold text-gray-900 mb-3">
                {countryGroups.find((c) => c.country === selectedCountry)?.flag} {selectedCountry} Restaurants
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {filteredRestaurants.map((r) => (
                  <RestaurantCard key={r.id} restaurant={r} />
                ))}
              </div>
            </div>
          ) : (
            countryGroups.map(({ country, flag }) => {
              const countryRests = restaurants.filter((r) => r.country === country);
              if (countryRests.length === 0) return null;
              return (
                <div key={country}>
                  <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>{flag}</span>
                    <span>{country}</span>
                  </h2>
                  <div className="grid grid-cols-1 gap-3">
                    {countryRests.map((r) => (
                      <RestaurantCard key={r.id} restaurant={r} />
                    ))}
                  </div>
                </div>
              );
            })
          )}

          <p className="text-xs text-gray-500 text-center">
            Restaurant info verified as of March 2026. Always call ahead or check Google Maps for current hours.
          </p>
        </div>
      )}

      {activeTab === "watch" && (
        <div className="space-y-5">
          <div>
            <p className="text-sm text-gray-600 mb-3">
              Filter by neighbourhood:
            </p>
            <NeighbourhoodFilter
              neighbourhoods={allNeighbourhoods}
              selected={selectedNeighbourhood}
              onChange={setSelectedNeighbourhood}
            />
          </div>

          <div className="space-y-3">
            {filteredBars.map((bar) => (
              <div key={bar.id} className="card hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{bar.name}</h3>
                  <div className="flex gap-1 shrink-0">
                    {bar.hasOutdoorScreen && (
                      <span className="text-xs bg-green-100 text-green-800 font-semibold px-2 py-0.5 rounded-full">
                        📺 Outdoor
                      </span>
                    )}
                    {bar.hasPatio && (
                      <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded-full">
                        🌿 Patio
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{bar.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {bar.features.map((f) => (
                      <span key={f} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                  <a
                    href={bar.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary hover:text-primary-light transition-colors ml-2 shrink-0"
                  >
                    📍 {bar.neighbourhood}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 rounded-xl p-3 text-xs text-amber-800">
            <strong>Tip:</strong> On match days, Toronto sports bars fill up fast — especially for evening kickoffs.
            Arrive 30–60 minutes early to get a seat. The Fan Festival at Fort York is the official free option
            if you can&apos;t get into a bar.
          </div>
        </div>
      )}
    </div>
  );
}
