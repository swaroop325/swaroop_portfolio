import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Layout from '../components/layout'
import CodeBackground from '../components/CodeBackground'
import ModernNav from '../components/ModernNav'
import HeroSection from '../components/HeroSection'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import CertificationsSection from '../components/CertificationsSection'
import ContactSection from '../components/ContactSection'

const IndexPage = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const sections = ['hero', 'experience', 'skills', 'projects', 'certifications', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Layout location={typeof window !== 'undefined' ? window.location : {}}>
      <CodeBackground />
      <ModernNav activeSection={activeSection} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </motion.div>

      {/* Scroll Progress Indicator */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #00d4ff, #00ff88)',
          transformOrigin: '0%',
          scaleX: scrollYProgress,
          zIndex: 9999,
        }}
      />
    </Layout>
  )
}

export default IndexPage
