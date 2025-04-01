import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState('/images/ghana-hero.jpg');
  
  useEffect(() => {
    // Check if the image exists, if not use a fallback
    const img = new Image();
    img.onerror = () => {
      setBackgroundImage('https://source.unsplash.com/random/1920x1080/?ghana,africa,culture');
    };
    img.src = backgroundImage;
  }, []);
  
  const handleDonate = () => {
    window.open('https://donate.diligentvessel.org', '_blank');
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label="Hero section with background image of Ghana"
    >
      <div className="container mx-auto px-6 text-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-heading">
            Empowering Communities <br className="hidden md:block" />
            <span className="text-accent">Building Futures</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200">
            Diligent Vessel Foundation is committed to creating sustainable change 
            through education, healthcare, and community development programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-primary bg-accent hover:bg-accent-dark text-white"
              aria-label="Learn more about Diligent Vessel Foundation"
            >
              Learn More
            </Link>
            <button 
              className="btn-secondary border-white text-white hover:bg-white hover:text-accent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-accent"
              onClick={handleDonate}
              aria-label="Donate to Diligent Vessel Foundation"
            >
              Donate Now
            </button>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-0 right-0 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white inline-block cursor-pointer"
              aria-label="Scroll down to discover our mission"
            >
              <span className="block mb-2 text-sm">Discover Our Mission</span>
              <FaArrowRight className="mx-auto transform rotate-90" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
