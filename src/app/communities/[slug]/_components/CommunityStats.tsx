import { formatLargeNumber } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface CardProps {
  href: string;
  title: string;
  value: string;
}

const Card = ({ href, title, value }: CardProps) => {
  return (
    <Link
      href={href}
      className="w-full bg-white hover:bg-azure rounded-lg text-mako p-3 lg:p-[0.875rem] border border-alice-blue flex items-start justify-between"
    >
      <div className="flex items-start space-x-[0.625rem]">
        <span className="size-[2.5rem] inline-block rounded-full bg-athens"></span>
        <span>
          <h4 className="text-gray text-xs">{title}</h4>
          <h5 className="text-base lg:text-lg font-medium">{value}</h5>
        </span>
      </div>
      <MdKeyboardArrowRight size={16} />
    </Link>
  );
};

interface CommunityStatsProps {
  members: number;
  proposals: number;
  polls: number;
}

const CommunityStats = ({ members, proposals, polls }: CommunityStatsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Card
        href="/communities/hello/members"
        title="Members"
        value={formatLargeNumber(members)}
      />
      <Card
        href="/communities/hello/proposals"
        title="Proposals"
        value={formatLargeNumber(proposals)}
      />
      <Card
        href="/communities/hello/polls"
        title="Polls"
        value={formatLargeNumber(polls)}
      />
    </div>
  );
};

export default CommunityStats;
