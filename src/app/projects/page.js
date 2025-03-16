"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Star, Sparkles } from "lucide-react";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "MovieManiaApp",
      icon: "📱",
      description:
        "A mobile app for exploring movies, featuring detailed info, trailers, and personalized shortlisting, built with React Native.",
      experience: "Advanced",
      features: [
        "Browse Movies & Details",
        "Watch Trailers",
        "Shortlist Favorites",
        "Responsive Mobile UI",
        "Smooth Animations",
        "Cross-Platform Support",
      ],
      techStack: [
        "Frontend: React Native, Expo",
        "API: TMDB API",
        "State Management: Redux",
        "Styling: StyleSheet",
        "Animations: Lottie, Framer Motion",
        "Deployment: Google Drive (APK)",
      ],
      DownloadApp:
        "https://drive.google.com/file/d/1afGFhK9xw6c2dc9NnZZgAqygHjMROkyA/view?usp=sharing",
      github: "https://github.com/manojmksmanu/Movie_app.git",
      image: "/Images/MovieManiaApp.png",
      color: "from-purple-400 to-pink-400",
    },
    {
      name: "ChitChat v2",
      icon: "💬",
      description:
        "A real-time chat application with one-on-one and group messaging capabilities.",
      experience: "Advanced",
      features: [
        "Real-time One-on-One & Group Chats",
        "Smoother Message Updates",
        "Light & Dark Mode",
        "Improved UI & Responsiveness",
        "Creative Animations",
        "Online/Offline Status",
      ],
      techStack: [
        "Frontend: React.js, React Icons, Framer Motion",
        "Backend: Node.js, Express.js",
        "Database: MongoDB",
        "Real-Time Communication: Socket.IO",
        "Image Storage: Cloudinary",
        "Deployment: Vercel (Frontend), Render (Backend)",
      ],
      liveLink: "https://chit-chat-nine-pi.vercel.app",
      githubFrontend: "https://github.com/manojmksmanu/ChitChatNewfrontend",
      githubBackend: "https://github.com/manojmksmanu/chitChatNewBackend",
      image: "/Images/chitchat.png",
      color: "from-purple-400 to-pink-400",
    },
    {
      name: "MovieMania",
      icon: "🎬",
      description:
        "A responsive movie and show searching website powered by the TMDB API.",
      experience: "Advanced",
      features: [
        "Search Movies & Shows",
        "Responsive Design",
        "User-Friendly Interface",
        "Detailed Movie Information",
      ],
      techStack: [
        "Frontend: React.js",
        "API: TMDB API",
        "Styling: CSS",
        "Deployment: Vercel",
      ],
      liveLink: "https://movie-mania-beta-woad.vercel.app",
      github: "https://github.com/manojmksmanu/MovieMania",
      image: "/Images/moviemania.png",
      color: "from-blue-400 to-cyan-400",
    },
  ];

  // Hover animation variants for cards
  const cardVariants = {
    initial: { scale: 1, y: 0, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" },
    hover: {
      scale: 1.03,
      y: -8,
      boxShadow: "0px 12px 20px rgba(147, 51, 234, 0.3)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    tap: { scale: 0.98, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  return (
    <div className="min-h-screen text-gray-100 pt-32 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            My Projects
          </span>
          <motion.span
            className="absolute -top-4 right-0 text-purple-400"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={24} />
          </motion.span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          A gallery of my{" "}
          <span className="text-purple-400 font-semibold">creative works</span>
        </p>
      </motion.div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="relative bg-white/10 backdrop-blur-md p-6 rounded-xl border border-purple-300/30 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <div className="relative z-10">
                {/* Project Image */}
                <div className="mb-4">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="w-full h-40 object-cover rounded-lg border border-gray-700/50"
                  />
                </div>
                <div className="text-4xl mb-3">{project.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="fixed bottom-0 left-0 right-0 h-[85%] bg-gray-800/90 backdrop-blur-md p-6 z-50 rounded-t-3xl shadow-xl overflow-y-auto custom-scrollbar"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-purple-400/20 text-purple-400 hover:bg-purple-400/30 transition-colors duration-300"
              >
                <X size={24} />
              </button>

              <div className="mt-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{selectedProject.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-100">
                      {selectedProject.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-yellow-400 font-medium">
                        {selectedProject.experience}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-gray-200">
                  {/* Project Image */}
                  <div>
                    <img
                      src={selectedProject.image}
                      alt={`${selectedProject.name} screenshot`}
                      className="w-full max-w-[600px] max-h-[400px] object-contain rounded-lg border border-gray-700/50 mx-auto"
                    />
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                      About
                    </h3>
                    <p className="text-base">{selectedProject.description}</p>
                  </div>

                  {/* Links */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                      Links
                    </h3>
                    <div className="space-y-2">
                      {selectedProject.liveLink && (
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )}
                      {selectedProject.githubFrontend && (
                        <a
                          href={selectedProject.githubFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <ExternalLink size={18} /> GitHub Frontend
                        </a>
                      )}
                      {selectedProject.githubBackend && (
                        <a
                          href={selectedProject.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <ExternalLink size={18} /> GitHub Backend
                        </a>
                      )}
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <ExternalLink size={18} /> GitHub Repository
                        </a>
                      )}
                      {selectedProject.DownloadApp && (
                        <a
                          href={selectedProject.DownloadApp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <ExternalLink size={18} /> Download Android App
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                      Features
                    </h3>
                    <ul className="space-y-2 text-base">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="text-purple-400">•</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                      Tech Stack
                    </h3>
                    <ul className="space-y-2 text-base">
                      {selectedProject.techStack.map((tech) => (
                        <li key={tech} className="flex items-center gap-2">
                          <span className="text-purple-400">•</span> {tech}
                        </li>
                      ))}
                    </ul>
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
