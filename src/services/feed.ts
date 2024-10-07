"use server";

export async function getFeed(limit: number = 30) {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/feed?limit=${limit}`,
      {
        next: {
          tags: ["feed"],
        },
      }
    );
    return await response.json();
  } catch (error) {
    return null;
  }
}
