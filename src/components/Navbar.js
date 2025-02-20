// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ImLinkedin } from "react-icons/im";
// import { FaGithub } from "react-icons/fa6";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/skills", label: "Skills" },
//     { href: "/projects", label: "Projects" },
//     { href: "/contact", label: "Contact" },
//   ];

//   // Animation variants for mobile menu
//   const menuVariants = {
//     hidden: { opacity: 0, height: 0, y: -20 },
//     visible: { opacity: 1, height: "auto", y: 0 },
//     exit: { opacity: 0, height: 0, y: -20 },
//   };

//   return (
//     <div className="fixed z-50 w-full flex justify-center pt-6">
//       <nav
//         className={`relative z-50 backdrop-blur-md bg-white/40 shadow-lg w-[90%] md:w-[85%] transition-all duration-500 ${
//           isMenuOpen ? "rounded-3xl" : "rounded-full"
//         } overflow-hidden`}
//       >
//         {/* Animated Background Glow */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-purple-300/20 via-pink-300/20 to-teal-300/20"
//           animate={{ opacity: [0.3, 0.6, 0.3] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
//           <div className="flex justify-between h-16 items-center">
//             {/* Logo */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="flex items-center"
//             >
//               <Link
//                 href="/"
//                 className="text-2xl font-extrabold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 tracking-tight"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 ManojKumar
//               </Link>
//             </motion.div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-6">
//               {links.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="relative px-4 py-2 text-gray-700 font-medium group"
//                 >
//                   <motion.span
//                     whileHover={{
//                       color: "#9333ea",
//                       scale: 1.1,
//                       rotate: Math.random() * 10 - 5,
//                     }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     {link.label}
//                   </motion.span>
//                   {pathname === link.href && (
//                     <motion.span
//                       layoutId="activeLink"
//                       className="absolute left-1/2 -bottom-1 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2"
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ type: "spring", bounce: 0.4 }}
//                     >
//                       <motion.span
//                         className="absolute inset-0 bg-purple-300/50 rounded-full"
//                         animate={{ scale: [1, 1.5, 1] }}
//                         transition={{ duration: 1.5, repeat: Infinity }}
//                       />
//                     </motion.span>
//                   )}
//                 </Link>
//               ))}
//             </div>

//             {/* Desktop Social Icons */}
//             <div className="hidden md:flex items-center space-x-6">
//               <motion.a
//                 href="https://linkedin.com" // Add your LinkedIn URL
//                 target="_blank"
//                 drag
//                 dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
//                 whileHover={{
//                   scale: 1.3,
//                   rotate: [0, 15, -15, 0],
//                   color: "#0077b5",
//                 }}
//                 whileDrag={{ scale: 1.2 }}
//                 transition={{ type: "spring", stiffness: 500 }}
//                 className="text-gray-600"
//               >
//                 <ImLinkedin className="text-2xl" />
//               </motion.a>
//               <motion.a
//                 href="https://github.com" // Add your GitHub URL
//                 target="_blank"
//                 drag
//                 dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
//                 whileHover={{
//                   scale: 1.3,
//                   rotate: [0, -15, 15, 0],
//                   color: "#181717",
//                 }}
//                 whileDrag={{ scale: 1.2 }}
//                 transition={{ type: "spring", stiffness: 500 }}
//                 className="text-gray-600"
//               >
//                 <FaGithub className="text-2xl" />
//               </motion.a>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden flex items-center">
//               <motion.button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-gray-800 focus:outline-none p-2 rounded-full hover:bg-purple-100/50"
//                 whileTap={{ scale: 0.9 }}
//                 whileHover={{ rotate: 90 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <svg
//                   className="w-7 h-7"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d={
//                       isMenuOpen
//                         ? "M6 18L18 6M6 6l12 12"
//                         : "M4 6h16M4 12h16m-7 6h7"
//                     }
//                   />
//                 </svg>
//               </motion.button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <AnimatePresence>
//             {isMenuOpen && (
//               <motion.div
//                 variants={menuVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="md:hidden mt-4 pb-6"
//               >
//                 {links.map((link, index) => (
//                   <motion.div
//                     key={link.href}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Link
//                       href={link.href}
//                       className={`block px-4 py-3 text-gray-800 font-medium hover:bg-purple-100/30 rounded-lg transition-all duration-200 ${
//                         pathname === link.href ? "text-purple-600" : ""
//                       }`}
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {link.label}
//                     </Link>
//                   </motion.div>
//                 ))}
//                 <motion.div
//                   className="mt-6 px-4 flex justify-center space-x-8"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   <motion.a
//                     href="https://linkedin.com" // Add your LinkedIn URL
//                     target="_blank"
//                     drag
//                     dragConstraints={{
//                       top: -20,
//                       left: -20,
//                       right: 20,
//                       bottom: 20,
//                     }}
//                     whileHover={{ scale: 1.4, rotate: 20, color: "#0077b5" }}
//                     whileDrag={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                     className="text-gray-600"
//                   >
//                     <ImLinkedin className="text-3xl" />
//                   </motion.a>
//                   <motion.a
//                     href="https://github.com" // Add your GitHub URL
//                     target="_blank"
//                     drag
//                     dragConstraints={{
//                       top: -20,
//                       left: -20,
//                       right: 20,
//                       bottom: 20,
//                     }}
//                     whileHover={{ scale: 1.4, rotate: -20, color: "#181717" }}
//                     whileDrag={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                     className="text-gray-600"
//                   >
//                     <FaGithub className="text-3xl" />
//                   </motion.a>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </nav>
//     </div>
//   );
// }


// Navbar.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", emoji: "🏠" },
    { href: "/about", label: "About", emoji: "👨‍💻" },
    { href: "/skills", label: "Skills", emoji: "✨" },
    { href: "/projects", label: "Projects", emoji: "🚀" },
    { href: "/contact", label: "Contact", emoji: "📬" },
  ];

  // Enhanced menu animation variants
  const menuContainerVariants = {
    hidden: {
      clipPath: "circle(0% at 95% 5%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren"
      }
    },
    visible: {
      clipPath: "circle(150% at 95% 5%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    hidden: {
      x: 100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8
      }
    }
  };

  const socialsVariants = {
    hidden: { 
      y: 50,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.3,
        mass: 0.8
      }
    }
  };

  // Menu backdrop blur animation
  const backdropVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <div className="fixed z-50 w-full flex justify-center pt-6">
      <nav className="relative z-50 backdrop-blur-lg bg-white/30 shadow-xl w-[90%] md:w-[85%] rounded-3xl overflow-hidden border border-purple-200/50">
        {/* Background animation */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.2), rgba(255, 255, 255, 0))",
              "radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.2), rgba(255, 255, 255, 0))",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        >
          {links.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/50 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 50 - 25],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: "20%",
              }}
            />
          ))}
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex items-center"
            >
              <Link href="/">
                <motion.span
                  className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-teal-400 tracking-tight"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
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
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-3 py-2 group"
                >
                  <motion.div
                    className="relative flex items-center gap-2 text-gray-700 font-medium"
                    whileHover={{
                      scale: 1.1,
                      color: "#9333ea",
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.span
                      animate={{
                        rotate: hoveredLink === link.href ? [0, 10, -10, 0] : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {link.emoji}
                    </motion.span>
                    <span>{link.label}</span>
                  </motion.div>
                  
                  {/* Active Indicator */}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-100/50 to-pink-100/50"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute inset-0 bg-purple-200/20 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: hoveredLink === link.href ? 1 : 0,
                      opacity: hoveredLink === link.href ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                whileHover={{
                  scale: 1.3,
                  rotate: 360,
                  color: "#0077b5",
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600"
              >
                <ImLinkedin className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                whileHover={{
                  scale: 1.3,
                  rotate: -360,
                  color: "#181717",
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600"
              >
                <FaGithub className="text-2xl" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 text-gray-800 p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 flex flex-col justify-around"
                animate={isMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="h-0.5 w-6 bg-current rounded-full origin-right"
                  variants={{
                    closed: { rotate: 0, x: 0 },
                    open: { rotate: 45, x: -2 }
                  }}
                />
                <motion.span
                  className="h-0.5 w-6 bg-current rounded-full"
                  variants={{
                    closed: { opacity: 1, x: 0 },
                    open: { opacity: 0, x: -20 }
                  }}
                />
                <motion.span
                  className="h-0.5 w-6 bg-current rounded-full origin-right"
                  variants={{
                    closed: { rotate: 0, x: 0 },
                    open: { rotate: -45, x: -2 }
                  }}
                />
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Backdrop blur */}
                <motion.div
                  className="fixed inset-0 bg-white/60 backdrop-blur-xl md:hidden"
                  variants={backdropVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Menu container */}
                <motion.div
                  variants={menuContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute top-0 right-0 w-full md:hidden bg-white/80 backdrop-blur-lg rounded-b-3xl shadow-2xl overflow-hidden"
                >
                  <div className="pt-20 pb-6 px-4">
                    <div className="space-y-3">
                      {links.map((link) => (
                        <motion.div
                          key={link.href}
                          variants={menuItemVariants}
                          className="overflow-hidden"
                        >
                          <Link
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3 text-gray-800 font-medium rounded-xl relative overflow-hidden group ${
                              pathname === link.href
                                ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600"
                                : ""
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <motion.span
                              className="relative z-10"
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.4 }}
                            >
                              {link.emoji}
                            </motion.span>
                            <span className="relative z-10">{link.label}</span>
                            
                            {/* Hover gradient */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100"
                              initial={false}
                              transition={{ duration: 0.3 }}
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Mobile Social Icons */}
                    <motion.div
                      variants={socialsVariants}
                      className="mt-8 flex justify-center space-x-8"
                    >
                      <motion.a
                        href="https://linkedin.com"
                        target="_blank"
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, 15, -15, 0],
                          color: "#0077b5",
                        }}
                        className="text-gray-600"
                      >
                        <ImLinkedin className="text-3xl" />
                      </motion.a>
                      <motion.a
                        href="https://github.com"
                        target="_blank"
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -15, 15, 0],
                          color: "#181717",
                        }}
                        className="text-gray-600"
                      >
                        <FaGithub className="text-3xl" />
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
}