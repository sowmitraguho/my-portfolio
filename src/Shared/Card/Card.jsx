import React from 'react';

const Card = ({ children, className = '', ...props }) => {
    return (
         <div className={`p-6 rounded-2xl shadow-lg border border-[var(--border-color)] bg-[var(--card-bg-color)] transition-colors duration-300 ease-in-out ${className}`} {...props}>
      {children}
    </div>
    );
};

export default Card;