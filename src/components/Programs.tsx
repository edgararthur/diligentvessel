import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const programs = [
  {
    title: 'Digital Literacy',
    description: 'Empowering youth with essential computer skills and digital knowledge for the modern world.',
    icon: '💻',
    stats: '500+ students trained',
  },
  {
    title: 'Cultural Heritage',
    description: 'Preserving and promoting Ghanaian traditions through interactive workshops and events.',
    icon: '🏺',
    stats: '20+ cultural programs',
  },
  {
    title: 'Environmental Education',
    description: 'Teaching sustainable practices and environmental consciousness to future generations.',
    icon: '🌱',
    stats: '15 eco-projects completed',
  },
  {
    title: 'Leadership Development',
    description: 'Nurturing future leaders through mentorship and practical leadership training.',
    icon: '👥',
    stats: '100+ youth leaders',
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Discover our comprehensive educational programs designed to empower and inspire the youth of Koforidua.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-semibold text-accent">{program.stats}</span>
                <FaArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <button 
            className="btn-primary bg-accent hover:bg-accent-dark text-white"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join Our Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;