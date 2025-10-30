import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/swaroop-as',
      icon: 'in',
      color: '#0077b5',
      description: 'Connect professionally'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/swaroop325',
      icon: 'gh',
      color: '#6cc644',
      description: 'View my code'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/swaroop26390917',
      icon: 'tw',
      color: '#1da1f2',
      description: 'Follow updates'
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/9311651/swaroop',
      icon: 'so',
      color: '#f48024',
      description: 'See contributions'
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem 4rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center' }}
        >
          <div style={{ fontSize: '1rem', color: '#00d4ff', marginBottom: '1rem', fontFamily: 'monospace' }}>
            {'<contact>'}
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Let's Connect
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '4rem',
            maxWidth: '600px',
            margin: '0 auto 4rem',
            lineHeight: '1.6'
          }}>
            Open to discussing new projects, opportunities, and collaborations
          </p>

          {/* Social Links */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                style={{
                  padding: '1.8rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: `2px solid ${link.color}50`,
                  borderRadius: '16px',
                  textDecoration: 'none',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Gradient overlay on hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${link.color}, transparent)`,
                }} />

                <div style={{
                  fontSize: '0.75rem',
                  color: link.color,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {link.icon}
                </div>
                <h3 style={{
                  color: '#fff',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  margin: 0
                }}>
                  {link.name}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '0.9rem',
                  margin: 0
                }}>
                  {link.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Location and Availability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            <div style={{
              padding: '1.5rem',
              background: 'rgba(0, 212, 255, 0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📍</div>
              <h4 style={{ color: '#00d4ff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Location</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>Singapore</p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'rgba(0, 255, 136, 0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(0, 255, 136, 0.2)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌏</div>
              <h4 style={{ color: '#00ff88', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Availability</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>Open to remote work</p>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.9rem'
            }}
          >
            <p>© 2025 Swaroop A.S. All rights reserved.</p>
            <p style={{ marginTop: '0.5rem' }}>
              Built with <span style={{ color: '#00d4ff' }}>Gatsby</span>, <span style={{ color: '#61dafb' }}>React</span> & <span style={{ color: '#00ff88' }}>Framer Motion</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
