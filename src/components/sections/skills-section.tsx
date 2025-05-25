
'use client';

import type { RefObject } from 'react';
import { Brain, GitFork, Server, Database, Cloud, Wind, Code } from 'lucide-react'; // Added Database, Cloud, Wind, Code
import { portfolioData } from '@/config/portfolio-data';

// SVG icon components (existing and new examples)
const ReactIcon = () => (
  <svg viewBox="0 0 128 128" width="32" height="32" className="fill-current">
    <g fill="#61DAFB"><ellipse rx="127.5" ry="46.5" transform="rotate(0)"></ellipse><ellipse rx="127.5" ry="46.5" transform="rotate(60)"></ellipse><ellipse rx="127.5" ry="46.5" transform="rotate(120)"></ellipse><circle r="20" fill="#20232A"></circle></g>
  </svg>
);
const NextjsIcon = () => (
  <svg viewBox="0 0 128 128" width="32" height="32" className="fill-current">
    <path fillRule="evenodd" clipRule="evenodd" d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM42.1231 38V89.8769H50.88V59.1879L72.3142 89.8769H80.9538L57.5542 56.7879L79.2462 38H70.08L50.88 55.6804V38H42.1231ZM89.8769 89.8769H85.2308V38H89.8769V89.8769Z" fill="currentColor"></path>
  </svg>
);
const TailwindCssIcon = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" className="fill-current">
    <path fill="#38BDF8" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
    <path fill="#38BDF8" d="M10.313 11.016c-.195.684.063 1.39.602 1.805 1.406 1.07 2.812 2.14 4.21 3.218.852.656 1.96.633 2.782-.055 1.43-1.195 2.883-2.375 4.32-3.57.68-.57.82-1.531.32-2.21-.5-.68-1.406-.828-2.133-.328-1.344.93-2.695 1.844-4.032 2.773-.101.07-.203.14-.312.21-.11-.07-.21-.14-.32-.21-1.336-.93-2.672-1.844-4.016-2.774-.781-.507-1.734-.32-2.226.32zm5.54 9.773c-1.71.008-3.047 1.265-3.047 3.015 0 1.657 1.367 3 3.047 3s3.047-1.343 3.047-3c0-1.734-1.375-3.015-3.047-3.015zm-5.055-4.883c-.195.683.063 1.39.602 1.804 1.406 1.07 2.812 2.14 4.21 3.218.852.657 1.96.633 2.782-.054 1.43-1.196 2.883-2.375 4.32-3.57.68-.57.82-1.532.32-2.211s-1.406-.828-2.133-.328c-1.344.93-2.695 1.844-4.032 2.773-.101.071-.203.14-.312.211-.11-.07-.21-.14-.32-.21-1.336-.93-2.672-1.844-4.016-2.774-.781-.508-1.734-.32-2.226.32z"></path>
  </svg>
);
const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="fill-current" style={{ color: '#F7DF1E' }}><path d="M0 0h24v24H0V0zm22.28 20.36H1.72V3.64h20.56v16.72zM12 17.48c1.78 0 2.62-1.06 2.62-2.56v-1.92h-1.7v1.88c0 .8-.44 1.2-1.08 1.2-.76 0-1.16-.48-1.16-1.4V7.28h1.7v6.28c0 .8.32 1.24.92 1.24.64 0 1.04-.4 1.04-1.2V7.28h1.7v6.32c0 1.6-.92 2.88-2.76 2.88-1.8 0-2.8-1.08-2.8-2.72V7.28h1.7v6.44c0 .8.36 1.24 1 1.24.68 0 1.08-.4 1.08-1.2V7.28h1.68v6.28c0 1.56-.92 2.68-2.6 2.68-1.72 0-2.64-1.04-2.64-2.6V7.28h-4.48v7.12c0 1.52.84 2.64 2.56 2.64z"></path></svg>
);
const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="fill-current" style={{ color: '#3178C6' }}><path d="M0 0h24v24H0V0zm20.56 20.36H3.44V3.64h17.12v16.72zM15.4 9.4h-1.04v7.12h-1.44V9.4H11.9v-.96h3.5v.96zm-5.2 4.88c0 .88.68 1.48 1.72 1.48s1.72-.6 1.72-1.48v-4.6h-1.28v4.48c0 .32-.2.48-.44.48s-.44-.16-.44-.48V8.88h-1.28v5.4z"></path></svg>
);
const Html5Icon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="fill-current" style={{ color: '#E34F26' }}><path d="M2 21.36l1.72-19.36h16.56l-1.72 19.36-6.56 2.04-6.52-2.04zm14.6-7.08l.44-4.96h-9.16l.24 2.68h8.48l-.28 3.16-3.4 1.04-3.44-.96-.2-2.2h-2.48l.4 4.52 5.72 1.8 5.72-1.72.8-8.32z"></path></svg>
);
const Css3Icon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="fill-current" style={{ color: '#1572B6' }}><path d="M2 21.36l1.72-19.36h16.56l-1.72 19.36-6.56 2.04-6.52-2.04zm13.44-7.12l.36-3.96h-7.88l.2 2.2h7.32l-.24 2.64-2.88.84-2.92-.76-.16-1.76h-2.04l.32 3.76 4.84 1.56 4.8-1.48.68-7.08h-9.76l-.2-2.2h10.16l.2-2.24h-12.4l-.44 4.96h10.6z"></path></svg>
);
const PythonIcon = () => ( // Example for Python
  <svg viewBox="0 0 24 24" width="32" height="32" className="fill-current" style={{color: '#3776AB'}}>
    <path d="M12.001.607c-2.09.002-3.851.136-5.035.4-1.103.247-1.953.632-2.63 1.128-.67.49-.998.92-.998 1.738v.752c0 .833.348 1.27.997 1.738.605.42 1.387.762 2.363 1.035 1.042.283 2.39.424 4.003.424h.6c2.938 0 4.792-.53 5.861-1.59.954-.947 1.46-2.244 1.46-3.827V1.43c0-.99-.49-1.404-1.404-1.404h-.918c-1.208.03-2.513.14-3.993.264l-.307.027zm.06 10.097c-1.47.004-2.77.133-3.73.383-.96.25-1.67.604-2.203 1.04-.54.44-.82.99-.82 1.79v1.986c0 .91.38 1.48.99 1.93.67.49 1.54.87 2.52 1.1.99.25 2.35.37 3.99.37h.42c2.523-.01 4.24-.48 5.31-1.45.98-.89 1.52-2.16 1.52-3.74V12.15c0-.93-.51-1.35-1.41-1.35h-.87c-1.26.03-2.59.14-4.08.27l-.306.027z"/>
  </svg>
);
const DockerIcon = () => ( // Example for Docker
  <svg viewBox="0 0 24 24" width="32" height="32" className="fill-current" style={{color: '#2496ED'}}>
    <path d="M22.48.62H1.52C.68.62 0 1.3 0 2.14v16.3c0 .84.68 1.52 1.52 1.52H7.4v-3.05H3.05v-3.05h4.35V9.5H3.05V6.45h4.35V3.4H1.52v-.64h20.96v.64H10.5v3.05h4.35v3.05H10.5v3.05h4.35v3.05H10.5v3.05h11.98c.84 0 1.52-.68 1.52-1.52V2.14c0-.84-.68-1.52-1.52-1.52zM9 16.95v-3.05H4.57v3.05H9zm0-4.57v-3.05H4.57v3.05H9zm0-4.58V4.75H4.57v3.05H9zm6.05 4.58v-3.05h-4.35v3.05h4.35zm0-4.58V4.75h-4.35v3.05h4.35zm6.03 7.62H16.7v-3.05h4.38v3.05zm0-4.57H16.7v-3.05h4.38v3.05zm0-4.58H16.7V4.75h4.38v3.05z"/>
  </svg>
);


// Centralized map for iconKeys to components
const iconComponentsMap: Record<string, JSX.Element> = {
  javascript: <JavaScriptIcon />,
  typescript: <TypeScriptIcon />,
  react: <ReactIcon />,
  nextjs: <NextjsIcon />,
  nodejs: <Server className="w-8 h-8" style={{ color: '#68A063' }} />,
  tailwind: <TailwindCssIcon />,
  html5: <Html5Icon />,
  css3: <Css3Icon />,
  git: <GitFork className="w-8 h-8" style={{ color: '#F05033' }} />,
  genkit: <Brain className="w-8 h-8 text-primary" />,
  python: <PythonIcon />,
  docker: <DockerIcon />,
  aws: <Cloud className="w-8 h-8 text-orange-500" />, // Example for AWS
  // Add other custom icons or Lucide icons here
  default: <Code className="w-8 h-8 text-muted-foreground" />, // Default icon
};


interface SkillsSectionProps {
  skillsRef: RefObject<HTMLElement>;
}

export function SkillsSection({ skillsRef }: SkillsSectionProps) {
  const skills = portfolioData.skills;

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-foreground text-center">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center text-center border border-border"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 text-primary group-hover:text-accent">
                {iconComponentsMap[skill.iconKey] || iconComponentsMap.default}
              </div>
              <h3 className="text-lg font-medium text-card-foreground">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
