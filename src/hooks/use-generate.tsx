"use client";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const fetcher = (url: string, address: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${address}`,
    },
  }).then((r) => r.json());

export const useGeneratePost = () => {
  const { account } = useWallet();
  const address = account?.address || "";

  return useMutation({
    mutationKey: ["generate-post-content"],
    mutationFn: async () => {
      try {
        const response = await fetcher("/ai/generate/post", address);
        return response;
      } catch (error) {
        throw new Error("Failed to generate post content");
      }
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to generate post content", {
        className: "error-message",
      });
    },
  });
};

export const useGenerateProposal = () => {
  const { account } = useWallet();
  const address = account?.address || "";

  return useMutation({
    mutationKey: ["generate-proposal-content"],
    mutationFn: async () => {
      try {
        const response = await fetcher("/ai/generate/proposal", address);
        return response;
      } catch (error) {
        throw new Error("Failed to generate proposal content");
      }
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to generate proposal content", {
        className: "error-message",
      });
    },
  });
};

export const useGeneratePoll = () => {
  const { account } = useWallet();
  const address = account?.address || "";

  return useMutation({
    mutationKey: ["generate-poll-content"],
    mutationFn: async () => {
      try {
        const response = await fetcher("/ai/generate/poll", address);
        return response;
      } catch (error) {
        throw new Error("Failed to generate poll content");
      }
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to generate poll content", {
        className: "error-message",
      });
    },
  });
};
