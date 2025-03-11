"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Download } from "lucide-react";

const FloatingParticle = ({ index, mousePosition }) => {
  const size = Math.random() * 8 + 4;
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(147, 51, 234, 0.4), rgba(236, 72, 153, 0.2))`,
      }}
      initial={{
        x: mousePosition.x + (Math.random() * 250 - 125),
        y: mousePosition.y,
      }}
      animate={{
        y: mousePosition.y - 350,
        x: mousePosition.x + Math.cos(index) * 200,
        opacity: [0, 0.8, 0],
        scale: [0.5, 1.3, 0.7],
        rotate: Math.random() * 360,
      }}
      transition={{
        duration: 3 + Math.random() * 3,
        ease: "easeOut",
      }}
    />
  );
};

const Page = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [particles, setParticles] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const phrases = [
    "React Native ",
    "MERN Developer ✨",
    "App Developer 📱",
    "Google Play Console",
    "App Store Connect ",
  ];

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Phrase rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [phrases.length]);

  // Particle generation (reduced particles on smaller screens)
  useEffect(() => {
    const timer = setTimeout(() => {
      const maxParticles = window.innerWidth < 768 ? 15 : 25;
      if (particles.length < maxParticles) {
        setParticles((prev) => [...prev, Date.now()]);
      }
    }, 80);
    return () => clearTimeout(timer);
  }, [mousePosition, particles.length]);

  const handleDownloadResume = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/path/to/resume.pdf";
    link.download = "Manoj_Kumar_Resume.pdf";
    link.click();
    link.remove();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-900 pt-14 overflow-hidden relative">
      {/* Particle effect */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((id, i) => (
          <FloatingParticle key={id} index={i} mousePosition={mousePosition} />
        ))}
      </div>

      {/* Dynamic Background Glow */}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-pink-100/20 to-white"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      /> */}

      {/* Main content */}
      <div className="container mx-auto px-4 py-8 md:py-16 text-center relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          {/* Creative Image Effect */}
          <motion.div
            className="relative mb-6 md:mb-12 group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.img
              src="/Images/myImage.png"
              alt="Manoj Kumar"
              className="rounded-full w-[180px] sm:w-[220px] md:w-[300px] shadow-2xl border-4 border-purple-300/50 bg-white"
              drag
              dragConstraints={{
                top: -40,
                left: -40,
                right: 40,
                bottom: 40,
              }}
              whileDrag={{ scale: 1.15, rotate: 10 }}
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            />
            <motion.div
              className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-400/20"
              animate={{
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? [1, 1.2, 1] : 1,
              }}
              transition={{
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.8, repeat: isHovered ? Infinity : 0 },
              }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-dashed border-purple-300"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Animated Name with Letter Effects */}
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight relative">
            {"MANOJ KUMAR".split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                whileHover={{
                  y: -6,
                  color: i % 2 === 0 ? "#9333ea" : "#ec4899",
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
            <motion.span
              className="absolute -right-8 sm:-right-10 md:-right-14 top-1 sm:top-2"
              animate={{ y: [0, -12, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              <Sparkles
                className="text-pink-500"
                size={24}
                // sm:size={32}
                // md:size={40}
              />
            </motion.span>
          </motion.h1>

          {/* Phrase Animation with Gradient */}
          <div className="h-10 sm:h-12 md:h-14 mb-6 sm:mb-8 md:mb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhrase}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
              >
                {phrases[currentPhrase]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Creative Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed relative px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="relative">
              Weaving code into digital art
              <motion.span
                className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 text-purple-400"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✧
              </motion.span>
            </span>{" "}
            and turning ideas into interactive realities.
          </motion.p>

          {/* Interactive Button with Burst Effect */}
          <motion.button
            onClick={handleDownloadResume}
            className="relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-xl overflow-hidden group text-sm sm:text-base md:text-lg"
            whileHover={{
              scale: 1.12,
              boxShadow: "0 0 25px rgba(147, 51, 234, 0.6)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              <Download size={26} />
              Grab My Resume
            </span>
            <motion.div
              className="absolute inset-0 bg-white/30"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 2, opacity: 0.5 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute -top-2 -right-2 w-3 sm:w-4 h-3 sm:h-4 bg-pink-300 rounded-full"
              animate={{ scale: isHovered ? [0, 1.5, 0] : 0 }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;

