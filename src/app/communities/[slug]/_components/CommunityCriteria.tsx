"use client";
import CopyIcon from "@/components/custom-icons/CopyIcon";
import WalletConnectButton from "@/components/shared/WalletConnectButton";
import RAvatar from "@/components/ui/avatar-compose";
import Modal from "@/components/ui/modal";
import useUser from "@/hooks/use-user";
import { cn, shortenAddress } from "@/lib/utils";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { toast } from "sonner";

interface AddressCardProps {
  href: string;
  title: string;
  value: string;
}

const AddressCard = ({ href, title, value }: AddressCardProps) => {
  const copyHandler = () => {
    navigator.clipboard.writeText(value);
    toast("Address Copied.");
  };
  return (
    <Link
      href={href}
      className="w-full bg-white text-mako p-3 lg:p-[0.875rem] border-t border-athens py-18 flex items-start justify-between"
    >
      <div className="flex items-start space-x-[0.625rem]">
        {/* <span className="size-[1.125rem] inline-block rounded-full bg-athens"></span> */}
        <span>
          <h4 className="text-mako mb-2 font-medium uppercase text-xs">
            {title}
          </h4>
          <button
            onClick={copyHandler}
            className="text-xs text-abbey flex items-center space-x-[0.375rem]"
          >
            <span>{shortenAddress(value)}</span>
            <CopyIcon />
          </button>
        </span>
      </div>
      <GoArrowUpRight size={12} />
    </Link>
  );
};

interface CommunityCriteriaProps {
  disableJoin?: boolean;
  creator: string;
  token_address: string;
  criterias: string[];
  members: string[];
}

const CommunityCriteria = ({
  members,
  disableJoin,
  creator,
  token_address,
  criterias,
}: CommunityCriteriaProps) => {
  const { account, connected } = useWallet();
  const { isLoading, user } = useUser();
  const member = isLoading
    ? false
    : members?.find((member) => member === user?._id);
  const joined = member ? true : false;
  const [joinCommunity, setJoinCommunityState] = useState(false);

  return (
    <>
      <div className="w-full bg-white rounded-lg text-mako p-3 pb-6 lg:p-4 lg:pb-8 border border-alice-blue">
        <h2 className="font-bold text-xs text-shark mb-3">
          COMMUNITY CRITERIA
        </h2>
        <ul className="mb-18 list-decimal pl-4 list-outside space-y-3 text-dove-gray text-xs">
          {criterias.map((criteria, index) => (
            <li key={index} className="first-letter:capitalize">
              {criteria}
            </li>
          ))}
        </ul>
        <div>
          <AddressCard href="#" title="Token Address" value={token_address} />
          <AddressCard href="#" title="CREATOR ADDRESS" value={creator} />
        </div>
        {creator === account?.address ? null : connected ? (
          <button
            disabled={disableJoin}
            onClick={() => setJoinCommunityState(true)}
            className={cn(
              "bg-accent px-4 py-2.5 w-full mt-6 disabled:opacity-0 disabled:cursor-not-allowed hover:bg-teal block text-white font-medium text-sm rounded-lg",
              {
                "bg-dove-gray": joined,
              }
            )}
          >
            {joined ? "Leave Community" : "Join Community"}
          </button>
        ) : (
          <span className="flex items-center justify-center w-full *:!w-fit mt-6">
            <WalletConnectButton />
          </span>
        )}
      </div>
      <Modal
        isOpen={joinCommunity}
        closeHandler={() => setJoinCommunityState(false)}
      >
        <div className="mt-[0.3125rem]">
          <span className="flex text-center mb-7 items-center justify-center flex-col">
            <span className="flex items-center -space-x-3 mb-[0.875rem]">
              <RAvatar className="size-8 lg:size-[3.25rem]" />
              <RAvatar
                className="size-8 lg:size-[3.25rem]"
                src="/images/logo-dark.png"
              />
            </span>
            <h4 className="text-lg lg:text-s20 font-medium text-mirage mb-[0.375rem]">
              No Voice Power
            </h4>
            <p className="text-xs text-tundora lg:text-sm">
              You do not have voice token for this project.
            </p>
          </span>
          <div>
            <h5 className="font-medium text-xs lg:text-sm text-mirage mb-[0.5625rem]">
              Why you need a voice token
            </h5>
            <ul className="p-4 rounded-2xl mb-7 bg-alabaster space-y-[0.875rem]">
              {Array(3)
                .fill("")
                .map((why, index) => (
                  <li
                    key={index}
                    className="text-sm text-tundora flex items-start space-x-2"
                  >
                    <span className="bg-mako rounded-full inline-block min-w-4 lg:min-w-6 size-4 lg:size-6"></span>
                    <p>
                      Purus scelerisque diam scelerisque ut nisl. Elit sed
                      accumsan hac ornare dignissim gravida eu nunc.
                    </p>
                  </li>
                ))}
            </ul>
            <Link
              href="/communities/hello/swap"
              className={cn(
                "bg-accent px-4 py-2.5 w-full text-center hover:bg-teal block text-white font-medium text-sm rounded-lg"
              )}
            >
              {"Get voice token"}
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CommunityCriteria;
