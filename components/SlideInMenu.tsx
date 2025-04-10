// components/SlideInMenu.jsx
import { useState, useEffect } from "react";
import Link from "next/link";

interface Iprops {
  isOpen: boolean;
  onClose: () => void;
}

const SlideInMenu = ({ isOpen, onClose }: Iprops) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 md:w-80 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with title and close button */}
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-xl font-bold">VibeConnect</h2>
            <button
              onClick={onClose}
              className="text-2xl font-light hover:text-gray-300 cursor-pointer"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-grow py-6">
            <ul className="space-y-6 text-center">
              <li>
                <Link
                  href="/pricing"
                  className="block py-2 hover:text-gray-300 transition"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/artist-hub"
                  className="block py-2 hover:text-gray-300 transition"
                >
                  Artists Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="block py-2 hover:text-gray-300 transition"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="block py-2 hover:text-gray-300 transition"
                >
                  Events
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer with login and signup */}
          <div className="py-6 space-y-4 px-6">
            <Link
              href="/login"
              className="block text-center py-2 hover:text-gray-300 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block text-center py-2 bg-pink-600 hover:bg-pink-700 rounded-full transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideInMenu;
