import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ImageLoader from './ui/ImageLoader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to a server
    // For this demo, we'll simulate a successful submission
    try {
      // Simulating API call
      setTimeout(() => {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you for your message! We will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      }, 500);
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'There was an error submitting your message. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Have questions about our programs or want to get involved? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            {formStatus.submitted ? (
              <div className={`p-4 rounded-lg ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {formStatus.message}
                {formStatus.error && (
                  <button 
                    className="mt-4 text-accent underline"
                    onClick={() => setFormStatus(prev => ({ ...prev, submitted: false }))}
                  >
                    Try again
                  </button>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg mb-8 relative h-64">
              <ImageLoader
                src="/images/ghana-office.jpg"
                alt="Office location in Koforidua, Ghana"
                className="w-full h-full object-cover"
                fallbackSrc="https://source.unsplash.com/random/800x600/?ghana,africa,office,building"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Our Office</h4>
                  <p className="text-sm">123 Okponglo Road, Koforidua, Ghana</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-accent text-xl" />
                  <span className="text-gray-600">No.9 Okponglo Road, Koforidua, Eastern Region, Ghana</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-accent text-xl" />
                  <span className="text-gray-600">+233 302 123 456</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-accent text-xl" />
                  <span className="text-gray-600">info@diligentvessel.co.site</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://facebook.com/diligentvessel', '_blank');
                    }}
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://twitter.com/diligentvessel', '_blank');
                    }}
                  >
                    <FaTwitter className="text-2xl" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://instagram.com/diligentvessel', '_blank');
                    }}
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://linkedin.com/company/diligentvessel', '_blank');
                    }}
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;