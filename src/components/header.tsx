"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import MenuIcon from "@/app/assets/menu.svg";
import CloseIcon from "@/app/assets/closeIcon.svg";
import Logo from "./ui/logo";

type HeaderProps = {
  userId: string | null;
};

export default function Header({ userId }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm shadow-md transition-all duration-300 ease-in-out">
      <div className="container flex justify-between items-center py-4 px-6">
        <Logo />
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <CloseIcon
              className="h-4 w-4 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          ) : (
            <MenuIcon
              className="h-6 w-6 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
        <nav className="hidden md:flex gap-6 items-center text-gray-600">
          <Link
            href="/about"
            className="hover:text-black hover:underline transition-colors duration-200 ease-in-out"
          >
            About
          </Link>
          <Link
            href="/help"
            className="hover:text-black hover:underline transition-colors duration-200 ease-in-out"
          >
            Help
          </Link>
          {userId ? (
            <div className="flex gap-4 items-center">
              <Link
                href="/dashboard"
                className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight gap-4 hover:bg-gray-900 transition-colors duration-300 ease-in-out"
              >
                Dashboard
              </Link>
              <UserButton />
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link href="/sign-up">
                <Button className="hover:bg-gray-400 transition-colors duration-300 ease-in-out">
                  Sign Up
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button className="hover:bg-gray-400 transition-colors duration-300 ease-in-out">
                  Sign In
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
     
      <div
        className={`${
        isMobileMenuOpen ? "max-h-[200px] w-[20%]" : "max-h-0 w-0"
        } absolute right-4 top-14 overflow-hidden transition-all duration-300 ease-in-out md:hidden bg-white rounded-md shadow-lg`}
      >
        <nav className="flex flex-col gap-3 px-4 py-3 text-sm">
          <Link
            href="/about"
            className="hover:text-black transition-colors duration-200 ease-in-out"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/help"
            className="hover:text-black transition-colors duration-200 ease-in-out"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Help
          </Link>
        {userId ? (
            <Link
              href="/dashboard"
              className="bg-black text-white px-3 py-2 rounded-md font-medium inline-flex tracking-tight hover:bg-gray-900 transition-colors duration-300 ease-in-out"
              onClick={() => setIsMobileMenuOpen(false)}
            >
            Dashboard
            </Link>
          ) : (
            <>
              <Link href="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="px-3 py-2 text-sm hover:bg-gray-200 transition-colors duration-300 ease-in-out">
                Sign Up
              </Button>
              </Link>
              <Link href="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="px-3 py-2 text-sm hover:bg-gray-200 transition-colors duration-300 ease-in-out">
                Sign In
              </Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
