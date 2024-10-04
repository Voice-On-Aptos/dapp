"use client";

import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`).then((r) => r.json());

const useFeed = () => {
  const { data, error, isLoading } = useSWR(`/feed`, (url) => fetcher(url));

  return {
    feed: data,
    isLoading,
    isError: error,
  };
};

export default useFeed;
