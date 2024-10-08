"use client";

import useSWR from "swr";

const fetcher = (url: string, address: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${address}`,
    },
  }).then((r) => r.json());

const useUserEngagements = (
  address: string,
  community: string,
  userId: string
) => {
  console.log({ address, community, userId });
  const { data, error, isLoading } = useSWR(
    address
      ? [`/community/${community}/engagements?userId=${userId}`, address]
      : null,
    ([url]) => fetcher(url, address),
    {
      revalidateOnMount: false,
    }
  );

  return {
    engagements: data,
    isLoading,
    isError: error,
  };
};

export default useUserEngagements;
