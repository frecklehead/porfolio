
"use client"
import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight, Youtube, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Profile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/frecklehead", label: "GitHub", color: "hover:text-gray-800" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/prashamsa-aryal-07840224b/", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Youtube, href: "https://www.youtube.com/@afreck", label: "YouTube", color: "hover:text-red-600" },
    { icon: Mail, href: "mailto:prashamsa35np@gmail.com", label: "Email", color: "hover:text-orange-600" },
  ];

  return (
    <section className="relative min-h-screen px-4 py-20 md:py-32 overflow-hidden pt-24 md:pt-32 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-10 -left-32 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-32 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute -bottom-32 left-1/3 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ y: [0, 50, 0], x: [0, -50, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                  🚀 Full-Stack Developer & Builder
                </span>
              </motion.div>

              <div>
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                    Prashamsa Aryal
                  </span>
                </motion.h1>
                <motion.h2
                  className="text-2xl md:text-3xl font-semibold text-gray-700 mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Building the Future with Code & AI
                </motion.h2>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl"
            >
              I'm a full-stack engineer passionate about creating impactful products that solve real problems. 
              With expertise in AI/ML, cloud technologies, and modern web development, I transform complex challenges 
              into elegant solutions. Currently focused on EdTech innovations and building scalable systems.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-4 pt-4"
            >
              <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                ✨ Featured Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "AI/ML", "Python", "Node.js", "Cloud"].map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-sm font-medium border border-emerald-200 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>

              <motion.a
                href="#blog"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Read My Blogs
                <ExternalLink className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              <p className="text-sm text-gray-600 font-medium">Connect with me:</p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700 transition-colors duration-300 ${social.color}`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glowing background */}
              <div className="absolute -inset-8 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition duration-1000 animate-pulse" />

              {/* Image container */}
              <div className="relative">
                <Image
                  src="/Untitled design.png"
                  alt="Prashamsa Aryal"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-3xl shadow-2xl object-cover border-8 border-white"
                  priority
                />
                {/* Floating badges */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="font-bold text-emerald-700 text-sm">500+</p>
                  <p className="text-xs text-gray-600">Projects Built</p>
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <p className="font-bold text-teal-700 text-sm">5+ Yrs</p>
                  <p className="text-xs text-gray-600">Experience</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm text-gray-600 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-2 bg-emerald-600 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Profile;