"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book, Briefcase, Code, GraduationCap, Sparkles } from "lucide-react";

const ExperienceCard = ({ role, company, duration, description, projects }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ type: "spring", stiffness: 80, damping: 20 }}
    className="mb-6 sm:mb-8 group"
  >
    <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-xl shadow-md hover:shadow-purple-300/30 transition-shadow duration-300">
      <div className="p-4 sm:p-6 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-purple-100/20 rounded-xl"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.5, opacity: 0.5 }}
          transition={{ duration: 0.4 }}
        />
        <div className="relative flex flex-col sm:flex-row items-start justify-between mb-3 sm:mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-purple-600 group-hover:text-purple-500 transition-colors">
              {role}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{company}</p>
            <p className="text-xs sm:text-sm text-gray-500">{duration}</p>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Briefcase className="text-purple-400" size={24} />
          </motion.div>
        </div>
        <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
          {description}
        </p>
        {projects && (
          <div className="space-y-2">
            <h4 className="text-purple-500 font-semibold flex items-center gap-2 text-sm sm:text-base">
              <Code size={20} /> Key Responsibilities & Projects
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {projects.map((project, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-2 text-gray-700 text-xs sm:text-sm"
                  whileHover={{ x: 8, color: "#9333ea" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-purple-400">✦</span> {project}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const EducationCard = ({ degree, institution, year, details }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ type: "spring", stiffness: 80, damping: 20 }}
    className="mb-6 sm:mb-8 group"
  >
    <div className="bg-white/80 backdrop-blur-sm border border-pink-200 rounded-xl shadow-md hover:shadow-pink-300/30 transition-shadow duration-300">
      <div className="p-4 sm:p-6 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-pink-100/20 rounded-xl"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.5, opacity: 0.5 }}
          transition={{ duration: 0.4 }}
        />
        <div className="relative flex flex-col sm:flex-row items-start justify-between mb-3 sm:mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-pink-600 group-hover:text-pink-500 transition-colors">
              {degree}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{institution}</p>
            <p className="text-xs sm:text-sm text-gray-500">{year}</p>
          </div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <GraduationCap className="text-pink-400" size={28} />
          </motion.div>
        </div>
        <p className="text-gray-700 text-sm sm:text-base">{details}</p>
      </div>
    </div>
  </motion.div>
);

const Page = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 py-12 px-4 relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-300/20 rounded-full"
            style={{
              width: Math.random() * 6 + 3,
              height: Math.random() * 6 + 3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 1,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="container mx-auto max-w-5xl text-center mb-8 sm:mb-12 relative z-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 relative">
          <motion.span
            className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400"
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            About Manoj Kumar
          </motion.span>
          <motion.span
            className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 text-purple-400"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={28} />
          </motion.span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
          A dedicated{" "}
          <span className="text-purple-500 font-semibold">
            App and Web Developer
          </span>{" "}
          from Noida, India, passionate about building full-stack solutions.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="container mx-auto max-w-5xl mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.button
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 sm:px-8 py-2 sm:py-3 rounded-full overflow-hidden group shadow-md"
            onClick={() => setActiveTab("experience")}
          >
            <span
              className={`relative z-10 flex items-center gap-2 font-semibold text-sm sm:text-base ${
                activeTab === "experience" ? "text-white" : "text-purple-500"
              }`}
            >
              <Briefcase size={22} />
              Experience
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400"
              animate={{ scale: activeTab === "experience" ? 1 : 0 }}
              initial={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
            <motion.div
              className="absolute inset-0 bg-purple-200/20 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 sm:px-8 py-2 sm:py-3 rounded-full overflow-hidden group shadow-md"
            onClick={() => setActiveTab("education")}
          >
            <span
              className={`relative z-10 flex items-center gap-2 font-semibold text-sm sm:text-base ${
                activeTab === "education" ? "text-white" : "text-pink-500"
              }`}
            >
              <Book size={22} />
              Education
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400"
              animate={{ scale: activeTab === "education" ? 1 : 0 }}
              initial={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
            <motion.div
              className="absolute inset-0 bg-pink-200/20 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "experience" && (
            <div className="space-y-4 sm:space-y-6">
              <ExperienceCard
                role="Mobile App Developer (React Native, MERN)"
                company="MyMegaminds"
                duration="Aug 2024 - Feb 2025"
                description="Developed and published full-stack applications across various domains, focusing on real-time features and performance optimization."
                projects={[
                  "Built mobile apps with React Native, Expo, and real-time messaging using Socket.io.",
                  "Developed scalable backend APIs with Node.js, Express, and MongoDB.",
                  "Implemented push notifications and file sharing in mobile applications.",
                  "Optimized front-end performance for seamless user interactions.",
                  "Published apps successfully on App Store and Google Play Store.",
                  "Designed user-friendly interfaces with third-party integrations.",
                ]}
              />
              <ExperienceCard
                role="Web Developer"
                company="Manma Services"
                duration="Nov 2023 - May 2024"
                description="Contributed to responsive and accessible website development, improving user experience and team collaboration."
                projects={[
                  "Enhanced website accessibility and responsiveness.",
                  "Designed intuitive UI in collaboration with cross-functional teams.",
                  "Optimized website performance, reducing load times significantly.",
                  "Supported project documentation and version control with Git.",
                ]}
              />
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-4 sm:space-y-6">
              <EducationCard
                degree="Bachelor of Computer Applications"
                institution="Glocal University"
                year="2021 - 2024"
                details="Completed a comprehensive program focused on computer science and application development, gaining hands-on experience with modern technologies."
              />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
