import type { Metadata } from "next";
import { Outfit, Instrument_Sans } from "next/font/google";

import "./globals.css";
import { Toaster } from "sonner";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap", // 'swap' minimizes layout shift
  variable: "--font-outfit", // Define a CSS variable name
});
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap", // 'swap' minimizes layout shift
  variable: "--font-instrument", // Define a CSS variable name
});

export const metadata: Metadata = {
  title: "Novucrust Checkout Widget",
  description: "Submitted by Quadri Lateef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${outfit.variable} ${instrumentSans.variable} antialiased`}
      >
        {children}

        <Toaster />
      </body>
    </html>
  );
}
