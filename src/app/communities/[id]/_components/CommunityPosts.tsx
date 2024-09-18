import PostCard from "@/components/shared/PostCard";
import React from "react";

const CommunityPosts = () => {
  return (
    <div className="w-full bg-white rounded-xl p-3 lg:p-[1.375rem] border border-alice-blue">
      <h3 className="text-sm lg:text-base text-mako font-medium mb-3 lg:mb-[0.9375rem]">
        Posts
      </h3>
      <div className="space-y-[0.9375rem]">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <PostCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default CommunityPosts;
