import Logo from "@/components/ui/logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="text-black text-sm py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6 h-8 w-auto text-white">
          <Logo  />
        </div>

        <nav className="flex flex-col sm:flex-row justify-center gap-6 text-black-400 text-sm">
          <Link
            href="/about"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/help"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            Help
          </Link>
        </nav>
        <p className="text-center mt-4 text-gray-500">
          &copy; 2024 Saina-Miriam Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
