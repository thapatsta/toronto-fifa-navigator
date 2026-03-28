"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MapPin, Calendar, BookOpen, Utensils, Newspaper } from "lucide-react";

const navItems = [
  { href: "/",          label: "Home",        mobileLabel: "Home",     icon: Home },
  { href: "/closures",  label: "Closures",    mobileLabel: "Closures", icon: MapPin },
  { href: "/matches",   label: "Matches",     mobileLabel: "Matches",  icon: Calendar },
  { href: "/guide",     label: "Guide",       mobileLabel: "Guide",    icon: BookOpen },
  { href: "/eat-watch", label: "Eat & Watch", mobileLabel: "Venues",   icon: Utensils },
  { href: "/blog",      label: "Articles",    mobileLabel: "Articles", icon: Newspaper },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* ── Desktop top nav ── */}
      <nav className="hidden md:flex sticky top-0 z-50 shadow-lg" style={{ background: "var(--navy)" }}>
        <div className="max-w-3xl mx-auto px-6 w-full flex items-center justify-between h-14">
          <Link
            href="/"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.1em", color: "white", textTransform: "uppercase" }}
          >
            <span style={{ color: "var(--gold)" }}>⚽ </span>
            Toronto <span style={{ color: "var(--red)" }}>FIFA</span> 2026
          </Link>
          <div className="flex gap-1">
            {navItems.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative px-3 py-1 transition-colors"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: active ? "white" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full" style={{ background: "var(--red)" }} />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ── Mobile top header ── */}
      <header className="md:hidden sticky top-0 z-40 px-4 py-3" style={{ background: "var(--navy)" }}>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em", color: "white", textTransform: "uppercase" }}
          >
            <span style={{ color: "var(--gold)" }}>⚽ </span>
            Toronto <span style={{ color: "var(--red)" }}>FIFA</span> 2026
          </Link>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
            World Cup
          </span>
        </div>
      </header>

      {/* ── Mobile bottom nav ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
        <div className="flex justify-around items-center h-16 px-1">
          {navItems.map(({ href, mobileLabel, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all">
                <Icon size={19} strokeWidth={active ? 2.5 : 1.7} style={{ color: active ? "var(--red)" : "var(--muted)" }} />
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.6rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: active ? "var(--red)" : "var(--muted)",
                  whiteSpace: "nowrap",
                }}>
                  {mobileLabel}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
