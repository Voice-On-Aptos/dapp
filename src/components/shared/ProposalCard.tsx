import React from "react";

const ProposalCard = () => {
  return (
    <div className="border border-alice-blue rounded-lg p-5">
      <div className="flex items-center justify-between mb-[0.625rem]">
        <h2 className="">
          Increase Liquidity Pool Token Reserve by 1.5% before the next bull
          run.
        </h2>
      </div>
      <span className="flex items-center mb-3"></span>
      <p className="text-xs text-mako">
        Egestas feugiat posuere vel diam egestas tortor eget magna elementum.
        Odio blandit sit egestas tellus. ...
      </p>
      <span className="mt-5 flex items-center space-x-[0.375rem] text-s10 text-mako">
        <span>Proposal ends in:</span>
        <span className="text-xs font-medium">6d 12h 3m</span>
      </span>
    </div>
  );
};

export default ProposalCard;
