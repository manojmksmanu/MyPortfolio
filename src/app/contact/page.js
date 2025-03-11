"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Sparkles,
  Send,
  Loader2,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contactNodemailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white pb-10 pt-32 px-4 relative overflow-hidden">
      {/* Toast Container */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1E1E1E",
            color: "#fff",
            border: "1px solid rgba(0, 255, 255, 0.3)",
          },
          success: {
            iconTheme: {
              primary: "#06B6D4",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "#fff",
            },
          },
        }}
      />

      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-500/20 rounded-full blur-sm"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.8, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1),_transparent_70%)]"></div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12 md:mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-4xl md:text-6xl font-extrabold mb-4 relative"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            Connect with me....
          </span>
          <motion.span
            className="absolute -top-6 -right-6 text-cyan-400"
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={36} />
          </motion.span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-300">
          Transmit your thoughts through the{" "}
          <span className="text-cyan-400 font-semibold">ether</span>!
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="bg-gray-900/80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg border border-cyan-500/30 hover:border-cyan-500 transition-all"
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
            <Mail className="text-cyan-500 animate-pulse" size={24} />
            Send a Signal
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Your Alias
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-gray-500"
                placeholder="Enter your name"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Galactic Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-gray-500"
                placeholder="you@cosmos.com"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400"
              >
                Cosmic Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-gray-500"
                placeholder="Speak your mind..."
                required
                disabled={loading}
              ></textarea>
            </div>
            <div>
              <motion.button
                type="submit"
                whileHover={
                  !loading
                    ? {
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
                      }
                    : {}
                }
                whileTap={!loading ? { scale: 0.95 } : {}}
                className={`w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-md shadow-md hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Transmit
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="bg-gray-900/80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg border border-cyan-500/30 hover:border-cyan-500 transition-all"
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
            <Phone className="text-cyan-500 animate-pulse" size={24} />
            Interstellar Links
          </h2>
          <div className="space-y-6">
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ x: 15, color: "#00FFFF" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-cyan-900/50 rounded-full border border-cyan-500/50">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-white font-medium">manoj2022019@gmail.com</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ x: 15, color: "#00FFFF" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-cyan-900/50 rounded-full border border-cyan-500/50">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400">Phone</p>
                <p className="text-white font-medium">+91 9667328778</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ x: 15, color: "#00FFFF" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-cyan-900/50 rounded-full border border-cyan-500/50">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400">Coordinates</p>
                <p className="text-white font-medium">Noida, UP, India</p>
              </div>
            </motion.div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
              Orbit Me
            </h3>
            <div className="flex items-center gap-6">
              <motion.a
                href="https://www.linkedin.com/in/manoj-kumar-05b2b91aa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  rotate: 360,
                  boxShadow: "0 0 15px rgba(0, 255, 255, 0.7)",
                }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-3 bg-cyan-900/50 rounded-full border border-cyan-500/50 hover:bg-cyan-500/20 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-cyan-400" />
              </motion.a>
              <motion.a
                href="https://github.com/manojmksmanu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  rotate: -360,
                  boxShadow: "0 0 15px rgba(0, 255, 255, 0.7)",
                }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-3 bg-cyan-900/50 rounded-full border border-cyan-500/50 hover:bg-cyan-500/20 transition-colors"
              >
                <Github className="w-6 h-6 text-cyan-400" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
