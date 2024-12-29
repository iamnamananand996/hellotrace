import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HelloTrace | Welcome",
  description: "Align and Drive Metrics",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add the favicon link here */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          id="messenger-widget-b"
          src="https://cdn.botpenguin.com/website-bot.js"
          defer
        >
          676efcdab57ceddd2b288928,676efcb4d5900592054c546c
        </script>
      </head>
      <body className={clsx(inter.className, "antialiased")}>{children}</body>
    </html>
  );
}
