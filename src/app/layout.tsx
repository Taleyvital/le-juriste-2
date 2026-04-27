import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yao Mardochée — Le Juriste 2.0",
  description: "Vulgariser le droit ivoirien pour les entrepreneurs et leaders de demain. Une expertise juridique moderne pour une vision stratégique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#fcf8fa] text-[#1b1b1d] antialiased">
        {children}
      </body>
    </html>
  );
}
