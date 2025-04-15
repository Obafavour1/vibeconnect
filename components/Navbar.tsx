"use client";
import { NavLink } from "@/utils/utils";
import Link from "next/link";
import React, { useState } from "react";
import SlideInMenu from "./SlideInMenu";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="absolute w-screen px-4 sm:px-8 md:px-16 lg:px-24 top-5 md:top-10 text-white">
      <div className="flex items-center justify-between">
        <div className="">
          <Link href="/" className="flex gap-1 cursor-pointer items-center">
            <Image
              src="/icons/vibeLogo.svg"
              alt="vibe Logo"
              width={50}
              height={50}
            />
            <h1 className="text-2xl font-bold">VibeConnect</h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-10 text-xl font-normal">
          {NavLink.map((link) => {
            return (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href && "text-[#FF007F]"
                  } hover:text-[#FF007F] transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="text-xl font-normal hidden lg:flex items-center gap-5">
          <button type="button">Login</button>
          <button type="button" className="  px-14 btn">
            Sign Up
          </button>
        </div>
        {/* Menu toggle button */}
        <button
          onClick={toggleMenu}
          className="p-2 focus:outline-none md:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* Slide-in menu component */}
        <SlideInMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
