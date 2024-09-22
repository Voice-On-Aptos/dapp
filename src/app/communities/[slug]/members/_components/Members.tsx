"use client";
import React from "react";

import { VoiceCircleIcon } from "@/components/custom-icons/VoiceIcon";
import RAvatar from "@/components/ui/avatar-compose";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import RetractVoice from "./RetractVoice";

const data = [
  {
    username: "cherrysee",
    applauds: 100,
    voicePower: 50,
  },
  {
    username: "billy:)",
    applauds: 100,
    voicePower: 10,
  },
  {
    username: "ceecii",
    applauds: 100,
    voicePower: 50,
    rewardAvailable: true,
  },
  {
    username: "phillip",
    applauds: 100,
    voicePower: 20,
  },
  {
    username: "greg",
    applauds: 100,
    voicePower: 5,
  },
];

interface TRowProps {
  username: string;
  applauds: number;
  voicePower: number;
  rewardAvailable?: boolean;
}

const TRow = ({ member }: { member: TRowProps }) => {
  return (
    <TableRow>
      <TableCell className="p-[0.875rem]">
        <span className="flex items-center text-sm text-mako space-x-2">
          <RAvatar className="size-8" />
          <span>@{member?.username}</span>
        </span>
      </TableCell>
      <TableCell className="text-sm capitalize text-mako text-center">
        👏 {member?.applauds}
      </TableCell>
      <TableCell className="text-sm capitalize text-mako">
        <span className="flex items-center justify-center space-x-2">
          <VoiceCircleIcon />
          <span>{member?.voicePower}</span>
        </span>
      </TableCell>
      <TableCell className="text-sm capitalize text-mako">
        <span className="flex items-center space-x-2">
          {member?.rewardAvailable ? (
            <>
              <RetractVoice />
              <Link
                href="/communities/hello/members/1"
                className="rounded-md border border-gainsboro px-[1.0625rem] py-[0.5625rem] shadow-btn"
              >
                View rewards
              </Link>
            </>
          ) : (
            <button className="rounded-md border border-gainsboro px-[1.0625rem] py-[0.5625rem] shadow-btn">
              Lend Voice
            </button>
          )}
        </span>
      </TableCell>
    </TableRow>
  );
};

const Members = () => {
  return (
    <div className="rounded-xl bg-white border whitespace-nowrap overflow-auto border-alice-blue max-w-[62.125rem]">
      <Table>
        <TableHeader>
          <TableRow>
            {["member", "Total Applauds", "Total Voice Power", "Action"].map(
              (head) => (
                <TableHead
                  key={head}
                  className="font-medium first-of-type:w-[15.9375rem] p-[0.875rem] uppercase text-sm text-dove-gray"
                >
                  {head}
                </TableHead>
              )
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((member, index) => (
            <TRow key={index} member={member} />
          ))}
        </TableBody>
      </Table>
      <div className="border-t border-alice-blue pt-[0.6875rem] pb-4 px-4 lg:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <span className="text-xs lg:text-sm text-slate-grey flex items-center space-x-2">
          <span>Page</span>
          <span className="border border-gainsboro px-[1.0625rem] py-[0.5625rem] shadow-btn rounded-md">
            1
          </span>
          <span>of 10</span>
        </span>
        <span className="flex items-center space-x-2 text-xs text-slate-grey lg:text-sm">
          <button className="rounded-md border border-gainsboro px-[1.0625rem] py-[0.5625rem] shadow-btn">
            Prev
          </button>
          <button className="rounded-md border border-gainsboro px-[1.0625rem] py-[0.5625rem] shadow-btn">
            Next
          </button>
        </span>
      </div>
    </div>
  );
};

export default Members;
