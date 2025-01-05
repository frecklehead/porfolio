"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Projects', href: '#projects' },
    { title: 'Experience', href: 'experience' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="bg-emerald-600 fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-xl">
              Portfolio
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-white hover:bg-emerald-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-emerald-500 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-emerald-600`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-white hover:bg-emerald-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;