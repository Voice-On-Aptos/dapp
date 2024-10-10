"use client";

import { useQuery } from "@tanstack/react-query";

const fetcher = (url: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`).then((r) => r.json());

const useFeedSummarizer = (enabled: boolean = false) => {
  return useQuery({
    queryKey: [`feed-summary`],
    queryFn: () => fetcher(`/feed/summary`),
    enabled,
  });
};

export default useFeedSummarizer;
