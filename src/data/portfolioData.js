// Centralized portfolio data
export const professionalSummary = `Senior Full-Stack Engineer with 5+ years building scalable, secure systems for Singapore government agencies and enterprise clients. Integrate AI, DevOps, and cloud architecture to deliver impactful solutions. Embrace Servant Leadership approach and mentoring teams to achieve technical excellence.`

export const experiences = [
  {
    company: 'Activate Interactive',
    role: 'Senior Application Consultant',
    period: 'May 2022 - Present',
    location: 'Singapore',
    positions: [
      {
        title: 'Senior Application Consultant',
        period: 'Oct 2023 - Present',
        achievements: [
          'Solutions Architect for CLOUDBOX - CDKTF infrastructure provisioning in <30 min',
          'AI Engineer for Talent Portal - 60% reduction in CV screening time',
          'Tech Lead for MVX - Ministry of Home Affairs',
          'DevOps Engineer for CPF Board - Architected CI/CD pipelines',
          'Solution Architect for CRISP - Ministry of Manpower, mentored 2 Tech Leads',
          'Tech Lead for SG Secure - National security platform, mentored 4+ developers',
        ]
      },
      {
        title: 'Application Consultant',
        period: 'May 2023 - Sep 2023',
        achievements: [
          'Co-led team of 4 for SHARE HTX - Singapore Prison Service',
          'Delivered React/Node.js platform with 99.9% uptime',
          'Led DevOps for 5-member team, managed 20+ PR reviews monthly',
        ]
      },
      {
        title: 'Application Consultant - Contract',
        period: 'May 2022 - Apr 2023',
        achievements: [
          'Maintained Healthy365 - Health Promotion Board serving 2M+ users',
          'React TypeScript, Node.js Microservices architecture',
        ]
      }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'CDKTF', 'Terraform', 'Docker', 'Kubernetes', 'Python', 'AI/ML'],
  },
  {
    company: 'Infosys Limited',
    role: 'Associate Consultant',
    period: 'Jun 2021 - May 2022',
    location: 'Trivandrum, India',
    achievements: [
      'API Blender for Samsung - 40% efficiency improvement',
      'Asset Management Tool for HPE - tracking 10K+ devices',
      'Led testing team of 3 members',
      'Zero defect product handovers across 5+ deliverables',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Angular', 'MongoDB', 'Azure'],
  },
  {
    company: 'CarePlix',
    role: 'Freelance Consultant (Part-Time)',
    period: 'Jun 2021 - Mar 2022',
    location: 'Remote',
    achievements: [
      'Resolved 20+ high-level blockers',
      'Conducted 25+ technical interviews - 80% hire rate',
      'Architected frontend solutions and CI/CD pipelines',
      'Performed 200+ PR reviews',
    ],
    technologies: ['React', 'React Native', 'Node.js', 'CI/CD'],
  },
  {
    company: 'Craftveda Technology',
    role: 'Tech Lead - Frontend',
    period: 'Jun 2020 - May 2021',
    location: 'Kolkata, India (Remote)',
    positions: [
      {
        title: 'Tech Lead - Frontend',
        period: 'Oct 2020 - May 2021',
        note: 'Promoted within 4 months',
        achievements: [
          'Led team of 4 engineers delivering 3 production apps',
          'Spearheaded R&D for 2 patent-pending healthcare solutions',
          'Developed PPG heart rate measurement app - 85% accuracy vs clinical devices',
          'Negotiated with 5+ clients for WhiteLabel SDK',
        ]
      },
      {
        title: 'React.js Developer',
        period: 'Jun 2020 - Oct 2020',
        achievements: [
          'Built 6+ React applications serving 1K+ daily users',
          'Integrated Twilio SDK',
          'Migrated tech stack from Ionic to React Native',
          'Conducted 100+ code reviews',
          'Built cross-platform mobile SDK - 50% development time reduction',
        ]
      }
    ],
    technologies: ['React', 'React Native', 'TypeScript', 'Ionic', 'Twilio', 'Flutter', 'Cordova'],
  },
  {
    company: 'GoFrugal Technologies',
    role: 'Member Technical Staff',
    period: 'Dec 2018 - Apr 2020',
    location: 'Chennai, India',
    achievements: [
      'Upgraded React 0.16 to v16 - 40% performance improvement',
      'Maintained myGoFrugal - 60% crash rate reduction',
      'Implemented 200+ automated test cases with Cucumber, Capybara, Mocha',
    ],
    technologies: ['React', 'JavaScript', 'Cucumber', 'Capybara', 'Mocha'],
  },
]

export const projects = [
  {
    title: 'CLOUDBOX',
    client: 'Activate Interactive',
    description: 'Infrastructure provisioning portal with secure IM8 compliant blueprints. Provisions complex infrastructure in <30 minutes.',
    technologies: ['CDKTF', 'Terraform', 'Web Portal', 'IM8 Compliance'],
    featured: true,
  },
  {
    title: 'AI Talent Portal',
    client: 'Activate Interactive',
    description: 'HR management with AI insights. Reduced CV screening time by 60%.',
    technologies: ['Python', 'Streamlit', 'OpenAI API'],
    featured: true,
  },
  {
    title: 'CRISP',
    client: 'Ministry of Manpower',
    description: 'Employment tracking system serving citizens. Cloud provisioning platform.',
    technologies: ['React.js', 'Node.js', 'AWS', 'GitLab CI/CD'],
  },
  {
    title: 'Healthy365',
    client: 'Health Promotion Board',
    description: 'Health tracking mobile application serving 2M+ users.',
    technologies: ['React Native', 'Node.js Microservices', 'AWS'],
  },
  {
    title: 'SHARE',
    client: 'Singapore Prison Services',
    description: 'Rehabilitation management system with 99.9% uptime.',
    technologies: ['React Portal', 'React Native', 'Node.js MVC'],
  },
  {
    title: 'HTX MVX',
    client: 'Home Team Science & Technology',
    description: 'Law enforcement communication platform.',
    technologies: ['React.js', 'Node.js', 'AWS Lambda', 'AWS Connect'],
  },
  {
    title: 'SGSecure',
    client: 'Ministry of Home Affairs',
    description: 'National security reporting platform.',
    technologies: ['React.js', 'Node.js', 'AWS'],
  },
  {
    title: 'CarePlixVitals SDK',
    client: 'CarePlix',
    description: 'Health monitoring SDK library for whitelabel solutions.',
    technologies: ['Native iOS/Android SDK', 'PPG Signal Processing'],
  },
]

export const skills = {
  'Programming Languages': {
    color: '#61dafb',
    items: ['JavaScript', 'TypeScript', 'Python', 'Node.js', 'SQL', 'NoSQL', 'Bash']
  },
  'Frontend Development': {
    color: '#00d4ff',
    items: ['React.js', 'React Native', 'Angular', 'Next.js', 'HTML5/CSS3', 'SASS', 'Redux', 'MUI']
  },
  'Backend Development': {
    color: '#68a063',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'WebSockets', 'Microservices']
  },
  'DevOps & Cloud': {
    color: '#ff9900',
    items: ['AWS (ECS, S3, Lambda, RDS, EKS)', 'Azure DevOps', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']
  },
  'Database': {
    color: '#4db33d',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis', 'Knex.js', 'Sequelize']
  },
  'AI & Machine Learning': {
    color: '#ff6b9d',
    items: ['OpenAI APIs', 'ML Algorithms', 'Data Analysis', 'Streamlit']
  },
  'Tools & Methodologies': {
    color: '#00ff88',
    items: ['Git', 'Docker', 'Nginx', 'AWS CDK', 'TDD', 'Agile/Scrum', 'System Design']
  }
}

export const certifications = [
  { title: 'Professional Scrum Master™ I (PSM I)', issuer: 'Scrum.org', year: '2025', category: 'Leadership' },
  { title: 'GitLab CI Fundamentals', issuer: 'GitLab', year: '2025', category: 'DevOps' },
  { title: 'AWS Certified AI Practitioner', issuer: 'AWS', year: '2024-2027', category: 'Cloud' },
  { title: 'Machine Learning Specialization', issuer: 'Stanford University', year: '2024', category: 'AI/ML' },
  { title: 'ICT Assessment - Solution Architect', issuer: 'GovTech/NUS-ISS', year: '2024-2027', category: 'Architecture' },
  { title: 'AWS Certified Developer - Associate', issuer: 'AWS', year: '2024-2027', category: 'Cloud' },
  { title: 'AWS Certified Solutions Architect - Associate', issuer: 'AWS', year: '2024-2027', category: 'Cloud' },
  { title: 'AWS Certified Cloud Practitioner', issuer: 'AWS', year: '2023-2026', category: 'Cloud' },
  { title: 'ICT Assessment - Software Developer', issuer: 'GovTech/NUS-ISS', year: '2023', category: 'Development' },
  { title: 'Infosys Certified MongoDB Developer', issuer: 'Infosys', year: '2021', category: 'Database' },
  { title: 'Infosys Certified Node.js Professional', issuer: 'Infosys', year: '2021', category: 'Backend' },
  { title: 'Infosys Certified Angular Professional', issuer: 'Infosys', year: '2021', category: 'Frontend' },
  { title: 'Infosys Certified React Professional', issuer: 'Infosys', year: '2021', category: 'Frontend' },
  { title: 'Microsoft Azure AI Fundamentals', issuer: 'Microsoft', year: '2021', category: 'AI/ML' },
  { title: 'Microsoft Azure Data Fundamentals', issuer: 'Microsoft', year: '2021', category: 'Cloud' },
  { title: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', year: '2021', category: 'Cloud' },
  { title: 'Microsoft Security, Compliance & Identity', issuer: 'Microsoft', year: '2022', category: 'Security' },
  { title: 'Front-End Web Development with React', issuer: 'HKUST', year: '2020', category: 'Frontend' },
  { title: 'React Native Development', issuer: 'HKUST', year: '2020', category: 'Mobile' },
  { title: 'Introduction to UI Design', issuer: 'University of Minnesota', year: '2020', category: 'Design' },
  { title: 'Fundamentals of Digital Marketing', issuer: 'Google', year: '2020', category: 'Marketing' },
]

export const education = {
  degree: 'Bachelor of Engineering',
  field: 'Computer Science and Engineering',
  institution: 'Mohamed Sathak A.J College of Engineering',
  period: 'Aug 2015 - Mar 2019',
  location: 'Chennai, India',
  awards: ['Best Innovator Award', 'Best Student Award']
}

export const contact = {
  phone: '+65-84116034',
  email: 'swaroopanand325@gmail.com',
  website: 'swaroop.as',
  github: 'swaroop325',
  location: 'Singapore'
}
