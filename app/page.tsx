import { getUsers } from "@/app/services/users";
import { Userslist } from "@/app/components/UsersList";

export default async function Home() {
  const users = await getUsers();
  const normalizeUsers = Array.isArray(users) ? users : [users];

  return (
    <div>
       <section className="mb-8">
        <h1 className="text-3xl font-bold">User Directory</h1>
        <p className="mt-2 text-gray-600">
          A simple SSR page built with Next.js, TypeScript and API integration.
        </p>
      </section>
      <Userslist users={normalizeUsers} />
    </div>
  );
}
