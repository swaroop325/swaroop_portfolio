import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/css/ScrollAssistant.css';

const ScrollAssistant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll assistant after scrolling 300px
      setIsVisible(window.scrollY > 300);

      // Detect active section
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="scroll-assistant-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            right: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          {/* Section navigation dots */}
          <div
            style={{
              background: 'rgba(20, 20, 40, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '1rem 0.75rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}
          >
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: activeSection === section.id
                    ? '2px solid #667eea'
                    : '2px solid rgba(255, 255, 255, 0.2)',
                  background: activeSection === section.id
                    ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3))'
                    : 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                title={section.label}
              >
                {section.icon}

                {/* Tooltip */}
                <span
                  style={{
                    position: 'absolute',
                    right: '100%',
                    marginRight: '0.75rem',
                    background: 'rgba(20, 20, 40, 0.95)',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    pointerEvents: 'none',
                    transition: 'opacity 0.2s ease',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  className="scroll-assistant-tooltip"
                >
                  {section.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease'
            }}
            title="Scroll to top"
          >
            ↑
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollAssistant;
