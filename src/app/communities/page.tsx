import CommunityCard from "@/components/shared/CommunityCard";
import Link from "next/link";
import React from "react";
import { BiSolidInfoCircle } from "react-icons/bi";
import { LuPlus } from "react-icons/lu";

function page() {
  return (
    <>
      <header className="mt-4 lg:mt-5 mb-18 max-w-[62.125rem]">
        <div className="mb-18 flex items-start lg:items-center space-x-3 border border-accent bg-twilight rounded-lg py-4 px-5 text-sm lg:text-base text-accent font-medium">
          <BiSolidInfoCircle size={24} />
          <p>
            All communities currently listed, are for testnet purposes and
            doesn’t have association with the protocol team
          </p>
        </div>
        <div className="border flex items-center justify-between border-white-smoke-4 rounded-lg py-6 px-5 bg-white">
          <h1 className="text-mako text-lg lg:text-2xl font-medium">
            Communities
          </h1>
          <Link
            href="/communities/new"
            title="Create community"
            className="flex items-center text-xs lg:text-sm font-medium text-mako space-x-2 border border-dark-gray rounded-lg px-4 py-[0.625rem]"
          >
            <LuPlus size={18} />
            <span>Create community</span>
          </Link>
        </div>
      </header>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-18 gap-x-[0.875rem]">
          {/* Community cards */}
          {Array(12)
            .fill("")
            .map((_, index) => (
              <CommunityCard key={index} />
            ))}
        </div>
      </section>
    </>
  );
}

export default page;
