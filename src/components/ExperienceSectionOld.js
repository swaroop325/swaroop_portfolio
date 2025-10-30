import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import GFT from '../images/gft.jpeg'
import CFT from '../images/cft.jpeg'
import Infy from '../images/infy.jpeg'
import ACT from '../images/activate.jpeg'

const ExperienceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: 'Activate Interactive',
      logo: ACT,
      role: 'Senior Developer',
      period: 'Present',
      location: 'Singapore',
      description:
        'Leading full-stack development initiatives, implementing modern web solutions with a focus on DevOps practices and cloud technologies.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'DevOps'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      company: 'Infosys Limited',
      logo: Infy,
      role: 'Associate Consultant',
      period: 'Jun 2021 - 2023',
      location: 'Trivandrum, India',
      description:
        'Earned multiple certifications in React, Angular, Node.js, and MongoDB. Delivered enterprise-level solutions with focus on code quality and performance.',
      technologies: ['React', 'Angular', 'Node.js', 'MongoDB', 'Azure'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      company: 'Craftveda Technology',
      logo: CFT,
      role: 'Tech Lead - Frontend',
      period: 'Dec 2020 - May 2021',
      location: 'Kolkata, India (Remote)',
      description:
        'Led frontend development team, architected React applications, and mentored junior developers in modern web development practices.',
      technologies: ['React', 'Redux', 'TypeScript', 'Styled Components'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      company: 'GoFrugal Technologies',
      logo: GFT,
      role: 'Member Technical Staff',
      period: 'Apr 2019 - Apr 2020',
      location: 'Chennai, India',
      description:
        'Developed enterprise retail solutions, working with React and building scalable web applications.',
      technologies: ['React', 'JavaScript', 'REST APIs', 'MySQL'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <motion.div
            style={{
              fontSize: '1rem',
              color: '#00d4ff',
              marginBottom: '1rem',
              fontFamily: 'monospace',
            }}
          >
            {'<experience>'}
          </motion.div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Work Experience
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Building innovative solutions across different companies and domains
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            position: 'relative',
          }}
        >
          {/* Vertical Line */}
          <div
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(180deg, #00d4ff, #00ff88)',
              display: 'none',
            }}
            className="timeline-line"
          />

          <div
            style={{
              display: 'grid',
              gap: '2rem',
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  position: 'relative',
                  padding: '2rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                {/* Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: exp.gradient,
                  }}
                />

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: '2rem',
                    alignItems: 'start',
                  }}
                >
                  {/* Logo */}
                  {exp.logo && (
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '15px',
                        overflow: 'hidden',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        marginBottom: '0.5rem',
                        flexWrap: 'wrap',
                        gap: '1rem',
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: '#fff',
                            marginBottom: '0.5rem',
                          }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          style={{
                            fontSize: '1.1rem',
                            color: '#00d4ff',
                            fontWeight: '600',
                          }}
                        >
                          {exp.company}
                        </p>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <p
                          style={{
                            fontSize: '0.9rem',
                            color: 'rgba(255, 255, 255, 0.7)',
                          }}
                        >
                          {exp.period}
                        </p>
                        <p
                          style={{
                            fontSize: '0.85rem',
                            color: 'rgba(255, 255, 255, 0.5)',
                          }}
                        >
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: '1rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: '1.6',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                      }}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          style={{
                            padding: '0.4rem 0.8rem',
                            background: 'rgba(0, 212, 255, 0.1)',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                            borderRadius: '8px',
                            fontSize: '0.85rem',
                            color: '#00d4ff',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .timeline-line {
            display: block !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ExperienceSection
