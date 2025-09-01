import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FiGithub, FiExternalLink, FiInfo } from "react-icons/fi";
import { useNavigate } from "react-router";

const ProjectCard = ({ proj }) => {
  const navigate = useNavigate();
  return (
    <div>
      <motion.div
        key={proj.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
      >
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {proj.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-3">
            {proj.tech.map((techItem) => (
              <Badge
                key={techItem}
                variant="outline"
                className="text-xs text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400"
              >
                {techItem}
              </Badge>
            ))}
          </div>

          <p className="text-gray-700 dark:text-gray-300 flex-grow">
            {proj.description}
          </p>

          <div className="mt-4 flex space-x-3">
            <Button variant="outline" size="sm" asChild>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FiGithub size={18} />
                GitHub
              </a>
            </Button>

            <Button variant="outline" size="sm" asChild>
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FiExternalLink size={18} />
                Live
              </a>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate(`/project/${proj.id}`)}
              className="flex items-center gap-2"
            >
              <FiInfo size={18} />
              Details
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;