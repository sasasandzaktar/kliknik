import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Kliknik — digitalni marketing, Zagreb",
  description:
    "Vodimo društvene mreže, oglase i sadržaj za brendove koji žele više od lajkova — stvarne upite, prodaju i klijente.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hr"
      className={`${archivo.variable} ${plexMono.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
