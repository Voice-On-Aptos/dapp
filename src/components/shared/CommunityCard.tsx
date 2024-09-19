import Link from "next/link";
import React from "react";

const CommunityCard = () => {
  return (
    <div className="bg-white py-4 px-[1.375rem] rounded-xl border border-white-smoke-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-[0.5625rem]">
          <span className="size-[2.5rem] inline-block rounded-full bg-athens"></span>
          <div>
            <h4 className="font-medium text-mako text-sm">Cellana</h4>
            <h5 className="text-xs text-gray">1.4M Holders</h5>
          </div>
        </div>
        <Link
          href="/communities/hello"
          className="bg-accent px-4 py-2.5 hover:bg-teal block text-white font-medium text-sm rounded-lg"
        >
          Join
        </Link>
      </div>
      <p className="text-sm text-gray line-clamp-3">
        Welcome to the Transhumanism Blab, hosted by the International
        Biohacking Community. 
      </p>
    </div>
  );
};

export default CommunityCard;
