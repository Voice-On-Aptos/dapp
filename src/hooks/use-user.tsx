"use client";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const fetcher = (url: string, address: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${address}`,
    },
  }).then((r) => r.json());

const useUser = () => {
  const { account } = useWallet();
  const address = account?.address || "";

  const { data, isError, error, isLoading } = useQuery({
    queryKey: [`user`, address],
    queryFn: () => fetcher("/user", address),
    enabled: !!address,
  });

  return {
    user: data,
    isLoading,
    isError,
    error,
  };
};

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["user"],
    mutationFn: async ({
      address,
      payload,
    }: {
      address: string;
      payload: Record<string, any>;
    }) => {
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
        const message = await response.text();
        throw new Error(message || "Failed to update the user profile");
      }

      const updatedProfile = await response.json();
      return updatedProfile;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user", data?.address],
      });
    },
  });

  return { updateUserProfile: mutateAsync, isPending };
};

export default useUser;
