import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-2xl font-bold cursor-pointer"
        >
          <span className={`${scrolled || darkMode ? 'text-accent' : 'text-white'}`}>
            Diligent<span className="text-accent">Vessel</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`nav-link ${
              scrolled 
                ? 'text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent' 
                : 'text-white hover:text-accent'
            }`}
          >
            About
          </Link>
          <Link
            to="programs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`nav-link ${
              scrolled 
                ? 'text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent' 
                : 'text-white hover:text-accent'
            }`}
          >
            Programs
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`nav-link ${
              scrolled 
                ? 'text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent' 
                : 'text-white hover:text-accent'
            }`}
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`nav-link ${
              scrolled 
                ? 'text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent' 
                : 'text-white hover:text-accent'
            }`}
          >
            Contact
          </Link>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={`p-2 rounded-full ${
              scrolled 
                ? 'text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700' 
                : 'text-white hover:bg-gray-700/30'
            }`}
          >
            {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={`p-2 mr-2 rounded-full ${
              scrolled 
                ? 'text-gray-800 dark:text-gray-200' 
                : 'text-white'
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          
          <button
            onClick={toggleMenu}
            className={`text-2xl focus:outline-none ${
              scrolled 
                ? 'text-gray-800 dark:text-gray-200' 
                : 'text-white'
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-800 shadow-lg"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="py-2 text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="programs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="py-2 text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent"
              onClick={toggleMenu}
            >
              Programs
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="py-2 text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="py-2 text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
