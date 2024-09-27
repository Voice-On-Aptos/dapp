"use server";

import { revalidatePath } from "next/cache";

interface UserProps {
  email: string;
  address: string;
  country: string;
  username: string;
}

export async function updateUser(address: string, payload: Partial<UserProps>) {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${address}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.status != 201 && response.status != 200) {
      throw new Error(`Failed to update user: ${response.statusText}`);
    }

    revalidatePath("layout");
    return await response.json();
  } catch (error) {
    if (typeof error === "string") {
      return { error };
    }

    return { error: "Failed to update user" };
  }
}
