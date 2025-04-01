import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const handleDonate = () => {
    window.open('https://donate.diligentvessel.org', '_blank');
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
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
            >
              Learn More
            </Link>
            <button 
              className="btn-secondary border-white text-white hover:bg-white hover:text-accent"
              onClick={handleDonate}
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
