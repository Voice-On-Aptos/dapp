import GoBack from "@/components/shared/GoBack";
import { notFound } from "next/navigation";
import React from "react";

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

  return (
    <>
      <header className="border mt-4 lg:mt-5 mb-4 max-w-[62.125rem] bg-white border-white-smoke-4 rounded-lg py-6 px-5">
        <GoBack />
      </header>
      <section className="lg:flex lg:items-start lg:space-x-18">
        <div className="w-full lg:max-w-[34.875rem] space-y-[0.875rem]"></div>
        <div className="w-full lg:max-w-[26.125rem] lg:space-y-[0.875rem] sticky top-4"></div>
      </section>
    </>
  );
}

export default page;
