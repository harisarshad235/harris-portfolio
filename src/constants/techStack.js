import {
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiKotlin,
  SiLaravel,
  SiMongodb,
  SiNextDotJs,
  SiPostgresql,
  SiReact,
  SiWordpress,
} from 'react-icons/si';

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
];