import { User } from "@/app/types/user"
import { UserCard } from "@/app/components/UserCard";

interface UserListProps {
    users: User[]
}

export function Userslist({ users }: UserListProps) {
    return (
        <section>
            <h2>Users</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                    <UserCard user={user} key={user.id}></UserCard>
                ))}
            </div>
        </section>
    )
}