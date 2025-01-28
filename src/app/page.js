"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const FloatingParticle = ({ index }) => {
  return (
    <motion.div
      className="absolute bg-purple-500/30 rounded-full"
      style={{
        width: Math.random() * 4 + 2,
        height: Math.random() * 4 + 2,
      }}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        y: [0, -400],
        x: [0, Math.sin(index) * 100],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: "linear",
      }}
    />
  );
};

const Page = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const phrases = [
    "Full Stack Developer ⚡",
    "MERN Developer 💻",
    "React Native Developer 📱",
    "Problem Solver 💡",
    "Tech Innovator 🚀",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/path/to/resume.pdf";
    link.download = "Manoj_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="min-h-screen flex items-center justify-center text-white overflow-hidden relative pt-1">
      {/* Particle effect */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((i) => (
          <FloatingParticle key={i} index={i} />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="relative mb-8 group"
          >
            <motion.div
              className="relative p-2 rounded-2xl z-10"
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Draggable Image */}
              <motion.img
                src="/Images/myImage.png"
                alt="Developer Portfolio"
                className="rounded-lg block w-[250px] md:w-[300px] cursor-pointer"
                drag
                dragConstraints={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                dragElastic={0.8} // Reduced elasticity for smoother dragging
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} // Smoother transition
                whileDrag={{ scale: 1.05 }} // Slight scale-up while dragging
              />
            </motion.div>
            <motion.div
              className="absolute -inset-4 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(147, 51, 234, 0.3)",
                  "0 0 40px rgba(147, 51, 234, 0.6)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 relative font-sans"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient">
              MANOJ KUMAR
            </span>
            <motion.span
              className="absolute -right-8 top-0"
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="text-yellow-400" size={32} />
            </motion.span>
          </motion.h1>

          {/* Text Reveal Effect */}
          <div className="h-12 text-2xl font-light mb-8 overflow-hidden">
            <motion.div
              key={currentPhrase}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
            >
              {phrases[currentPhrase]}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mb-12 relative"
          >
            <p className="text-xl text-gray-300 leading-relaxed font-sans">
              Transforming ideas into digital experiences through elegant code
              and creative solutions. Let's build something amazing together.
            </p>
          </motion.div>

          <motion.button
            onClick={handleDownloadResume}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold shadow-lg transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Download Resume</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
              style={{ mixBlendMode: "overlay" }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Page;
