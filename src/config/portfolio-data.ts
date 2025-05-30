
// src/config/portfolio-data.ts
import type { PortfolioData } from '@/interfaces/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Akash Mondal",
    title: "Full Stack Engineer",
  },
  experience: {
    summary:
      "Full Stack Engineer with 3+ years of expertise in end-to-end application development, CI/CD, and automation. High-Flyer Award winner - adapting seamlessly to any challenge to deliver scalable, business-aligned solutions.",
    profileImage: "https://placehold.co/200x200.png",
    profileImageAiHint: "professional portrait",
    items: [
      {
        role: "Senior Software Engineer",
        company: "Optum",
        companyUrl: "https://www.optum.in/",
        duration: "Dec 2024 - Present",
        descriptionPoints: [
          "Spearheaded the migration of CI/CD pipelines from Azure DevOps to GitHub Actions, leveraging composite actions to achieve a 50% performance boost and reduce deployment failures by 25%.",
          "Automated SQL script generation via a .NET Console app, reducing manual data replication efforts by 90% for demo environments.",
          "Mentored 5+ junior developers through code reviews and pair programming, improving team productivity by 20% and fostering a culture of knowledge-sharing.",
          "Orchestrated refactoring of legacy systems using SOLID principles, enhancing code maintainability and reducing technical debt by 30%.",
        ],
      },
      {
        role: "Software Engineer",
        company: "Optum",
        companyUrl: "https://www.optum.in/",
        duration: "Jul 2022 - Nov 2024",
        descriptionPoints: [
          "Engineered a custom-triggered Azure function (.NET) to optimize message consumption from Apache Pulsar Message Bus, demonstrating expertise in problem-solving, slashing infrastructure costs by 30% compared to traditional app services.",
          "Led migration of AngularJS to Angular (TypeScript) by rewriting business and UI logic. Implemented a backend toggle for phased migration, ensuring a smooth transition with zero downtime.",
          "Integrated RESTful APIs into Angular front-end, dynamically generating forms based on API responses for improved user experience and seamless data capture.",
          "Designed a PowerShell script to streamline Edge driver updates, cutting upgrade time from 10 minutes to 10 seconds (99% drop).",
          "Architected an Azure Data Factory pipeline integrating 3 heterogeneous databases (Cosmos DB, 2 SQL DBs), accelerating data synchronization by 40%.",
        ],
      },
      {
        role: "Software Developer Intern",
        company: "Giva",
        companyUrl: "https://www.giva.co/",
        duration: "Mar 2022 - Jun 2022",
        descriptionPoints: [
          "Implemented keyword-based search functionality using Elasticsearch on Giva's FAQ page, improving search accuracy by 35% and reducing customer support tickets by 15%.",
          "Developed \"Gift Genie\", a personalized gift recommendation chatbot, resulting in a 5% boost in customer engagement and conversion rates.",
          "Collaborated with UX teams to improve inventory management and order tracking pages, reducing order processing time by 25%.",
        ],
      },
      {
        role: "Node.js Developer Intern",
        company: "Monkhub",
        companyUrl: "https://monkhub.com/",
        duration: "Aug 2021 - Dec 2021",
        descriptionPoints: [
          "Implemented an interactive calendar blocking system, reducing scheduling conflicts by 40% and improving user engagement.",
          "Utilized Firebase Cloud Messaging for push notifications, leading to a 12% increase in user retention.",
        ],
      },
    ],
  },
  skills: [
    { name: 'JavaScript', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png' },
    { name: 'TypeScript', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png' },
    { name: 'Python', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/python/python.png' },
    { name: 'C#', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/csharp/csharp.png' },
    { name: 'HTML', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/html/html.png' },
    { name: 'CSS', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/css/css.png' },
    { name: 'C/C++', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/cpp/cpp.png' },
    { name: 'Dart', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/dart/dart.png' },
    { name: 'Bash', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/bash/bash.png' },
    { name: 'React', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/react/react.png' },
    { name: 'Angular', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/angular/angular.png' },
    { name: 'Flutter', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/flutter/flutter.png' },
    { name: '.NET', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/dotnet/dotnet.png' },
    { name: 'Next.js', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png' },
    { name: 'SQL Server', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/sql-server/sql-server.png' },
    { name: 'MongoDB', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/mongodb/mongodb.png' },
    { name: 'Postgres', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/postgresql/postgresql.png' },
    { name: 'Azure', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/azure/azure.png' },
    { name: 'AWS', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/aws/aws.png' },
    { name: 'Firebase', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/firebase/firebase.png' },
    { name: 'GitHub Actions', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/github/github.png' }, // Using GitHub icon as a proxy
    { name: 'Jenkins', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/jenkins/jenkins.png' },
    { name: 'Docker', iconUrl: 'https://raw.githubusercontent.com/github/explore/main/topics/docker/docker.png' },
  ],
  projects: [
    {
      title: 'Gemi Chat Bot',
      description:
        "Developed an AI Telegram assistant leveraging Gemini-Pro LLM for text/image/audio/file handling, deployed via Docker.",
      imageUrl: 'https://placehold.co/600x400.png',
      imageAiHint: 'ai chatbot telegram',
      tags: ['Python', 'asyncio', 'LLM', 'Gemini-Pro', 'FastAPI', 'Docker'],
      liveDemoLink: 'https://t.me/MyGemibot',
      githubLink: 'https://github.com/Akash98Sky/gemi-chat-bot',
    },
    {
      title: 'SHAM Website',
      description:
        "Built SHAM website (Society For Heritage, Archaeology & Management) with 10K+ monthly visitors, showcasing India's archaeological pursuits, heritage, and management activities.",
      imageUrl: 'https://placehold.co/600x400.png',
      imageAiHint: 'heritage archaeology website',
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS', 'Strapi CMS'],
      liveDemoLink: 'https://sham.org.in/',
      // githubLink: 'https://github.com/Akash98Sky/sham-website', // Removed GitHub link
    },
    {
      title: 'Flaavn',
      description:
        'Launched a cross-platform music streaming app (Flutter), allowing seamless usage on any platform (Mobile/Desktop/Web).',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAiHint: 'music streaming mobile',
      tags: ['Flutter', 'Next.js', 'REST API'],
      githubLink: 'https://github.com/Akash98Sky/flaavn',
    },
  ],
  achievements: [
    {
      title: 'High-Flyer at Optum, 2024',
      description:
        'Recognized for consistency, collaboration and being a team player.',
    },
    {
      title: 'GATE Qualified, 2021 & 2020',
      description:
        'GATE 2021 with a score of 401 and GATE 2020 with a score of 418.',
    },
    {
      title: 'Microsoft Certified, 2021',
      description:
        'Certified on "Azure AI Fundamentals (AI-900)" and "Azure Data Fundamentals (DP-900)".',
    },
    {
      title: 'Google CodeJam 2021 Certified',
      description:
        'Certified for qualifying Qualification Round.',
    },
  ],
};
