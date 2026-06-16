import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "İskoçya Dental MeetUp | Türkiye'de Dünya Kalitesinde Diş Tedavisi",
  description:
    "İskoçya'dan Türkiye'ye diş tedavisi için en güvenilir köprü. Ücretsiz danışmanlık, uçtan uca organizasyon, sosyal kanıt. Hemen randevu al.",
  openGraph: {
    title: "İskoçya Dental MeetUp | Türkiye'de Dünya Kalitesinde Diş Tedavisi",
    description:
      "İskoçya'dan Türkiye'ye diş tedavisi için en güvenilir köprü.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
