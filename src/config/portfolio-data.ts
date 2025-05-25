
// src/config/portfolio-data.ts
import type { PortfolioData } from '@/interfaces/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Alex Johnson",
    title: "Senior Software Engineer",
  },
  experience: {
    summary:
      "Highly skilled and motivated Senior Software Engineer with 7+ years of experience in designing, developing, and deploying scalable web applications. Proficient in modern JavaScript frameworks, cloud technologies, and agile methodologies. Passionate about creating innovative solutions and driving technical excellence.",
    profileImage: "https://placehold.co/200x200.png",
    profileImageAiHint: "professional portrait",
    items: [
      {
        role: "Senior Software Engineer",
        company: "Innovatech Solutions",
        duration: "June 2020 - Present",
        descriptionPoints: [
          "Led a team of 5 engineers in the development of a new SaaS platform, resulting in a 30% increase in user engagement.",
          "Architected and implemented microservices using Node.js and Docker, enhancing system scalability and reliability.",
          "Collaborated with product managers and designers to define project requirements and deliverables.",
          "Mentored junior engineers, fostering a culture of learning and growth within the team.",
        ],
      },
      {
        role: "Software Engineer",
        company: "Web Creations Co.",
        duration: "July 2017 - May 2020",
        descriptionPoints: [
          "Developed and maintained full-stack web applications using React, Express.js, and MongoDB.",
          "Implemented RESTful APIs and integrated third-party services.",
          "Participated in code reviews and contributed to improving code quality and development processes.",
        ],
      },
    ],
  },
  skills: [
    { name: 'JavaScript', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png' },
    { name: 'TypeScript', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png' },
    { name: 'React', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/react/react.png' },
    { name: 'Next.js', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png' },
    { name: 'Node.js', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png' },
    { name: 'Python', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/python/python.png' },
    { name: 'Tailwind CSS', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png' },
    { name: 'HTML5', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/html5/html5.png' },
    { name: 'CSS3', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/css3/css3.png' },
    { name: 'Git', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/git/git.png' },
    { name: 'Docker', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/docker/docker.png' },
    { name: 'AWS', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/aws/aws.png' },
    { name: 'Genkit', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/artificial-intelligence/artificial-intelligence.png' }, // Using a generic AI icon
  ],
  projects: [
    {
      title: 'E-commerce Platform X',
      description:
        'A full-featured e-commerce platform with advanced product filtering, secure payment integration, and an intuitive admin dashboard. Built for scalability and performance.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAiHint: 'online shopping cart',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveDemoLink: '#',
      githubLink: 'https://github.com/yourusername/ecommerce-platform-x',
    },
    {
      title: 'AI-Powered Task Manager',
      description:
        'A smart task management application that uses Genkit to understand natural language input for creating and organizing tasks. Features collaborative tools and progress tracking.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAiHint: 'task list productivity',
      tags: ['Next.js', 'Genkit', 'Firebase', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/ai-task-manager',
    },
    {
      title: 'Data Visualization Dashboard',
      description:
        'An interactive dashboard for visualizing complex datasets using ShadCN UI charts. Allows users to explore data trends and generate custom reports.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAiHint: 'charts graphs data',
      tags: ['TypeScript', 'React', 'ShadCN UI', 'Recharts'],
      liveDemoLink: '#',
      githubLink: 'https://github.com/yourusername/data-viz-dashboard',
    },
  ],
  achievements: [
    {
      title: 'Lead Developer - Project Phoenix',
      description:
        'Successfully led the migration of a legacy monolith to a microservices architecture, reducing downtime by 90% and improving deployment frequency by 4x.',
    },
    {
      title: 'Innovator of the Year 2022',
      description:
        'Awarded for designing and implementing a novel caching strategy that cut API response times by 60% for critical endpoints.',
    },
    {
      title: 'Published Technical Author',
      description:
        'Authored several influential blog posts on advanced JavaScript techniques and AI integration, reaching over 50,000 readers.',
    },
    {
      title: 'Top Open Source Contributor',
      description:
        'Consistently ranked among the top contributors to a popular open-source UI library, enhancing its features and stability.',
    },
  ],
};
