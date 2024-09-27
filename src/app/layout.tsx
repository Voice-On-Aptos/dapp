import CompleteProfile from "@/components/shared/CompleteProfile";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import AptosWalletProvider from "@/providers/aptos-wallet";
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
      path: "../fonts/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
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
      <body className={`relative ${helvetica_neue.className}`}>
        <AptosWalletProvider>
          <Toaster />
          <Navbar />
          <div className="flex items-start bg-white">
            <Sidebar />
            <main className="min-h-dvh w-full pb-10 lg:pb-[3.75rem] px-4 md:px-6 lg:px-12 1xl:px-[5.375rem] bg-white-smoke-2/30">
              {/* <CompleteProfile /> */}
              {children}
            </main>
          </div>
        </AptosWalletProvider>
      </body>
    </html>
  );
}
