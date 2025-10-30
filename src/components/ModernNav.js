import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ModernNav = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '1rem 2rem' : '1.5rem 2rem',
        background: isScrolled
          ? 'rgba(10, 10, 25, 0.8)'
          : 'rgba(10, 10, 25, 0.3)',
        backdropFilter: 'blur(10px)',
        borderBottom: isScrolled ? '1px solid rgba(100, 200, 255, 0.2)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #00d4ff, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection('hero')}
        >
          &lt;Swaroop.dev /&gt;
        </motion.div>

        {/* Desktop Navigation */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.5rem 1rem',
                background:
                  activeSection === item.id
                    ? 'rgba(0, 212, 255, 0.2)'
                    : 'transparent',
                border:
                  activeSection === item.id
                    ? '1px solid rgba(0, 212, 255, 0.5)'
                    : '1px solid transparent',
                borderRadius: '8px',
                color: activeSection === item.id ? '#00d4ff' : '#fff',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: activeSection === item.id ? '600' : '400',
                transition: 'all 0.3s ease',
              }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            display: 'none',
            background: 'rgba(0, 212, 255, 0.2)',
            border: '1px solid rgba(0, 212, 255, 0.5)',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            color: '#00d4ff',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
        >
          Menu
        </motion.button>
      </div>

      {/* Mobile Navigation Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </motion.nav>
  )
}

export default ModernNav
