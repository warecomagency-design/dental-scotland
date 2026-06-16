import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Papatya Dental Clinic Turkey | Scotland MeetUp Events",
  description:
    "Stop waiting years for NHS dental care. Papatya Dental Clinic Turkey brings world-class dentistry to Scottish patients — up to 70% savings, end-to-end organisation, free MeetUp events across Scotland.",
  openGraph: {
    title: "Papatya Dental Clinic Turkey | Scotland MeetUp Events",
    description:
      "Stop waiting years for NHS. Get your perfect smile in Turkey — free MeetUp events in Edinburgh, Glasgow & Aberdeen.",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
