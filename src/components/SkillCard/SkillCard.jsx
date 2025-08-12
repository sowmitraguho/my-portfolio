import React from 'react';

const SkillCard = ({ icon, name, description }) => {
    return (
        <div className="flex flex-col items-center text-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md w-24 md:w-28 cursor-default select-none hover:shadow-lg transition-shadow">
            <div className="text-blue-500 dark:text-blue-400 mb-2">{icon}</div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{name}</h4>
            <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{description}</p>
        </div>
    );
};

export default SkillCard;