"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Code, Terminal, Workflow, Sparkles } from "lucide-react";

const SkillsPage = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        {
          name: "React Native",
          icon: "📱",
          description:
            "React Native extends React to mobile, enabling native iOS and Android apps with JavaScript and a single codebase.",
          history:
            "Released by Facebook in 2015, it’s widely adopted for its native performance and React syntax.",
          usage:
            "Used for cross-platform mobile apps, deployed to App Store and Google Play.",
          keyFeatures: [
            "Native Components",
            "Hot Reloading",
            "Cross-platform",
            "JavaScript Bridge",
          ],
          experience: "Advanced",
          color: "from-blue-500 to-purple-500",
        },
        {
          name: "React.js",
          icon: "⚛️",
          description:
            "React.js is a JavaScript library for building dynamic, component-based UIs, ideal for SPAs.",
          history:
            "Developed by Facebook in 2011, open-sourced in 2013, it introduced the virtual DOM.",
          usage:
            "Used for responsive web apps and complex UIs like dashboards.",
          keyFeatures: [
            "Component-based",
            "Virtual DOM",
            "Hooks",
            "Unidirectional Data Flow",
          ],
          experience: "Advanced",
          color: "from-blue-400 to-cyan-400",
        },
        {
          name: "Next.js",
          icon: "▲",
          description:
            "Next.js enhances React with SSR, SSG, and full-stack features for modern web apps.",
          history:
            "Introduced by Vercel in 2016, it’s now a comprehensive framework.",
          usage:
            "Used for SEO-optimized apps, static sites, and full-stack solutions.",
          keyFeatures: ["SSR", "SSG", "API Routes", "File-system Routing"],
          experience: "Advanced",
          color: "from-gray-500 to-gray-700",
        },
        {
          name: "Tailwind CSS",
          icon: "🎨",
          description:
            "Tailwind CSS is a utility-first framework for rapid, responsive design in markup.",
          history:
            "Created by Adam Wathan in 2017, it’s popular for its flexibility.",
          usage: "Used for prototyping and styling web apps with consistency.",
          keyFeatures: [
            "Utility Classes",
            "Responsive Design",
            "Customization",
            "PurgeCSS",
          ],
          experience: "Advanced",
          color: "from-cyan-400 to-teal-400",
        },
      ],
    },
    {
      name: "State Management",
      icon: <Workflow className="w-6 h-6" />,
      skills: [
        {
          name: "Redux",
          icon: "🔄",
          description:
            "Redux centralizes state in JavaScript apps, enhanced by Redux Toolkit and Saga.",
          history: "Introduced by Dan Abramov in 2015, it’s a React standard.",
          usage: "Used for global state in complex React apps.",
          keyFeatures: [
            "Centralized State",
            "Redux Toolkit",
            "Redux Saga",
            "Time Travel Debugging",
          ],
          experience: "Advanced",
          color: "from-purple-600 to-indigo-600",
        },
        {
          name: "Zustand",
          icon: "🗃️",
          description:
            "Zustand is a lightweight state management library for React.",
          history: "Created in 2019 by Paul Henschel and Daishi Kato.",
          usage: "Used for simple state in small to medium React apps.",
          keyFeatures: [
            "Minimal API",
            "No Boilerplate",
            "Immutable Updates",
            "Small Footprint",
          ],
          experience: "Advanced",
          color: "from-orange-400 to-red-400",
        },
        {
          name: "useReducer + Context API",
          icon: "🔗",
          description: "A native React solution for complex state management.",
          history: "Introduced with React 16.8 Hooks in 2019.",
          usage: "Used for shared state in medium-sized React apps.",
          keyFeatures: [
            "useReducer",
            "Context API",
            "No External Deps",
            "Flexible Dispatch",
          ],
          experience: "Advanced",
          color: "from-teal-400 to-green-400",
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
          description:
            "Node.js is a JavaScript runtime for scalable server-side apps.",
          history: "Created by Ryan Dahl in 2009, it brought JS to the server.",
          usage: "Used for REST APIs, microservices, and real-time systems.",
          keyFeatures: [
            "Asynchronous I/O",
            "Event-driven",
            "Single-threaded",
            "NPM Ecosystem",
          ],
          experience: "Advanced",
          color: "from-green-400 to-emerald-400",
        },
        {
          name: "Express.js",
          icon: "🚂",
          description: "Express.js is a minimalist web framework for Node.js.",
          history: "Released in 2010 by TJ Holowaychuk.",
          usage: "Used for REST APIs and middleware-driven apps.",
          keyFeatures: [
            "Routing",
            "Middleware",
            "HTTP Utilities",
            "Template Engines",
          ],
          experience: "Advanced",
          color: "from-gray-500 to-gray-700",
        },
        {
          name: "MongoDB",
          icon: "🍃",
          description:
            "MongoDB is a NoSQL database for flexible, scalable data storage.",
          history: "Developed by 10gen in 2007, open-sourced in 2009.",
          usage: "Used for web apps, CMS, and real-time analytics.",
          keyFeatures: [
            "Document-oriented",
            "Horizontal Scaling",
            "Aggregation",
            "Indexes",
          ],
          experience: "Advanced",
          color: "from-green-500 to-lime-500",
        },
        {
          name: "Firebase",
          icon: "🔥",
          description:
            "Firebase is Google’s platform for app development with real-time features.",
          history: "Launched in 2011, acquired by Google in 2014.",
          usage:
            "Used for authentication, real-time data, and serverless apps.",
          keyFeatures: [
            "Realtime DB",
            "Cloud Firestore",
            "Auth",
            "Cloud Functions",
          ],
          experience: "Advanced",
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
          description:
            "TypeScript adds static typing to JavaScript for reliable code.",
          history: "Developed by Microsoft in 2012.",
          usage: "Used for robust JS code in web and mobile apps.",
          keyFeatures: [
            "Static Typing",
            "Interfaces",
            "Generics",
            "Advanced Tooling",
          ],
          experience: "Advanced",
          color: "from-blue-500 to-blue-700",
        },
        {
          name: "Git & GitHub",
          icon: "🐙",
          description:
            "Git and GitHub enable version control and collaboration.",
          history: "Git by Linus Torvalds in 2005; GitHub launched in 2008.",
          usage: "Used for source code management and CI/CD.",
          keyFeatures: [
            "Distributed VCS",
            "Branching",
            "Pull Requests",
            "GitHub Actions",
          ],
          experience: "Advanced",
          color: "from-gray-600 to-gray-800",
        },
        {
          name: "Figma",
          icon: "🎨",
          description:
            "Figma is a cloud-based tool for UI/UX design and prototyping.",
          history: "Launched in 2016 by Dylan Field and Evan Wallace.",
          usage: "Used for designing and prototyping web/mobile UIs.",
          keyFeatures: [
            "Vector Editing",
            "Collaboration",
            "Prototyping",
            "Dev Mode",
          ],
          experience: "Advanced",
          color: "from-purple-400 to-pink-400",
        },
      ],
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
    <div className="min-h-screen text-gray-100 py-16 px-4 pt-32  ">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            My Skills
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
          A showcase of my{" "}
          <span className="text-purple-400 font-semibold">
            technical toolkit
          </span>
        </p>
      </motion.div>

      {/* Categories and Skills */}
      <div className="max-w-6xl mx-auto space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1, type: "spring" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-400/20 text-purple-400">
                {category.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-100">
                {category.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="relative bg-white/10 backdrop-blur-md p-6 rounded-xl border border-purple-300/30 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedSkill(skill)}
                >
                  {/* Subtle gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {skill.description}
                    </p>
                  </div>
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setSelectedSkill(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="fixed bottom-0 left-0 right-0 h-[85%] bg-gray-800/90 backdrop-blur-md p-6 z-50 rounded-t-3xl shadow-xl overflow-y-auto"
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-purple-400/20 text-purple-400 hover:bg-purple-400/30 transition-colors duration-300"
              >
                <X size={24} />
              </button>

              <div className="mt-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{selectedSkill.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-100">
                      {selectedSkill.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-yellow-400 font-medium">
                        {selectedSkill.experience}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-gray-200">
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                      Description
                    </h3>
                    <p className="text-base">{selectedSkill.description}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                      History
                    </h3>
                    <p className="text-base">{selectedSkill.history}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                      Usage
                    </h3>
                    <p className="text-base">{selectedSkill.usage}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                      Key Features
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedSkill.keyFeatures.map((feature) => (
                        <motion.span
                          key={feature}
                          className={`px-3 py-1 rounded-full bg-gradient-to-r ${selectedSkill.color} text-white text-sm`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {feature}
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
