export const CONTACT = {
  email: 'maivunhu66@gmail.com',
  emailHref: 'mailto:maivunhu66@gmail.com',
  linkedin: 'https://linkedin.com/in/pnmai-vu',
  // Placeholder until the real resume file is uploaded to /public
  resume: '/mai-vu-resume.pdf',
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO_METRICS = [
  { value: '15,000+', label: 'Shipment records analyzed' },
  { value: '85.4%', label: 'Model accuracy' },
  { value: '3rd', label: 'Place case competition' },
  { value: '30+', label: 'Students trained' },
] as const

export const ABOUT_FACTS = [
  { label: 'University', value: 'University of Illinois Chicago' },
  { label: 'Graduation', value: 'May 2028' },
  { label: 'GPA', value: '3.7 / 4.0' },
  {
    label: 'Interests',
    value: 'Business Analytics, Consulting, Financial Services, Operations',
  },
] as const

export type ExperienceItem = {
  role: string
  company: string
  location: string
  dates: string
  bullets: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'First-Year Student Peer Mentor',
    company: 'UIC Business',
    location: 'Chicago, Illinois',
    dates: 'August 2026 – Present',
    bullets: [
      'Support 100+ first-year business students through academic mentorship and hands-on Excel instruction, strengthening their analytical and problem-solving skills.',
      'Assist with BA 101 instruction by guiding students through Excel applications, coursework, and academic resources to strengthen classroom engagement and student success.',
    ],
  },
  {
    role: 'Logistics Analytics Intern',
    company: 'Nhat Tin Logistics',
    location: 'Ho Chi Minh City, Vietnam',
    dates: 'June 2026 – Present',
    bullets: [
      'Standardized and analyzed more than 15,000 shipment records using Excel, PivotTables, Power Query, and advanced functions.',
      'Developed executive dashboards and investigated the root causes of delivery delays.',
      'Presented KPI findings and process-improvement recommendations during management reviews.',
    ],
  },
  {
    role: 'Accounting Assistant Intern',
    company: 'Le Huy Printing Company',
    location: 'Ho Chi Minh City, Vietnam',
    dates: 'May 2025 – August 2025',
    bullets: [
      'Processed and reconciled more than 100 financial transactions using Excel and Bkav E-Receipt.',
      'Supported audit compliance, cash-flow monitoring, and weekly debt reconciliation.',
      'Validated outstanding balances and prepared financial reports.',
    ],
  },
]

export type Project = {
  id: string
  category: string
  title: string
  problem: string
  work: string
  recommendation: string
  result?: string
  tools: string[]
  metrics: string[]
  visual: 'dashboard' | 'strategy' | 'model'
}

export const PROJECTS: Project[] = [
  {
    id: 'logistics-dashboard',
    category: 'Operations Analytics',
    title: 'Logistics Performance Analytics Dashboard',
    problem:
      'Management needed a reliable view of delivery performance and the causes of late shipments across different services and locations.',
    work:
      'Cleaned and standardized 15,000+ shipment records, developed KPI reporting, investigated delivery delays, and converted findings into operational recommendations.',
    recommendation:
      'Recommended that management monitor delivery performance through the executive KPI dashboard and prioritize the delivery methods and locations most associated with delays, so process-improvement efforts target the highest-impact areas.',
    tools: ['Excel', 'Power Query', 'PivotTables', 'Data Visualization'],
    metrics: [
      '15,000+ records processed',
      'Executive KPI dashboard delivered',
      'Multiple delivery methods analyzed',
    ],
    visual: 'dashboard',
  },
  {
    id: 'urbanplate-strategy',
    category: 'Business Strategy',
    title: 'UrbanPlate Digital Transformation Strategy',
    problem:
      'UrbanPlate faced fragmented customer data, operational inefficiencies, and challenges scaling across locations.',
    work:
      'Evaluated business processes and recommended an integrated ERP, CRM, and business-intelligence strategy to unify data and support growth.',
    recommendation:
      'Recommended adopting an integrated ERP, CRM, and BI platform to consolidate fragmented customer data, reduce operational inefficiencies, and provide a scalable foundation for expanding across locations.',
    result: 'Earned 3rd Place at the IDS inFOCUS 2026 Case Competition.',
    tools: ['Business Analysis', 'ERP', 'CRM', 'BI Strategy', 'Presentation'],
    metrics: [
      '3rd Place — IDS inFOCUS 2026',
      'Integrated ERP / CRM / BI roadmap',
      'Multi-location scaling plan',
    ],
    visual: 'strategy',
  },
  {
    id: 'wine-quality',
    category: 'Predictive Analytics',
    title: 'Wine Quality Prediction',
    problem:
      'Identify the variables associated with lower-quality wine and support production decisions.',
    work:
      'Developed and evaluated a logistic regression model using alcohol, volatile acidity, sulphates, and other quality indicators.',
    recommendation:
      'Recommended that production monitor the quality indicators most associated with lower-quality wine — such as alcohol, volatile acidity, and sulphates — to guide earlier quality-control decisions.',
    result: 'Achieved 85.4% validation accuracy.',
    tools: ['Excel', 'Logistic Regression', 'Predictive Modeling'],
    metrics: [
      '85.4% validation accuracy',
      'Logistic regression model',
      'Key quality drivers identified',
    ],
    visual: 'model',
  },
]

export const SKILL_GROUPS = [
  {
    title: 'Data Analysis',
    skills: ['SQL', 'MySQL', 'Python', 'Pandas', 'NumPy', 'R', 'Excel'],
  },
  {
    title: 'Visualization & Reporting',
    skills: ['Power BI', 'Excel Dashboards', 'PivotTables', 'Power Query'],
  },
  {
    title: 'Tools',
    skills: ['Jupyter Notebook', 'RStudio', 'Azure Data Studio', 'AWS'],
  },
  {
    title: 'Business',
    skills: [
      'Operational Analysis',
      'Financial Analysis',
      'KPI Reporting',
      'Data Storytelling',
      'Business Strategy',
    ],
  },
] as const

export const LEADERSHIP = [
  {
    type: 'Leadership',
    title: 'Alpha Kappa Psi',
    description: 'Active Member and Marketing Committee.',
  },
  {
    type: 'Community',
    title: 'Excel Workshop Instructor',
    description: 'Designed and delivered an interactive Excel workshop for 30+ students.',
  },
  {
    type: 'Networking',
    title: 'Professional Outreach',
    description:
      'Conducted outreach to 20+ professionals and delivered 10+ networking presentations.',
  },
  {
    type: 'Award',
    title: 'IDS inFOCUS 2026 Case Competition',
    description: '3rd Place — digital transformation strategy.',
  },
  {
    type: 'Award',
    title: 'Shorelight Diversity Scholarship',
    description: 'Merit-based scholarship recipient.',
  },
  {
    type: 'Certification',
    title: 'AWS Academy Graduate',
    description: 'Data Engineering track.',
  },
  {
    type: 'Certification',
    title: 'KPIM Data Analytics Hero',
    description: 'Data analytics certification.',
  },
] as const
