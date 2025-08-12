import Card from '@/Shared/Card/Card';
import Section from '@/Shared/Section/Section';
import { Code } from 'lucide-react';
import React from 'react';

const SkillSection = () => {
    const mernSkills = [
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  ];
  const otherSkills = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];

  const allSkills = [...mernSkills, ...otherSkills];
    return (
        <Section id="skills" bgClass="skills-bg-animation">
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 glow-text animate-fade-in-up">
        <Code size={40} className="inline-block mr-4 text-[var(--accent-color)]" />
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl">
        {allSkills.map((skill, index) => (
          <Card
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 text-center transition-transform transform hover:scale-105 duration-300 animate-fade-in-up rotating-border"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 invert-for-dark"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/0A192F/8892B0?text=Logo'; }}
            />
            <h3 className="text-lg font-semibold glow-text">{skill.name}</h3>
          </Card>
        ))}
      </div>
    </Section>
    );
};

export default SkillSection;