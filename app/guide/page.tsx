import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Visitor Guide — Getting Around Toronto for FIFA 2026",
  description: "Everything out-of-town visitors need to know for FIFA World Cup 2026 in Toronto — transit, weather, money, safety, and more.",
};

type Section = {
  emoji: string;
  title: string;
  content: ReactNode;
};

export default function GuidePage() {
  const sections: Section[] = [
    {
      emoji: "🚇",
      title: "Getting Around Toronto",
      content: (
        <div className="space-y-3 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Presto Card</h3>
            <p>Toronto runs on the Presto card — a reloadable tap card accepted on TTC, GO Transit, and most regional transit. Buy one at any subway station, Union Station, or Shoppers Drug Mart for $6. Load money at machines or the Presto app.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">TTC (Toronto Transit Commission)</h3>
            <p>Subway, streetcar, and bus. Flat fare — currently $3.30 CAD per ride with Presto ($3.35 cash). Transfers are free within 2 hours. The subway has 4 lines; Line 1 (Yonge-University) is your main artery for downtown and Exhibition area.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">GO Transit</h3>
            <p>Regional rail and bus system connecting Toronto with suburbs and airport. All routes go through Union Station. Fare-based (distance-based pricing). GO is the fastest way from the airport into downtown.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Rideshare / Taxis</h3>
            <p>Uber and Lyft operate throughout Toronto. Taxis are available at major hotels and streets. On match days, rideshare pickup near venues is restricted to designated zones — allow extra time and expect surge pricing.</p>
          </div>
        </div>
      ),
    },
    {
      emoji: "✈️",
      title: "Getting from the Airport",
      content: (
        <div className="space-y-3 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Pearson Airport (YYZ) → Downtown</h3>
            <p><strong>UP Express</strong> is the fastest: 25 minutes direct to Union Station, runs every 15 minutes, ~$12.35 CAD one-way (use Presto for a discount). From Union Station, take TTC or GO to the Exhibition area.</p>
            <p className="mt-1">Taxis and rideshares also available from Pearson — about 30-45 min to downtown depending on traffic, ~$60–80 CAD.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Billy Bishop Airport (YTZ) → Downtown</h3>
            <p>Downtown island airport, 10 minutes from the city core. Free shuttle bus or pedestrian tunnel connects to the mainland near Bathurst and Queens Quay. Walk or TTC from there.</p>
          </div>
        </div>
      ),
    },
    {
      emoji: "🌤️",
      title: "Weather in June & July",
      content: (
        <div className="space-y-2 text-sm text-gray-700">
          <p>Toronto in June/July is warm and humid. Expect <strong>20–30°C (68–86°F)</strong> with high humidity, especially in July. Thunderstorms are possible — they come fast in summer.</p>
          <div className="bg-amber-50 rounded-xl p-3 mt-2">
            <p className="font-semibold text-amber-900 mb-1">Pack:</p>
            <ul className="space-y-1 text-amber-800">
              <li>☀️ Sunscreen (SPF 50+)</li>
              <li>💧 Reusable water bottle</li>
              <li>🧥 Light layers for evenings</li>
              <li>🌧️ Compact rain jacket</li>
              <li>👟 Comfortable walking shoes</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      emoji: "💳",
      title: "Money & Tipping",
      content: (
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Currency:</strong> Canadian Dollar (CAD). USD is NOT generally accepted, though some touristy spots may take it at unfavourable rates. Exchange at the airport or use a fee-free travel card.</p>
          <p><strong>Payments:</strong> Tap/contactless is accepted almost everywhere. Visa and Mastercard are universal. American Express is widely accepted. Cash is less common but still works.</p>
          <p><strong>Tipping:</strong> Expected and important. 15–20% at restaurants and bars. $1–2 per drink at busy bars. $2–5 for taxi/rideshare. Hotels: $2–5/day for housekeeping.</p>
          <p className="text-xs text-gray-500">Note: Prices in Canada don&apos;t include HST (13% tax) — the final price is always higher than what&apos;s on the menu.</p>
        </div>
      ),
    },
    {
      emoji: "🗣️",
      title: "Language",
      content: (
        <div className="space-y-2 text-sm text-gray-700">
          <p>English is the primary language. You&apos;ll see French on federal government signage. Toronto is one of the most multilingual cities on Earth — over 200 languages are spoken here. You&apos;ll hear Tagalog, Tamil, Mandarin, Punjabi, Portuguese, and dozens more just walking around.</p>
          <p>Google Translate will handle anything you need.</p>
        </div>
      ),
    },
    {
      emoji: "🛡️",
      title: "Safety & Emergency",
      content: (
        <div className="space-y-2 text-sm text-gray-700">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-red-50 rounded-xl p-3">
              <p className="font-bold text-red-900">Emergency</p>
              <p className="text-xl font-mono text-red-800">911</p>
              <p className="text-xs text-red-700">Police, Fire, Ambulance</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="font-bold text-gray-900">Non-Emergency Police</p>
              <p className="text-sm font-mono text-gray-800">416-808-2222</p>
            </div>
          </div>
          <p>Toronto has a very low violent crime rate. Standard city precautions apply — keep an eye on your belongings in crowded areas, especially near transit hubs during matches.</p>
          <p>Stay hydrated. The combination of summer heat, humidity, and physical activity can cause heat exhaustion — especially for visitors not used to the climate. Watch for heat warnings from Environment Canada.</p>
        </div>
      ),
    },
    {
      emoji: "📱",
      title: "SIM Cards & WiFi",
      content: (
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Prepaid SIMs</strong> available at the airport, convenience stores (7-Eleven, Petro-Canada, Shoppers Drug Mart), and carrier stores. Budget carriers like Freedom Mobile and Chatr offer good rates. Main carriers are Bell, Rogers, and Telus — premium but excellent coverage.</p>
          <p><strong>eSIM:</strong> Most carriers now support eSIM — easiest option. Set it up before you fly.</p>
          <p><strong>WiFi:</strong> Free WiFi in coffee shops (Tim Hortons, Second Cup, independent cafés), Toronto Public Library branches, and some TTC subway stations. Many restaurants have WiFi.</p>
        </div>
      ),
    },
    {
      emoji: "♿",
      title: "Accessibility",
      content: (
        <div className="space-y-2 text-sm text-gray-700">
          <p>Toronto is generally well-equipped for accessibility. TTC subway stations have elevators, though not all stations — check the TTC&apos;s accessibility map before you go.</p>
          <p><strong>At the venues:</strong> Accessible pick-up/drop-off available at Toronto Stadium and a designated location near the Fan Festival. One accessible parking lot at Exhibition Place on match days. Exhibition Loop is open on match days for accessible ramp deployment.</p>
          <p><strong>Wheel-Trans:</strong> TTC&apos;s door-to-door accessible transit service. Plan ahead — book in advance.</p>
          <p>More info: <a href="https://www.ttc.ca/accessibility" className="text-primary underline" target="_blank" rel="noopener noreferrer">ttc.ca/accessibility</a></p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Visitor Guide</h1>
        <p className="text-gray-600 text-sm">
          For the 300,000+ visitors coming to Toronto for FIFA 2026. Everything you need to know before you arrive.
        </p>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <details key={section.title} className="card group">
            <summary className="flex items-center gap-3 cursor-pointer list-none">
              <span className="text-2xl">{section.emoji}</span>
              <span className="font-bold text-gray-900 flex-1">{section.title}</span>
              <span className="text-gray-400 text-sm group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 pt-3 border-t border-gray-100">
              {section.content}
            </div>
          </details>
        ))}
      </div>

      {/* Presto CTA */}
      <div className="bg-primary text-white rounded-2xl p-5">
        <h2 className="font-bold text-lg mb-2">First Thing to Do When You Arrive</h2>
        <p className="text-white/90 text-sm">
          Get a Presto card. Available at any subway station or Union Station for $6.
          Load $20–40 and you&apos;re set for the week. It works on TTC, GO Transit, and regional buses.
          Easiest way to get around the city.
        </p>
      </div>
    </div>
  );
}
