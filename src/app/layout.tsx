import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helvetica_neue = localFont({
  src: [
    {
      path: "../fonts/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNeueLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNeueMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNeueBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/HelveticaNeueBlack.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNeueBlackItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "Voice on Aptos - %s",
    default: "Voice on Aptos",
  },
  description:
    "Voice on Aptos (VOA) is a community-driven platform where projects and protocols on the Aptos Blockchain can create and manage decentralized communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica_neue.className}>
        <main className="min-h-dvh">{children}</main>
      </body>
    </html>
  );
}
