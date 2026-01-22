
"use client"
import React from 'react';
import { Mail, Linkedin, Github, Youtube, MapPin, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      link: "mailto:prashamsa35np@gmail.com",
      label: "Email",
      text: "prashamsa35np@gmail.com",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/prashamsa-aryal-07840224b/",
      label: "LinkedIn",
      text: "Connect on LinkedIn",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Github,
      link: "https://github.com/frecklehead",
      label: "GitHub",
      text: "github.com/frecklehead",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: Youtube,
      link: "https://www.youtube.com/@afreck",
      label: "YouTube",
      text: "Subscribe on YouTube",
      color: "from-emerald-400 to-green-600"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-black via-slate-900 to-black py-20 px-4 overflow-hidden border-t border-emerald-500/20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -right-40 w-80 h-80 bg-emerald-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4"
          >
            <span className="inline-block px-4 py-2 bg-emerald-900/50 text-emerald-300 rounded-full text-sm font-semibold border border-emerald-500/30 backdrop-blur-sm">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-4"
          >
            Let's Create Something Amazing
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Want to collaborate on something exciting? I'd love to hear from you!
          </motion.p>
        </motion.div>

        {/* Contact Info & Social Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Quick Info */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-black backdrop-blur-sm p-8 hover:border-emerald-500/60 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-50" />
            <div className="relative">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-6">Quick Contact</h3>
              
              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">Email</p>
                    <a href="mailto:prashamsa35np@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                      prashamsa35np@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">Location</p>
                    <p className="text-gray-400">Nepal</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">Response Time</p>
                    <p className="text-gray-400">24-48 hours</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-black backdrop-blur-sm p-8 hover:border-emerald-500/60 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-50" />
            <div className="relative">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-6">Connect</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 rounded-xl bg-black/40 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden backdrop-blur-sm"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative">
                      <social.icon className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 mb-2 transition-colors" />
                      <p className="font-semibold text-sm text-gray-200">{social.label}</p>
                      <p className="text-xs text-gray-400 group-hover:text-emerald-400 transition-colors mt-1">
                        {social.text}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center pt-8 border-t border-emerald-500/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">
            Or directly visit my socials for real-time updates on projects and insights
          </p>
          <motion.a
            href="https://www.linkedin.com/in/prashamsa-aryal-07840224b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 border border-emerald-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View LinkedIn Profile
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Contact;