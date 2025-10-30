import React from 'react'
import { motion } from 'framer-motion'

const About = ({ close, article, articleTimeout }) => {
  const skills = {
    frontend: ['React', 'React Native', 'Angular', 'JavaScript/TypeScript', 'HTML5/CSS3'],
    backend: ['Node.js', 'MongoDB', 'REST APIs', 'GraphQL'],
    devops: ['AWS', 'Azure', 'Docker', 'Jenkins', 'Git'],
    languages: ['Tamil (Native)', 'English (Fluent)', 'Hindi', 'Malayalam', 'French'],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <article
      id="about"
      className={`${article === 'about' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="major">About Me</h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            Based in <strong>Singapore</strong>, I'm a passionate technologist with a comprehensive background
            in full-stack development, cloud technologies, and DevOps practices. With 500+ LinkedIn connections
            and 1K+ followers, I actively engage with the tech community and share insights on modern software
            development.
          </p>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Education</h3>
          <p>
            <strong>Bachelor's Degree in Engineering</strong><br />
            Mohamed Sathak A.J. College of Engineering (Anna University)<br />
            2015 - 2019<br />
            <em>Best Innovator Award & Best Student Award</em>
          </p>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Technical Skills</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} style={{ marginBottom: '1rem' }}>
              <strong>Frontend Development:</strong>
              <div style={{ marginTop: '0.5rem' }}>
                {skills.frontend.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      display: 'inline-block',
                      padding: '0.3rem 0.7rem',
                      margin: '0.2rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} style={{ marginBottom: '1rem' }}>
              <strong>Backend & Database:</strong>
              <div style={{ marginTop: '0.5rem' }}>
                {skills.backend.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      display: 'inline-block',
                      padding: '0.3rem 0.7rem',
                      margin: '0.2rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} style={{ marginBottom: '1rem' }}>
              <strong>Cloud & DevOps:</strong>
              <div style={{ marginTop: '0.5rem' }}>
                {skills.devops.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      display: 'inline-block',
                      padding: '0.3rem 0.7rem',
                      margin: '0.2rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} style={{ marginBottom: '1rem' }}>
              <strong>Languages:</strong>
              <div style={{ marginTop: '0.5rem' }}>
                {skills.languages.map((lang, index) => (
                  <span
                    key={index}
                    style={{
                      display: 'inline-block',
                      padding: '0.3rem 0.7rem',
                      margin: '0.2rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Philosophy</h3>
          <p>
            I'm a strong advocate for <strong>servant leadership</strong>, believing that the best results
            come from empowering and supporting team members. I'm passionate about agile methodologies,
            clean code, and continuous learning in the ever-evolving tech landscape.
          </p>

          <p>
            Recent achievements include participating in the <strong>AWS AI Agent Global Hackathon</strong> and
            contributing to innovative solutions in AI and full-duplex communication systems. I've also
            published research papers on predictive sentiment analysis and 6G internet technologies.
          </p>
        </motion.div>
      </motion.div>
      {close}
    </article>
  )
}

export default About
