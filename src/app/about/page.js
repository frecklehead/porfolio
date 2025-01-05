"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
               
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-10 px-4">
        <button
          onClick={prevSlide}
          className="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 p-3 rounded-full shadow-lg transition-all transform hover:-translate-x-1"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 p-3 rounded-full shadow-lg transition-all transform hover:translate-x-1"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Content and Image Container */}
      <div className="overflow-hidden rounded-2xl bg-white/70 backdrop-blur-lg border border-emerald-100 shadow-lg"> 
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="grid lg:grid-cols-2 gap-12 p-12">
                {/* Image */}
                <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                  
                  <div className="absolute inset-0 bg-emerald-600/10 group-hover:bg-emerald-600/0 transition-colors duration-300" />
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center space-y-8">
                  <div className="space-y-2">
                    <div className="text-emerald-600 font-medium text-lg animate-slideDown">
                      {slide.subtitle}
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent animate-slideDown">
                      {slide.title}
                    </h2>
                  </div>
                  <div className="prose text-gray-600 leading-relaxed animate-slideDown animation-delay-300">
                    {slide.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? 'w-12 bg-emerald-600'
                : 'w-3 bg-emerald-200 hover:bg-emerald-300'
            } h-3 rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const slides = [
    {
      subtitle: "Get to know me",
      title: "Who Am I?",
      image: "/whoami.png",
      content: (
        <div className="space-y-4">
          <h5>🌿 Debug.green(whoAmI)</h5>
          <p><span>
          Just your friendly neighborhood code whisperer who believes the best hex color is</span> <span className='text-green-900 font-semibold'  >#00FF00 </span>(and all its gorgeous variants). If my life were a CSS file, everything would have a 
          <p className='font-semibold'>background-color: green;</p>
       
          </p>
          <p>
          I'm that quirky soul who oscillates between intense nerd mode and casual chaos – think of me as a part-time genius with a full-time sense of humor. Sushi rolls are my kryptonite.I've mastered the art of being seriously unserious.
          </p>
        </div>
      )
    },
    {
      subtitle: "My Story",
      title: "The Journey",
      image: "/o.jpeg",
      content: (
        <div className="space-y-4">
          <p>
          🚀 Picture this: It's 2020, and there I was, diving into tech like a curious cat discovering a ball of yarn for the first time!
            
          </p>
          <p>
          Then BAM! 🦠 Lockdown hits, and I had this brilliant idea to become a competitive programming genius. Started strong with DSA but let's just say my relationship with algorithmic problems became more of a long-distance thing 🤪. College rolled around 🎓, and I joined the "Weather App Developers Anonymous" club - you know, because everyone needs to make at least one weather app to be a real developer!
          </p>

          <p>
          But here's where it gets good! 🎭 After swimming through oceans of documentation and turning YouTube tutorials into my personal Netflix series, something magical happened. Now I'm whipping up code like a tech chef, no training wheels needed! 👨‍🍳💻 Each project is a new adventure, and I'm just getting started on this wild coding journey! 🚀
          </p>
        </div>
      )
    },
    {
      subtitle: "Interests & Passions",
      title: "Beyond Tech",
      image: "/IMG_2578.JPG",
      content :(
      <div className="space-y-4">
          <p>
   When I'm not wrestling with code 💻, you'll find me wandering mountain trails  🏔️🐐. A jack-of-all-trades bouncing between basketball courts 🏀 and impromptu karaoke sessions 🎤, mastering none but loving all!
</p>

<p>
   While coding makes my heart do its happy dance 💃, I believe in balancing tech wizardry with personal growth 🌱.
</p>
        </div>
      )
    },
    {
      subtitle: "Looking Ahead",
      title: "My Vision",
      image: "/v.jpeg",
      content: (
        <div className="space-y-4">
          <p>
            I'm dedicated to creating innovative solutions that positively impact 
            people's lives. My goal is to continue growing as a developer while 
            contributing to meaningful projects.
          </p>
          <p>
            I aim to collaborate with like-minded individuals and organizations 
            that share my passion for using technology to solve real-world problems.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id ="about" className="relative min-h-screen bg-gradient-to-b from-white to-emerald-50 pt-8 pb-20">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-72 h-72 animate-blob" />
        <div className="absolute -bottom-20 left-40 w-72 h-72 animate-blob animation-delay-4000" />
       
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-12 relative">
        {/* Content Slider */}
        <ContentSlider slides={slides} />
      </div>
    </section>
  );
};

export default About;