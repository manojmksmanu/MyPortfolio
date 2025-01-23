"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  // Define the links
  const links = [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/notebook", label: "Notebook" },
    { href: "/contact", label: "Contact" },
    { href: "/more", label: "More" },
  ];

  return (
    <div className="relative z-50 w-full flex justify-center pt-5">
      {/* Navbar */}
      <nav
        className={`fixed z-50 backdrop-blur-sm bg-white/30 shadow-sm w-[90%] md:w-[80%] ${
          isMenuOpen ? "rounded-2xl" : "rounded-full" // Dynamic border radius
        } overflow-hidden transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-100">
                ManojKumar
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-gray-100 hover:text-blue-100 transition-colors duration-200 ${
                    pathname === link.href ? "text-blue-100" : ""
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="activeLink"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Section (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <ImLinkedin className="text-2xl text-slate-200" />
              <FaGithub className="text-2xl text-slate-200" />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 focus:outline-none"
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
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden mt-2 pb-4"
              >
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-blue-600 font-semibold"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 px-4 flex space-x-4">
                  <ImLinkedin className="text-2xl text-slate-200" />
                  <FaGithub className="text-2xl text-slate-200" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
}
