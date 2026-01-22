
"use client"
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Youtube, Send, MapPin, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Want to collaborate on something exciting? I'd love to hear from you!
          </motion.p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div whileHover={{ y: -2 }}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Prashamsa Aryal"
                    className="w-full px-4 py-3 border border-emerald-500/30 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 bg-emerald-950/30 text-white placeholder-gray-400 backdrop-blur-sm"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-emerald-500/30 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 bg-emerald-950/30 text-white placeholder-gray-400 backdrop-blur-sm"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, ideas, or anything else..."
                    rows="5"
                    className="w-full px-4 py-3 border border-emerald-500/30 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 resize-none bg-emerald-950/30 text-white placeholder-gray-400 backdrop-blur-sm"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 border border-emerald-400/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>

              {/* Success Message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-4 bg-emerald-100 border border-emerald-300 rounded-lg text-emerald-800 text-sm font-medium"
                >
                  ✨ Thanks for reaching out! I'll get back to you soon!
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Quick Info */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100"
            >
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">Quick Contact</h3>
              
              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a href="mailto:prashamsa35np@gmail.com" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                      prashamsa35np@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">Nepal</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Response Time</p>
                    <p className="text-gray-600">24-48 hours</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100"
            >
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">Connect</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 hover:border-emerald-400 transition-all duration-300 overflow-hidden"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative">
                      <social.icon className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700 mb-2 transition-colors" />
                      <p className="font-semibold text-sm text-gray-800">{social.label}</p>
                      <p className="text-xs text-gray-600 group-hover:text-emerald-600 transition-colors mt-1">
                        {social.text}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center pt-8 border-t border-emerald-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Or directly visit my socials for real-time updates on projects and insights
          </p>
          <motion.a
            href="https://www.linkedin.com/in/prashamsa-aryal-07840224b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
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