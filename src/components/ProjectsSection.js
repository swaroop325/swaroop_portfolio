import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'CLOUDBOX',
      client: 'Activate Interactive',
      description: 'Infrastructure provisioning portal with CDKTF. Deploys complex IM8-compliant secure infrastructure in under 30 minutes with prebuilt blueprints.',
      tech: ['CDKTF', 'Terraform', 'AWS', 'Web Portal'],
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      featured: true,
    },
    {
      title: 'AI Talent Portal',
      client: 'Activate Interactive',
      description: 'AI-powered recruitment system reducing manual CV screening time by 60%. Leverages OpenAI APIs for intelligent candidate matching.',
      tech: ['Python', 'Streamlit', 'OpenAI API', 'AI/ML'],
      gradient: 'linear-gradient(135deg, #ff6b9d, #ff9966)',
      featured: true,
    },
    {
      title: 'CRISP',
      client: 'Ministry of Manpower',
      description: 'Employment tracking system serving citizens. Cloud provisioning platform with secure blueprints and architecture mentorship.',
      tech: ['React.js', 'Node.js', 'AWS', 'GitLab CI/CD'],
      gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    },
    {
      title: 'Healthy365',
      client: 'Health Promotion Board',
      description: 'National health tracking mobile application serving over 2 million active users with React Native and Node.js microservices.',
      tech: ['React Native', 'TypeScript', 'Node.js', 'Microservices'],
      gradient: 'linear-gradient(135deg, #00ff88, #00d4ff)',
    },
    {
      title: 'SHARE',
      client: 'Singapore Prison Services',
      description: 'Rehabilitation management system with 99.9% uptime. React Portal and React Native application with DevOps leadership.',
      tech: ['React', 'React Native', 'Node.js MVC', 'DevOps'],
      gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    },
    {
      title: 'SGSecure',
      client: 'Ministry of Home Affairs',
      description: 'National security reporting platform. Led team of 4+ developers delivering critical infrastructure.',
      tech: ['React.js', 'Node.js', 'AWS'],
      gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    },
    {
      title: 'HTX MVX',
      client: 'Home Team Science & Technology',
      description: 'Law enforcement communication platform integrating AWS Connect and Lambda for secure government operations.',
      tech: ['React.js', 'Node.js', 'AWS Lambda', 'AWS Connect'],
      gradient: 'linear-gradient(135deg, #667eea, #00d4ff)',
    },
    {
      title: 'CarePlixVitals SDK',
      client: 'CarePlix',
      description: 'WhiteLabel health monitoring SDK library. Native iOS/Android SDK with PPG signal processing achieving 85% accuracy.',
      tech: ['Native SDK', 'PPG Processing', 'iOS', 'Android'],
      gradient: 'linear-gradient(135deg, #4facfe, #00ff88)',
    },
  ]

  return (
    <section id="projects" ref={ref} style={{ minHeight: '100vh', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ fontSize: '1rem', color: '#00d4ff', marginBottom: '1rem', fontFamily: 'monospace' }}>
            {'<projects>'}
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #fff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Projects
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: project.gradient }} />
              {project.featured && (
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.3rem 0.8rem',
                  background: 'rgba(0, 212, 255, 0.2)',
                  border: '1px solid #00d4ff',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  color: '#00d4ff',
                  fontWeight: 'bold',
                }}>
                  FEATURED
                </span>
              )}
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', marginTop: project.featured ? '2rem' : '0' }}>
                {project.title}
              </h3>
              {project.client && (
                <p style={{ color: '#00d4ff', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '600' }}>
                  {project.client}
                </p>
              )}
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{
                    padding: '0.4rem 0.8rem',
                    background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    color: '#00d4ff',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
