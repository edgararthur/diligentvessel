import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHandHoldingHeart, FaGlobe, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const stats = [
    { 
      icon: <FaUsers className="text-accent text-3xl mb-3" />,
      number: '5,000+', 
      label: 'People Impacted' 
    },
    { 
      icon: <FaHandHoldingHeart className="text-accent text-3xl mb-3" />,
      number: '20+', 
      label: 'Community Programs' 
    },
    { 
      icon: <FaGlobe className="text-accent text-3xl mb-3" />,
      number: '10+', 
      label: 'Years of Service' 
    },
    { 
      icon: <FaGraduationCap className="text-accent text-3xl mb-3" />,
      number: '1,000+', 
      label: 'Students Educated' 
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-left pb-3 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Diligent Vessel Foundation was established in 2012 with a vision to empower communities through education, 
                sustainable development, and humanitarian aid. What began as a small initiative in Koforidua, Ghana has grown 
                into a comprehensive development organization serving thousands of individuals across the region.
              </p>
              <p>
                Our journey started when a group of passionate educators and community leaders identified gaps in educational 
                access and opportunities for youth in underserved areas. Believing that education is the cornerstone of sustainable 
                development, we launched our first literacy program with just 50 students.
              </p>
              <p>
                Today, we've expanded our reach and impact through multiple programs focused on education, cultural preservation, 
                environmental sustainability, and leadership development. Our holistic approach addresses the diverse needs of 
                communities while preserving cultural heritage and promoting sustainable practices.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white mt-0.5">✓</div>
                  <span className="text-gray-700">Integrity & Transparency</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white mt-0.5">✓</div>
                  <span className="text-gray-700">Community Empowerment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white mt-0.5">✓</div>
                  <span className="text-gray-700">Cultural Preservation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white mt-0.5">✓</div>
                  <span className="text-gray-700">Sustainable Development</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1607827448387-a20b4a411ade?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Students in classroom in Ghana"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-lg overflow-hidden shadow-xl z-0 hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1585139786570-d3175f14e539?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Ghanaian community event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-lg overflow-hidden shadow-xl z-0 hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1566551569773-43639dc11cff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Traditional Ghanaian celebration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold text-center mb-12"
          >
            Our Impact by the Numbers
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center">{stat.icon}</div>
                <h4 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h4>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
