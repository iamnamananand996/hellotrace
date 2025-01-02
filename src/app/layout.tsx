import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          id="messenger-widget-b"
          src="https://cdn.botpenguin.com/website-bot.js"
          defer
        ></script>
      </head>
      <body className={clsx(inter.className, "antialiased")}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
