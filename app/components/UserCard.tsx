import type { User } from "@/app/types/user";

interface userCardProps {
    user: User;
}

export function UserCard({ user }: userCardProps) {
    return (
        <article className="article">
            {user?.name && <h2 className="font-bold">{user.name}</h2>}
            <div className="mt-3 space-y-2 text-sm border">
                <div>
                    {user?.email && <div className="font-medium"><strong>Email:</strong> {user.email}</div>}
                    {user?.phone && <div className="font-medium"><strong>Phone:</strong> {user.phone}</div>}
                    {user?.website && <div className="font-medium"><strong>Website:</strong> {user.website}</div>}
                </div>
            </div>
        </article>
    )
}