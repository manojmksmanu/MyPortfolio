"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // Animation Variants for Mobile Menu
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Transition for active underline (Desktop)
  const underlineVariants = {
    initial: { scaleX: 0, opacity: 0 },
    animate: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      scaleX: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 z-50 w-full flex justify-center pt-4"
    >
      <div className="w-[90%] md:w-[70%] backdrop-blur-lg bg-black/40 shadow-lg rounded-3xl border border-gray-200/50">
        <div className="px-12 py-4 flex justify-between items-center">
          {/* Brand Name */}
          <Link href="/" className="text-xl font-semibold text-white">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              ManojKumar
            </motion.span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-gray-300 hover:text-white transition-colors duration-300 ease-in-out ${
                  pathname === link.href ? "text-white" : ""
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="activeUnderline"
                    variants={underlineVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://www.linkedin.com/in/manoj-kumar-05b2b91aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
            >
              <ImLinkedin size={20} />
            </a>
            <a
              href="https://github.com/manojmksmanu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
            >
              <FaGithub size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-black/80 backdrop-blur-lg px-4 py-6 rounded-b-3xl border-t border-gray-200/30"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-gray-300 hover:text-white transition-all duration-300 ease-in-out ${
                  pathname === link.href ? "text-white font-medium" : ""
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="ml-2 text-indigo-400"
                  >
                    •
                  </motion.span>
                )}
              </Link>
            ))}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://www.linkedin.com/in/manoj-kumar-05b2b91aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              >
                <ImLinkedin size={20} />
              </a>
              <a
                href="https://github.com/manojmksmanu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
