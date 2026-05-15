import type { User } from "@/app/types/user";

export async function getUsers(): Promise<User[]> {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${process.env.API_URL}/users`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return [];
  }

  return response.json();
}
