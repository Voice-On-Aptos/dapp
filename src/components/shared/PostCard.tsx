import Link from "next/link";
import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import { ClapIcon, ClapOutlineIcon } from "../custom-icons/ClapIcon";
import MessageIcon from "../custom-icons/MessageIcon";
import { VoiceOutlineIcon } from "../custom-icons/VoiceIcon";
import RAvatar from "../ui/avatar-compose";
import RTooltip from "../ui/tooltip-compose";
import InfoIcon from "../custom-icons/InfoIcon";

const PostCard = () => {
  return (
    <div className="bg-white border rounded-xl border-alice-blue p-4 max-w-[43.625rem]">
      <div className="flex items-center justify-between mb-18">
        <div className="flex items-center space-x-[0.5625rem]">
          <span className="size-[2.5rem] inline-block rounded-full bg-athens"></span>
          <div>
            <span className="flex items-center space-x-1">
              <span className="font-medium text-mako text-sm">Klept006</span>
              <span className="text-s10 bg-old-lace text-golden-rod px-[0.625rem] py-0.5 rounded-3xl">
                Posts
              </span>
            </span>
            <span className="text-xs text-gray">10 mins ago</span>
          </div>
        </div>
        <div className="flex items-center space-x-18">
          <Link
            href={`/communities/celina`}
            className="text-xs text-mako border border-athens rounded-3xl p-[0.3125rem] pr-[0.625rem] flex items-center space-x-[0.375rem]"
          >
            <span className="inline-block rounded-full size-[1.375rem] bg-azure"></span>
            <span>Cellana Finance</span>
          </Link>
          <MdMoreHoriz size={16} />
        </div>
      </div>
      {/* rich text content */}
      <div className="mb-[0.9375rem]">
        <p className="text-sm text-mako">
          Be optimistic 💪🏼, digicask will surprise us and launch at $100 or
          something <br />
          Then we can all buy lambos
        </p>
        <span className="mt-18 flex items-center space-x-[0.375rem] text-s10 text-mako">
          <span>Proposal ends in:</span>
          <span className="text-xs font-medium">6d 12h 3m</span>
        </span>
      </div>
      {/* rich text content end */}

      {/* stats and interaction */}
      <div>
        <div className="bg-white-smoke-5/[58%] mb-[0.625rem] flex items-center space-x-[0.875rem] px-2 py-0.5 rounded-lg">
          <span className="flex items-center py-[0.46875rem] space-x-1 text-xs text-mako">
            <ClapIcon />
            <span>250</span>
          </span>
          <span className="flex items-center py-[0.46875rem] space-x-1 text-xs text-mako">
            <VoiceOutlineIcon className="text-sun-glow" />
            <span>10</span>
          </span>
          <span className="flex items-center py-[0.46875rem] space-x-1 text-xs text-mako">
            <MessageIcon />
            <span>30</span>
          </span>
          <div className="flex items-center py-[0.46875rem] space-x-1 text-xs text-mako">
            <span className="flex flex-row-reverse items-center -space-x-1">
              <RAvatar className="-ml-1" />
              <RAvatar />
              <RAvatar />
            </span>
            <span>Seen by 3,000</span>
          </div>
        </div>
        <div className="border-t border-gallery/[68%] pt-[0.625rem] flex items-center space-x-2">
          <div className="flex items-center rounded-3xl min-w-[14.6875rem] py-[0.21875rem] px-[0.3125rem] space-x-[0.375rem] text-sm text-mako border border-athens">
            <RAvatar className="size-[1.375rem]" />
            <input
              placeholder="Add a comment..."
              className="text-xs text-mako outline-none w-full"
            />
          </div>
          <button className="flex items-center rounded-3xl py-[0.3125rem] pr-4 pl-2 space-x-[0.375rem] text-xs text-mako border border-athens">
            <ClapOutlineIcon />
            <span>Applaud</span>
          </button>
          <button className="flex items-center rounded-3xl py-[0.3125rem] pr-4 pl-2 space-x-[0.375rem] text-xs text-mako border border-athens">
            <VoiceOutlineIcon />
            <span>Lend voice</span>
          </button>
        </div>
        <span className="flex items-center space-x-0.5 mt-1 text-s9 text-mako">
          <InfoIcon />
          <span>Comment limited to only 200 voice power holders</span>
        </span>
      </div>
    </div>
  );
};

export default PostCard;
