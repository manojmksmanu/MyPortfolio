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
            "React Native is a framework that extends React's capabilities to mobile development, allowing developers to build native iOS and Android applications using JavaScript and a single codebase, significantly reducing development time and effort.",
          history:
            "Released by Facebook in 2015, React Native gained rapid adoption for its ability to deliver native-like performance while maintaining a familiar React syntax.",
          usage:
            "Used for developing cross-platform mobile applications, including productivity tools, social apps, and games, with deployment to both App Store and Google Play.",
          keyFeatures: [
            "Native Components: Renders true native UI elements for each platform.",
            "Hot Reloading: Speeds up development with real-time code updates.",
            "Cross-platform: Write once, run on both iOS and Android with minimal adjustments.",
            "JavaScript Bridge: Enables communication between JS and native code for performance.",
          ],
          experience: "Advanced",
          color: "from-blue-500 to-purple-500",
        },
        {
          name: "React.js",
          icon: "⚛️",
          description:
            "React.js is a powerful JavaScript library designed for building dynamic and interactive user interfaces, particularly for single-page applications where performance and reusability are key. It leverages a component-based architecture to create modular, maintainable, and scalable frontends.",
          history:
            "Developed by Facebook in 2011 and open-sourced in 2013, React revolutionized frontend development with its virtual DOM and declarative syntax, quickly becoming a favorite among developers for its efficiency and flexibility.",
          usage:
            "Widely used for creating responsive web applications, single-page apps (SPAs), and complex UIs requiring frequent updates, such as dashboards and social media platforms.",
          keyFeatures: [
            "Component-based Architecture: Enables reusable and encapsulated UI elements.",
            "Virtual DOM: Optimizes rendering by minimizing direct DOM manipulations.",
            "Hooks: Simplifies state and lifecycle management in functional components.",
            "Unidirectional Data Flow: Ensures predictable state updates and easier debugging.",
          ],
          experience: "Advanced",
          color: "from-blue-400 to-cyan-400",
        },
        {
          name: "Next.js",
          icon: "▲",
          description:
            "Next.js is a robust React framework built on top of Node.js, designed to simplify the development of modern web applications by providing out-of-the-box support for server-side rendering (SSR), static site generation (SSG), and full-stack capabilities. It enhances React with powerful features for production-ready apps.",
          history:
            "Introduced by Vercel in 2016, Next.js has grown from a simple SSR tool into a comprehensive framework, widely adopted for its seamless developer experience and performance optimizations.",
          usage:
            "Used for building SEO-optimized web applications, static websites, e-commerce platforms, and full-stack solutions with integrated API routes and serverless functions.",
          keyFeatures: [
            "Server-Side Rendering (SSR): Pre-renders pages on the server for better SEO and faster initial loads.",
            "Static Site Generation (SSG): Generates static HTML at build time for blazing-fast performance.",
            "API Routes: Allows building backend endpoints within the same project.",
            "File-system Routing: Automatically creates routes based on file structure, reducing setup time.",
          ],
          experience: "Advanced",
          color: "from-gray-500 to-gray-700",
        },

        {
          name: "Tailwind CSS",
          icon: "🎨",
          description:
            "Tailwind CSS is a utility-first CSS framework that empowers developers to create custom, responsive designs directly in their markup, eliminating the need for extensive custom CSS and accelerating the styling process for modern web applications.",
          history:
            "Created by Adam Wathan in 2017, Tailwind gained popularity for its innovative approach to styling, offering a balance between flexibility and consistency.",
          usage:
            "Used for rapidly prototyping and styling web applications, dashboards, and marketing sites with a focus on responsiveness and design consistency.",
          keyFeatures: [
            "Utility Classes: Provides low-level utilities for direct styling in HTML.",
            "Responsive Design: Built-in breakpoints for mobile-first development.",
            "Customization: Highly configurable via a single config file for branding.",
            "PurgeCSS Integration: Removes unused styles for optimized production builds.",
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
            "Redux is a predictable state management library for JavaScript applications, designed to centralize application state and make data flow predictable, especially in large-scale React projects. It includes powerful tools like Redux Toolkit and Redux Saga for enhanced functionality.",
          history:
            "Introduced by Dan Abramov in 2015, Redux became a standard for React apps, with Redux Toolkit and Redux Saga later simplifying and extending its capabilities.",
          usage:
            "Used for managing global state in complex React applications like e-commerce platforms, real-time dashboards, and multi-user systems requiring consistent data flow.",
          keyFeatures: [
            "Centralized State: Stores all app data in a single source of truth.",
            "Redux Toolkit: Simplifies setup with pre-built utilities and reduces boilerplate.",
            "Redux Saga: Handles complex async operations and side effects with generator functions.",
            "Time Travel Debugging: Enables state tracing and rollback for easier debugging.",
          ],
          experience: "Advanced",
          color: "from-purple-600 to-indigo-600",
        },
        {
          name: "Zustand",
          icon: "🗃️",
          description:
            "Zustand is a lightweight state management library for React that provides a simple API for managing global state without the complexity of Redux, focusing on minimalism and performance.",
          history:
            "Created by Paul Henschel and Daishi Kato in 2019, Zustand emerged as a modern alternative for developers seeking simplicity in state management.",
          usage:
            "Used for managing state in small to medium React applications, such as forms, UI toggles, and lightweight data stores.",
          keyFeatures: [
            "Minimal API: Simple store creation with hooks-based access.",
            "No Boilerplate: Eliminates complex reducers and actions.",
            "Immutable Updates: Built-in support for functional state updates.",
            "Small Footprint: Lightweight bundle size for faster apps.",
          ],
          experience: "Advanced",
          color: "from-orange-400 to-red-400",
        },
        {
          name: "useReducer + Context API",
          icon: "🔗",
          description:
            "A combination of React’s useReducer hook and Context API, offering a built-in solution for managing complex state and sharing it across components without external dependencies, suitable for medium-sized applications.",
          history:
            "Introduced with React 16.8 in 2019 (Hooks), this approach leverages native React features as an alternative to libraries like Redux.",
          usage:
            "Used for state management in React apps requiring shared state across components, such as user settings, themes, or form data.",
          keyFeatures: [
            "useReducer: Manages state with reducer functions similar to Redux.",
            "Context API: Shares state globally without prop drilling.",
            "No External Deps: Built into React, reducing bundle size.",
            "Flexible Dispatch: Allows complex state logic with actions.",
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
            "Node.js is a JavaScript runtime built on Chrome’s V8 engine, enabling developers to execute JavaScript on the server side. It’s renowned for its non-blocking, event-driven architecture, making it ideal for scalable network applications and backend services.",
          history:
            "Created by Ryan Dahl in 2009, Node.js transformed backend development by bringing JavaScript to the server, gaining massive adoption for its performance and ecosystem.",
          usage:
            "Used for developing server-side applications, RESTful APIs, microservices, and real-time systems like chat applications and live notifications.",
          keyFeatures: [
            "Asynchronous I/O: Handles multiple requests without blocking the thread.",
            "Event-driven: Uses an event loop for efficient request processing.",
            "Single-threaded: Lightweight model for high concurrency.",
            "NPM Ecosystem: Access to a vast library of packages for rapid development.",
          ],
          experience: "Advanced",
          color: "from-green-400 to-emerald-400",
        },
        {
          name: "Express.js",
          icon: "🚂",
          description:
            "Express.js is a fast, minimalist web framework for Node.js, providing a robust set of features to build web applications and APIs with ease, serving as the backbone for many Node-based projects.",
          history:
            "Released in 2010 by TJ Holowaychuk, Express became the standard server framework for Node.js, known for its simplicity and extensibility.",
          usage:
            "Used for creating RESTful APIs, web servers, and middleware-driven applications, often in conjunction with databases and frontend frameworks.",
          keyFeatures: [
            "Routing: Simplified URL handling and request mapping.",
            "Middleware: Flexible request processing pipeline.",
            "HTTP Utilities: Easy management of requests and responses.",
            "Template Engines: Support for dynamic HTML rendering.",
          ],
          experience: "Advanced",
          color: "from-gray-500 to-gray-700",
        },
        {
          name: "MongoDB",
          icon: "🍃",
          description:
            "MongoDB is a leading NoSQL database that stores data in flexible, JSON-like documents, designed for scalability and adaptability in handling unstructured or semi-structured data for modern applications.",
          history:
            "Developed by 10gen in 2007 and open-sourced in 2009, MongoDB became a go-to choice for developers needing a schema-less database solution.",
          usage:
            "Used for managing data in web applications, content management systems, real-time analytics, and big data projects.",
          keyFeatures: [
            "Document-oriented: Stores data in BSON format for flexibility.",
            "Horizontal Scaling: Supports sharding for large datasets.",
            "Aggregation Pipeline: Powerful queries for data transformation.",
            "Indexes: Improves query performance on large collections.",
          ],
          experience: "Advanced",
          color: "from-green-500 to-lime-500",
        },
        {
          name: "Firebase",
          icon: "🔥",
          description:
            "Firebase is Google’s comprehensive app development platform, offering a suite of tools for building, managing, and scaling web and mobile applications with real-time capabilities and serverless architecture.",
          history:
            "Launched in 2011 by Firebase Inc., acquired by Google in 2014, it expanded into a full-fledged platform with real-time database and cloud functions.",
          usage:
            "Used for rapid app development, including authentication, real-time data syncing, hosting, and serverless backend logic.",
          keyFeatures: [
            "Realtime Database: Syncs data across clients instantly.",
            "Cloud Firestore: Scalable NoSQL database with offline support.",
            "Authentication: Simplifies user login with multiple providers.",
            "Cloud Functions: Serverless backend logic triggered by events.",
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
            "TypeScript is a statically typed superset of JavaScript that adds optional types, enhancing code reliability and maintainability, especially in large-scale applications, by catching errors at compile time.",
          history:
            "Developed by Microsoft in 2012, TypeScript gained traction for bringing type safety to JavaScript, now widely used in enterprise projects.",
          usage:
            "Used for writing robust JavaScript code in web, mobile, and backend applications, ensuring fewer runtime errors.",
          keyFeatures: [
            "Static Typing: Defines variable types for early error detection.",
            "Interfaces: Structures complex objects with reusable contracts.",
            "Generics: Enables type-safe reusable code components.",
            "Advanced Tooling: Superior IDE support with autocompletion and refactoring.",
          ],
          experience: "Advanced",
          color: "from-blue-500 to-blue-700",
        },
        {
          name: "Git & GitHub",
          icon: "🐙",
          description:
            "Git is a distributed version control system, and GitHub is a platform for hosting Git repositories, together enabling collaborative coding, version tracking, and continuous integration workflows.",
          history:
            "Git was created by Linus Torvalds in 2005 for Linux development; GitHub launched in 2008, revolutionizing open-source collaboration.",
          usage:
            "Used for source code management, team collaboration, and automating deployment pipelines in software projects of all sizes.",
          keyFeatures: [
            "Distributed VCS: Each developer has a full repository copy.",
            "Branching Model: Supports parallel development workflows.",
            "Pull Requests: Facilitates code reviews and merges.",
            "GitHub Actions: Automates CI/CD directly in the platform.",
          ],
          experience: "Advanced",
          color: "from-gray-600 to-gray-800",
        },
        {
          name: "Figma",
          icon: "🎨",
          description:
            "Figma is a cloud-based design and prototyping tool that enables real-time collaboration for creating user interfaces, prototypes, and design systems, bridging the gap between designers and developers.",
          history:
            "Launched in 2016 by Dylan Field and Evan Wallace, Figma became a leader in collaborative design with its browser-based approach.",
          usage:
            "Used for UI/UX design, prototyping, and creating design systems for web and mobile applications, with seamless handoff to developers.",
          keyFeatures: [
            "Vector Editing: Precise control over design elements.",
            "Real-time Collaboration: Multiple users edit simultaneously.",
            "Prototyping: Interactive mockups with transitions.",
            "Dev Mode: Exports CSS and assets for developers.",
          ],
          experience: "Advanced",
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
                      Description
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {selectedSkill.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                      History
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {selectedSkill.history}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                      Usage
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {selectedSkill.usage}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                      Key Features
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedSkill.keyFeatures.map((feature) => (
                        <motion.span
                          key={feature}
                          className={`px-4 py-2 rounded-full bg-gradient-to-r ${selectedSkill.color} text-white text-sm font-medium`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring" }}
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
