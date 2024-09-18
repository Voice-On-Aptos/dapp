import RAvatar from "@/components/ui/avatar-compose";
import RBreadcrumb from "@/components/ui/breadcrumb-compose";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { LuPlus } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

function page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const id = params?.id;
  if (!id) {
    notFound();
  }

  const community_name = "Digicask-" + id;

  return (
    <>
      <header className="mt-4 lg:mt-5 mb-18 max-w-[62.125rem]">
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
            <button
              title="Create"
              className="bg-azure-2 flex items-center text-xs lg:text-sm font-medium text-mako space-x-2 rounded-lg px-4 py-[0.625rem]"
            >
              <LuPlus size={18} />
              <span>Create</span>
              <MdKeyboardArrowDown size={16} />
            </button>
          </div>
        </div>
      </header>
      <section></section>
    </>
  );
}

export default page;
