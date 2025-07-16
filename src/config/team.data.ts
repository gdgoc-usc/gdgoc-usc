import type { TeamMember, DepartmentMember } from "./team.types";

export const leadership: TeamMember[] = [
  { 
    role: 'Lead',
    name: 'John Paul Denaya',
    imageUrl: '/members/iohann.jpg'
  },
  { 
    role: 'Lead',
    name: 'Homer Adriel Dorin',
    imageUrl: '/members/homer.jpg'
  },
  {
    role: 'Chief Operations Officer', 
    name: 'Matt Erron Cabarrubias',
    imageUrl: '/members/matt.JPG'
  },
  {
    role: 'Chief Marketing Officer',
    name: 'Jon Pierre Baltazar',
    imageUrl: '/members/marketing_jp.jpg'
  },
  {
    role: 'Chief Technology Officer',
    name: 'Geri Gian Epanto',
    imageUrl: '/members/gian.jpg'
  },
  {
    role: 'Chief Finance Officer',
    name: 'Yza Hilary Alagon',
    imageUrl: '/members/yza.jpg'
  },
  {
    role: 'Chief Human Relations Officer',
    name: 'Jewel Monsalud',
    imageUrl: '/members/jewel.jpg'
  },
];

export const externalRelations: DepartmentMember[] = [
  {
    role: 'External Relations Head',
    description: 'Partnership development and external communications',
    imageUrl: ''
  },
  {
    role: 'External Relations Officer',
    description: 'External stakeholder engagement',
    imageUrl: ''
  },
  {
    role: 'International Relations Officer',
    description: 'Global partnerships and international outreach',
    imageUrl: ''
  }
];

export const marketing: DepartmentMember[] = [
  {
    role: 'Media Engagement Head',
    description: 'Media relations and public communications',
    imageUrl: ''
  },
  {
    role: 'Public Information Officer',
    description: 'Public information and outreach',
    imageUrl: ''
  },
  {
    role: 'Creatives Head',
    description: 'Creative content and visual design',
    imageUrl: ''
  }
];

export const operations: DepartmentMember[] = [
  {
    role: 'Executive Secretary',
    description: 'Administrative coordination and documentation',
    imageUrl: ''
  },
  {
    role: 'Executive Assistant',
    description: 'Executive support and operational assistance',
    imageUrl: ''
  },
  {
    role: 'Events Manager',
    description: 'Event planning and execution',
    imageUrl: ''
  }
];

export const finance: DepartmentMember[] = [
  {
    role: 'Finance Officer',
    description: 'Financial operations and reporting',
    imageUrl: ''
  }
];

export const technology: DepartmentMember[] = [
  {
    role: 'Data Science Officer',
    description: 'Data analytics and insights',
    imageUrl: ''
  },
  {
    role: 'AI/ML Officer',
    description: 'Artificial Intelligence and Machine Learning initiatives',
    imageUrl: ''
  },
  {
    role: 'Web Dev Officer',
    description: 'Web development and digital platforms',
    imageUrl: ''
  }
];
