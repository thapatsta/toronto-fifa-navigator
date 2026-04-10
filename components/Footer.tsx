import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16 mb-16 md:mb-0">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-3">Toronto Football Guide</h3>
            <p className="text-sm leading-relaxed">
              Built by a Toronto local to help residents and visitors experience FIFA World Cup 2026.
              Not affiliated with FIFA, Toronto FC, or the City of Toronto.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Official Sources</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="https://toronto.ca/fifa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  toronto.ca/fifa ↗
                </a>
              </li>
              <li>
                <a href="https://torontofwc26.ca" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  torontofwc26.ca ↗
                </a>
              </li>
              <li>
                <a href="https://fifa.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  fifa.com ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Pages</h3>
            <ul className="text-sm space-y-2">
              {[
                ["/match-day", "Match Day"],
                ["/matches", "Matches"],
                ["/fan-festival", "Fan Festival"],
                ["/guide", "Visitor Guide"],
                ["/eat-watch", "Eat & Watch"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-xs text-gray-500 space-y-1">
          <p>
            ⚠️ Road closure and transit information is based on the City of Toronto&apos;s Mobility Plan released March 26, 2026.
            Details may change — check{" "}
            <a href="https://toronto.ca/fifa" className="underline hover:text-gray-300">toronto.ca/fifa</a> for official updates.
          </p>
          <p>
            © 2026 Toronto Football Guide. All rights reserved.{" "}
            <Link href="/privacy-policy" className="underline hover:text-gray-300">Privacy Policy</Link>
            {" · "}
            <Link href="/contact" className="underline hover:text-gray-300">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
