import Section from '@/Shared/Section/Section';
import { Download } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
    return (
        <Section id="hero" bgClass="hero-bg-animation" className="flex items-center justify-center">
      <div className="text-center max-w-4xl animate-fade-in-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 ">
          Hello, I'm <span className="text-[var(--accent-color)]">Sowmitra Guha</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-[var(--text-color)] glow-text">
          &gt; I build impactful web experiences.
        </p>
        <a
          href="/your-resume.pdf" // Replace with actual path to your resume PDF
          download="YourName_Resume.pdf"
          className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg bg-[var(--accent-color)] text-[var(--main-bg-color)]
                     transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-var(--accent-color) focus:ring-opacity-75
                     relative overflow-hidden group rotating-border-inner"
        >
          <Download size={24} className="mr-3" /> Download Resume
          <style>{`
            .rotating-border-inner::before {
              content: '';
              position: absolute;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              background: conic-gradient(
                from 0deg,
                transparent 0%,
                transparent 45%,
                var(--main-bg-color) 45%,
                var(--main-bg-color) 55%,
                transparent 55%,
                transparent 100%
              );
              animation: rotate-border 3s linear infinite;
              z-index: -1;
              opacity: 0.2;
            }
          `}</style>
        </a>
      </div>
    </Section>
    );
};

export default HeroSection;