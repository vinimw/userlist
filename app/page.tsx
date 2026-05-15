import { UsersSection } from "@/app/components/UsersSection";
import { Suspense } from "react";

export default async function Home() {

  return (
    <div className="w-[600px] m-auto">
      <Suspense fallback={<p>Loading users...</p>}>
        <UsersSection />
      </Suspense>
    </div>
  );
}
