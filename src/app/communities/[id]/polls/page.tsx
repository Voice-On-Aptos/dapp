import PollCard from "@/components/shared/PollCard";
import Tabs from "@/components/shared/Tabs";
import RBreadcrumb from "@/components/ui/breadcrumb-compose";
import { formatLargeNumber } from "@/lib/utils";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import { LuPlus } from "react-icons/lu";

function page({
  params,
  searchParams,
}: {
  params: {
    id: string;
  };
  searchParams: {
    status?: string;
  };
}) {
  const status = searchParams?.status || "all";
  const id = params?.id;
  if (!id) {
    notFound();
  }

  return (
    <>
      <header className="border mt-4 lg:mt-5 mb-18 max-w-[62.125rem] bg-white border-white-smoke-4 rounded-lg py-6 px-5">
        <div className="flex items-center justify-between">
          <RBreadcrumb
            prevPaths={[{ href: "/communities/hello", label: "Cellena" }]}
            activePath="Polls"
          />

          <div className="flex items-center space-x-3">
            <span className="size-[2.5rem] inline-block rounded-full bg-athens"></span>
            <h5 className="text-2xl lg:text-s32 font-medium flex items-center space-x-2">
              <span>{formatLargeNumber(40)}</span>
              <span className="text-gray text-sm lg:text-base font-normal">
                Polls
              </span>
            </h5>
          </div>
        </div>
        <div className="flex items-center justify-between border-alice-blue border-t pt-18 mt-18">
          <Suspense>
            <Tabs active={status} routes={["all", "active", "closed"]} />
          </Suspense>
          <button
            title="Create poll"
            className="flex items-center text-xs lg:text-sm font-medium text-mako space-x-2 border border-dark-gray rounded-lg px-4 py-[0.625rem]"
          >
            <LuPlus size={18} />
            <span>Create poll</span>
          </button>
        </div>
      </header>
      <section className="mt-[0.875rem] bg-white border border-white-smoke-4 rounded-lg p-4">
        <div className="grid md:grid-cols-2 gap-4">
          {Array(12)
            .fill("")
            .map((_, index) => (
              <PollCard key={index} />
            ))}
        </div>
      </section>
    </>
  );
}

export default page;
