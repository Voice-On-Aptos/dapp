import React from "react";

import RAvatar from "@/components/ui/avatar-compose";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    username: "cherrysee",
    voted: "yes",
  },
  {
    username: "billy:)",
    voted: "no",
  },
  {
    username: "ceecii",
    voted: "yes",
  },
  {
    username: "phillip",
    voted: "no",
  },
  {
    username: "greg",
    voted: "yes",
  },
];

export function VoteTable() {
  return (
    <div className="border border-alice-blue rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            {["member", "voted"].map((head) => (
              <TableHead
                key={head}
                className="font-medium first-of-type:w-[15.9375rem] first-of-type:pl-[1.875rem] py-[0.875rem] capitalize text-sm text-dove-gray"
              >
                {head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((member, index) => (
            <TableRow key={index}>
              <TableCell>
                <span className="flex items-center pl-[1.5rem] text-sm text-mako space-x-2">
                  <RAvatar className="size-8" />
                  <span>@{member?.username}</span>
                </span>
              </TableCell>
              <TableCell className="text-sm capitalize text-mako">
                {member?.voted}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const VotesCasted = () => {
  return (
    <div className="rounded-xl bg-white p-4 lg:p-6 border border-alice-blue">
      <h3 className="text-shark text-xs uppercase font-bold mb-3">
        VOTES Casted
      </h3>
      <VoteTable />
    </div>
  );
};

export default VotesCasted;
