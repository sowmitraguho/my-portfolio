import Card from '@/Shared/Card/Card';
import Section from '@/Shared/Section/Section';
import { Briefcase, ExternalLink, Github } from 'lucide-react';
import React from 'react';

const Projects = () => {
    const projectsList = [
    {
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce app with user auth, product listings, cart, and secure payments. Modern UI/UX.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      githubLink: '#',
      liveLink: '#',
      imageUrl: 'https://placehold.co/600x400/0A192F/64FFDA?text=E-commerce+Platform',
    },
    {
      name: 'Task Management App',
      description: 'Responsive task management tool featuring drag-and-drop, real-time updates, and user-specific lists.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'GraphQL'],
      githubLink: '#',
      liveLink: '#',
      imageUrl: 'https://placehold.co/600x400/0A192F/64FFDA?text=Task+Manager+App',
    },
    {
      name: 'AI Chatbot Integration',
      description: 'Integrated a custom AI chatbot into a web application for enhanced user interaction and support.',
      technologies: ['React', 'Python', 'Flask', 'OpenAI API', 'Socket.IO'],
      githubLink: '#',
      liveLink: '#',
      imageUrl: 'https://placehold.co/600x400/0A192F/64FFDA?text=AI+Chatbot',
    },
    {
      name: 'Personal Blog & CMS',
      description: 'A minimalist blog with custom CMS, markdown support, optimized for SEO and performance.',
      technologies: ['Gatsby', 'GraphQL', 'Strapi CMS', 'Netlify CMS'],
      githubLink: '#',
      liveLink: '#',
      imageUrl: 'https://placehold.co/600x400/0A192F/64FFDA?text=Personal+Blog',
    },
  ];
    return (
        <Section id="projects" bgClass="projects-bg-animation">
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 glow-text animate-fade-in-up">
        <Briefcase size={40} className="inline-block mr-4 text-[var(--accent-color)]" />
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {projectsList.map((project, index) => (
          <Card key={project.name} className="flex flex-col animate-fade-in-up rotating-border" style={{ animationDelay: `${0.1 * index}s` }}>
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-48 object-cover rounded-t-xl mb-4 border-b border-[var(--card-bg-color)]"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/0A192F/8892B0?text=Image+Missing'; }}
            />
            <h3 className="text-2xl font-semibold mb-3 glow-text text-left">{project.name}</h3>
            <p className="mb-4 flex-grow text-[var(--text-color)] text-left">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-[var(--card-bg-color)] text-[var(--accent-color)] border border-[var(--border-glow-color)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4 mt-auto justify-end">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 rounded-lg font-medium bg-[var(--main-bg-color)] text-[var(--accent-color)] border border-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-[var(--main-bg-color)] transition-all duration-300"
              >
                <Github size={18} className="mr-2" /> Code
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 rounded-lg font-medium bg-[var(--accent-color)] text-[var(--main-bg-color)] hover:bg-[var(--main-bg-color)] hover:text-[var(--accent-color)] border border-[var(--accent-color)] transition-all duration-300"
              >
                <ExternalLink size={18} className="mr-2" /> Live
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
    );
};

export default Projects;