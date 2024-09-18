"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  routes: string[];
  active: string;
}

const Tabs = ({ routes, active }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const tabHandler = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("status", value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <ul className="flex items-center space-x-[0.625rem]">
      {routes.map((route) => (
        <li>
          <button
            onClick={() => tabHandler(route)}
            className={cn(
              "text-xs lg:text-sm capitalize text-dove-gray border border-dark-gray rounded-lg px-4 py-[0.625rem]",
              {
                "border-accent": route === active,
              }
            )}
          >
            <span>{route}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
