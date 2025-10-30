import React from 'react'
import { motion } from 'framer-motion'

const Certifications = ({ close, article, articleTimeout }) => {
  const certifications = [
    {
      title: 'Microsoft Certified Azure Developer Associate',
      issuer: 'Microsoft',
      date: 'March 2022',
      status: 'Expired March 2023',
      category: 'Cloud',
    },
    {
      title: 'Infosys Certified MongoDB Developer',
      issuer: 'Infosys',
      date: 'October 2021',
      status: 'Active',
      category: 'Database',
    },
    {
      title: 'Infosys Certified Node.js Professional',
      issuer: 'Infosys',
      date: 'October 2021',
      status: 'Active',
      category: 'Backend',
    },
    {
      title: 'Infosys Certified Angular Professional',
      issuer: 'Infosys',
      date: 'August 2021',
      status: 'Active',
      category: 'Frontend',
    },
    {
      title: 'Infosys Certified React Professional',
      issuer: 'Infosys',
      date: 'August 2021',
      status: 'Active',
      category: 'Frontend',
    },
    {
      title: 'HackerRank React (Basic)',
      issuer: 'HackerRank',
      date: 'January 2021',
      status: 'Active',
      category: 'Frontend',
    },
    {
      title: 'Front-End Web Development with React',
      issuer: 'HKUST (Coursera)',
      date: 'June 2020',
      status: 'Active',
      category: 'Frontend',
    },
    {
      title: 'Multiplatform Mobile App Development with React Native',
      issuer: 'HKUST (Coursera)',
      date: 'June 2020',
      status: 'Active',
      category: 'Mobile',
    },
    {
      title: 'Introduction to UI Design',
      issuer: 'University of Minnesota',
      date: 'May 2020',
      status: 'Active',
      category: 'Design',
    },
    {
      title: 'Fundamentals of Digital Marketing',
      issuer: 'Google Digital Garage',
      date: 'April 2020',
      status: 'Active',
      category: 'Marketing',
    },
  ]

  const getCategoryColor = (category) => {
    const colors = {
      Cloud: 'rgba(0, 150, 255, 0.2)',
      Frontend: 'rgba(0, 200, 100, 0.2)',
      Backend: 'rgba(255, 150, 0, 0.2)',
      Database: 'rgba(150, 0, 255, 0.2)',
      Mobile: 'rgba(255, 0, 150, 0.2)',
      Design: 'rgba(255, 200, 0, 0.2)',
      Marketing: 'rgba(0, 255, 200, 0.2)',
    }
    return colors[category] || 'rgba(255, 255, 255, 0.1)'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const certVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <article
      id="certifications"
      className={`${article === 'certifications' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="major">Certifications</h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: '2rem' }}
        >
          Continuous learning and professional development through industry-recognized
          certifications and courses.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={certVariants}
              style={{
                padding: '1.2rem',
                backgroundColor: getCategoryColor(cert.category),
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.8rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '0.2rem 0.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                  }}
                >
                  {cert.category}
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '0.2rem 0.5rem',
                    backgroundColor:
                      cert.status === 'Active'
                        ? 'rgba(0, 255, 0, 0.2)'
                        : 'rgba(255, 150, 0, 0.2)',
                    borderRadius: '4px',
                  }}
                >
                  {cert.status}
                </span>
              </div>

              <h4 style={{ margin: 0, marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                {cert.title}
              </h4>

              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '0.3rem',
                }}
              >
                {cert.issuer}
              </p>

              <p
                style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  margin: 0,
                }}
              >
                {cert.date}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: 'rgba(0, 150, 255, 0.1)',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            <strong>10 Professional Certifications</strong> covering Full-Stack Development,
            Cloud Technologies, and Design
          </p>
        </motion.div>
      </motion.div>
      {close}
    </article>
  )
}

export default Certifications
