import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDetailCard() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === projectId);
        setProject(found);
      });
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500 dark:text-gray-400">
        Loading project details...
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto my-24 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
    >
      {/* Project Main Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto object-contain rounded-lg mb-6 bg-gray-100 p-2"
      />

      {/* Title */}
      <h1 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
        {project.title}
      </h1>

      {/* Brief Description */}
      {project.details?.brief && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Brief Description
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {project.details.brief}
          </p>
        </section>
      )}

      {/* Challenges Faced */}
      {project.details?.challenges && project.details.challenges.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Challenges Faced
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {project.details.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Future Plans */}
      {project.details?.futurePlans && project.details.futurePlans.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Potential Improvements & Future Plans
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {project.details.futurePlans.map((plan, index) => (
              <li key={index}>{plan}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Tech Used */}
      {project.tech && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Technologies Used
          </h2>
          <ul className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Device View Images */}
      {project.deviceView && project.deviceView.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Device Views
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.deviceView.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} view ${index + 1}`}
                className="w-full h-auto object-contain rounded-lg bg-gray-100 p-2"
              />
            ))}
          </div>
        </section>
      )}

      {/* Links */}
      <section className="flex gap-6 justify-center mt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-300 transition"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-indigo-500 dark:hover:bg-indigo-300 transition"
        >
          <FaExternalLinkAlt /> Live Site
        </a>
      </section>

      {/* Back Link */}
      <div className="mt-10 text-center">
        <Link
          to="/projects"
          className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
        >
          ← Back to Projects
        </Link>
      </div>
    </motion.section>
  );
}
