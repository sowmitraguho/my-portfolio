import Section from '@/Shared/Section/Section';
import { User } from 'lucide-react';
import React from 'react';
import myPhoto from '@/assets/myPhoto.png'; 

const About = () => {
    return (
        <Section id="about" bgClass="about-bg-animation">
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 animate-fade-in-up">
        <User size={40} className="inline-block mr-4 text-[var(--accent-color)]" />
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl mx-auto gap-8">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0 animate-fade-in-up rotating-border-image">
            
          <img
            src={myPhoto}
            alt="Developer Photo"
            className="w-full h-full object-cover rounded-full p-2 border border-[var(--card-bg-color)] animate-image-pulse"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/256x256/0A192F/8892B0?text=Developer'; }}
          />
          <style>{`
            .rotating-border-image {
              background: linear-gradient(to right, var(--border-glow-color), var(--secondary-glow-color));
              border-radius: 9999px; /* For perfect circle */
              padding: 4px; /* Padding for the border itself */
              animation: rotate-border 5s linear infinite;
            }
            .rotating-border-image::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: conic-gradient(
                  from 0deg,
                  transparent 0%,
                  transparent 25%,
                  var(--border-glow-color) 25%,
                  var(--border-glow-color) 50%,
                  transparent 50%,
                  transparent 75%,
                  var(--secondary-glow-color) 75%,
                  var(--secondary-glow-color) 100%
                );
                animation: rotate-border 5s linear infinite;
                z-index: -1;
                border-radius: 9999px;
            }
            @keyframes image-pulse {
              0% { transform: scale(1); box-shadow: 0 0 0px var(--accent-color); }
              50% { transform: scale(1.02); box-shadow: 0 0 15px var(--accent-color); }
              100% { transform: scale(1); box-shadow: 0 0 0px var(--accent-color); }
            }
            .animate-image-pulse { animation: image-pulse 4s infinite alternate ease-in-out; }
          `}</style>
        </div>
        <div className="md:text-left text-center animate-fade-in-up animation-delay-200">
          <p className="text-lg mb-4 text-[var(--text-color)]">
            I'm a passionate web developer with a keen eye for detail and a drive to create engaging, high-performance digital experiences. My journey began with a fascination for solving complex problems through code, leading me to specialize in modern web technologies.
          </p>
          <p className="text-lg text-[var(--text-color)]">
            I thrive in dynamic environments and am constantly learning new tools and methodologies to deliver exceptional results. When I'm not coding, I enjoy exploring new tech trends and contributing to open-source projects.
          </p>
        </div>
      </div>
    </Section>
    );
};

export default About;