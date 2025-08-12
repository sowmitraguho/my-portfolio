import React from 'react';

const Section = ({ id, children, bgClass = '', className = '' }) => {
    return (
    <section id={id} className={`relative min-h-screen py-20 sm:py-24 lg:py-32 overflow-hidden bg-[var(--main-bg-color)] ${className}`}>
      {/* Background Animation Layer */}
      <div className={`absolute inset-0 z-0 ${bgClass}`}></div>
      {/* Content Layer */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {children}
      </div>
    </section>
  );
};

export default Section;