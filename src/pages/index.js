import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Layout from '../components/layout'
import CodeBackground from '../components/CodeBackground'
import ModernNav from '../components/ModernNav'
import HeroSection from '../components/HeroSection'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import CertificationsSection from '../components/CertificationsSection'
import ContactSection from '../components/ContactSection'
import SharingModal from '../components/SharingModal'
import { contact } from '../data/portfolioData'

const IndexPage = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
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

  const contactData = {
    name: 'Swaroop A.S.',
    phone: contact.phone,
    email: contact.email,
    website: contact.website,
    github: contact.github,
    linkedin: 'https://www.linkedin.com/in/swaroop-as',
  }

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
        <HeroSection onOpenShareModal={() => setIsShareModalOpen(true)} />
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

      {/* Sharing Modal - Rendered at root level to avoid z-index issues */}
      <SharingModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        contactData={contactData}
      />
    </Layout>
  )
}

export default IndexPage
