import { UsersListSkeleton } from "@/app/components/UsersListSkeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="mb-8">
        <div className="mb-4 h-10 w-64 animate-pulse rounded bg-gray-200" />

        <div className="h-4 w-96 animate-pulse rounded bg-gray-200" />
      </section>

      <UsersListSkeleton />
    </main>
  );
}
