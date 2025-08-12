import Card from '@/Shared/Card/Card';
import Section from '@/Shared/Section/Section';
import { GraduationCap } from 'lucide-react';
import React from 'react';

const EducationSection = () => {
    const educationTimeline = [
    {
      year: '2020 - 2024',
      title: 'Bachelor of Science in Engineering',
      institution: 'University Name, City',
      description: 'Focused on Software Engineering, with coursework in data structures, algorithms, web development, and database systems. Graduated with Honors.',
      side: 'left' // Will appear on the left of the line
    },
    {
      year: '2018 - 2020',
      title: 'Higher Secondary Certificate (HSC)',
      institution: 'College Name, City',
      description: 'Majored in Science, achieving strong results in Physics, Chemistry, and Mathematics.',
      side: 'right' // Will appear on the right of the line
    },
    {
      year: '2008 - 2018',
      title: 'Secondary School Certificate (SSC)',
      institution: 'School Name, City',
      description: 'Completed secondary education with a focus on core academic subjects.',
      side: 'left' // Will appear on the left of the line
    },
  ];
    return (
        <Section id="education" bgClass="education-bg-animation">
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 glow-text animate-fade-in-up">
        <GraduationCap size={40} className="inline-block mr-4 text-[var(--accent-color)]" />
        Education
      </h2>
      <div className="relative w-full max-w-4xl mx-auto py-8">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[var(--border-glow-color)] shadow-md z-0"></div>

        {educationTimeline.map((item, index) => (
          <div
            key={index}
            className={`flex items-center w-full my-8 ${
              item.side === 'left' ? 'flex-row-reverse md:flex-row' : 'flex-row'
            } animate-fade-in-up`}
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            {/* Circle on the line */}
            <div className={`absolute ${item.side === 'left' ? 'left-1/2 -ml-2' : 'left-1/2 -ml-2'} md:relative md:ml-0 md:mr-0 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 rounded-full bg-[var(--accent-color)] z-10 flex-shrink-0
                         ${item.side === 'left' ? 'md:-ml-2' : 'md:-mr-2'}`}></div>

            {/* Content Card */}
            <Card className={`flex-grow md:w-5/12 p-6 transition-transform hover:scale-[1.01] duration-300
                            ${item.side === 'left' ? 'md:mr-auto text-right md:pr-10' : 'md:ml-auto text-left md:pl-10'}`}>
              <h3 className="text-2xl font-semibold mb-2 glow-text">{item.title}</h3>
              <p className="text-lg text-[var(--accent-color)] mb-2">{item.year}</p>
              <p className="text-[var(--text-color)] mb-3">{item.institution}</p>
              <p className="text-base text-[var(--text-color)]">{item.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
    );
};

export default EducationSection;