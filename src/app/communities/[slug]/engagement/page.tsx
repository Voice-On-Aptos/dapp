import { HomeIconOutline } from "@/components/custom-icons/HomeIcon";
import PollCard from "@/components/shared/PollCard";
import PostCard from "@/components/shared/PostCard";
import ProposalCard from "@/components/shared/ProposalCard";
import Tabs from "@/components/shared/Tabs";
import RBreadcrumb from "@/components/ui/breadcrumb-compose";
import RPopover from "@/components/ui/popover-compose";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import { LuPlus } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

function page({
  params,
  searchParams,
}: {
  params: {
    slug: string;
  };
  searchParams: {
    type?: string;
  };
}) {
  const type = searchParams?.type || "posts";
  const slug = params?.slug;
  if (!slug) {
    notFound();
  }

  return (
    <>
      <header className="border mt-4 lg:mt-5 mb-18 max-w-[62.125rem] bg-white border-white-smoke-4 rounded-lg py-6 px-5">
        <div className="flex items-center justify-between">
          <RBreadcrumb
            prevPaths={[{ href: "/communities/hello", label: "Cellana" }]}
            activePath="My Engagement"
          />
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
            <button className="w-full flex items-center space-x-2 px-2 hover:bg-azure py-[0.375rem] text-xs text-mako">
              <span>
                <HomeIconOutline />
              </span>
              <span>Post</span>
            </button>
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
        <div className=" border-alice-blue border-t pt-18 mt-18">
          <Suspense>
            <Tabs
              paramKey="type"
              active={type}
              routes={["posts", "proposals", "polls"]}
            />
          </Suspense>
        </div>
      </header>
      <section className="max-w-[62.125rem]">
        {/* {type === "proposals" ? (
          <div className="grid md:grid-cols-2 gap-4 bg-white border border-white-smoke-4 rounded-lg p-4">
            {Array(12)
              .fill("")
              .map((_, index) => (
                <ProposalCard key={index} />
              ))}
          </div>
        ) : type === "polls" ? (
          <div className="grid md:grid-cols-2 gap-4 bg-white border border-white-smoke-4 rounded-lg p-4">
            {Array(12)
              .fill("")
              .map((_, index) => (
                <PollCard key={index} />
              ))}
          </div>
        ) : (
          <div className="space-y-3">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <PostCard key={index} />
              ))}
          </div>
        )} */}
      </section>
    </>
  );
}

export default page;
