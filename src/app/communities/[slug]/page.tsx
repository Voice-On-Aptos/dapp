import { HomeIconOutline } from "@/components/custom-icons/HomeIcon";
import RAvatar from "@/components/ui/avatar-compose";
import RBreadcrumb from "@/components/ui/breadcrumb-compose";
import RPopover from "@/components/ui/popover-compose";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { LuPlus } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import CommunityCriteria from "./_components/CommunityCriteria";
import CommunityInfo from "./_components/CommunityInfo";
import CommunityPosts from "./_components/CommunityPosts";
import CommunityRewardPool from "./_components/CommunityRewardPool";
import CommunityStats from "./_components/CommunityStats";
import CreatePost from "./_components/CreatePost";

function page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = params?.slug;
  if (!slug) {
    notFound();
  }

  const community_name = slug;

  return (
    <>
      <header className="mt-4 lg:mt-5 max-w-[62.125rem]">
        <div className="border flex items-center justify-between border-white-smoke-4 rounded-lg py-6 px-5 bg-white">
          <RBreadcrumb activePath={community_name} />

          <div className="flex items-center space-x-3">
            <Link
              href="/communities/hello/engagement"
              title="My Engagement"
              className="flex items-center space-x-2 border text-xs lg:text-sm font-medium border-gainsboro-2 text-mako rounded-lg px-4 py-[0.625rem]"
            >
              <RAvatar />
              <span>My Engagement</span>
            </Link>
            <RPopover
              trigger={
                <button
                  title="Create"
                  className="bg-azure-2 flex items-center text-xs lg:text-sm font-medium text-mako space-x-2 rounded-lg px-4 py-[0.625rem]"
                >
                  <LuPlus size={18} />
                  <span>Create</span>
                  <MdKeyboardArrowDown size={16} />
                </button>
              }
              contentClassName="border border-athens bg-white space-y-2 rounded-lg py-[0.625rem] px-[0.375rem] max-w-[8.3125rem] drop-shadow-popover"
            >
              <CreatePost />
              <Link
                href="/communities/hello/proposals?create"
                className="flex items-center space-x-2 px-2 hover:bg-azure py-[0.375rem] text-xs text-mako"
              >
                <span>
                  <HomeIconOutline />
                </span>
                <span>Proposal</span>
              </Link>
              <Link
                href="/communities/hello/polls?create"
                className="flex items-center space-x-2 px-2 hover:bg-azure py-[0.375rem] text-xs text-mako"
              >
                <span>
                  <HomeIconOutline />
                </span>
                <span>Poll</span>
              </Link>
            </RPopover>
          </div>
        </div>
      </header>
      <section className="max-w-[62.125rem] bg-white-smoke-4 rounded-lg my-[0.875rem] min-h-[11.9375rem]"></section>
      <section className="lg:flex lg:items-start lg:space-x-[0.875rem]">
        <div className="w-full lg:max-w-[41.125rem] space-y-[0.875rem]">
          <CommunityInfo />
          <CommunityStats />
          <CommunityPosts />
        </div>
        <div className="w-full lg:max-w-[20.125rem] lg:space-y-[0.875rem] sticky top-4">
          <CommunityCriteria />
          <CommunityRewardPool />
        </div>
      </section>
    </>
  );
}

export default page;
