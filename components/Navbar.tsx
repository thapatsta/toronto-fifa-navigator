"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MapPin, Calendar, BookOpen, Utensils } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/closures", label: "Closures", icon: MapPin },
  { href: "/matches", label: "Matches", icon: Calendar },
  { href: "/guide", label: "Guide", icon: BookOpen },
  { href: "/eat-watch", label: "Eat & Watch", icon: Utensils },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop top nav */}
      <nav className="hidden md:flex sticky top-0 z-50 bg-primary text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 w-full flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-lg tracking-tight">
            🏆 Toronto FIFA Navigator
          </Link>
          <div className="flex gap-6">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium hover:text-red-300 transition-colors ${
                  pathname === href ? "text-red-300 border-b-2 border-red-300 pb-1" : "text-white/90"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-colors ${
                  active ? "text-primary" : "text-gray-500"
                }`}
              >
                <Icon size={20} strokeWidth={active ? 2.5 : 1.8} />
                <span className={`text-[10px] font-medium ${active ? "text-primary" : "text-gray-500"}`}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile top header */}
      <header className="md:hidden sticky top-0 z-40 bg-primary text-white px-4 py-3 shadow-md">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-base tracking-tight">
            🏆 Toronto FIFA Navigator
          </Link>
          <span className="text-xs text-white/70 font-medium">2026 World Cup</span>
        </div>
      </header>
    </>
  );
}
