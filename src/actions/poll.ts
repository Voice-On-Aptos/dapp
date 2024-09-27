"use server";

import { revalidateTag } from "next/cache";

interface CreatePollProps {
  question: string;
  options: string[];
  multiple: boolean;
  author: string;
  community: string;
}

export async function createPoll(address: string, payload: CreatePollProps) {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/poll/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${address}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.status != 201) {
      throw new Error(`Failed to create poll: ${response.statusText}`);
    }

    revalidateTag("community-polls");
    revalidateTag("community-stats");
    return await response.json();
  } catch (error) {
    if (typeof error === "string") {
      return { error };
    }

    return { error: "Failed to create poll" };
  }
}
