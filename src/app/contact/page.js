
"use client"
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Youtube, Instagram, Send, Sparkles } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      link: "mailto:prashamsa35np@gmail.com",
      text: "prashamsa35np@gmail.com",
      hoverText: "✨ Drop me an email!"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      link: "https://www.linkedin.com/in/prashamsa-aryal-07840224b/",
      text: "linkedin.com/Prashamsa",
      hoverText: "🌟 Let's connect!"
    },
    {
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/frecklehead",
      text: "github.com/frecklehead",
      hoverText: "💻 Check out my code!"
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      link: "https://www.youtube.com/@afreck",
      text: "youtube.com/Freckle",
      hoverText: "🎥 Watch my content!"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      link: "https://www.instagram.com/stories/ipraxamas._/",
      text: "instagram.com/frecklehead",
      hoverText: "📸 Follow my journey!"
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-emerald-50 to-emerald-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-800 mb-2 flex items-center justify-center gap-2">
            Say Hello! <Sparkles className="w-8 h-8 text-emerald-600 animate-pulse" />
          </h2>
          <p className="text-emerald-600 text-lg">I don't bite, promise! 😊</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your lovely name"
                  className="w-full p-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full p-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write something fun..."
                  rows="4"
                  className="w-full p-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-6">Or find me here</h3>
              <ul className="space-y-4">
                {contacts.map((contact, index) => (
                  <li key={index} className="group">
                    <a
                      href={contact.link}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-emerald-50 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-emerald-600 group-hover:text-emerald-700 transition-colors">
                        {contact.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-gray-600">{contact.text}</span>
                        <span className="text-sm text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          {contact.hoverText}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {showSuccess && (
          <Alert className="mt-6 bg-emerald-100 border-emerald-200">
            <AlertDescription className="text-emerald-700">
              Thanks for reaching out! I'll get back to you soon! 🎉
            </AlertDescription>
          </Alert>
        )}
      </div>
    </footer>
  );
};

export default Contact;