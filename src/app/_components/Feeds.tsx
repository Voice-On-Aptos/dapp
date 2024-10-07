"use client";
import PollCard from "@/components/shared/PollCard";
import PostCard from "@/components/shared/PostCard";
import ProposalCard from "@/components/shared/ProposalCard";
import useFeed from "@/hooks/use-feed";
import React from "react";

const Feeds = ({ data }: { data: any }) => {
  const { feed } = useFeed(data);

  return (
    <>
      <div className="space-y-3 max-w-[43.625rem]">
        {feed?.map((feed: any, index: number) => {
          if (feed?.type === "post") {
            return <PostCard key={index} data={feed?.data} />;
          }
          if (feed?.type === "poll") {
            return <PollCard key={index} data={feed?.data} />;
          }

          if (feed?.type === "proposal") {
            return <ProposalCard key={index} data={feed?.data} />;
          }
          return <></>;
        })}
      </div>
    </>
  );
};

export default Feeds;
