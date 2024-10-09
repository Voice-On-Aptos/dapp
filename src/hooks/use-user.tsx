"use client";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import useSWR, { useSWRConfig } from "swr";

const fetcher = (url: string, address: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${address}`,
    },
  }).then((r) => r.json());

const useUser = () => {
  const { account } = useWallet();
  const address = account?.address || "";
  const { data, error, isLoading } = useSWR(
    address ? [`/user`, address] : null,
    ([url]) => fetcher(url, address),
    {
      revalidateOnMount: false,
      revalidateOnFocus: false,
    }
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
};

export const useUpdateUserProfile = () => {
  const { mutate } = useSWRConfig();

  const updateUserProfile = async (
    address: string,
    payload: Record<string, any>
  ) => {
    // Send the update request
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${address}`,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update the user profile");
    }

    const updatedProfile = await response.json();

    // Update the cache with the new profile data
    mutate([`/user`, address], updatedProfile, false);
  };

  return updateUserProfile;
};

export default useUser;
