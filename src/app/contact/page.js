"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Sparkles,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-10 pt-32 px-4 relative overflow-hidden">
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
            Contact Me
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
          Let’s <span className="text-purple-500 font-semibold">connect</span>!
          Reach out for collaborations or just a chat.
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-md border border-purple-200"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Mail className="text-purple-500" size={24} />
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                required
              ></textarea>
            </div>
            <div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md shadow-md hover:shadow-purple-300/30 transition-all"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-md border border-purple-200"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Phone className="text-purple-500" size={24} />
            Get in Touch
          </h2>
          <div className="space-y-6">
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-purple-100 rounded-full">
                <Mail className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-gray-600">Email</p>
                <p className="text-gray-800 font-medium">
                  manoj2022019@gmail.com
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-purple-100 rounded-full">
                <Phone className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-gray-600">Phone</p>
                <p className="text-gray-800 font-medium">+91 9667328778</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-purple-100 rounded-full">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-gray-600">Location</p>
                <p className="text-gray-800 font-medium">Noida, UP, India</p>
              </div>
            </motion.div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              Follow Me
            </h3>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.linkedin.com/in/manoj-kumar-05b2b91aa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-3 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-purple-500" />
              </motion.a>
              <motion.a
                href="https://github.com/manojmksmanu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-3 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors"
              >
                <Github className="w-6 h-6 text-purple-500" />
              </motion.a>
              {/* <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-3 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors"
              >
                <Twitter className="w-6 h-6 text-purple-500" />
              </motion.a> */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
