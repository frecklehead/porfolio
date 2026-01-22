"use client"
import React from "react";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/frecklehead", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/prashamsa-aryal-07840224b/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:prashamsa35np@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Animated gradient background with green tones */}
      <div className="absolute inset-0">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>
        
        {/* Animated gradient orbs - emerald and dark green */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-green-600/15 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main content */}
        <motion.div variants={itemVariants} className="space-y-3 mb-6">
          <span className="inline-block text-emerald-600 text-sm font-semibold tracking-wider uppercase">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8"
        >
          <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 bg-clip-text text-transparent animate-pulse">
            Prashamsa Aryal
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-2xl sm:text-3xl text-emerald-500 font-light mb-8 max-w-2xl"
        >
          Full-Stack Developer & AI Enthusiast
        </motion.p>

        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-300 max-w-3xl leading-relaxed mb-12"
        >
          I build modern web applications with cutting-edge technologies. 
          Currently focused on Next.js, React, and AI integration.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a 
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 border border-emerald-500/50"
          >
            View My Projects
            <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-emerald-600/50 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-600/10 hover:border-emerald-500 transition-all duration-300 backdrop-blur-sm"
          >
            Get in Touch
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-6 mb-16"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg border border-emerald-600/30 text-emerald-500 hover:border-emerald-500 hover:bg-emerald-600/10 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#projects" className="flex flex-col items-center gap-2 text-emerald-600/60 hover:text-emerald-500 transition-colors">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
