import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Frontend',
      color: '#00d4ff',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'React Native', level: 92 },
        { name: 'TypeScript', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'Next.js', level: 88 },
        { name: 'Redux', level: 90 },
      ],
    },
    {
      title: 'Backend',
      color: '#00ff88',
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Express.js', level: 92 },
        { name: 'REST APIs', level: 95 },
        { name: 'Microservices', level: 88 },
        { name: 'WebSockets', level: 85 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      color: '#ff9900',
      skills: [
        { name: 'AWS (ECS, Lambda, S3)', level: 90 },
        { name: 'Terraform/CDKTF', level: 88 },
        { name: 'Docker', level: 92 },
        { name: 'Kubernetes', level: 85 },
        { name: 'CI/CD Pipelines', level: 90 },
        { name: 'Azure DevOps', level: 82 },
      ],
    },
    {
      title: 'Database',
      color: '#4db33d',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'DynamoDB', level: 80 },
        { name: 'Redis', level: 85 },
      ],
    },
    {
      title: 'AI & Python',
      color: '#ff6b9d',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'OpenAI APIs', level: 88 },
        { name: 'ML Algorithms', level: 80 },
        { name: 'Streamlit', level: 85 },
      ],
    },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ fontSize: '1rem', color: '#00d4ff', marginBottom: '1rem', fontFamily: 'monospace' }}>
            {'<skills>'}
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fff, #00ff88)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Technical Skills
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: `1px solid ${category.color}40`,
              }}
            >
              <h3 style={{ fontSize: '1.5rem', color: category.color, marginBottom: '1.5rem', fontWeight: 'bold' }}>
                {category.title}
              </h3>
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#fff', fontSize: '0.95rem' }}>{skill.name}</span>
                    <span style={{ color: category.color, fontSize: '0.85rem' }}>{skill.level}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: idx * 0.2 + skillIdx * 0.1 }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${category.color}, ${category.color}aa)`,
                        borderRadius: '10px',
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
