import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-sm bg-[var(--main-bg-color)] text-[var(--text-color)] border-t border-[var(--card-bg-color)]">
      <div className="container mx-auto px-4">
        &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
        <p className="mt-2">Crafted with React & Tailwind CSS.</p>
      </div>
    </footer>
    );
};

export default Footer;