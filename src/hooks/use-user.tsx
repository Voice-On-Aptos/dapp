"use client";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import useSWR from "swr";

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
      shouldRetryOnError: false,
      revalidateOnMount: false,
    }
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
};

export default useUser;
