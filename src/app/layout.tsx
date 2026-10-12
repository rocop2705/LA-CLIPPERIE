import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

const title = "Clipperie — Un live de deux heures devient trente clips verticaux";
const description =
  "Tu envoies ta vidéo longue, tu reçois tes clips verticaux sous-titrés et titrés, prêts pour TikTok, Reels et Shorts. Première vidéo offerte.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s · Clipperie" },
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Clipperie",
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#f6f1e7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${interTight.variable}`}>
      <body className="antialiased">
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
