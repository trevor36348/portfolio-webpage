import { FaNodeJs } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';

export const iconMap = {
    'Node.js': FaNodeJs,
    MongoDB: SiMongodb,
    'Next.js': RiNextjsLine,
    Tailwind: RiTailwindCssFill,
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    Python: FaPython,
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    React: FaReact,
    Figma: FaFigma,
    Express: SiExpress,
    Git: FaGitAlt,
    Github: FaGithub,
    Vercel: SiVercel,
} as const;

export type IconName = keyof typeof iconMap;
