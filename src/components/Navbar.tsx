import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', target: 'hero' },
    { name: 'About', target: 'about' },
    { name: 'Programs', target: 'programs' },
    { name: 'Projects', target: 'projects' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DV</span>
              </div>
              <span className={`font-heading font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Diligent Vessel Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`text-sm font-medium cursor-pointer hover:text-accent transition-colors duration-300 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              className={`btn-primary ${
                scrolled
                  ? 'bg-accent text-white hover:bg-accent-dark'
                  : 'bg-white text-accent hover:bg-gray-100'
              }`}
              onClick={() => window.open('https://donate.diligentvessel.org', '_blank')}
            >
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg p-6"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 font-medium hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <button 
              className="btn-primary bg-accent text-white hover:bg-accent-dark mt-4 w-full"
              onClick={() => window.open('https://donate.diligentvessel.org', '_blank')}
            >
              Donate Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
