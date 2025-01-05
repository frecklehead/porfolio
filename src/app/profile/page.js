
"use client"
import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight, Youtube } from "lucide-react";

const Profile = () => {
  return (
    <section className="relative min-h-screen 0 to-white px-4 py-20 overflow-hidden">
      {/* Background Decorations */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 -right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-40 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div> */}

      <div className="max-w-6xl mx-auto relative">
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 bordershadow-lg transform hover:scale-105 transition-transform duration-300 animate-fadeIn">
          <div className="flex flex-col lg:flex-row items-center gap-8">
           
            <Image
              src="/Untitled design.png"
              alt="Prashamsa Aryal"
              width={300}
              height={300}
              className="rounded-full shadow-xl object-cover animate-fadeIn animation-delay-700 border-4 border-emerald-200"
              priority
            />

            <div className="space-y-6 flex-1">
              <h2 className="text-emerald-600 font-medium text-lg animate-slideDown">
                Welcome to my portfolio
              </h2>
              
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-6 animate-slideDown animation-delay-300">
                Hi! I&apos;m Prashamsa Aryal.
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8 animate-slideDown animation-delay-500">
                I am a learner with strong foundation in Python and JavaScript, along with experience in frameworks and libraries like NumPy, pandas, scikit-learn, Django, and React learning to tackle complex challenges in the field of artificial intelligence and software development.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* Social Links */}
                <div className="flex gap-4 animate-slideDown animation-delay-700">
                <a
                    href="https://www.youtube.com/@afreck"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-200 transition-colors"
                  >
                    <Youtube className="w-5 h-5 text-emerald-700" />
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-200 transition-colors"
                  >
                    <Github className="w-5 h-5 text-emerald-700" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-200 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-emerald-700" />
                  </a>
                  <a
                    href="mailto:prashamsa35np@gmail.com"
                    className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-200 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-emerald-700" />
                  </a>
                </div>

                <button  onClick={(()=>
              window.location.href = "https://www.linkedin.com/in/prashamsa-aryal-07840224b/")}
                            className="group inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors animate-slideDown animation-delay-1000">
                  Contact Me 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;