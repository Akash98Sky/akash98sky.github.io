
'use client';

import type { RefObject } from 'react';
import { Brain, GitFork, Server } from 'lucide-react';

interface Skill {
  name: string;
  icon: JSX.Element;
  color?: string; // Optional: for specific icon coloring if needed
}

// Simple SVG icons for well-known technologies
const ReactIcon = () => (
  <svg viewBox="0 0 128 128" width="32" height="32" className="fill-current">
    <g fill="#61DAFB">
      <ellipse rx="127.5" ry="46.5" transform="rotate(0)"></ellipse>
      <ellipse rx="127.5" ry="46.5" transform="rotate(60)"></ellipse>
      <ellipse rx="127.5" ry="46.5" transform="rotate(120)"></ellipse>
      <circle r="20" fill="#20232A"></circle>
    </g>
  </svg>
);

const NextjsIcon = () => (
  <svg viewBox="0 0 128 128" width="32" height="32" className="fill-current">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM42.1231 38V89.8769H50.88V59.1879L72.3142 89.8769H80.9538L57.5542 56.7879L79.2462 38H70.08L50.88 55.6804V38H42.1231ZM89.8769 89.8769H85.2308V38H89.8769V89.8769Z"
      fill="currentColor"
    ></path>
  </svg>
);

const TailwindCssIcon = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" className="fill-current">
    <path
      fill="#38BDF8"
      d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"
    ></path>
    <path
      fill="#38BDF8"
      d="M10.313 11.016c-.195.684.063 1.39.602 1.805 1.406 1.07 2.812 2.14 4.21 3.218.852.656 1.96.633 2.782-.055 1.43-1.195 2.883-2.375 4.32-3.57.68-.57.82-1.531.32-2.21-.5-.68-1.406-.828-2.133-.328-1.344.93-2.695 1.844-4.032 2.773-.101.07-.203.14-.312.21-.11-.07-.21-.14-.32-.21-1.336-.93-2.672-1.844-4.016-2.774-.781-.507-1.734-.32-2.226.32zm5.54 9.773c-1.71.008-3.047 1.265-3.047 3.015 0 1.657 1.367 3 3.047 3s3.047-1.343 3.047-3c0-1.734-1.375-3.015-3.047-3.015zm-5.055-4.883c-.195.683.063 1.39.602 1.804 1.406 1.07 2.812 2.14 4.21 3.218.852.657 1.96.633 2.782-.054 1.43-1.196 2.883-2.375 4.32-3.57.68-.57.82-1.532.32-2.211s-1.406-.828-2.133-.328c-1.344.93-2.695 1.844-4.032 2.773-.101.071-.203.14-.312.211-.11-.07-.21-.14-.32-.21-1.336-.93-2.672-1.844-4.016-2.774-.781-.508-1.734-.32-2.226.32z"
    ></path>
  </svg>
);

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="fill-current" style={{ color: '#F7DF1E' }}>
    <path d="M0 0h24v24H0V0zm22.28 20.36H1.72V3.64h20.56v16.72zM12 17.48c1.78 0 2.62-1.06 2.62-2.56v-1.92h-1.7v1.88c0 .8-.44 1.2-1.08 1.2-.76 0-1.16-.48-1.16-1.4V7.28h1.7v6.28c0 .8.32 1.24.92 1.24.64 0 1.04-.4 1.04-1.2V7.28h1.7v6.32c0 1.6-.92 2.88-2.76 2.88-1.8 0-2.8-1.08-2.8-2.72V7.28h1.7v6.44c0 .8.36 1.24 1 1.24.68 0 1.08-.4 1.08-1.2V7.28h1.68v6.28c0 1.56-.92 2.68-2.6 2.68-1.72 0-2.64-1.04-2.64-2.6V7.28h-4.48v7.12c0 1.52.84 2.64 2.56 2.64z"></path>
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="fill-current" style={{ color: '#3178C6' }}>
    <path d="M0 0h24v24H0V0zm20.56 20.36H3.44V3.64h17.12v16.72zM15.4 9.4h-1.04v7.12h-1.44V9.4H11.9v-.96h3.5v.96zm-5.2 4.88c0 .88.68 1.48 1.72 1.48s1.72-.6 1.72-1.48v-4.6h-1.28v4.48c0 .32-.2.48-.44.48s-.44-.16-.44-.48V8.88h-1.28v5.4z"></path>
  </svg>
);

const Html5Icon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="fill-current" style={{ color: '#E34F26' }}>
    <path d="M2 21.36l1.72-19.36h16.56l-1.72 19.36-6.56 2.04-6.52-2.04zm14.6-7.08l.44-4.96h-9.16l.24 2.68h8.48l-.28 3.16-3.4 1.04-3.44-.96-.2-2.2h-2.48l.4 4.52 5.72 1.8 5.72-1.72.8-8.32z"></path>
  </svg>
);

const Css3Icon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="fill-current" style={{ color: '#1572B6' }}>
    <path d="M2 21.36l1.72-19.36h16.56l-1.72 19.36-6.56 2.04-6.52-2.04zm13.44-7.12l.36-3.96h-7.88l.2 2.2h7.32l-.24 2.64-2.88.84-2.92-.76-.16-1.76h-2.04l.32 3.76 4.84 1.56 4.8-1.48.68-7.08h-9.76l-.2-2.2h10.16l.2-2.24h-12.4l-.44 4.96h10.6z"></path>
  </svg>
);


const skills: Skill[] = [
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'TypeScript', icon: <TypeScriptIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Next.js', icon: <NextjsIcon /> },
  { name: 'Node.js', icon: <Server className="w-8 h-8" style={{ color: '#68A063' }} /> },
  { name: 'Tailwind CSS', icon: <TailwindCssIcon /> },
  { name: 'HTML5', icon: <Html5Icon /> },
  { name: 'CSS3', icon: <Css3Icon /> },
  { name: 'Git', icon: <GitFork className="w-8 h-8" style={{ color: '#F05033' }} /> },
  { name: 'Genkit', icon: <Brain className="w-8 h-8 text-primary" /> },
];

interface SkillsSectionProps {
  skillsRef: RefObject<HTMLElement>;
}

export function SkillsSection({ skillsRef }: SkillsSectionProps) {
  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 text-foreground text-center">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col items-center text-center border"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-card-foreground">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

    