import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import NotificationIcon from "../custom-icons/NotificationIcon";
import VoiceIcon from "../custom-icons/VoiceIcon";
import Search from "../ui/search-input";
import WalletConnectButton from "./WalletConnectButton";

const Navbar = () => {
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
          {/* <span className="flex items-center space-x-2 border border-athens rounded-lg px-4 py-[0.5625rem]">
            <span className="inline-block size-[1.75rem] bg-gainsboro rounded-full"></span>
            <span className="font-medium text-sm text-abbey">
              0xce91...4f8D
            </span>
            <MdKeyboardArrowDown size={16} />
          </span> */}
          <WalletConnectButton />
        </div>
        <button className="md:hidden text-shark-3">
          <IoMenu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
