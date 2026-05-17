import { UsersSection } from "@/app/components/UsersSection";
import { UsersListSkeleton } from "@/app/components/UsersListSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <section className="mb-8">
          <h1 className="text-3xl font-bold tracking-normal text-gray-950">
            User Directory
          </h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            A simple SSR page built with Next.js, TypeScript and API integration.
          </p>
        </section>

        <Suspense fallback={<UsersListSkeleton />}>
          <UsersSection />
        </Suspense>
      </div>
    </main>
  );
}
