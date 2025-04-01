import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for user preference for dark mode
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (localStorage.getItem('darkMode') === 'true') {
      setDarkMode(true);
    } else if (localStorage.getItem('darkMode') === 'false') {
      setDarkMode(false);
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Use HashRouter for better compatibility with static deployments
  const RouterComponent = import.meta.env.PROD ? HashRouter : Router;

  return (
    <RouterComponent>
      <div className="App transition-colors duration-300 bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Programs />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </RouterComponent>
  );
}

export default App;