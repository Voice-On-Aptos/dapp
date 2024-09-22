import RBreadcrumb from "@/components/ui/breadcrumb-compose";
import { formatLargeNumber } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";
import Members from "./_components/Members";

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

  return (
    <>
      <header className="mt-4 lg:mt-5 mb-18 max-w-[62.125rem]">
        <div className="border flex items-center justify-between border-white-smoke-4 rounded-lg py-6 px-5 bg-white">
          <RBreadcrumb
            prevPaths={[{ href: "/communities/hello", label: "Cellana" }]}
            activePath="Members"
          />

          <div className="flex items-center space-x-3">
            <span className="size-[2.5rem] inline-block rounded-full bg-athens"></span>

            <h5 className="text-2xl lg:text-s32 font-medium">
              {formatLargeNumber(300000)}{" "}
              <span className="text-gray text-sm lg:text-base font-normal">
                Members
              </span>
            </h5>
          </div>
        </div>
      </header>
      <Members />
    </>
  );
}

export default page;
