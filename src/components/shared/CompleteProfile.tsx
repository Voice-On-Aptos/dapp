"use client";
import useUser from "@/hooks/use-user";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Link from "next/link";
import React from "react";
import { BiSolidInfoCircle } from "react-icons/bi";

const CompleteProfile = () => {
  const { account } = useWallet();
  const { user, isLoading, isError } = useUser();
  return (
    <>
      {user?._id ? null : account?.address && !isLoading && !isError ? (
        <div className="my-3 flex items-start lg:items-center space-x-3 border border-sun-glow bg-serenade rounded-lg py-4 px-5 text-xs lg:text-sm text-gamboge">
          <BiSolidInfoCircle size={24} />
          <p>
            Complete your{" "}
            <Link href="/profile" className="underline">
              profile
            </Link>
          </p>
        </div>
      ) : null}
    </>
  );
};

export default CompleteProfile;
