import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function header() {
  const { userId } = await auth();

  return (
    <div className="bg-gray-600 text-neutral-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <Link href="/">Home</Link>
        <div>
          {userId ? (
            <div className="flex gap-4 items-center">
              <Link href="/dashboard">Dashboard</Link>
              <UserButton />
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link href="/sign-up">
                <Button>Sign up</Button>
              </Link>
              <Link href="/sign-in">
                <Button>Sign in</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
