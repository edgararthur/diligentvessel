import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';

// Helper to normalize image paths
const getImagePath = (path: string): string => {
  // If it's already an HTTP URL or data URL, return as is
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }
  
  // Make sure paths work in all environments by removing leading slash if present
  return path.startsWith('/') ? path.substring(1) : path;
};

const Hero: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState('/images/ghana-hero.jpg');
  
  useEffect(() => {
    const img = new Image();
    img.src = getImagePath(backgroundImage);
    img.onload = () => {
      setBackgroundImage(img.src);
    };
    img.onerror = () => {
      setBackgroundImage('https://source.unsplash.com/random/1920x1080/?ghana,africa,community');
    };
  }, []);
  
  const handleDonate = () => {
    window.open('https://donate.diligentvessel.org', '_blank');
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
      id="hero"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${getImagePath(backgroundImage)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Empowering Ghana's Future
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Building sustainable communities through education, healthcare, and economic development
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Donate Now
          </button>
          <RouterLink 
            to="/projects" 
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-colors backdrop-blur-sm"
            aria-label="View our projects"
          >
            Learn More
          </RouterLink>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ScrollLink 
          to="about" 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white/80 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll down to about section"
        >
          <svg 
            className="w-6 h-6 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default Hero;
