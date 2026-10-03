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
  SiWordpress,
} from 'react-icons/si';
import { FiBarChart2, FiCalendar, FiRefreshCw, FiShield } from 'react-icons/fi';

// Keep the skill content here so categories and technologies are easy to update.
export const techStack = [
  {
    id: 'fe',
    label: 'FE',
    name: 'Frontend',
    technologies: [
      { name: 'Next.js', icon: SiNextDotJs, color: '#000000' },
      { name: 'JavaScript', icon: SiJavascript, color: '#D6B800' },
      { name: 'React', icon: SiReact, color: '#149ECA' },
      { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
    ],
  },
  {
    id: 'be',
    label: 'BE',
    name: 'Backend',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Firebase', icon: SiFirebase, color: '#D6A500' },
    ],
  },
  {
    id: 'app',
    label: 'App',
    name: 'Mobile',
    technologies: [
      { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    ],
  },
  {
    id: 'delivery',
    label: 'PMO',
    name: 'Project Delivery',
    technologies: [
      { name: 'Microsoft Project', icon: SiMicrosoft, color: '#737373' },
      { name: 'Primavera P6', icon: FiCalendar, color: '#0B7A75' },
      { name: 'Jira', icon: SiJira, color: '#2684FF' },
      { name: 'Azure DevOps', icon: SiAzuredevops, color: '#0078D7' },
      { name: 'Trello', icon: SiTrello, color: '#0052CC' },
      { name: 'Power BI', icon: SiPowerbi, color: '#D6A500' },
      { name: 'RAID management', icon: FiShield, color: '#0B7A75' },
      { name: 'Budget & forecasting', icon: FiBarChart2, color: '#0B7A75' },
      { name: 'Scrum & Kanban', icon: FiRefreshCw, color: '#0B7A75' },
    ],
  },
];