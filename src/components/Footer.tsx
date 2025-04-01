import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your newsletter service
    // For now, we'll just show a success message
    setSubscribed(true);
    setEmail('');
    // Reset the success message after 5 seconds
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DV</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Diligent Vessel
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering communities through education, sustainability, and humanitarian aid since 2012.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label="Facebook"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://facebook.com/diligentvessel', '_blank');
                }}
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label="Twitter"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://twitter.com/diligentvessel', '_blank');
                }}
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://instagram.com/diligentvessel', '_blank');
                }}
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://linkedin.com/company/diligentvessel', '_blank');
                }}
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label="YouTube"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://youtube.com/c/diligentvessel', '_blank');
                }}
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="programs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="/reports" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Annual reports would be available for download here.');
                  }}
                >
                  Annual Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>No.9 Okponglo Road, Koforidua, Eastern Region, Ghana</li>
              <li>info@diligentvessel.co.site</li>
              <li>+233 302 123 456</li>
              <li>Monday - Friday: 9am - 5pm</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on our projects and upcoming events.
            </p>
            {subscribed ? (
              <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                Thank you for subscribing to our newsletter!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary bg-accent hover:bg-accent-dark text-white"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Diligent Vessel Foundation. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="/privacy" 
              className="text-gray-400 hover:text-accent text-sm transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                alert('Privacy Policy page would open here.');
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-gray-400 hover:text-accent text-sm transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                alert('Terms of Service page would open here.');
              }}
            >
              Terms of Service
            </a>
            <a 
              href="/cookies" 
              className="text-gray-400 hover:text-accent text-sm transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                alert('Cookie Policy page would open here.');
              }}
            >
              Cookie Policy
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-accent hover:bg-accent-dark text-white p-3 rounded-full shadow-lg transition-colors duration-300"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
