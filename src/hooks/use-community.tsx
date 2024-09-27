"use client";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`).then((r) => r.json());

const useCommunity = (id: string) => {
  const { data, error, isLoading } = useSWR(
    id ? [`/community/${id}`, id] : null,
    ([url]) => fetcher(url),
    {
      shouldRetryOnError: false,
    }
  );

  return {
    community: data,
    isLoading,
    isError: error,
  };
};

export default useCommunity;
