
"use client"
import React, { useState } from 'react';
import { Search, Github, ExternalLink, Code, Play } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const getYoutubeId = (url) => {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url?.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const VideoDialog = ({ isOpen, onClose, videoId }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-4xl">
      <DialogHeader>
        <DialogTitle>Project Demo</DialogTitle>
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

const Project = ({ title, description, link, Source, videoUrl, tags = [] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const youtubeId = videoUrl ? getYoutubeId(videoUrl) : null;

  return (
    <>
      <Card 
        className={`relative transform transition-all duration-300 ${
          isHovered ? 'scale-105' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {youtubeId && (
          <div 
            className="relative w-full pt-[56.25%] bg-gray-100 rounded-t-lg overflow-hidden cursor-pointer group"
            onClick={() => setShowVideo(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
              alt={`${title} thumbnail`}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                  <Play className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        )}
        <CardHeader className="bg-emerald-50">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-emerald-700">{title}</h3>
            <div className="flex gap-2">
              {link && !videoUrl && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-emerald-600 hover:text-emerald-800"
                  asChild
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} />
                  </a>
                </Button>
              )}
              {Source && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-emerald-600 hover:text-emerald-800"
                  asChild
                >
                  <a href={Source} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-700">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      {youtubeId && (
        <VideoDialog
          isOpen={showVideo}
          onClose={() => setShowVideo(false)}
          videoId={youtubeId}
        />
      )}
    </>
  );
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

   const projectsData = [
    {
      title: 'AI Interviewer',
      description: "An innovative web application that simulates job interviews using AI. Features include real-time speech recognition, dynamic question generation based on job descriptions, and immediate feedback on responses. Built with Rect for the frontend and integrated with Gemini's API for natural language processing.",
      Source: "https://github.com/frecklehead/Interview_master",
      videoUrl: "https://youtube.com/shorts/RjNvuGcEU8s", 
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
      Source: "https://x.com/aryal_prashamsa/status/1808559331392245829",
      tags: ['Streamlit', 'Recommendation System', 'Data Science', 'Python']
    }
  ];

  const filteredProjects = projectsData.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">
            Featured Projects
          </h1>
          <p className="text-emerald-600 mb-8">Explore my latest works and contributions</p>
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-emerald-500" />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No projects found matching your search.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;