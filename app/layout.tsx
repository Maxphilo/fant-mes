import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Pied } from "./components/Pied";

const titre = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-titre",
  display: "swap",
});
const texte = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-texte",
  display: "swap",
});

const base =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: "Fantômes — Trouve les abonnements que tu paies sans t'en servir",
  description:
    "Dépose ton relevé bancaire : on repère les prélèvements oubliés et on écrit les lettres de résiliation pour toi.",
  openGraph: {
    title: "Fantômes — Trouve les abonnements que tu paies sans t'en servir",
    description:
      "Dépose ton relevé bancaire : on repère les prélèvements oubliés et on écrit les lettres de résiliation pour toi.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F6F1E7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable}`}>
      <body className="font-texte antialiased">
        {children}
        <Pied />
      </body>
    </html>
  );
}
