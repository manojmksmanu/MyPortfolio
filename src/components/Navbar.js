"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", emoji: "🏠" },
    { href: "/about", label: "About", emoji: "👨‍💻" },
    { href: "/skills", label: "Skills", emoji: "✨" },
    { href: "/projects", label: "Projects", emoji: "🚀" },
    { href: "/contact", label: "Contact", emoji: "📬" },
  ];

  // Faster animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      rotateX: 90,
      y: -150,
      transformOrigin: "top center",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.7,
      rotateX: -90,
      y: -150,
      transition: {
        duration: 0.15,
        when: "afterChildren",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -30, rotate: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.15,
      },
    },
    exit: { opacity: 0, x: 30, rotate: 15, transition: { duration: 0.1 } },
  };

  const socialsVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300,
        delay: 0.2,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 0.9,
      scale: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex justify-center pt-6">
      <nav className="relative z-10 backdrop-blur-lg bg-white/30 shadow-xl w-[90%] md:w-[85%] rounded-3xl border border-purple-200/50">
        {/* Animated Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-200/20 via-pink-200/20 to-teal-200/20"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with Bounce */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Link href="/">
                <motion.span
                  className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-teal-400 tracking-tight"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.3 },
                  }}
                >
                  ManojKumar
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 group"
                >
                  <motion.div
                    className="flex items-center gap-2 text-gray-700 font-medium"
                    whileHover={{ scale: 1.1, color: "#9333ea" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.span
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.4 },
                      }}
                    >
                      {link.emoji}
                    </motion.span>
                    <span>{link.label}</span>
                  </motion.div>
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-100/50 to-pink-100/50"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center space-x-6 relative z-20">
              <motion.a
                href="https://www.linkedin.com/in/manoj-kumar-05b2b91aa/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  rotate: 360,
                  color: "#0077b5",
                  transition: { duration: 0.4 },
                }}
                className="text-gray-600 cursor-pointer"
              >
                <ImLinkedin className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://github.com/manojmksmanu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  rotate: -360,
                  color: "#181717",
                  transition: { duration: 0.4 },
                }}
                className="text-gray-600 cursor-pointer"
              >
                <FaGithub className="text-2xl" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-20 p-2 text-gray-800 rounded-full relative overflow-hidden"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <motion.span
                  className="h-0.5 w-6 bg-current rounded-full"
                  animate={
                    isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="h-0.5 w-6 bg-current rounded-full"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="h-0.5 w-6 bg-current rounded-full"
                  animate={
                    isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-purple-300/40 rounded-full"
                initial={{ scale: 0 }}
                animate={isMenuOpen ? { scale: 2, opacity: 0 } : { scale: 0 }}
                transition={{ duration: 0.1 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop with Gradient */}
              <motion.div
                key="backdrop"
                className="fixed inset-0 bg-gradient-to-b from-gray-800/80 to-purple-900/80 md:hidden z-40"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu with Creative Flip */}
              <motion.div
                key="menu"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-16 left-4 right-4 bg-white/95 backdrop-blur-lg md:hidden z-50 shadow-2xl rounded-2xl border border-purple-200/30 overflow-hidden"
              >
                <div className="py-6 px-4">
                  <div className="space-y-3">
                    {links.map((link) => (
                      <motion.div
                        key={link.href}
                        variants={menuItemVariants}
                        className="relative overflow-hidden"
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center gap-4 px-4 py-3 text-gray-800 font-medium rounded-xl relative group ${
                            pathname === link.href
                              ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600"
                              : ""
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <motion.span
                            className="text-2xl"
                            whileHover={{
                              scale: 1.3,
                              rotate: [0, 10, -10, 0],
                              transition: { duration: 0.1 },
                            }}
                          >
                            {link.emoji}
                          </motion.span>
                          <span className="text-lg">{link.label}</span>
                          <motion.div
                            className="absolute inset-0 bg-purple-200/30"
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 2, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                          {pathname === link.href && (
                            <motion.div
                              className="absolute right-2 top-1/2 w-2 h-2 bg-purple-500 rounded-full"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1],
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                              }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  {/* Mobile Social Icons */}
                  <motion.div
                    variants={socialsVariants}
                    className="mt-6 flex justify-center space-x-8 relative z-50" // Increased z-index
                  >
                    <motion.a
                      href="https://www.linkedin.com/in/manoj-kumar-05b2b91aa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: [1, 1.4, 1],
                        rotate: [0, 10, -10, 0],
                        color: "#0077b5",
                        transition: { duration: 0.2 },
                      }}
                      className="text-gray-600 cursor-pointer"
                    >
                      <ImLinkedin className="text-3xl" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/manojmksmanu"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: [1, 1.4, 1],
                        rotate: [0, -10, 10, 0],
                        color: "#181717",
                        transition: { duration: 0.2 },
                      }}
                      className="text-gray-600 cursor-pointer"
                    >
                      <FaGithub className="text-3xl" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
