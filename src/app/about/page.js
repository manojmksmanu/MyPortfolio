"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book, Briefcase, Code, GraduationCap } from "lucide-react";

const ExperienceCard = ({ role, company, duration, description, projects }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-8"
  >
    <div className="bg-purple-900/20 border-purple-500/20 rounded-lg">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-purple-300">{role}</h3>
            <p className="text-gray-400">{company}</p>
            <p className="text-sm text-gray-500">{duration}</p>
          </div>
          <Briefcase className="text-purple-400" size={24} />
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        {projects && (
          <div className="space-y-2">
            <h4 className="text-purple-300 font-semibold flex items-center gap-2">
              <Code size={16} /> Key Projects
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {projects.map((project, idx) => (
                <li key={idx} className="ml-4">
                  {project}
                </li>
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
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-8"
  >
    <div className="bg-pink-900/20 border-pink-500/20 rounded-lg">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-pink-300">{degree}</h3>
            <p className="text-gray-400">{institution}</p>
            <p className="text-sm text-gray-500">{year}</p>
          </div>
          <GraduationCap className="text-pink-400" size={24} />
        </div>
        <p className="text-gray-300">{details}</p>
      </div>
    </div>
  </motion.div>
);

const page = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-6xl text-center mb-16 pt-10"
      >
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
            About Me
          </span>
        </h1>
        <p className="text-xl text-gray-300">
          Full-stack developer passionate about creating innovative web
          solutions and mobile applications. Specialized in React ecosystem and
          cloud technologies.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      {/* <div className="container mx-auto max-w-6xl mb-12">
        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full flex items-center gap-2 ${
              activeTab === "experience"
                ? "bg-purple-500 text-white"
                : "bg-purple-500/20 text-purple-300"
            }`}
            onClick={() => setActiveTab("experience")}
          >
            <Briefcase size={20} />
            Experience
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full flex items-center gap-2 ${
              activeTab === "education"
                ? "bg-pink-500 text-white"
                : "bg-pink-500/20 text-pink-300"
            }`}
            onClick={() => setActiveTab("education")}
          >
            <Book size={20} />
            Education
          </motion.button>
        </div>
      </div> */}
      <div className="container mx-auto max-w-6xl mb-12">
        <div className="flex justify-center gap-4">
          {/* Experience Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className={`relative px-6 py-3 rounded-full flex items-center gap-2 overflow-hidden ${
              activeTab === "experience" ? "text-white" : "text-purple-300"
            }`}
            onClick={() => setActiveTab("experience")}
          >
            <span className="z-10 flex items-center gap-2">
              <Briefcase size={20} />
              Experience
            </span>
            {/* Water-Like Background Animation */}
            <motion.div
              className={`absolute inset-0 bg-purple-500`}
              animate={{
                width: activeTab === "experience" ? "100%" : "0%",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                mass: 0.8,
              }}
            />
          </motion.button>

          {/* Education Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className={`relative px-6 py-3 rounded-full flex items-center gap-2 overflow-hidden ${
              activeTab === "education" ? "text-white" : "text-pink-300"
            }`}
            onClick={() => setActiveTab("education")}
          >
            <span className="z-10 flex items-center gap-2">
              <Book size={20} />
              Education
            </span>
            {/* Water-Like Background Animation */}
            <motion.div
              className={`absolute inset-0 bg-pink-500`}
              animate={{
                width: activeTab === "education" ? "100%" : "0%",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                mass: 0.8,
              }}
            />
          </motion.button>
        </div>
      </div>
      {/* Content Section */}
      <div className="container mx-auto max-w-8xl">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "experience" && (
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <ExperienceCard
                role="Full Stack Developer"
                company="CloudTech Solutions"
                duration="2022 - Present"
                description="Leading the development of cloud-based enterprise applications and mentoring junior developers in Agile environment."
                projects={[
                  "Built a customer portal handling 100K+ daily users using Next.js and AWS",
                  "Developed real-time collaboration features using Socket.io and Redis",
                  "Implemented automated testing reducing bug reports by 40%",
                ]}
              />
              <ExperienceCard
                role="React Native Developer"
                company="MobileApp Wizards"
                duration="2020 - 2022"
                description="Specialized in cross-platform mobile application development using React Native and Firebase."
                projects={[
                  "Developed a fitness tracking app with 200K+ downloads",
                  "Created a food delivery application with real-time order tracking",
                  "Implemented push notifications and analytics system",
                ]}
              />
              <ExperienceCard
                role="Web Developer"
                company="Digital Creations"
                duration="2019 - 2020"
                description="Focused on creating responsive websites and e-commerce solutions using modern web technologies."
                projects={[
                  "Developed 5+ e-commerce websites using MERN stack",
                  "Integrated payment gateways and inventory management systems",
                  "Built custom WordPress themes and plugins",
                ]}
              />
            </div>
          )}

          {activeTab === "education" && (
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <EducationCard
                degree="B.Tech in Computer Science"
                institution="University of Technology"
                year="2015 - 2019"
                details="Graduated with distinction. Specialized in web technologies and software engineering. Led the college coding club and participated in multiple hackathons."
              />
              <EducationCard
                degree="Advanced Web Development"
                institution="Digital Skills Institute"
                year="2020"
                details="6-month intensive program covering modern web development including React, Node.js, and cloud technologies. Completed with excellence certification."
              />
              <EducationCard
                degree="Mobile App Development"
                institution="App Academy Online"
                year="2021"
                details="Specialized certification in React Native and mobile app development. Created multiple apps as part of the curriculum with focus on user experience and performance."
              />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default page;
