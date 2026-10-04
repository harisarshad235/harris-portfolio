import {
  SiAzuredevops,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiJira,
  SiKotlin,
  SiLaravel,
  SiMongodb,
  SiMicrosoft,
  SiNextDotJs,
  SiPostgresql,
  SiPowerbi,
  SiReact,
  SiTrello,
  SiAmazonaws,
  SiGit,
  SiConfluence,
} from 'react-icons/si';
import { FiBarChart2, FiCalendar, FiCheckSquare, FiLayers, FiRefreshCw, FiShield } from 'react-icons/fi';

// Ordered strategically for an Executive / Technical Project Manager profile
export const techStack = [
  {
    id: 'delivery',
    label: 'PMO',
    name: 'Project Controls & Governance',
    technologies: [
      { name: 'PMP® Framework', icon: FiCheckSquare, color: '#1A8781' },
      { name: 'Primavera P6', icon: FiCalendar, color: '#0B7A75' },
      { name: 'Microsoft Project', icon: SiMicrosoft, color: '#0078D4' },
      { name: 'Jira Software', icon: SiJira, color: '#2684FF' },
      { name: 'Azure DevOps', icon: SiAzuredevops, color: '#0078D7' },
      { name: 'Confluence', icon: SiConfluence, color: '#172B4D' },
      { name: 'Power BI Reporting', icon: SiPowerbi, color: '#D6A500' },
      { name: 'RAID Management', icon: FiShield, color: '#E5674F' },
      { name: 'Earned Value & Budgeting', icon: FiBarChart2, color: '#1A8781' },
      { name: 'Scrum & Kanban', icon: FiRefreshCw, color: '#1A8781' },
    ],
  },
  {
    id: 'platforms',
    label: 'Cloud',
    name: 'Cloud, Systems & Telemetry',
    technologies: [
      { name: 'AWS Cloud', icon: SiAmazonaws, color: '#FF9900' },
      { name: 'IoT & Telemetry', icon: FiLayers, color: '#1A8781' },
      { name: 'Git & Release Mgmt', icon: SiGit, color: '#F05032' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    id: 'software',
    label: 'Dev',
    name: 'Software Delivery Coordinated',
    technologies: [
      { name: 'Next.js & React', icon: SiNextDotJs, color: '#000000' },
      { name: 'JavaScript', icon: SiJavascript, color: '#D6B800' },
      { name: 'Laravel (PHP)', icon: SiLaravel, color: '#FF2D20' },
      { name: 'Flutter & Kotlin', icon: SiFlutter, color: '#02569B' },
      { name: 'Trello', icon: SiTrello, color: '#0052CC' },
    ],
  },
];