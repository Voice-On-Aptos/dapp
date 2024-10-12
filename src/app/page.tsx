import CompleteProfile from "@/components/shared/CompleteProfile";
import PostCard from "@/components/shared/PostCard";
import RSelect from "@/components/ui/select-input";
import { getFeed } from "@/services/feed";
import React, { Suspense } from "react";
import Feeds from "./_components/Feeds";
import GenerateFeedSummary from "./_components/GenerateFeedSummary";

export default async function Page() {
  const feed = await getFeed();

  return (
    <>
      <CompleteProfile />
      <header className="mt-10 lg:mt-[3.75rem] border-b pb-[0.875rem] mb-[0.81rem] border-alice-blue max-w-[59.625rem]">
        <h1 className="text-2xl font-medium mb-[0.875rem]  text-mako">
          Voice Feed
        </h1>
        {/* <RSelect
          value="hot"
          options={["hot", "latest", "most liked"]}
          className="w-[4.9375rem] mt-[0.875rem] text-sm text-dove-gray border border-white-smoke-4 rounded-lg"
        /> */}
        <GenerateFeedSummary />
      </header>
      <Suspense>
        <Feeds data={feed} />
      </Suspense>
    </>
  );
}
