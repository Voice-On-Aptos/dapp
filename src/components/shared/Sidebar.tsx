"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { communities } from "@/lib/static-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LuPlus } from "react-icons/lu";
import { HomeIcon, HomeIconOutline } from "../custom-icons/HomeIcon";

const routes = [
  {
    label: "Home",
    Icon: <HomeIconOutline />,
    activeIcon: <HomeIcon />,
    href: "/",
  },
  {
    label: "Communities",
    Icon: <HomeIconOutline />,
    activeIcon: <HomeIcon />,
    href: "/communities",
  },
];

interface NavLinkProps {
  label: string;
  href: string;
  Icon: React.ReactNode;
  activeIcon: React.ReactNode;
}

const NavLink = ({ activeIcon, Icon, label, href }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = href !== "/" ? pathname.includes(href) : pathname === href;

  return (
    <li
      className={cn("text-sm px-4 py-[0.781rem] rounded-md hover:bg-azure", {
        "text-accent bg-azure": isActive,
      })}
    >
      <Link href={href} className={cn("flex items-center space-x-2")}>
        <span>{isActive ? activeIcon : Icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-full sticky top-0 overflow-auto hide-scrollbar max-w-[17.125rem] py-10 px-8 h-dvh border-r border-gainsboro">
      <ul className="space-y-3 mb-5">
        {routes.map((route) => (
          <NavLink
            key={route?.label}
            Icon={route?.Icon}
            activeIcon={route?.activeIcon}
            label={route?.label}
            href={route?.href}
          />
        ))}
      </ul>
      <Accordion type="multiple">
        <AccordionItem
          value="item-1"
          className="border-b-0 border-t border-white-smoke-3 pt-2 mb-5"
        >
          <AccordionTrigger className="text-xs text-mako px-4 py-[0.625rem] hover:no-underline">
            RECENTLY BROWSED
          </AccordionTrigger>
          <AccordionContent className="space-y-[0.625rem]">
            {communities.slice(0, 3).map((community) => (
              <Link
                key={community.name}
                href={`/communities/${community.name}`}
                className="text-sm px-4 py-[0.625rem] hover:bg-azure rounded-md text-mako flex items-center space-x-2"
              >
                <span className="inline-block rounded-full size-6 bg-azure"></span>
                <span> {community.name}</span>
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-b-0 border-t border-white-smoke-3 pt-2"
        >
          <AccordionTrigger className="text-xs text-mako px-4 py-[0.625rem] hover:no-underline">
            ALL COMMUNITIES
          </AccordionTrigger>
          <AccordionContent>
            <Link
              href="/communities/new"
              className="my-[0.375rem] hover:bg-azure rounded-md flex items-center text-sm px-4 py-[0.625rem] text-mako space-x-2"
            >
              <LuPlus size={18} />
              <span>Create community</span>
            </Link>
            <div className="space-y-[0.625rem]">
              {communities.map((community) => (
                <Link
                  key={community.name}
                  href={`/communities/${community.name}`}
                  className="text-sm px-4 hover:bg-azure rounded-md py-[0.625rem] text-mako flex items-center space-x-2"
                >
                  <span className="inline-block rounded-full size-6 bg-azure"></span>
                  <span> {community.name}</span>
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default Sidebar;
