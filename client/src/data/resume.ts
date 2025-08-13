export interface Education {
  id: string;
  institution: string;
  degree: string;
  grade: string;
  year: string;
  icon: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  technologies: string[];
  achievements: string[];
  difficulty: number;
  icon: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
}

export const education: Education[] = [
  {
    id: 'vjti',
    institution: 'Veermata Jijabai Technological Institute (VJTI), Matunga',
    degree: 'B.Tech in Electronics and Telecommunication',
    grade: '8.74 CGPA',
    year: '2022 - 2026',
    icon: '🏰'
  },
  {
    id: 'matrix',
    institution: 'Matrix Academy, Virar',
    degree: 'All India Senior School Certificate Examination (CBSE) - Class 12',
    grade: '94.8%',
    year: '2021',
    icon: '🎓'
  },
  {
    id: 'muljibhai',
    institution: 'Muljibhai Mehta International School, Virar',
    degree: 'All India Senior School Examination (CBSE) - Class 10',
    grade: '98.4%',
    year: '2019',
    icon: '🏫'
  }
];

export const experience: Experience[] = [
  {
    id: 'cv-intern',
    title: 'Computer Vision Intern - Research',
    company: 'Electrical: Modeling, Computation, and Control Lab - VJTI',
    location: 'Mumbai, Maharashtra',
    period: 'May 2025 – July 2025',
    description: [
      'Independently developed a low-latency robotic arm replicating human arm movement via CV',
      'Deployed the system on the edge using Docker for portability',
      'Optimized the processing pipeline for real-time performance and minimal delay'
    ],
    skills: ['Computer Vision', 'Docker', 'Real-time Processing', 'Robotics', 'Python'],
    icon: '👁'
  },
  {
    id: 'ieee',
    title: 'Web Development Executive',
    company: 'IEEE - VJTI',
    location: 'Mumbai',
    period: 'Winter 2024 – Present',
    description: [
      'Leading web development initiatives for IEEE student chapter',
      'Collaborating with cross-functional teams to deliver engaging digital experiences',
      'Implementing modern web technologies and best practices'
    ],
    skills: ['Web Development', 'React', 'JavaScript', 'Team Leadership'],
    icon: '🌏︎'
  }
];

export const projects: Project[] = [
  {
    id: 'news-analysis',
    title: 'News Analysis Interface',
    description: 'Built and deployed a Gradio-based LLM app for company-based live news analysis',
    period: 'March 2025',
    technologies: ['Python', 'Gradio', 'Hugging Face', 'Transformers', 'NLP', 'Pipelines'],
    achievements: [
      'Implemented sentiment analysis for real-time news processing',
      'Added translation capabilities for multi-language support',
      'Integrated text-to-speech (TTS) functionality'
    ],
    difficulty: 3,
    icon: '/assets/projects/news-analysis.avif'
  },
  {
    id: 'personal-website',
    title: 'Personal Website Design',
    description: 'Deployed a portfolio website on GitHub Pages with React',
    period: 'November 2024',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
    achievements: [
      'Created responsive design with modern UI/UX principles',
      'Implemented smooth animations and transitions',
      'Deployed using GitHub Pages for public access'
    ],
    difficulty: 2,
    icon: '/assets/projects/webdev.jpg'
  },
  {
    id: 'zomato-analysis',
    title: 'Zomato Data Deep Dive',
    description: 'Analyzed 30K+ transactions to uncover customer behavior',
    period: 'December 2023',
    technologies: ['Python', 'Tableau', 'SQLite', 'Excel'],
    achievements: [
      'Processed and analyzed over 30,000 transaction records',
      'Identified geo-spatial patterns in customer behavior',
      'Built predictive models using regression analysis',
      'Created interactive dashboards for data visualization'
    ],
    difficulty: 5,
    icon: '/assets/projects/zomato.png'
  },
  {
    id: 'bcg-simulation',
    title: 'BCG Data Science Simulation',
    description: 'Predicted customer churn to enhance retention strategies',
    period: 'October 2024',
    technologies: ['Python', 'Tableau', 'Excel'],
    achievements: [
      'Developed predictive models for customer churn analysis',
      'Created comprehensive dashboards for stakeholder presentations',
      'Applied advanced statistical techniques for data insights'
    ],
    difficulty: 4,
    icon: '/assets/projects/data-science.png'
  },
  {
    id: 'quantium-analytics',
    title: 'Quantium Data Analytics Simulation',
    description: 'Performed transaction analysis with dashboards and A/B testing',
    period: 'February 2024',
    technologies: ['Python', 'Tableau', 'Excel'],
    achievements: [
      'Analyzed transaction patterns and customer behavior',
      'Conducted A/B testing for business optimization',
      'Crafted informative presentations for stakeholders'
    ],
    difficulty: 3,
    icon: '/assets/projects/ab-test.png'
  },
];

export const certifications: Certification[] = [
  {
    id: 'aws-fundamentals',
    name: 'AWS Fundamentals Certificate',
    issuer: 'Amazon Web Services',
    date: 'January 2025',
    description: 'Mastered cloud computing fundamentals and AWS core services',
    icon: '/assets/certificates/aws.png'
  },
  {
    id: 'devops-aws',
    name: 'DevOps with AWS Specialization',
    issuer: 'Amazon Web Services',
    date: 'January 2025',
    description: 'Advanced DevOps practices and AWS deployment strategies',
    icon: '/assets/certificates/aws.png'
  },
  {
    id: 'godrej-robotics',
    name: 'Godrej Robotics and Automation Training Program',
    issuer: 'Godrej',
    date: 'November 2024',
    description: 'Robotics and Automation principles and applications',
    icon: '/assets/certificates/godrej.png'
  },
  {
    id: 'google-advanced-data',
    name: 'Google Advanced Data Analysis Specialization',
    issuer: 'Google',
    date: 'December 2024',
    description: 'Advanced statistical analysis and data visualization techniques',
    icon: '/assets/certificates/google.png'
  },
  {
    id: 'google-bi',
    name: 'Google Business Intelligence Certificate',
    issuer: 'Google',
    date: 'November 2023',
    description: 'Business intelligence and dashboard creation expertise',
    icon: '/assets/certificates/google.png'
  },
  {
    id: 'ibm-eda',
    name: 'IBM EDA for Machine Learning',
    issuer: 'IBM',
    date: 'August 2023',
    description: 'Exploratory Data Analysis techniques for machine learning',
    icon: '/assets/certificates/ibm.png'
  },
  {
    id: 'google-data-analysis',
    name: 'Google Data Analysis Specialization',
    issuer: 'Google',
    date: 'August 2023',
    description: 'Comprehensive data analysis and visualization skills',
    icon: '/assets/certificates/google.png'
  }
];

export const personalInfo = {
  name: 'Sara Nimje',
  title: 'Electronics & Telecommunication Engineer',
  location: 'Mumbai, Maharashtra',
  phone: '+91-9890738328',
  email: 'ssnimje.b22@et.vjti.ac.in',
  linkedin: 'https://linkedin.com/in/sara-nimje',
  github: 'https://github.com/saranimje',
  bio: 'A brave knight embarking on quests through the realms of Computer Vision, Data Science, and Web Development. Armed with Python, wielding Docker, and protected by the shields of AWS.',
  skills: {
    languages: ['Python', 'C++', 'HTML/CSS', 'JavaScript'],
    tools: ['Docker', 'AWS', 'Git', 'Linux'],
    technologies: ['GitHub', 'Tableau', 'React', 'Machine Learning']
  }
};
