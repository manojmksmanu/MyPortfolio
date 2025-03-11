"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book, Briefcase, Code, GraduationCap, Sparkles } from "lucide-react";

const ExperienceCard = ({ role, company, duration, description, projects }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="mb-6 group"
  >
    <div className="bg-white/10 backdrop-blur-md border border-purple-300/20 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
      <div className="p-5 relative">
        <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-purple-300 group-hover:text-purple-400 transition-colors">
              {role}
            </h3>
            <p className="text-gray-300 text-sm">{company}</p>
            <p className="text-xs text-gray-400">{duration}</p>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Briefcase className="text-purple-400" size={24} />
          </motion.div>
        </div>
        <p className="text-gray-200 text-sm mb-4">{description}</p>
        {projects && (
          <div className="space-y-2">
            <h4 className="text-purple-400 font-semibold flex items-center gap-2 text-sm">
              <Code size={18} /> Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {projects.map((project, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-2 text-gray-300 text-sm"
                  whileHover={{ x: 5, color: "#a78bfa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-purple-400">•</span> {project}
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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="mb-6 group"
  >
    <div className="bg-white/10 backdrop-blur-md border border-pink-300/20 rounded-xl shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
      <div className="p-5 relative">
        <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-pink-300 group-hover:text-pink-400 transition-colors">
              {degree}
            </h3>
            <p className="text-gray-300 text-sm">{institution}</p>
            <p className="text-xs text-gray-400">{year}</p>
          </div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <GraduationCap className="text-pink-400" size={24} />
          </motion.div>
        </div>
        <p className="text-gray-200 text-sm">{details}</p>
      </div>
    </div>
  </motion.div>
);

const Page = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-screen  text-gray-100 pt-32 py-12 px-4 custom-scrollbar">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="container mx-auto max-w-5xl text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            About Manoj Kumar
          </span>
          <motion.span
            className="absolute -top-4 right-0 text-purple-400"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={24} />
          </motion.span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          A passionate{" "}
          <span className="text-purple-400 font-semibold">
            App & Web Developer
          </span>{" "}
          from Noida, India, focused on crafting full-stack solutions.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="container mx-auto max-w-5xl mb-12">
        <div className="flex justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeTab === "experience" ? "text-white" : "text-purple-300"
            }`}
            onClick={() => setActiveTab("experience")}
          >
            <span className="flex items-center gap-2">
              <Briefcase size={20} /> Experience
            </span>
            {activeTab === "experience" && (
              <motion.span
                layoutId="tabUnderline"
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeTab === "education" ? "text-white" : "text-pink-300"
            }`}
            onClick={() => setActiveTab("education")}
          >
            <span className="flex items-center gap-2">
              <Book size={20} /> Education
            </span>
            {activeTab === "education" && (
              <motion.span
                layoutId="tabUnderline"
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
          </motion.button>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-4xl  ">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {activeTab === "experience" && (
            <div className="space-y-6">
              <ExperienceCard
                role="Mobile App Developer (React Native, MERN)"
                company="MyMegaminds"
                duration="Aug 2024 - Feb 2025"
                description="Developed and published full-stack applications with a focus on real-time features and performance."
                projects={[
                  "Built mobile apps with React Native, Expo, and Socket.io for real-time messaging.",
                  "Developed scalable APIs using Node.js, Express, and MongoDB.",
                  "Integrated push notifications and file sharing in apps.",
                  "Optimized front-end for seamless user experiences.",
                  "Published apps on App Store and Google Play Store.",
                  "Designed intuitive UIs with third-party integrations.",
                ]}
              />
              <ExperienceCard
                role="Web Developer"
                company="Manma Services"
                duration="Nov 2023 - May 2024"
                description="Contributed to responsive websites, enhancing UX and team workflows."
                projects={[
                  "Improved website accessibility and responsiveness.",
                  "Designed intuitive UIs with cross-functional teams.",
                  "Optimized performance, reducing load times.",
                  "Managed project docs and version control with Git.",
                ]}
              />
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-6">
              <EducationCard
                degree="Bachelor of Computer Applications"
                institution="Glocal University"
                year="2021 - 2024"
                details="Completed a program focused on computer science and app development, mastering modern tech stacks."
              />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
