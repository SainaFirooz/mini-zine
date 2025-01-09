import Logo from "@/components/ui/logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:absolute">
          <Logo />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="/about">About</Link>
          <Link href="/help">Help</Link>
        </nav>
        <p className="mt-6">
          &copy; 2024 Saina-Miriam Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
