"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

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
    // Handle form submission (e.g., send data to an API)
    console.log("Form Data:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-16 md:pt-28 px-4 md:px-6 pb-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-8 md:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Contact Me
          </span>
        </motion.h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Let's connect! Feel free to reach out for collaborations, questions,
          or just to say hi.
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 p-6 md:p-8 rounded-xl"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800/50 p-6 md:p-8 rounded-xl"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-700 rounded-full">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-white">example@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-700 rounded-full">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400">Phone</p>
                <p className="text-white">+123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-700 rounded-full">
                <MapPin className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <p className="text-white">New York, USA</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-blue-400" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
              >
                <Twitter className="w-6 h-6 text-blue-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
