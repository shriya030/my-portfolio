import { useState, useEffect } from 'react';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Profile from './Sections/Profile';
import Experience from './Sections/Experience';
import Skills from './Sections/Skills';
import Projects from './Sections/Projects';
import Achievements from './Sections/Achievements';
import Education from './Sections/Education';
import Contact from './Sections/Contact';
import ParticlesBackground from './Components/ParticlesBackground';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'projects', 'achievements', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-all duration-300`}>
      <ParticlesBackground darkMode={darkMode} />
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      
      <Profile />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;