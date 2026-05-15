import { getUsers } from "@/app/services/users";
import { Userslist } from "@/app/components/UsersList";

export async function UsersSection() {
	const users = await getUsers();
	const normalizeUsers = Array.isArray(users) ? users : [users];

	return(
		<Userslist users={normalizeUsers} />
	)
}