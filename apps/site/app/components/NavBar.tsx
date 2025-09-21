"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/listings", label: "Annonces" },
  { href: "/auth", label: "Connexion" },
  { href: "/test-supabase", label: "Test Supabase" },
];

export default function NavBar() {
  const pathname = usePathname();
  const active = useMemo(() => pathname || "/", [pathname]);
  return (
    <header className="bydh-header">
      <nav className="bydh-nav">
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className={`bydh-link ${active === l.href ? "active" : ""}`}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
