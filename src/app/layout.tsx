import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ari's Study Room",
  description: "A cozy space for CS degree notes and Meta interview preparation",
  keywords: ["computer science", "study notes", "meta interview", "programming", "algorithms"],
  authors: [{ name: "Arundhati" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <Header />
          <main className="p-6 lg:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
