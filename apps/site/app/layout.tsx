import "./globals.css";
import NavBar from "./components/NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <NavBar />
        <main className="bydh-main">{children}</main>
      </body>
    </html>
  );
}
