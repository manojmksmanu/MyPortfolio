"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNodeDotJs,
  SiPython,
  SiDocker,
  SiAws,
  SiGit,
  SiMongodb,
  SiTypescript,
  SiGraphql,
  SiKubernetes,
} from "react-icons/si";

const Page = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsData = [
    {
      icon: <SiReact size={50} />,
      name: "React",
      description:
        "Advanced knowledge in building interactive UIs using React and its ecosystem.",
    },
    {
      icon: <SiNodeDotJs size={50} />,
      name: "Node.js",
      description:
        "Proficient in building scalable server-side applications using Node.js.",
    },
    {
      icon: <SiPython size={50} />,
      name: "Python",
      description:
        "Experience in data analysis and backend development with Python.",
    },
    {
      icon: <SiDocker size={50} />,
      name: "Docker",
      description:
        "Skilled in containerizing applications using Docker for efficient deployment.",
    },
    {
      icon: <SiAws size={50} />,
      name: "AWS",
      description:
        "Certified in AWS cloud services, proficient in deploying and managing cloud infrastructure.",
    },
    {
      icon: <SiGit size={50} />,
      name: "Git",
      description:
        "Expert in version control and collaborative development workflows using Git.",
    },
    {
      icon: <SiMongodb size={50} />,
      name: "MongoDB",
      description:
        "Experienced in designing and managing NoSQL databases with MongoDB.",
    },
    {
      icon: <SiTypescript size={50} />,
      name: "TypeScript",
      description:
        "Strong understanding of TypeScript for building robust web applications.",
    },
    {
      icon: <SiGraphql size={50} />,
      name: "GraphQL",
      description:
        "Proficient in building and consuming GraphQL APIs for efficient data retrieval.",
    },
    {
      icon: <SiKubernetes size={50} />,
      name: "Kubernetes",
      description:
        "Knowledgeable in orchestrating containerized applications using Kubernetes.",
    },
  ];

  const handleClose = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
            Skills
          </span>
        </h1>
        <p className="text-xl text-gray-300">
          Explore the technologies I specialize in.
        </p>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center p-4 cursor-pointer"
              onClick={() => setSelectedSkill(skill)}
            >
              {/* Dynamically render the icon here */}
              {skill.icon}
              <p className="mt-2 text-sm text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              bounce: 0.2,
            }}
            className="fixed inset-y-0 right-0 w-full md:w-2/5 bg-gray-800/90 backdrop-blur-lg p-6 overflow-y-auto z-100"
            onClick={handleClose} // Close when clicking outside
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold mb-4">
                  {selectedSkill.name}
                </h2>
                <button
                  onClick={handleClose}
                  className="text-white text-2xl font-semibold"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-300">{selectedSkill.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;
