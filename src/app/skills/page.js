"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Star, Code, Terminal, Workflow } from "lucide-react";

const SkillsPage = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        {
          name: "React.js",
          icon: "⚛️",
          description:
            "Building modern web applications with React.js ecosystem",
          experience: "Advanced",
          projects: "20+ Production Applications",
          expertise: [
            "Hooks",
            "Context",
            "Redux",
            "Performance Optimization",
            "Custom Hooks",
          ],
          color: "from-blue-400 to-cyan-400",
        },
        {
          name: "Next.js",
          icon: "▲",
          description:
            "Server-side rendering and static site generation with Next.js",
          experience: "Advanced",
          projects: "15+ Full-Stack Applications",
          expertise: [
            "SSR",
            "SSG",
            "API Routes",
            "Dynamic Routing",
            "Image Optimization",
          ],
          color: "from-gray-600 to-gray-800",
        },
        {
          name: "React Native",
          icon: "📱",
          description:
            "Cross-platform mobile app development with React Native",
          experience: "Advanced",
          projects: "10+ Mobile Applications",
          expertise: [
            "Navigation",
            "Native Modules",
            "Performance",
            "App Store",
            "Play Store",
          ],
          color: "from-blue-500 to-purple-500",
        },
        {
          name: "React Native Expo",
          icon: "🔮",
          description: "Rapid mobile development with Expo ecosystem",
          experience: "Advanced",
          projects: "8+ Expo Applications",
          expertise: [
            "Expo SDK",
            "OTA Updates",
            "Notifications",
            "Easy Deployment",
          ],
          color: "from-purple-400 to-pink-400",
        },
        {
          name: "Tailwind CSS",
          icon: "🎨",
          description: "Utility-first CSS framework for rapid UI development",
          experience: "Advanced",
          projects: "25+ Styled Applications",
          expertise: [
            "Custom Themes",
            "Responsive Design",
            "Dark Mode",
            "Animations",
          ],
          color: "from-cyan-400 to-teal-400",
        },
      ],
    },
    {
      name: "Backend Development",
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        {
          name: "Node.js",
          icon: "🟢",
          description: "Server-side JavaScript runtime environment",
          experience: "Advanced",
          projects: "15+ Backend Services",
          expertise: ["Event Loop", "Streams", "Clustering", "Performance"],
          color: "from-green-400 to-emerald-400",
        },
        {
          name: "Express.js",
          icon: "🚂",
          description: "Web application framework for Node.js",
          experience: "Advanced",
          projects: "20+ REST APIs",
          expertise: ["Routing", "Middleware", "Authentication", "API Design"],
          color: "from-gray-500 to-gray-700",
        },
        {
          name: "MongoDB",
          icon: "🍃",
          description: "NoSQL database for modern applications",
          experience: "Advanced",
          projects: "12+ Database Designs",
          expertise: ["Schema Design", "Aggregation", "Indexing", "Atlas"],
          color: "from-green-500 to-lime-500",
        },
        {
          name: "Firebase",
          icon: "🔥",
          description: "Google's mobile and web application platform",
          experience: "Advanced",
          projects: "10+ Firebase Projects",
          expertise: ["Auth", "Firestore", "Storage", "Cloud Functions"],
          color: "from-yellow-500 to-orange-500",
        },
        {
          name: "Socket.io",
          icon: "🔌",
          description: "Real-time bidirectional event-based communication",
          experience: "Advanced",
          projects: "5+ Real-time Applications",
          expertise: ["WebSockets", "Events", "Rooms", "Scaling"],
          color: "from-purple-500 to-indigo-500",
        },
      ],
    },
    {
      name: "Development Tools",
      icon: <Workflow className="w-6 h-6" />,
      skills: [
        {
          name: "TypeScript",
          icon: "📘",
          description: "Typed superset of JavaScript for safer code",
          experience: "Advanced",
          projects: "15+ TypeScript Projects",
          expertise: ["Types", "Generics", "Decorators", "Project Config"],
          color: "from-blue-500 to-blue-700",
        },
        {
          name: "Git & GitHub",
          icon: "🐙",
          description: "Version control and collaboration platform",
          experience: "Advanced",
          projects: "100+ Repositories",
          expertise: ["Branching", "CI/CD", "Actions", "Project Management"],
          color: "from-gray-600 to-gray-800",
        },
        {
          name: "Postman",
          icon: "📬",
          description: "API development and testing tool",
          experience: "Advanced",
          projects: "30+ API Collections",
          expertise: ["Testing", "Automation", "Documentation", "Monitoring"],
          color: "from-orange-400 to-red-400",
        },
        {
          name: "Figma",
          icon: "🎨",
          description: "Collaborative interface design tool",
          experience: "Advanced",
          projects: "20+ Design Systems",
          expertise: [
            "Components",
            "Auto-layout",
            "Prototyping",
            "Collaboration",
          ],
          color: "from-purple-400 to-pink-400",
        },
      ],
    },
    {
      name: "App Distribution",
      icon: <ExternalLink className="w-6 h-6" />,
      skills: [
        {
          name: "Google Play Console",
          icon: "🎮",
          description: "Android app publishing and management",
          experience: "Advanced",
          projects: "10+ Published Apps",
          expertise: ["App Release", "Analytics", "Testing", "Store Listing"],
          color: "from-green-500 to-emerald-500",
        },
        {
          name: "App Store Connect",
          icon: "🍎",
          description: "iOS app publishing and management",
          experience: "Advanced",
          projects: "8+ Published Apps",
          expertise: [
            "TestFlight",
            "App Review",
            "Analytics",
            "In-App Purchases",
          ],
          color: "from-gray-500 to-gray-700",
        },
      ],
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
            Technical Skills
          </span>
        </motion.h1>
      </div>

      {/* Categories and Skills */}
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="px-2 md:px-0"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8">
              <div className="p-1.5 md:p-2 rounded-lg bg-gray-800/50 text-white">
                {category.icon}
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                {category.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`bg-gradient-to-br ${skill.color} p-[1px] rounded-xl cursor-pointer`}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className="bg-gray-900 p-4 md:p-6 rounded-xl h-full">
                    <div className="text-2xl md:text-3xl mb-2 md:mb-3">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Details Sidebar */}
      <AnimatePresence>
        {selectedSkill && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
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
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 md:top-6 right-4 md:right-6 p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mt-12 md:mt-8">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="text-4xl md:text-5xl">
                    {selectedSkill.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedSkill.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1 md:mt-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-yellow-500">
                        {selectedSkill.experience}
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
                      {selectedSkill.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mb-2 md:mb-3">
                      Projects
                    </h3>
                    <p className="text-white text-base md:text-lg">
                      {selectedSkill.projects}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mb-2 md:mb-3">
                      Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.expertise.map((item) => (
                        <span
                          key={item}
                          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r ${selectedSkill.color} text-white text-xs md:text-sm font-medium`}
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

export default SkillsPage;
