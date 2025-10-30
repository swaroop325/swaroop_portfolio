import React from 'react'
import { motion } from 'framer-motion'

const Projects = ({ close, article, articleTimeout }) => {
  const projects = [
    {
      title: 'MyTutor',
      period: 'Recent - AWS AI Agent Global Hackathon',
      description:
        'Personalized AI tutor that learns how you learn. It studies your notes, videos, and PDFs, then teaches you in your own style using AWS Bedrock and agentic AI frameworks.',
      technologies: ['AWS Bedrock', 'Agentic AI', 'Machine Learning', 'NLP'],
      highlight: true,
    },
    {
      title: 'Dkscraps Mobile Application',
      period: 'December 2018',
      description:
        'A waste collection service enabling users to schedule pickups and receive compensation for recyclable materials. Developed as a solution to promote environmental sustainability.',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      highlight: false,
    },
    {
      title: 'Online Medical Healthcare System',
      period: 'December 2018 - April 2019',
      description:
        'Comprehensive healthcare management system enabling patients to book appointments, access medical records, and consult with doctors online.',
      technologies: ['React', 'Node.js', 'Express', 'MySQL'],
      highlight: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <article
      id="projects"
      className={`${article === 'projects' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="major">Projects</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              style={{
                marginBottom: '2rem',
                padding: '1.5rem',
                backgroundColor: project.highlight
                  ? 'rgba(0, 150, 255, 0.1)'
                  : 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                border: project.highlight
                  ? '1px solid rgba(0, 150, 255, 0.3)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem',
                  flexWrap: 'wrap',
                }}
              >
                <h3 style={{ margin: 0, marginBottom: '0.3rem' }}>
                  {project.title}
                </h3>
                {project.highlight && (
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      backgroundColor: 'rgba(0, 150, 255, 0.3)',
                      borderRadius: '12px',
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>

              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '1rem',
                }}
              >
                {project.period}
              </p>

              <p style={{ marginBottom: '1rem' }}>{project.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      fontSize: '0.8rem',
                      padding: '0.3rem 0.7rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
          }}
        >
          <h3>Research Publications</h3>
          <ul style={{ marginTop: '1rem', lineHeight: '1.8' }}>
            <li>
              <strong>
                "Predictive Sentimental Analysis for Depression Control and
                Motivation"
              </strong>
              <br />
              <em>
                International Journal of Recent Trends in Engineering &
                Research (June 2018)
              </em>
            </li>
            <li style={{ marginTop: '1rem' }}>
              <strong>
                "Full Duplex Radio-Wave Transmission for 6G Internet"
              </strong>
              <br />
              <em>
                International Journal of Recent Trends in Engineering &
                Research (July 2017)
              </em>
            </li>
          </ul>
        </motion.div>
      </motion.div>
      {close}
    </article>
  )
}

export default Projects
