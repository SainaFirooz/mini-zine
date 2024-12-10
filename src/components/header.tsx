import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "./ui/button";
// import Image from "next/image";
import MenuIcon from "@/app/assets/menu.svg";
// import Logo from "@/app/assets/logo.png";
import Logo from "./ui/logo";

export default async function header() {
  const { userId } = await auth();

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <MenuIcon className="h-5 w-5 md:hidden" />
        <nav className="hidden md:flex gap-6 text-black/60 items-center">
          <Link href="/about">About</Link>
          <Link href="/help">Help</Link>
          {userId ? (
            <div className="flex gap-4 items-center">
              <Link
                href="/dashboard"
                className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight gap-4"
              >
                Dashboard
              </Link>
              <div className="relative">
                <UserButton />
              </div>
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
        </nav>
      </div>
    </header>
  );
}
