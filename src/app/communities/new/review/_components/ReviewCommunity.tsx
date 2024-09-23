"use client";
import CommunityCriteria from "@/app/communities/[slug]/_components/CommunityCriteria";
import CommunityInfo from "@/app/communities/[slug]/_components/CommunityInfo";
import CommunityPosts from "@/app/communities/[slug]/_components/CommunityPosts";
import CommunityRewardPool from "@/app/communities/[slug]/_components/CommunityRewardPool";
import CommunityStats from "@/app/communities/[slug]/_components/CommunityStats";
import GoBack from "@/components/shared/GoBack";
import RAvatar from "@/components/ui/avatar-compose";
import Modal from "@/components/ui/modal";
import { cn } from "@/lib/utils";
import useCreateCommunityStore from "@/store/community.store";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CreateCommunity = () => {
  const [creatingCommunity, setCreatingCommunityState] = useState(false);
  const [createdCommunity, setCreatedCommunity] = useState(false);

  const handleClick = () => {
    setCreatedCommunity(false);
    setCreatingCommunityState(true);
    setTimeout(() => {
      setCreatedCommunity(true);
    }, 3000);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className={cn(
          "bg-accent px-4 py-2.5 w-full max-w-[12.5625rem] hover:bg-teal block text-white font-medium text-sm rounded-lg"
        )}
      >
        {"Create Community"}
      </button>
      <Modal
        isOpen={creatingCommunity}
        closeHandler={() => setCreatingCommunityState(false)}
      >
        <div className="flex items-center text-center flex-col">
          <RAvatar className="size-8 lg:size-[3.5rem] mb-[0.875rem]" />
          <h4 className="text-mako text-lg lg:text-s20 font-medium">
            {createdCommunity ? "Community Created" : "Creating"}
          </h4>
          {createdCommunity ? null : (
            <p className="text-xs lg:text-sm mt-1 text-mako">
              Creating Cellena Finance Community
            </p>
          )}
        </div>
        {createdCommunity ? (
          <Link
            href="/communities/hello"
            className="bg-accent px-4 text-center py-2.5 mt-7 w-full ml-auto mr-0 hover:bg-teal block text-white font-medium text-sm rounded-lg"
          >
            View Community
          </Link>
        ) : null}
      </Modal>
    </>
  );
};

const ReviewCommunity = () => {
  const { data } = useCreateCommunityStore();
  const { account } = useWallet();
  return (
    <section className="bg-white rounded-lg border border-alice-blue p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row lg:justify-between mb-4 lg:items-center gap-4">
        <span className="flex items-center space-x-2 lg:space-x-4">
          <GoBack />
          <h3 className="font-medium text-sm text-mako md:text-base lg:text-lg">
            Review Details
          </h3>
        </span>
        <CreateCommunity />
      </div>
      <div className="max-w-[62.125rem] overflow-hidden relative bg-white-smoke-4 rounded-lg my-[0.875rem] min-h-[11.9375rem]">
        {data?.banner ? (
          <Image
            className="object-cover object-center"
            src={URL.createObjectURL(data?.banner)}
            alt="banner"
            fill
          />
        ) : null}
      </div>
      <div className="lg:flex lg:items-start lg:space-x-[0.875rem]">
        <div className="w-full lg:max-w-[41.125rem] space-y-[0.875rem]">
          <CommunityInfo
            name={data?.name || ""}
            description={data?.description || ""}
            logo={data?.logo ? URL.createObjectURL(data?.logo) : ""}
            creator={account?.address || ""}
          />
          <CommunityStats members={0} proposals={0} polls={0} />
          <CommunityPosts />
        </div>
        <div className="w-full lg:max-w-[20.125rem] lg:space-y-[0.875rem] sticky top-4">
          <CommunityCriteria
            disableJoin
            token_address={data?.token_address || ""}
            creator={account?.address || ""}
          />
          <CommunityRewardPool amount={data?.token_to_distribute || 0} />
        </div>
      </div>
    </section>
  );
};

export default ReviewCommunity;
