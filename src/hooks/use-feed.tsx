"use client";

import { useQuery } from "@tanstack/react-query";

const fetcher = (url: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`).then((r) => r.json());

const useFeed = (initialData: any) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [`feed`],
    queryFn: () => fetcher(`/feed`),
    initialData,
  });

  return {
    feed: data,
    isLoading,
    isError: error,
  };
};

export default useFeed;
