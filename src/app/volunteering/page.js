"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';

const Volunteering = () => {
  const volunteeringData = [
    {
      title: "Webmaster",
      organization: "Women in Engineering",
      duration: "2023 - Present",
      location: "Kathmandu, Nepal",
      description: "Designed and maintained the WIE  website  https://edu.ieee.org/np-iep-wie/",
      
    },
    {
      title: "Open Source Contributor",
      organization: "Open Source Community",
      duration: "2022 - Present",
      location: "Remote",
      description: "Contributing to various open-source projects. Helping with bug fixes, feature development, and documentation improvements.",
      impact: "15+ repositories contributed"
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="volunteering" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-900 to-black border-t border-emerald-500/20">
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
            <Heart className="h-8 w-8 text-emerald-600" />
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Volunteering & Impact
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl">
            Dedicated to giving back to the community and helping others grow
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {volunteeringData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="group relative overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 to-black backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-emerald-400 font-semibold mb-3">
                      {item.organization}
                    </p>
                  </div>
                  <div className="px-4 py-2 bg-emerald-600/20 border border-emerald-500/50 rounded-lg whitespace-nowrap">
                    <p className="text-emerald-300 font-semibold text-sm">
                      {item.impact}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-emerald-600" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteering;
