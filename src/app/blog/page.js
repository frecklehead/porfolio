"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMediumBlogs();
  }, []);

  const fetchMediumBlogs = async () => {
    try {
      setLoading(true);
      const mediumUsername = 'prashamsaaryal';
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`
      );
      const data = await response.json();
      
      if (data.items) {
        const blogPosts = data.items.map((item) => {
          // Extract image from content
          const contentMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
          const imageUrl = contentMatch ? contentMatch[1] : item.thumbnail || 'https://miro.medium.com/v2/resize:fit:1200/format:webp/0*placeholder';
          
          return {
            id: item.guid,
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 120),
            link: item.link,
            pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            }),
            image: imageUrl,
            author: item.author
          };
        });
        setBlogs(blogPosts);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching Medium blogs:', err);
      setLoading(false);
    }
  };

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
    <section id='blog' className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-green-600/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-emerald-600" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Blog Posts
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Articles about web development, AI, and technology insights
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            className="flex items-center justify-center py-12"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex gap-2">
              <div className="h-3 w-3 bg-emerald-600 rounded-full animate-bounce" />
              <div className="h-3 w-3 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="h-3 w-3 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        {!loading && blogs.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {blogs.map((blog, index) => (
              <motion.a
                key={blog.id}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-black backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-black">
                  <motion.img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop';
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    animate={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {blog.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-emerald-500/20">
                    <span className="text-xs text-emerald-600/60 font-semibold">
                      {blog.pubDate}
                    </span>
                    <ExternalLink className="h-4 w-4 text-emerald-600 group-hover:text-emerald-400 transition-colors" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* View More Button */}
        {!loading && blogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <a
              href="https://medium.com/@aryal-prashamsa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 border border-emerald-500/50"
            >
              View More on Medium
              <ExternalLink className="h-5 w-5" />
            </a>
          </motion.div>
        )}

        {/* No Blogs State */}
        {!loading && blogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No blog posts found. Visit Medium for more content.</p>
            <a
              href="https://medium.com/@prashamsaaryal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300"
            >
              Visit Medium Profile
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;

