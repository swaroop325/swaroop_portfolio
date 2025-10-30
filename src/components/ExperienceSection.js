import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
      role: 'Senior Application Consultant',
      period: 'May 2022 - Present',
      location: 'Singapore',
      description: 'Promoted to Senior within 18 months. Solutions Architect for government projects including CLOUDBOX, AI Talent Portal, MVX (MHA), CPF DevOps, and CRISP (MOM).',
      achievements: [
        'CLOUDBOX Solutions Architect - CDKTF infrastructure provisioning in <30 minutes',
        'AI Talent Portal Engineer - 60% reduction in CV screening time',
        'Tech Lead for SG Secure (MHA) - mentored 4+ developers',
        'Solution Architect for CRISP (MOM) - mentored 2 Tech Leads',
        'DevOps Engineer for CPF Board - architected CI/CD pipelines',
        'Co-led SHARE HTX team of 4 - 99.9% uptime',
        'Maintained Healthy365 serving 2M+ users',
        'Managed 20+ PR reviews monthly',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'CDKTF', 'Terraform', 'Docker', 'K8s', 'Python', 'AI/ML'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      company: 'Infosys Limited',
      logo: Infy,
      role: 'Associate Consultant',
      period: 'Jun 2021 - May 2022',
      location: 'Trivandrum, India',
      description: 'Enterprise software development for Samsung and HPE. Led testing team ensuring zero-defect deliverables.',
      achievements: [
        'API Blender for Samsung - 40% efficiency improvement',
        'Asset Management Tool for HPE - tracking 10K+ devices',
        'Led testing team of 3 members',
        'Zero defect handovers across 5+ projects',
        'Earned 4 professional certifications',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Angular', 'MongoDB', 'Azure DevOps'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      company: 'Craftveda Technology',
      logo: CFT,
      role: 'Tech Lead - Frontend',
      period: 'Jun 2020 - May 2021',
      location: 'Kolkata, India (Remote)',
      description: 'Promoted to Tech Lead in 4 months. Led R&D for patent-pending healthcare solutions.',
      achievements: [
        'Promoted to Tech Lead within 4 months',
        'Led team of 4 engineers - 3 production apps delivered',
        'Spearheaded 2 patent-pending healthcare solutions',
        'Developed PPG heart rate app - 85% accuracy vs clinical devices',
        'Built cross-platform SDK - 50% development time reduction',
        'Conducted 100+ code reviews',
        'Negotiated with 5+ clients for WhiteLabel SDK',
      ],
      technologies: ['React', 'React Native', 'TypeScript', 'Node.js', 'Ionic', 'Twilio', 'Flutter', 'Cordova'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      company: 'GoFrugal Technologies',
      logo: GFT,
      role: 'Member Technical Staff',
      period: 'Dec 2018 - Apr 2020',
      location: 'Chennai, India',
      description: 'Enterprise retail solutions development. CRM maintenance and testing automation.',
      achievements: [
        'Upgraded myDelight CRM React 0.16 to v16 - 40% performance boost',
        'Maintained myGoFrugal - 60% crash rate reduction',
        'Implemented 200+ automated test cases',
        'Mastered Cucumber, Capybara, Mocha frameworks',
      ],
      technologies: ['React', 'JavaScript', 'Cucumber', 'Capybara', 'Mocha', 'REST APIs'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
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
            5+ years building impactful solutions across government and enterprise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
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
                  gridTemplateColumns: exp.logo ? 'auto 1fr' : '1fr',
                  gap: '2rem',
                  alignItems: 'start',
                }}
              >
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
                      marginBottom: '1rem',
                    }}
                  >
                    {exp.description}
                  </p>

                  {exp.achievements && (
                    <ul
                      style={{
                        marginBottom: '1.5rem',
                        paddingLeft: '1.2rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.95rem',
                        lineHeight: '1.8',
                      }}
                    >
                      {exp.achievements.slice(0, 4).map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}

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
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
