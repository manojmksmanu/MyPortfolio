"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Star, Code, Terminal, Workflow } from "lucide-react";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "E-Commerce Platform",
      icon: "🛒",
      description:
        "A full-stack e-commerce platform with React, Node.js, and MongoDB.",
      experience: "Advanced",
      features: [
        "User Authentication",
        "Product Search",
        "Shopping Cart",
        "Payment Gateway Integration",
      ],
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "Social Media App",
      icon: "📱",
      description:
        "A social media application built with React Native and Firebase.",
      experience: "Advanced",
      features: [
        "Real-time Chat",
        "Image Upload",
        "Push Notifications",
        "User Profiles",
      ],
      color: "from-purple-400 to-pink-400",
    },
    {
      name: "Portfolio Website",
      icon: "🌐",
      description:
        "A personal portfolio website showcasing skills and projects.",
      experience: "Intermediate",
      features: [
        "Responsive Design",
        "Project Showcase",
        "Blog Integration",
        "Contact Form",
      ],
      color: "from-green-400 to-emerald-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br pt-16 md:pt-28 px-4 md:px-6 mb-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-8 md:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Projects
          </span>
        </motion.h1>
      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-gradient-to-br ${project.color} p-[1px] rounded-xl cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-gray-900 p-4 md:p-6 rounded-xl h-full">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">
                  {project.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Sidebar */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 h-full w-[95%] md:w-[90%] lg:w-1/2 bg-gradient-to-b from-gray-900 to-black p-4 md:p-8 z-50 overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 md:top-6 right-4 md:right-6 p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mt-12 md:mt-8">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="text-4xl md:text-5xl">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedProject.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1 md:mt-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-yellow-500">
                        {selectedProject.experience}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mb-2 md:mb-3">
                      About
                    </h3>
                    <p className="text-white text-base md:text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mb-2 md:mb-3">
                      Features
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.features.map((item) => (
                        <span
                          key={item}
                          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r ${selectedProject.color} text-white text-xs md:text-sm font-medium`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
