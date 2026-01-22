"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Projects', href: '/projects' },
    { title: 'Skills', href: '/skills' },
    { title: 'Blog', href: '/blog' },
    { title: 'Achievements', href: '/achievements' },
    { title: 'Volunteering', href: '/volunteering' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' }
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
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav 
      className="bg-black/80 backdrop-blur-md fixed w-full top-0 left-0 z-50 border-b border-emerald-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/" className="text-white font-bold text-2xl bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent hover:from-emerald-500 hover:to-green-500 transition-all">
              Prashamsa
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:block"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="ml-10 flex items-center space-x-1">
              {menuItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-emerald-400 hover:bg-emerald-500/10"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-emerald-700/95 backdrop-blur-md`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              className="text-white hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.title}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;