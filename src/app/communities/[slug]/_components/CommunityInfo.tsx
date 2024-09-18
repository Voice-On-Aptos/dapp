"use client";
import CopyIcon from "@/components/custom-icons/CopyIcon";
import ShareIcon from "@/components/custom-icons/ShareIcon";
import { cn, shortenAddress } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "sonner";

const CommunityInfo = () => {
  const [show, setShowState] = useState(false);
  const shareHandler = async () => {
    if (!navigator.canShare) {
      return;
    }

    const shareData = {
      title: "Cellana Community",
      url: `${window.location.origin}/`,
    };

    if (!navigator.canShare(shareData)) {
      return;
    }

    try {
      await navigator.share(shareData);
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const copyHandler = (value: string) => {
    navigator.clipboard.writeText(value);
    // toast("Address Copied.");
  };

  const showMoreHandler = () => {
    // Implement show more functionality here
    console.log("Show more clicked");
    setShowState(!show);
  };

  return (
    <div className="w-full bg-white rounded-xl p-3 lg:p-[1.375rem] border border-alice-blue">
      <div className="flex items-start justify-between mb-[0.9375rem]">
        <div className="flex items-center space-x-[0.5625rem]">
          <span className="size-[2.5rem] inline-block rounded-full bg-athens"></span>
          <div>
            <h4 className="font-medium text-mako text-sm">Cellana</h4>
            <span className="flex items-center text-xs text-gray space-x-1">
              <span>Created by</span>
              <button
                onClick={() => copyHandler("0x1D68893kcjeeaC")}
                className="flex items-center space-x-1"
              >
                <span className="text-mako font-medium">
                  {shortenAddress("0x1D68893kcjeeaC")}
                </span>
                <CopyIcon />
              </button>
            </span>
          </div>
        </div>
        <button
          onClick={shareHandler}
          className="flex items-center justify-center p-2 border border-alice-blue rounded-lg"
        >
          <ShareIcon />
        </button>
      </div>
      <div className="text-xs text-mako">
        <p
          className={cn("inline", {
            "line-clamp-5": !show,
          })}
        >
          Cellana is an independent, public goods company who acts as an
          impartial watchdog for the Aptos ecosystem. Our mission is to provide
          comprehensive and unbiased analysis and comparative evaluations of
          Layer 2 solutions . We are committed to the verification and
          fact-checking of the claims made by each project, with a special focus
          on the security aspects. What sets Cellana apart is our unwavering
          commitment to delivering accurate and reliable information....
        </p>
        <button
          onClick={showMoreHandler}
          className="underline inline-block ml-1"
        >
          {show ? "show less" : "see more"}
        </button>
      </div>
    </div>
  );
};

export default CommunityInfo;
