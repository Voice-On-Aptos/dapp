import Link from "next/link";
import React from "react";

const ProposalCard = () => {
  return (
    <Link
      href="/communities/hello/proposals/hey"
      className="border border-alice-blue rounded-lg p-5"
    >
      <div className="flex items-center justify-between mb-18">
        <div className="flex items-center space-x-[0.625rem]">
          <span className="size-[2.5rem] inline-block rounded-full bg-athens"></span>
          <span>
            <h4 className="text-mako font-medium text-sm">Meenash</h4>
            <h5 className="text-xs text-gray">18 mins ago</h5>
          </span>
        </div>
        <span className="flex items-center justify-center space-x-2 text-xs text-apple bg-beige rounded-full py-1 px-[0.875rem]">
          <span className="rounded-full bg-emerald size-2 inline-block"></span>
          <span>Active</span>
        </span>
      </div>
      <h2 className="font-medium text-sm mb-[0.4375rem] text-mako">
        Increase Liquidity Pool Token Reserve by 1.5% before the next bull run.
      </h2>
      <p className="text-xs text-mako">
        Egestas feugiat posuere vel diam egestas tortor eget magna elementum.
        Odio blandit sit egestas tellus. ...
      </p>
      <span className="mt-5 flex items-center space-x-[0.375rem] text-s10 text-mako">
        <span>Proposal ends in:</span>
        <span className="text-xs font-medium">6d 12h 3m</span>
      </span>
    </Link>
  );
};

export default ProposalCard;
