import React from 'react'
import { motion } from 'framer-motion'
import ProfileImage from '../images/profile.jpeg'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        {/* Left Side - Text Content */}
        <motion.div variants={itemVariants}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '1rem',
              color: '#00d4ff',
              marginBottom: '1rem',
              fontFamily: 'monospace',
            }}
          >
            &lt;hello world&gt;
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2',
            }}
          >
            I'm Swaroop
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: '#00ff88',
              marginBottom: '1.5rem',
              fontWeight: '600',
            }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.8',
              marginBottom: '2rem',
              maxWidth: '600px',
            }}
          >
            <strong>5+ years</strong> building scalable, secure systems for <strong>Singapore government agencies</strong> and enterprise clients.
            <br />
            <span style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.5rem', display: 'block' }}>
              DevOps Enthusiast | AI Integration | Cloud Architecture | Servant Leader
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.5rem', display: 'block' }}>
              Aspiring Solution Architect empowering organizations at scale
            </span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #00d4ff, #00ff88)',
                border: 'none',
                borderRadius: '10px',
                color: '#0a0a19',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Get In Touch
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2rem',
                background: 'transparent',
                border: '2px solid #00d4ff',
                borderRadius: '10px',
                color: '#00d4ff',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: '3rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            {['React', 'Node.js', 'AWS', 'TypeScript', 'Python', 'Kubernetes', 'Terraform', 'AI/ML'].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    color: '#00d4ff',
                  }}
                >
                  {tech}
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '400px',
            }}
          >
            {/* Glowing Background */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3), transparent)',
                filter: 'blur(40px)',
                zIndex: -1,
              }}
            />

            {/* Image Container */}
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                padding: '0.5rem',
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(0, 255, 136, 0.3))',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(0, 212, 255, 0.5)',
              }}
            >
              <img
                src={ProfileImage}
                alt="Swaroop A.S"
                style={{
                  width: '100%',
                  borderRadius: '15px',
                  display: 'block',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '30px',
            height: '50px',
            border: '2px solid rgba(0, 212, 255, 0.5)',
            borderRadius: '20px',
            position: 'relative',
          }}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: '6px',
              height: '10px',
              background: '#00d4ff',
              borderRadius: '3px',
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
