import type { User } from "@/app/types/user";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <article className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-base font-semibold text-gray-950">{user.name}</h3>

      <dl className="mt-3 space-y-2 text-sm">
        {user.email ? (
          <div>
            <dt className="font-medium text-gray-500">Email</dt>
            <dd className="break-words text-gray-900">
              <a className="underline-offset-2 hover:underline" href={`mailto:${user.email}`}>
                {user.email}
              </a>
            </dd>
          </div>
        ) : null}

        {user.phone ? (
          <div>
            <dt className="font-medium text-gray-500">Phone</dt>
            <dd className="text-gray-900">
              <a className="underline-offset-2 hover:underline" href={toPhoneHref(user.phone)}>
                {user.phone}
              </a>
            </dd>
          </div>
        ) : null}

        {user.website ? (
          <div>
            <dt className="font-medium text-gray-500">Website</dt>
            <dd className="break-words text-gray-900">
              <a
                className="underline-offset-2 hover:underline"
                href={toWebsiteHref(user.website)}
                rel="noreferrer"
                target="_blank"
              >
                {user.website}
              </a>
            </dd>
          </div>
        ) : null}
      </dl>
    </article>
  );
}

function toPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function toWebsiteHref(website: string) {
  if (/^https?:\/\//i.test(website)) {
    return website;
  }

  return `https://${website}`;
}
