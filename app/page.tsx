import { UsersSection } from "@/app/components/UsersSection";
import { Suspense } from "react";

export default async function Home() {

  return (
    <div className="w-[600px] m-auto">
      <section className="mb-8">
        <h1 className="text-3xl font-bold">User Directory</h1>
        <p className="mt-2 text-gray-600">
          A simple SSR page built with Next.js, TypeScript and API integration.
        </p>
        <UsersSection />
      </section>
    </div>
  );
}
