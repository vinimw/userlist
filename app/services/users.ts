import type { User } from "@/app/types/user";

const USERS_REVALIDATE_SECONDS = 60;
const USERS_CACHE_TAG = "users";

export interface GetUsersResult {
  users: User[];
  error?: string;
}

export async function getUsers(): Promise<GetUsersResult> {
  const apiUrl = process.env.API_URL?.trim();

  if (!apiUrl) {
    return {
      users: [],
      error: "API_URL is not configured.",
    };
  }

  try {
    const response = await fetch(`${apiUrl.replace(/\/+$/, "")}/users`, {
      next: {
        revalidate: USERS_REVALIDATE_SECONDS,
        tags: [USERS_CACHE_TAG],
      },
    });

    if (!response.ok) {
      return {
        users: [],
        error: `Could not load users. The API responded with ${response.status}.`,
      };
    }

    const payload: unknown = await response.json();

    if (!Array.isArray(payload)) {
      return {
        users: [],
        error: "The users API returned an invalid response.",
      };
    }

    const users = payload
      .map(toUser)
      .filter((user): user is User => user !== null);

    return {
      users,
      error:
        users.length === payload.length
          ? undefined
          : "Some user records were skipped because they were invalid.",
    };
  } catch (error) {
    console.error("Failed to fetch users", error);

    return {
      users: [],
      error: "Could not connect to the users API.",
    };
  }
}

function toUser(value: unknown): User | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const user = value as Record<string, unknown>;
  const { id, name } = user;

  if (typeof id !== "number" || !Number.isInteger(id) || typeof name !== "string") {
    return null;
  }

  return {
    id,
    name,
    ...(typeof user.email === "string" ? { email: user.email } : {}),
    ...(typeof user.phone === "string" ? { phone: user.phone } : {}),
    ...(typeof user.website === "string" ? { website: user.website } : {}),
  };
}
