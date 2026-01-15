import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"
import "./styles/style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scouting Selection",
  description: "The 2026 scouting app for Summit robotics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
