"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Star, Sparkles } from "lucide-react";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "E-Commerce Platform",
      icon: "🛒",
      description: "A full-stack e-commerce solution with modern tech.",
      experience: "Advanced",
      features: [
        "User Authentication",
        "Product Search",
        "Shopping Cart",
        "Payment Integration",
      ],
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "Social Media App",
      icon: "📱",
      description: "A real-time social app with mobile-first design.",
      experience: "Advanced",
      features: [
        "Live Chat",
        "Image Sharing",
        "Notifications",
        "User Profiles",
      ],
      color: "from-purple-400 to-pink-400",
    },
    {
      name: "Portfolio Website",
      icon: "🌐",
      description: "A showcase of my skills and creativity.",
      experience: "Intermediate",
      features: [
        "Responsive Design",
        "Project Gallery",
        "Blog Section",
        "Contact Form",
      ],
      color: "from-green-400 to-emerald-400",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 px-4 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-300/30 rounded-full"
            style={{
              width: Math.random() * 6 + 3,
              height: Math.random() * 6 + 3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.6, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 1.5,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12 md:mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-4xl md:text-6xl font-extrabold mb-4 relative"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400">
            My Projects
          </span>
          <motion.span
            className="absolute -top-4 -right-4 text-purple-400"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={32} />
          </motion.span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600">
          A gallery of my{" "}
          <span className="text-purple-500 font-semibold">creative works</span>
        </p>
      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-md hover:shadow-purple-300/30 transition-all cursor-pointer border border-purple-200`}
              onClick={() => setSelectedProject(project)}
            >
              <motion.div
                className="text-3xl md:text-4xl mb-3"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {project.icon}
              </motion.div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed bottom-0 left-0 right-0 h-[90%] md:h-[80%] bg-white/90 backdrop-blur-md p-4 md:p-8 z-50 rounded-t-3xl shadow-lg overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-purple-100 text-purple-500 hover:bg-purple-200 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mt-12 md:mt-8">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className="text-5xl md:text-6xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {selectedProject.icon}
                  </motion.div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                      {selectedProject.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="text-yellow-500 font-medium">
                        {selectedProject.experience}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                      About
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                      Features
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.features.map((item) => (
                        <motion.span
                          key={item}
                          className={`px-4 py-2 rounded-full bg-gradient-to-r ${selectedProject.color} text-white text-sm font-medium`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring" }}
                        >
                          {item}
                        </motion.span>
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
