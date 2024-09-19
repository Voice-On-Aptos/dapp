"use client";
import CopyIcon from "@/components/custom-icons/CopyIcon";
import { cn, shortenAddress } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface AddressCardProps {
  href: string;
  title: string;
  value: string;
}

const AddressCard = ({ href, title, value }: AddressCardProps) => {
  const copyHandler = () => {
    navigator.clipboard.writeText(value);
    // toast("Address Copied.");
  };
  return (
    <Link
      href={href}
      className="w-full bg-white text-mako p-3 lg:p-[0.875rem] border-t border-athens py-18 flex items-start justify-between"
    >
      <div className="flex items-start space-x-[0.625rem]">
        <span className="size-[1.125rem] inline-block rounded-full bg-athens"></span>
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

const CommunityCriteria = () => {
  const joined = false;
  return (
    <div className="w-full bg-white rounded-lg text-mako p-3 pb-6 lg:p-4 lg:pb-8 border border-alice-blue">
      <h2 className="font-bold text-xs text-shark mb-3">COMMUNITY CRITERIA</h2>
      <ul className="mb-18 list-decimal pl-4 list-outside space-y-3 text-dove-gray text-xs">
        <li>
          Purus scelerisque diam scelerisque ut nisl. Elit sed accumsan hac
          ornare dignissim gravida eu nunc.
        </li>
        <li>
          Convallis mauris ac ultricies faucibus. Quam est euismod quam ac.
          Sollicitudin duis elit dolor ornare diam enim sed diam. Facilisi nunc
          egestas urna in enim et vel lorem.
        </li>
        <li>
          Sollicitudin duis elit dolor ornare diam enim sed diam. Facilisi nunc
          egestas urna in enim et vel lorem.
        </li>
      </ul>
      <div className="mb-6">
        <AddressCard href="#" title="Token Address" value="0x912CE59e782c548" />
        <AddressCard
          href="#"
          title="CREATOR ADDRESS"
          value="0x912CE59e782c548"
        />
      </div>
      <button
        className={cn(
          "bg-accent px-4 py-2.5 w-full hover:bg-teal block text-white font-medium text-sm rounded-lg",
          {
            "bg-dove-gray": joined,
          }
        )}
      >
        {joined ? "Leave Community" : "Join Community"}
      </button>
    </div>
  );
};

export default CommunityCriteria;
