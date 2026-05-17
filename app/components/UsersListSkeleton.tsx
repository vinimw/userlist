export function UsersListSkeleton() {
  return (
    <section aria-label="Loading users" className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div className="h-7 w-24 animate-pulse rounded bg-gray-200" />
        <div className="h-5 w-20 animate-pulse rounded bg-gray-200" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-4 h-6 w-40 animate-pulse rounded bg-gray-200" />

            <div className="space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
