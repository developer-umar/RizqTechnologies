import { Geist, Geist_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
