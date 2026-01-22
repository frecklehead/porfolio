"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Zap,
  Brain,
  Palette,
  Cpu,
  GitBranch,
  Cloud,
  TestTube,
  Landmark,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Palette,
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Shadcn UI"],
      color: "from-emerald-400 to-emerald-600"
    },
    {
      title: "Backend",
      icon: Code2,
      skills: ["Node.js", "Django", "Python", "Express", "REST APIs", "Authentication"],
      color: "from-green-400 to-green-600"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Prisma ORM", "Redis", "MySQL"],
      color: "from-teal-400 to-teal-600"
    },
    {
      title: "AI & ML",
      icon: Brain,
      skills: ["TensorFlow.js", "Machine Learning", "NLP", "Gemini API", "NumPy", "Scikit-learn"],
      color: "from-emerald-400 to-green-500"
    },
    {
      title: "Tools & DevOps",
      icon: Zap,
      skills: ["Git", "Docker", "VS Code", "Vercel", "GitHub", "CI/CD"],
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "Specializations",
      icon: Cpu,
      skills: ["OCR (Tesseract.js)", "3D Graphics (Three.js)", "Speech Recognition", "Real-time Chat", "Virtual Labs"],
      color: "from-green-400 to-green-600"
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

  const SkillCard = ({ category, index }) => {
    const Icon = category.icon;

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.98 }}
        className="group"
      >
        <div className="relative h-full bg-gradient-to-br from-emerald-950/40 to-black rounded-xl p-6 border border-emerald-500/30 shadow-md hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 overflow-hidden backdrop-blur-sm">
          {/* Gradient background on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

          {/* Icon */}
          <motion.div
            className="mb-4"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-emerald-800 mb-4 group-hover:text-emerald-600 transition-colors">
            {category.title}
          </h3>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.span
                key={skillIndex}
                className="px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 transition-colors cursor-default"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Bottom accent */}
          <motion.div
            className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${category.color}`}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="relative py-20 px-4 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-emerald-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/2 -right-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
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
              Tech Stack
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-4"
          >
            Skills & Expertise
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            A comprehensive toolkit built through real-world projects and continuous learning
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Interested in collaborating? Let's build something amazing together!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <span className="ml-2">→</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
