
"use client"
import React, { useState } from 'react';
import { Search, Github, ExternalLink, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const getYoutubeId = (url) => {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url?.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const VideoDialog = ({ isOpen, onClose, videoId }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-4xl bg-black border-emerald-500/30">
      <DialogHeader>
        <DialogTitle className="text-white">Project Demo</DialogTitle>
      </DialogHeader>
      <div className="aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </div>
    </DialogContent>
  </Dialog>
);

const Project = ({ title, description, link, Source, videoUrl, tags = [], index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const youtubeId = videoUrl ? getYoutubeId(videoUrl) : null;

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-full"
      >
        <div className={`relative h-full rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/30 to-black overflow-hidden backdrop-blur-sm transition-all duration-300 ${
          isHovered ? 'border-emerald-500/60 shadow-2xl shadow-emerald-500/20' : ''
        }`}>
          {/* Video/Image Section */}
          {youtubeId && (
            <div 
              className="relative w-full pt-[56.25%] bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden cursor-pointer group"
              onClick={() => setShowVideo(true)}
            >
              <img
                src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                alt={`${title} thumbnail`}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center"
                animate={{ opacity: isHovered ? 1 : 0.4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ scale: isHovered ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-black/40 backdrop-blur-sm rounded-full p-4 shadow-2xl">
                    <Play className="h-8 w-8 text-emerald-300 fill-emerald-300" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}

          {/* Content Section */}
          <div className="p-6 sm:p-8 flex flex-col h-full">
            {/* Title and Links */}
            <div className="flex justify-between items-start gap-4 mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex-1 leading-snug">
                {title}
              </h3>
              <div className="flex gap-2 flex-shrink-0">
                {link && !videoUrl && (
                  <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-emerald-500/30 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.a>
                )}
                {Source && (
                  <motion.a
                    href={Source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-emerald-500/30 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Description - Full visible */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
              {description}
            </p>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <VideoDialog isOpen={showVideo} onClose={() => setShowVideo(false)} videoId={youtubeId} />
    </>
  );
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

   const projectsData = [
    {
  title: "LabSathi – AI-Powered Virtual Laboratory Platform",
  description: "LabSathi is a simulation-based virtual laboratory platform that brings school science labs into students’ pockets. It offers curriculum-aligned guided labs for Chemistry, Physics, and Biology, powered by an AI agent that provides real-time feedback and supports self-paced learning in an interactive virtual environment.",
  Source: "https://github.com/frecklehead/labsathi",
      videoUrl: "https://youtu.be/kCKpnImUdPs",
  tags: [
    "AI Agent",
    "Virtual Laboratory",
    "Simulation-Based Learning",
    "EdTech",
    "Self-Paced Learning",
    "Curriculum-Based Labs",
    "STEM Education"
  ]
},
{
  title: "EduPerks – Student Discount Platform with OCR Verification",
  description: "EduPerks is a student-only benefits platform that verifies enrolled students using OCR and AI-powered document validation. Built with Next.js, Tesseract.js, Prisma, and PostgreSQL, it enables secure access to exclusive discounts while allowing businesses to confidently offer student-only deals through a partner dashboard.",
  
  Source: "https://github.com/frecklehead/MBMC",
      videoUrl: "https://youtu.be/PxKP77-Op5g",
  tags: [
    "Next.js",
    "Tesseract.js",
    "OCR",
    "Prisma ORM",
    "PostgreSQL",
    "AI Verification",
    "Student Platform"
  ]
},
    {
      title: 'Rakshya-Kawach',
      description: "An innovative web application that simulates job interviews using AI. Features include real-time speech recognition, dynamic question generation based on job descriptions, and immediate feedback on responses. Built with Rect for the frontend and integrated with Gemini's API for natural language processing.",
      Source: "https://github.com/frecklehead/rk",
      videoUrl: "https://www.youtube.com/watch?v=AOAALfqe9D8", 
      tags: ["Tenserflow.js", "Three.js","Posenet","GeminiAPI"]
    },
    {
      title: 'AI Interviewer',
      description: "An innovative web application that simulates job interviews using AI. Features include real-time speech recognition, dynamic question generation based on job descriptions, and immediate feedback on responses. Built with Rect for the frontend and integrated with Gemini's API for natural language processing.",
      Source: "https://github.com/frecklehead/Interview_master",
      videoUrl: "https://youtu.be/W_kAuqjCuyA", 
      tags: ['Firebase', 'GeminiAPI', 'Speech Recognition', 'AI']
    },
    {
      title: 'Ambulance Booking System',
      description: "A real-time ambulance booking and tracking system that connects patients with nearby ambulances during emergencies. Features include live location tracking, shortest route calculation, and priority-based dispatch system. Built with React Native for cross-platform support and Firebase for real-time updates.",
      Source: "https://github.com/frecklehead/Ambulance-booking-App",
      videoUrl: "https://youtu.be/xUPruoKC2LE", 
      tags: ['Next.js', 'Clerk', 'Leaflet.js','Shadcn','Typescript']
    },
    {
      title: 'Digit-Recognizer',
      description: "This Django project provides a simple web application that allows users to draw digits on a canvas and receive a prediction of the digit. The prediction is powered by a machine learning model trained on the MNIST dataset.",
      link: "https://x.com/aryal_prashamsa/status/1801974728418050056",
      Source: "https://github.com/frecklehead/Digit-Predictor-MNIST-",
      videoUrl: "https://youtu.be/hNLDad_hzcs",
      tags: ['Django', 'Machine Learning', 'Canvas API']
    },
    {
      title: 'Hamro Dokaan',
      description: "An django based web application for small business owner to have their own platform of e-commerce with direct customer communication via direct messaging.",
      link: "https://youtu.be/VtPlaFJdzNE",
      Source: "https://github.com/frecklehead/Online-Marketplace",
      videoUrl: "https://youtu.be/VtPlaFJdzNE",
      tags: ['Django', 'E-commerce', 'Real-time Chat']
    },
    {
      title: 'Ecllipses',
      description: 'An threejs based web app with visually appealing animations of ecllipes especially designed for kids where they can know anyhting about ecllipses where I contribured the Frontend Part creating a flipbook animation.',
      link: "https://github.com/frecklehead/SpaceApps",
      Source: "",
      tags: ['Three.js', 'Animation', 'Educational']
    },
    {
      title: "ML from Scratch",
      description: "Created all algorithms from scratch including Linear Regression, Logistic Regression, Neural Networks, and various clustering algorithms. Implemented with pure Python and NumPy to deeply understand the mathematical foundations of machine learning.",
      Source: "https://github.com/frecklehead/ML-from-scratch",
      tags: ['Machine Learning', 'Algorithms', 'Python', 'NumPy']
    },
    {
      title: "Movie Recommender App",
      description: "Recommend you what to watch next based on 10000 movie dataset, made using steamlit. Features collaborative filtering and content-based recommendation systems with an intuitive user interface.",
     link: "https://x.com/aryal_prashamsa/status/1808559331392245829",
      tags: ['Streamlit', 'Recommendation System', 'Data Science', 'Python']
    },
     


  ];

  const filteredProjects = projectsData.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Background elements with green theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-600/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2 
            className="text-5xl sm:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My best work showcasing full-stack development, AI integration, and innovative solutions
          </motion.p>
        </div>

        {/* Search */}
        <motion.div 
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-400/60" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-emerald-950/50 transition-all backdrop-blur-sm"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <Project
              key={index}
              {...project}
              index={index}
            />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found matching your search.</p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;