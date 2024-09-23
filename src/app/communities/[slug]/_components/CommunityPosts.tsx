import PostCard from "@/components/shared/PostCard";
import Image from "next/image";
import React from "react";

const CommunityPosts = ({ data }: { data?: any }) => {
  return (
    <div className="w-full bg-white rounded-xl p-3 lg:p-[1.375rem] border border-alice-blue">
      <h3 className="text-sm lg:text-base text-mako font-medium mb-3 lg:mb-[0.9375rem]">
        Posts
      </h3>
      <div className="space-y-[0.9375rem]">
        {data ? (
          Array(6)
            .fill("")
            .map((_, index) => <PostCard key={index} />)
        ) : (
          <div className="py-32 flex items-center flex-col justify-center lg:py-[12.5rem]">
            <Image
              src="/svgs/no-post.svg"
              alt="No activities"
              width={172}
              height={128}
              className=""
            />
            <p className="text-xs lg:text-sm text-mako mt-[0.9375rem]">
              No activities
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityPosts;
