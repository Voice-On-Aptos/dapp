"use client";
import { joinCommunity, leaveCommunity } from "@/actions/user";
import WalletConnectButton from "@/components/shared/WalletConnectButton";
import RAvatar from "@/components/ui/avatar-compose";
import Modal from "@/components/ui/modal";
import { joinCommunityOnChain } from "@/entry-functions/join-community";
import { leaveCommunityOnChain } from "@/entry-functions/leave-community";
import useUser from "@/hooks/use-user";
import { aptosClient } from "@/lib/aptos-client";
import { cn } from "@/lib/utils";
import useCommunityStore from "@/store/communityConfig.store";
import { ConfigProps } from "@/types/community";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

interface Props {
  community: string;
  members: string[];
  creator: string;
  disableJoin: boolean;
  config: ConfigProps | null;
}

const JoinOrLeaveCommunity = ({
  members,
  creator,
  disableJoin,
  community,
  config,
}: Props) => {
  const { account, connected, signAndSubmitTransaction } = useWallet();
  const { isLoading, user } = useUser();
  const member = isLoading
    ? false
    : members?.find((member) => member === user?._id);
  const [joined, setJoined] = useState(false);
  const [pending, setPending] = useState(false);
  const [noVoicePowerState, setNoVoicePowerState] = useState(false);
  const address = account?.address;

  useEffect(() => {
    if (member) {
      setJoined(true);
    }
  }, [member]);

  const joinCommunityHandler = async () => {
    // if (noVoicePower) {
    //   setNoVoicePowerState(true);
    // }

    setPending(true);
    const contract_response = await signAndSubmitTransaction(
      joinCommunityOnChain({
        community_id: community,
      })
    ).catch((error) => {
      setPending(false);
      return;
    });

    if (!contract_response?.hash) return;

    const committedTransactionResponse = await aptosClient().waitForTransaction(
      {
        transactionHash: contract_response?.hash,
      }
    );

    if (!committedTransactionResponse.success) {
      toast.error("Failed to join community on chain", {
        className: "error-message",
      });
      setPending(false);
      return;
    }

    const response = await joinCommunity(address!, community);

    if (response?.error) {
      toast.error(response?.error, {
        className: "error-message",
      });
      setPending(false);
      return;
    }

    toast("Successfully joined community");
    setPending(false);
    setJoined(true);
  };

  const leaveCommunityHandler = async () => {
    setPending(true);

    const contract_response = await signAndSubmitTransaction(
      leaveCommunityOnChain({
        community_id: community,
      })
    ).catch((error) => {
      setPending(false);
      return;
    });

    if (!contract_response?.hash) return;

    const committedTransactionResponse = await aptosClient().waitForTransaction(
      {
        transactionHash: contract_response?.hash,
      }
    );

    if (!committedTransactionResponse.success) {
      toast.error("Failed to leave community on chain", {
        className: "error-message",
      });
      setPending(false);
      return;
    }

    const response = await leaveCommunity(address!, community);

    if (response?.error) {
      toast.error(response?.error, {
        className: "error-message",
      });
      setPending(false);
      return;
    }

    toast("Successfully left community");
    setPending(false);
    setJoined(false);
  };

  return (
    <>
      {creator === account?.address ? null : connected ? (
        <button
          disabled={disableJoin || pending}
          onClick={() => {
            if (joined) {
              //leave
              leaveCommunityHandler();
              return;
            }
            joinCommunityHandler();
          }}
          className={cn(
            "bg-accent px-4 py-2.5 w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-teal block text-white font-medium text-sm rounded-lg",
            {
              "bg-dove-gray": joined,
              "opacity-0": isLoading,
            }
          )}
        >
          {joined
            ? pending
              ? "Leaving..."
              : "Leave Community"
            : pending
            ? "Joining..."
            : "Join Community"}
        </button>
      ) : (
        <span className="flex items-center justify-center w-full *:!w-fit mt-6">
          <WalletConnectButton />
        </span>
      )}
      <Modal
        isOpen={noVoicePowerState}
        closeHandler={() => setNoVoicePowerState(false)}
      >
        <div className="mt-[0.3125rem]">
          <span className="flex text-center mb-7 items-center justify-center flex-col">
            <span className="flex items-center -space-x-3 mb-[0.875rem]">
              <RAvatar className="size-8 lg:size-[3.25rem]" />
              <RAvatar
                className="size-8 lg:size-[3.25rem]"
                src="/images/logo-dark.png"
              />
            </span>
            <h4 className="text-lg lg:text-s20 font-medium text-mirage mb-[0.375rem]">
              No Voice Power
            </h4>
            <p className="text-xs text-tundora lg:text-sm">
              You do not have voice token for this project.
            </p>
          </span>
          <div>
            {config ? (
              <>
                <h5 className="font-medium text-xs lg:text-sm text-mirage mb-[0.5625rem]">
                  Why you need a voice token
                </h5>
                <ul className="p-4 rounded-2xl mb-7 bg-alabaster space-y-[0.875rem]">
                  <li className="text-sm text-tundora flex items-start space-x-2">
                    <span className="bg-mako rounded-full inline-block min-w-4 lg:min-w-6 size-4 lg:size-6"></span>
                    <p>
                      Creating a post costs{" "}
                      <strong>{config?.post?.minimum_voice_power}</strong> Voice
                      Power or{" "}
                      <strong>{config?.post?.minimum_voice_age}</strong> voice
                      age
                    </p>
                  </li>
                  <li className="text-sm text-tundora flex items-start space-x-2">
                    <span className="bg-mako rounded-full inline-block min-w-4 lg:min-w-6 size-4 lg:size-6"></span>
                    <p>
                      Creating a comment costs{" "}
                      <strong>{config?.comment?.minimum_voice_power}</strong>{" "}
                      Voice Power or{" "}
                      <strong>{config?.comment?.minimum_voice_age}</strong>{" "}
                      voice age
                    </p>
                  </li>
                  <li className="text-sm text-tundora flex items-start space-x-2">
                    <span className="bg-mako rounded-full inline-block min-w-4 lg:min-w-6 size-4 lg:size-6"></span>
                    <p>
                      Creating a proposal costs{" "}
                      <strong>{config?.proposal?.minimum_voice_power}</strong>{" "}
                      Voice Power or{" "}
                      <strong>{config?.proposal?.minimum_voice_age}</strong>{" "}
                      voice age
                    </p>
                  </li>
                  <li className="text-sm text-tundora flex items-start space-x-2">
                    <span className="bg-mako rounded-full inline-block min-w-4 lg:min-w-6 size-4 lg:size-6"></span>
                    <p>
                      Creating a poll costs{" "}
                      <strong>{config?.poll?.minimum_voice_power}</strong> Voice
                      Power or{" "}
                      <strong>{config?.poll?.minimum_voice_age}</strong> voice
                      age
                    </p>
                  </li>
                </ul>
              </>
            ) : null}
            <Link
              href={`/communities/${community}/swap`}
              className={cn(
                "bg-accent px-4 py-2.5 w-full text-center hover:bg-teal block text-white font-medium text-sm rounded-lg"
              )}
            >
              Get voice token
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JoinOrLeaveCommunity;
