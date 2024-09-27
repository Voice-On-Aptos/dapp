"use server";

import { revalidateTag } from "next/cache";

interface CreatePostProps {
  content: string;
  author: string;
  community: string;
}

export async function createPost(address: string, payload: CreatePostProps) {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/post/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${address}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.status != 201) {
      throw new Error(`Failed to create post: ${response.statusText}`);
    }

    revalidateTag("community-posts");
    return await response.json();
  } catch (error) {
    if (typeof error === "string") {
      return { error };
    }

    return { error: "Failed to create post" };
  }
}
