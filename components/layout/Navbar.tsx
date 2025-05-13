"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import logoImage from '../../public/logos/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isSignedIn } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={`max-w-3xl mx-auto w-[360px] md:w-[584px] px-4 sm:px-6 lg:px-8 bg-[#d6e0e251] md:shadow-sm backdrop-blur-sm rounded-3xl mt-6 transition-all duration-300 ease-in-out ${isMenuOpen ? "pb-4" : ""
          }`}
      >
        <div className="flex justify-between items-center h-[60px]">
          <div className="text-[23px] font-bold ms-2 text-gray-800">
            <div className="flex items-center space-x-1">
              {/* Logo */}
              <Image src={logoImage} alt="Logo AI" width={40} height={40} />
              <Link href="/">Logo AI</Link>
            </div>
          </div>

          {/* Desktop Links */}
          {isSignedIn ? (
            <div className="hidden md:flex items-center  space-x-6">
              <div className="space-x-6 flex items-center">
                <Link href="/pricing" className="text-neutral-black font-[600]">
                  Pricing
                </Link>
                <Link
                  href="/generate"
                  className="text-neutral-black font-[600]"
                >
                  Generate
                </Link>
                <Link href="/my-work" className="text-neutral-black font-[600]">
                  My Work
                </Link>
                <UserButton />
              </div>
            </div>
          ) : (
            <div className="hidden md:flex space-x-1">
              <Link
                href="/pricing"
                className="px-4 py-2 text-[16px] font-[600] text-black"
              >
                Pricing
              </Link>
              <Link
                href="/sign-in"
                className="pr-4 py-2 text-[16px] font-[600] text-black"
              >
                Login
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-800 focus:outline-none me-2"
              aria-label="Toggle Menu"
              onClick={toggleMenu}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Vertical Extension */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[200px] opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col space-y-4 pb-2">
            <Link
              href="/pricing"
              className="text-neutral-black font-[600]"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            {isSignedIn ? (
              <>
                <Link
                  href="/generate"
                  className="text-neutral-black font-[600]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Generate
                </Link>
                <Link
                  href="/my-work"
                  className="text-neutral-black font-[600]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Work
                </Link>
              </>
            ) : (
              <Link
                href="/sign-in"
                className="text-neutral-black font-[600]"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
