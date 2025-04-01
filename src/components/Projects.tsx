import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import ImageLoader from './ui/ImageLoader';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  location: string;
  impact: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Community Library Initiative',
    category: 'Education',
    description: 'Establishing a modern community library with over 5,000 books and digital resources to promote literacy and lifelong learning.',
    image: '/images/project-library.jpg',
    date: 'Ongoing since 2019',
    location: 'Koforidua, Ghana',
    impact: '2,000+ community members served',
  },
  {
    id: 2,
    title: 'Clean Water Access Project',
    category: 'Health',
    description: 'Installing water purification systems and wells to provide safe drinking water to underserved communities in rural areas.',
    image: '/images/project-water.jpg',
    date: 'Completed in 2022',
    location: 'Asuogyaman District, Ghana',
    impact: '10 villages, 5,000+ residents',
  },
  {
    id: 3,
    title: 'Youth Coding Academy',
    category: 'Education',
    description: 'Teaching programming and digital skills to young people through hands-on workshops and mentorship programs.',
    image: '/images/project-coding.jpg',
    date: 'Ongoing since 2020',
    location: 'Koforidua, Ghana',
    impact: '300+ students trained',
  },
  {
    id: 4,
    title: 'Maternal Health Outreach',
    category: 'Health',
    description: 'Providing prenatal care, education, and support for expectant mothers in underserved communities to reduce maternal mortality.',
    image: '/images/project-health.jpg',
    date: 'Ongoing since 2018',
    location: 'Eastern Region, Ghana',
    impact: '500+ mothers supported',
  },
  {
    id: 5,
    title: 'Sustainable Agriculture Program',
    category: 'Environment',
    description: 'Training local farmers in sustainable farming techniques to improve crop yields while protecting the environment.',
    image: '/images/project-agriculture.jpg',
    date: 'Ongoing since 2021',
    location: 'Various rural communities',
    impact: '150+ farmers trained',
  },
  {
    id: 6,
    title: 'Cultural Heritage Festival',
    category: 'Culture',
    description: 'Annual celebration of local traditions, arts, and cultural practices to preserve heritage and promote cultural education.',
    image: '/images/project-culture.jpg',
    date: 'Annual event',
    location: 'Koforidua, Ghana',
    impact: '1,000+ participants yearly',
  },
];

// This helps make image paths work in both development and production
const getImagePath = (path: string) => {
  // If the path is already an absolute URL, return it as is
  if (path.startsWith('http')) {
    return path;
  }
  // For local images, ensure they work in both dev and production
  return new URL(path, import.meta.url).href;
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  // Use the image path directly since ImageLoader handles fallbacks
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden rounded-lg shadow-lg h-full"
    >
      <div className="relative overflow-hidden h-48">
        <ImageLoader
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          fallbackSrc={`https://source.unsplash.com/random/800x600/?ghana,africa,${project.category.toLowerCase()}`}
        />
        <div className="absolute top-4 right-4 bg-accent text-white text-xs font-semibold px-2 py-1 rounded">
          {project.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-accent" />
            <span>{project.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-accent" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaUsers className="text-accent" />
            <span>{project.impact}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const categories = ['All', 'Education', 'Health', 'Environment', 'Culture'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = showAll ? projects : filteredProjects;

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
            Explore our impactful initiatives that are making a real difference in our communities.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center space-x-2 space-y-2 md:space-y-0 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category && !showAll
                  ? 'bg-accent text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              aria-label={`Filter projects by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
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
            className="btn-secondary"
            onClick={() => {
              setShowAll(true);
              setActiveCategory('');
            }}
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
