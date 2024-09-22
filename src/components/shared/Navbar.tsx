"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { IoMenu } from "react-icons/io5";
import NotificationIcon from "../custom-icons/NotificationIcon";
import VoiceIcon from "../custom-icons/VoiceIcon";
import Search from "../ui/search-input";
import AccountMenu from "./AccountMenu";
import Sidebar from "./Sidebar";
import WalletConnectButton from "./WalletConnectButton";

const Navbar = () => {
  const { connected } = useWallet();

  return (
    <nav className="bg-white py-4 lg:py-[1.1875rem] border-b border-gainsboro px-4 lg:px-8">
      <div className="flex items-center justify-between lg:space-x-10 1xl:space-x-[3.21rem] w-full max-w-screen-2xl mx-auto">
        <div className="flex lg:space-x-14 1xl:space-x-[6.0625rem] items-center justify-between">
          <Link href="/">
            <Image
              priority
              src="/images/logo.png"
              alt="Voice on Aptos"
              width={182}
              height={24.55}
              className="xl:hidden"
            />
            <Image
              src="/images/logo.png"
              alt="Voice on Aptos"
              width={218.62}
              height={29.49}
              priority
              className="hidden xl:block"
            />
          </Link>
          <Suspense>
            <Search
              placeholder="Search VOA"
              className="hidden lg:block lg:w-[25rem] 1xl:w-[34.6875rem] max-w-full"
            />
          </Suspense>
        </div>
        <div className="hidden lg:flex space-x-4 items-center justify-between">
          <span className="flex items-center space-x-2 border border-athens rounded-lg px-4 py-[0.5625rem]">
            <VoiceIcon />
            <span className="text-base font-medium text-mako">159</span>
            <span className="text-sm text-dove-gray font-normal">
              Voice Power
            </span>
          </span>
          <span className="border-x border-athens px-4">
            <span className="flex items-center justify-center px-[0.5625rem] py-[0.625rem] border border-athens rounded-lg text-dove-gray">
              <NotificationIcon />
            </span>
          </span>
          {connected ? <AccountMenu /> : <WalletConnectButton />}
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden" asChild>
            <button className="lg:hidden flex items-center justify-center px-[0.5625rem] py-[0.625rem] border border-athens rounded-lg text-dove-gray">
              <IoMenu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent className="px-0 lg:hidden">
            <Sidebar className="block max-w-full border-none h-auto" />
            <div className="px-8 flex flex-col items-center space-y-3">
              <span className="flex items-center w-full justify-center space-x-2 border border-athens rounded-lg px-4 py-[0.5625rem]">
                <VoiceIcon />
                <span className="text-base font-medium text-mako">159</span>
                <span className="text-sm text-dove-gray font-normal">
                  Voice Power
                </span>
              </span>
              {connected ? <AccountMenu /> : <WalletConnectButton />}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
