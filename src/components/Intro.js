import React from 'react'
import { motion } from 'framer-motion'
import ProfileImage from '../images/profile.jpeg'

const Intro = ({ close, article, articleTimeout }) => {
  return (
    <article
      id="intro"
      className={`${article === 'intro' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none', textAlign: 'center' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="major">Intro</h2>
        <motion.span
          className="image profile"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={ProfileImage} alt="Swaroop A.S" />
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
            Full Stack Developer | DevOps Enthusiast | Cloud Learner
          </h3>
          <p>
            Passionate Full Stack Developer with expertise in React, React Native, Node.js, and Angular.
            Currently working at Activate Interactive in Singapore, I specialize in building scalable
            web and mobile applications while embracing DevOps practices and cloud technologies.
          </p>
          <p>
            With certifications from Infosys and Microsoft Azure, I bring a comprehensive approach
            to modern software development. I'm a strong believer in servant leadership and agile
            methodologies, always focused on delivering high-quality, bug-free products.
          </p>
          <p>
            Tech enthusiast passionate about emerging technologies, from AI agents to full-duplex
            communication systems. Recent work includes developing "MyTutor", a personalized AI
            tutoring system using AWS Bedrock for the AWS AI Agent Global Hackathon.
          </p>
        </motion.div>
      </motion.div>
      {close}
    </article>
  )
}

export default Intro
