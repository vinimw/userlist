"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function ErrorPage({ error, unstable_retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <section className="max-w-md rounded-md border border-gray-200 bg-white p-6 text-center shadow-sm">
        <h1 className="text-xl font-semibold text-gray-950">Something went wrong</h1>
        <p className="mt-2 text-sm text-gray-600">
          The page could not be rendered. Try again to reload this route.
        </p>
        <button
          className="mt-5 rounded-md bg-gray-950 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          onClick={unstable_retry}
          type="button"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
