"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Star,
  Code,
  Terminal,
  Workflow,
  Sparkles,
} from "lucide-react";

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
          description: "Building modern web apps with React.js",
          experience: "Advanced",
          projects: "20+ Production Apps",
          expertise: ["Hooks", "Redux", "Optimization", "Custom Hooks"],
          color: "from-blue-400 to-cyan-400",
        },
        {
          name: "Next.js",
          icon: "▲",
          description: "SSR and SSG with Next.js",
          experience: "Advanced",
          projects: "15+ Full-Stack Apps",
          expertise: ["SSR", "SSG", "API Routes", "Dynamic Routing"],
          color: "from-gray-500 to-gray-700",
        },
        {
          name: "React Native",
          icon: "📱",
          description: "Cross-platform mobile apps",
          experience: "Advanced",
          projects: "10+ Mobile Apps",
          expertise: ["Navigation", "Performance", "App Store"],
          color: "from-blue-500 to-purple-500",
        },
        {
          name: "Tailwind CSS",
          icon: "🎨",
          description: "Rapid UI development with Tailwind",
          experience: "Advanced",
          projects: "25+ Styled Apps",
          expertise: ["Themes", "Responsive", "Animations"],
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
          description: "Server-side JavaScript runtime",
          experience: "Advanced",
          projects: "15+ Backend Services",
          expertise: ["Event Loop", "Streams", "Clustering"],
          color: "from-green-400 to-emerald-400",
        },
        {
          name: "Express.js",
          icon: "🚂",
          description: "Web framework for Node.js",
          experience: "Advanced",
          projects: "20+ REST APIs",
          expertise: ["Routing", "Middleware", "Auth"],
          color: "from-gray-500 to-gray-700",
        },
        {
          name: "MongoDB",
          icon: "🍃",
          description: "NoSQL database mastery",
          experience: "Advanced",
          projects: "12+ Databases",
          expertise: ["Schema", "Aggregation", "Indexing"],
          color: "from-green-500 to-lime-500",
        },
        {
          name: "Firebase",
          icon: "🔥",
          description: "Google's app platform",
          experience: "Advanced",
          projects: "10+ Firebase Projects",
          expertise: ["Auth", "Firestore", "Functions"],
          color: "from-yellow-500 to-orange-500",
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
          description: "Typed JavaScript for safer code",
          experience: "Advanced",
          projects: "15+ TS Projects",
          expertise: ["Types", "Generics", "Config"],
          color: "from-blue-500 to-blue-700",
        },
        {
          name: "Git & GitHub",
          icon: "🐙",
          description: "Version control & collaboration",
          experience: "Advanced",
          projects: "100+ Repos",
          expertise: ["Branching", "CI/CD", "Actions"],
          color: "from-gray-600 to-gray-800",
        },
        {
          name: "Figma",
          icon: "🎨",
          description: "Interface design collaboration",
          experience: "Advanced",
          projects: "20+ Design Systems",
          expertise: ["Components", "Prototyping"],
          color: "from-purple-400 to-pink-400",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-4 relative overflow-hidden pt-32">
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
            My Skills
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
          A showcase of my{" "}
          <span className="text-purple-500 font-semibold">
            technical toolkit
          </span>
        </p>
      </div>

      {/* Categories and Skills */}
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16 relative z-10">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1, type: "spring" }}
            className="px-2 md:px-0"
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <motion.div
                className="p-2 rounded-lg bg-purple-100 text-purple-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {category.icon}
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                {category.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-md hover:shadow-purple-300/30 transition-all cursor-pointer border border-purple-200`}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <motion.div
                    className="text-3xl md:text-4xl mb-3"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Details Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
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
                onClick={() => setSelectedSkill(null)}
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
                    {selectedSkill.icon}
                  </motion.div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                      {selectedSkill.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="text-yellow-500 font-medium">
                        {selectedSkill.experience}
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
                      {selectedSkill.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                      Projects
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {selectedSkill.projects}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                      Expertise
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedSkill.expertise.map((item) => (
                        <motion.span
                          key={item}
                          className={`px-4 py-2 rounded-full bg-gradient-to-r ${selectedSkill.color} text-white text-sm font-medium`}
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

export default SkillsPage;
