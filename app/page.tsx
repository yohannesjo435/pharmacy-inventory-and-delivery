import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <div>Not authorized</div>;
  }

  return (
    <div className="min-h-screen">
      <h1>Welcome to Next.js!</h1>
    </div>
  );
}
