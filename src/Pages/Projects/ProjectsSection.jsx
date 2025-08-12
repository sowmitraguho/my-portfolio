import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // shadcn button
import { Badge } from "@/components/ui/badge"; // shadcn badge
import { FiGithub, FiExternalLink, FiInfo } from "react-icons/fi";
import { useNavigate } from "react-router";

const projectsData = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    tech: ["React", "TailwindCSS", "Framer Motion", "ShadCN UI"],
    description:
      "A sleek, animated portfolio website showcasing my skills, projects, and experience with dark/light mode support.",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    tech: ["React", "Firebase", "React Router", "TailwindCSS"],
    description:
      "A full-featured employee management app with role-based authentication, payroll, and workflow tracking.",
    github: "https://github.com/yourusername/employee-management",
    live: "https://employee-management.live",
  },
  {
    id: "learnxyz",
    title: "LearnXYZ",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "An interactive learning platform for math, science, and tech courses with structured lessons and quizzes.",
    github: "https://github.com/yourusername/learnxyz",
    live: "https://learnxyz.com",
  },
  {
    id: "hobby-hub",
    title: "Hobby Hub",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    tech: ["React", "Firebase", "Stripe", "TailwindCSS"],
    description:
      "An event organizing site where users can create, discover, and participate in various hobbies and events.",
    github: "https://github.com/yourusername/hobby-hub",
    live: "https://hobbyhub.live",
  },
];

export default function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((proj) => (
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
                <Button
                  variant="outline"
                  size="sm"
                  as="a"
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FiGithub size={18} />
                  GitHub
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  as="a"
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FiExternalLink size={18} />
                  Live
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate(`/projects/${proj.id}`)}
                  className="flex items-center gap-2"
                >
                  <FiInfo size={18} />
                  Details
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
