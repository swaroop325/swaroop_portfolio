import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CertificationsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const certifications = [
    { title: 'Professional Scrum Master™ I', issuer: 'Scrum.org', year: '2025', color: '#00d4ff' },
    { title: 'GitLab CI Fundamentals', issuer: 'GitLab', year: '2025', color: '#fc6d26' },
    { title: 'AWS Certified AI Practitioner', issuer: 'AWS', year: '2024-27', color: '#ff9900' },
    { title: 'Machine Learning Specialization', issuer: 'Stanford', year: '2024', color: '#8c1515' },
    { title: 'ICT Solution Architect', issuer: 'GovTech/NUS-ISS', year: '2024-27', color: '#00ff88' },
    { title: 'AWS Solutions Architect Associate', issuer: 'AWS', year: '2024-27', color: '#ff9900' },
    { title: 'AWS Developer Associate', issuer: 'AWS', year: '2024-27', color: '#ff9900' },
    { title: 'AWS Cloud Practitioner', issuer: 'AWS', year: '2023-26', color: '#ff9900' },
    { title: 'ICT Software Developer', issuer: 'GovTech/NUS-ISS', year: '2023', color: '#00ff88' },
    { title: 'MongoDB Developer', issuer: 'Infosys', year: '2021', color: '#00ed64' },
    { title: 'Node.js Professional', issuer: 'Infosys', year: '2021', color: '#68a063' },
    { title: 'Angular Professional', issuer: 'Infosys', year: '2021', color: '#dd0031' },
    { title: 'React Professional', issuer: 'Infosys', year: '2021', color: '#61dafb' },
    { title: 'Azure AI Fundamentals', issuer: 'Microsoft', year: '2021', color: '#0078d4' },
    { title: 'Azure Data Fundamentals', issuer: 'Microsoft', year: '2021', color: '#0078d4' },
    { title: 'Azure Fundamentals', issuer: 'Microsoft', year: '2021', color: '#0078d4' },
    { title: 'React Web Development', issuer: 'HKUST', year: '2020', color: '#61dafb' },
    { title: 'React Native Development', issuer: 'HKUST', year: '2020', color: '#61dafb' },
    { title: 'UI Design', issuer: 'U of Minnesota', year: '2020', color: '#7a0019' },
    { title: 'Digital Marketing', issuer: 'Google', year: '2020', color: '#4285f4' },
  ]

  return (
    <section id="certifications" ref={ref} style={{ minHeight: '100vh', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ fontSize: '1rem', color: '#00d4ff', marginBottom: '1rem', fontFamily: 'monospace' }}>
            {'<certifications>'}
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #fff, #00ff88)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Certifications
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '1rem' }}>
            20+ professional certifications across AWS, Azure, AI/ML, and Full-Stack Development
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                border: `1px solid ${cert.color}40`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: '0.8rem',
                right: '0.8rem',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#00ff88',
                boxShadow: '0 0 10px #00ff88',
              }} />
              <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.8rem', fontWeight: 'bold' }}>
                {cert.title}
              </h4>
              <p style={{ fontSize: '0.9rem', color: cert.color, marginBottom: '0.5rem' }}>
                {cert.issuer}
              </p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
