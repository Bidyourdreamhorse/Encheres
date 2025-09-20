import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header style={{display:"flex",gap:16,padding:"12px 20px",borderBottom:"1px solid #eee"}}>
          <Link href="/">Accueil</Link>
          <Link href="/listings">Annonces</Link>
          <Link href="/auth">Connexion</Link>
          <Link href="/test-supabase">Test Supabase</Link>
        </header>
        <main style={{padding:"24px"}}>{children}</main>
      </body>
    </html>
  );
}
