import { getUsers } from "@/app/services/users";
import { UsersList } from "@/app/components/UsersList";

export async function UsersSection() {
  const { users, error } = await getUsers();

  return <UsersList error={error} users={users} />;
}
