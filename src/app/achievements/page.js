"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Zap } from 'lucide-react';

const Achievements = () => {
  const achievementsData = [
    {
      icon: Trophy,
      category: "Competitions",
      title: "Winner - AI Innovation Hackathon 2024",
      description: "Won first place for developing an AI-powered interview preparation platform with innovative features",
      date: "2024"
    },
    {
      icon: Star,
      category: "Awards",
      title: "Tech Excellence Award",
      description: "Recognized for outstanding contributions to open source projects and community development",
      date: "2023"
    },
    {
      icon: Award,
      category: "Certifications",
      title: "Google Cloud Professional Developer",
      description: "Achieved professional certification in cloud development and deployment on Google Cloud Platform",
      date: "2023"
    },
    {
      icon: Zap,
      category: "Featured",
      title: "Featured Developer - Tech Community",
      description: "Selected as featured developer for innovative work in AI and web technologies",
      date: "2024"
    },
    {
      icon: Star,
      category: "Recognition",
      title: "GitHub Arctic Code Vault Contributor",
      description: "Selected as one of the open source developers contributing to GitHub's Arctic Code Vault",
      date: "2023"
    },
    {
      icon: Trophy,
      category: "Speaking",
      title: "Keynote Speaker - TechTalk Nepal",
      description: "Delivered keynote on 'Future of AI in Web Development' at major tech conference",
      date: "2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-900 to-black border-t border-emerald-500/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-emerald-600" />
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl">
            Milestones and recognitions earned through dedication and hard work
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievementsData.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-black backdrop-blur-sm p-6 transition-all duration-300 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon and Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-emerald-600/20 border border-emerald-500/50 rounded-lg">
                      <IconComponent className="h-6 w-6 text-emerald-400" />
                    </div>
                    <span className="px-3 py-1 bg-emerald-600/20 border border-emerald-500/30 rounded-full text-xs font-semibold text-emerald-300">
                      {achievement.category}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Date */}
                  <div className="pt-4 border-t border-emerald-500/20">
                    <p className="text-xs text-emerald-600/60 font-semibold">
                      {achievement.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
