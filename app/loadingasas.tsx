export default function Loading() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="mb-8">
        <div className="mb-4 h-10 w-64 animate-pulse rounded bg-gray-200" />

        <div className="h-4 w-96 animate-pulse rounded bg-gray-200" />
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border p-4 shadow-sm"
          >
            <div className="mb-4 h-6 w-40 animate-pulse rounded bg-gray-200" />

            <div className="space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}