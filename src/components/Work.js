import React from 'react'
import { motion } from 'framer-motion'
import GFT from '../images/gft.jpeg'
import CFT from '../images/cft.jpeg'
import Infy from '../images/infy.jpeg'

const Work = ({ close, article, articleTimeout }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <article
      id="work"
      className={`${article === 'work' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="major">Work Experience</h2>
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="lines">
            <div className="dot"></div>
            <div className="line connect"></div>
            <div className="dot promote"></div>
            <div className="line"></div>
            <div className="dot"></div>
            <div className="line connect"></div>
            <div className="dot promote"></div>
            <div className="line"></div>
            <div className="dot"></div>
            <div className="line connect"></div>
            <div className="dot promote"></div>
            <div className="line last"></div>
          </div>

          <div className="cards">
            <motion.div className="workBlock" variants={itemVariants}>
              <div>
                <span className="workTitle">Senior Developer</span>
                <span style={{ float: 'right' }}>Present</span>
              </div>
              <div>
                <span>Activate Interactive</span>
                <span style={{ float: 'right' }}>Singapore</span>
              </div>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Leading full-stack development initiatives, implementing modern web solutions
                with a focus on DevOps practices and cloud technologies.
              </p>
            </motion.div>

            <motion.div className="workBlock mid" variants={itemVariants}>
              <div>
                <span className="workTitle">Associate Consultant</span>
                <span style={{ float: 'right' }}>Jun 2021 - 2023</span>
              </div>
              <div>
                <span>
                  <img className="workImage" src={Infy} alt="Infosys" />
                </span>
                <span>Infosys Limited</span>
                <span style={{ float: 'right' }}>Trivandrum, India</span>
              </div>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Earned multiple certifications in React, Angular, Node.js, and MongoDB.
                Delivered enterprise-level solutions with focus on code quality and performance.
              </p>
            </motion.div>

            <motion.div className="workBlock mid" variants={itemVariants}>
              <div>
                <span className="workTitle">React JS Developer</span>
                <span style={{ float: 'right' }}>Jun 2020 - Nov 2020</span>
              </div>
              <div>
                <span className="workTitle">Tech Lead - Frontend Team</span>
                <span style={{ float: 'right' }}>Dec 2020 - May 2021</span>
              </div>
              <div>
                <span>
                  <img className="workImage" src={CFT} alt="Craftveda" />
                </span>
                <span>Craftveda Technology</span>
                <span style={{ float: 'right' }}>Kolkata, India (Remote)</span>
              </div>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Led frontend development team, architected React applications, and mentored
                junior developers in modern web development practices.
              </p>
            </motion.div>

            <motion.div className="workBlock last" variants={itemVariants}>
              <div>
                <span className="workTitle">Intern - Member Technical Staff</span>
                <span style={{ float: 'right' }}>Dec 2018 - Feb 2019</span>
              </div>
              <div>
                <span className="workTitle">Member Technical Staff</span>
                <span style={{ float: 'right' }}>Apr 2019 - Apr 2020</span>
              </div>
              <div>
                <span>
                  <img className="workImage" src={GFT} alt="GoFrugal" />
                </span>
                <span>GoFrugal Technologies</span>
                <span style={{ float: 'right' }}>Chennai, India</span>
              </div>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Started career developing enterprise retail solutions, working with React
                and building scalable web applications.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      {close}
    </article>
  )
}

export default Work
