import type { User } from "@/app/types/user";
import { UserCard } from "@/app/components/UserCard";

interface UsersListProps {
  users: User[];
  error?: string;
}

export function UsersList({ users, error }: UsersListProps) {
  const hasUsers = users.length > 0;

  return (
    <section aria-labelledby="users-heading" className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <h2 id="users-heading" className="text-xl font-semibold">
          Users
        </h2>
        <p className="text-sm text-gray-500">
          {users.length} {users.length === 1 ? "profile" : "profiles"}
        </p>
      </div>

      {error ? (
        <p
          className="rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900"
          role="status"
        >
          {error}
        </p>
      ) : null}

      {hasUsers ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="rounded-md border border-dashed border-gray-300 bg-white px-4 py-10 text-center text-sm text-gray-600">
          No users found.
        </div>
      )}
    </section>
  );
}
