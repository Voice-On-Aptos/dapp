"use client";
import useFeed from "@/hooks/use-feed";
import React from "react";

const Feeds = () => {
  const { isLoading, feed } = useFeed();
  return (
    <>
      <div className="space-y-3 max-w-[43.625rem]">
        {/* {Array(6)
    .fill("")
    .map((_, index) => (
      <PostCard key={index} />
    ))} */}
      </div>
    </>
  );
};

export default Feeds;
