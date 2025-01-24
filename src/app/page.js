"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Page() {
  const [isHovered, setIsHovered] = useState(false);

  // Typewriter effect for the description
  const text =
    "I'm a passionate developer who loves building amazing web experiences.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    if (index < text.length) {
      setTimeout(() => {
        setDisplayText(displayText + text[index]);
        setIndex(index + 1);
      }, 50);
    }
  }, [index, displayText, text]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <motion.div
        className="absolute inset-0 z-0"
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Interactive Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full cursor-pointer"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
            scale: [null, Math.random() * 0.5 + 0.5],
          }}
          whileHover={{ scale: 2, backgroundColor: "#ff0099" }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
        />
      ))}

      {/* Gradient Border Container with Draggable Image */}
      <motion.div
        className="relative p-2 rounded-2xl z-10"
        animate={{
          background: [
            "linear-gradient(45deg, #ff0099, #493240)",
            "linear-gradient(45deg, #493240, #ff0099)",
            "linear-gradient(45deg, #ff0099, #493240)",
          ],
        }}
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
          className="rounded-lg block w-[300px] cursor-pointer"
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
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

      {/* Content */}
      <motion.div
        className="mt-8 text-center z-10"
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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-4xl font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
         MANOJ KUMAR
        </h1>
        <p className="mt-4 text-lg text-gray-300">{displayText}</p>
      </motion.div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute w-20 h-20 bg-pink-500 rounded-full opacity-30"
        initial={{ x: -100, y: -100 }}
        animate={{ x: [0, 200, 0], y: [0, 200, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-20 h-20 bg-purple-500 rounded-full opacity-30"
        initial={{ x: -100, y: 100 }}
        animate={{ x: [0, -200, 0], y: [0, -200, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Hover Effect Overlay */}
      {/* {isHovered && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )} */}
    </div>
  );
}

export default Page;
