import Card from '@/Shared/Card/Card';
import Section from '@/Shared/Section/Section';
import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

const Contacts = () => {
    return (
        <Section id="contact" bgClass="contact-bg-animation">
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 glow-text animate-fade-in-up">
        <Mail size={40} className="inline-block mr-4 text-[var(--accent-color)]" />
        Get in Touch
      </h2>
      <div className="max-w-xl mx-auto animate-fade-in-up animation-delay-200">
        <Card className="p-8">
          <p className="mb-6 text-lg text-[var(--text-color)] text-center">
            I'm always eager to discuss new projects, creative ideas, or opportunities to contribute to your team. Let's connect!
          </p>
          <div className="flex flex-col space-y-4">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center justify-center p-4 rounded-xl font-medium border border-[var(--accent-color)] glow-text hover:bg-[var(--card-bg-color)] transition-all duration-300"
            >
              <Mail size={24} className="mr-3 text-[var(--accent-color)]" /> your.email@example.com
            </a>
            <a
              href="https://github.com/yourusername" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 rounded-xl font-medium border border-[var(--accent-color)] glow-text hover:bg-[var(--card-bg-color)] transition-all duration-300"
            >
              <Github size={24} className="mr-3 text-[var(--accent-color)]" /> github.com/yourusername
            </a>
            <a
              href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 rounded-xl font-medium border border-[var(--accent-color)] glow-text hover:bg-[var(--card-bg-color)] transition-all duration-300"
            >
              <Linkedin size={24} className="mr-3 text-[var(--accent-color)]" /> linkedin.com/in/yourprofile
            </a>
          </div>
        </Card>
      </div>
    </Section>
    );
};

export default Contacts;