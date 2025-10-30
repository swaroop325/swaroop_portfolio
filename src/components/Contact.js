import React from 'react'
import { motion } from 'framer-motion'

const Contact = ({ close, article, articleTimeout }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <article
      id="contact"
      className={`${article === 'contact' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none', textAlign: 'center' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="major">Contact</h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: '2rem' }}
        >
          Let's connect! Find me on these platforms:
        </motion.p>

        <motion.ul
          className="icons"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={iconVariants} whileHover={{ scale: 1.2, rotate: 5 }}>
            <a
              href="https://www.linkedin.com/in/swaroop-as"
              className="icon fa-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">LinkedIn</span>
            </a>
          </motion.li>
          <motion.li variants={iconVariants} whileHover={{ scale: 1.2, rotate: -5 }}>
            <a
              href="https://github.com/swaroop325"
              className="icon fa-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">GitHub</span>
            </a>
          </motion.li>
          <motion.li variants={iconVariants} whileHover={{ scale: 1.2, rotate: 5 }}>
            <a
              href="https://stackoverflow.com/users/9311651/swaroop"
              className="icon fa-stack-overflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">Stack Overflow</span>
            </a>
          </motion.li>
          <motion.li variants={iconVariants} whileHover={{ scale: 1.2, rotate: -5 }}>
            <a
              href="https://twitter.com/swaroop26390917"
              className="icon fa-twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">Twitter</span>
            </a>
          </motion.li>
          <motion.li variants={iconVariants} whileHover={{ scale: 1.2, rotate: 5 }}>
            <a
              href="https://www.instagram.com/swaroop_a.s"
              className="icon fa-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">Instagram</span>
            </a>
          </motion.li>
          <motion.li variants={iconVariants} whileHover={{ scale: 1.2, rotate: -5 }}>
            <a
              href="https://www.facebook.com/A.S.SWAROOP/"
              className="icon fa-facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">Facebook</span>
            </a>
          </motion.li>
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            marginTop: '3rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ marginBottom: '1rem' }}>Based in Singapore</h3>
          <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)' }}>
            Open to opportunities in Full-Stack Development, DevOps, and Cloud Technologies
          </p>
        </motion.div>
      </motion.div>
      {close}
    </article>
  )
}

export default Contact
