"use client"
import React, { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/frecklehead", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/prashamsa-aryal-07840224b/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:prashamsa35np@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Animated background with dark green accents */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(5, 46, 22) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(5, 46, 22) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem'
          }}
        ></div>

        {/* Mouse-following gradient */}
        <div 
          className="absolute inset-0 opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(5, 150, 105, 0.15), transparent 40%)`
          }}
        ></div>

        {/* Animated orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-green-950/20 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-5xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="flex justify-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-900/50 bg-emerald-950/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span className="text-xs sm:text-sm text-emerald-400 font-medium tracking-wide uppercase">
                Open to Work
              </span>
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4" style={{ opacity: Math.max(0, 1 - scrollY * 0.002) }}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="block text-white mb-2">
                Prashamsa Aryal
              </span>
              <span className="block bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Building modern web applications with <span className="text-emerald-400 font-semibold">Next.js</span>, <span className="text-emerald-400 font-semibold">React</span>, and <span className="text-emerald-400 font-semibold">AI</span>. 
            Turning ideas into elegant digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/50 hover:scale-105"
            >
              <span>View Projects</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <a 
              href="#contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-emerald-900/50 hover:border-emerald-700 text-emerald-400 hover:text-emerald-300 font-semibold rounded-lg transition-all duration-300 hover:bg-emerald-950/30 backdrop-blur-sm hover:scale-105"
            >
              <span>Contact Me</span>
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-8">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg border border-emerald-900/50 hover:border-emerald-700 bg-emerald-950/20 hover:bg-emerald-950/40 text-emerald-500 hover:text-emerald-400 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
            <a 
              href="#projects"
              className="flex flex-col items-center gap-2 text-emerald-700 hover:text-emerald-500 transition-colors group"
            >
              <span className="text-xs font-medium tracking-wider uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                Scroll
              </span>
              <div className="p-2 border border-emerald-900/50 rounded-full group-hover:border-emerald-700 transition-colors">
                <ArrowDown className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;