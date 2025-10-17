import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { ThemeContext } from "@/Contexts/ThemeContexts/ThemeContext";
import Particles from "@/components/Particles/Particles";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const projectsData = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    image: 'https://i.ibb.co/L37ph9N/p.png',
    tech: ["React", "TailwindCSS", "Framer Motion", "ShadCN UI"],
    description:
      "A sleek, animated portfolio website showcasing my skills, projects, and experience with dark/light mode support.",
    github: "https://github.com/sowmitraguho/my-portfolio",
    live: "https://sowmitra-guha-portfolio.netlify.app/",
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    image: 'https://i.ibb.co/cXgrrgFF/employee-Mng-Banner.png',
    tech: ["React", "Firebase", "React Router", "TailwindCSS"],
    description:
      "A full-featured employee management app with role-based authentication, payroll, and workflow tracking.",
    github: "https://github.com/sowmitraguho/employee-management-system",
    live: "https://mellow-toffee-c45c62.netlify.app/",
  },
  {
    id: "Aurabeaute",
    title: "AuraBeaute",
    image: 'https://i.ibb.co/sv9tGYvG/learn-XYZBanner.png',
    tech: ["NextJS", "TailwindCSS", "NextAuth.js", "ShadcnUi", "Node.js", "Express", "MongoDB", ],
    description:
      "A full-featured E-Commerce Web Application includes product management with add/update/delete functionality, secure user authentication with NextAuth.js, and a fully responsive front-end optimized for modern browsers and devices.",
    github: "https://github.com/sowmitraguho/nextjs_ecommerce_site",
    live: "https://aurabeaute.netlify.app/",
  },
];


export default function ProjectsSection() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const particleColors = theme === "dark"
    ? ["#ffffff", "#aaaaaa"] // light particles for dark mode
    : ["#1e40af", "#3b82f6"]; // blue-ish particles for light mode

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-12">
      {/* Background animation */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -10,
          pointerEvents: 'none'
        }}
      >
        <Particles
          particleColors={particleColors}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />

      </div>
      <h2 className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((proj) => (
          <ProjectCard key={proj.id} proj={proj} />
        ))}
      </div>
      <div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden px-12 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 transition-all group my-4 flex justify-center" type="button"
          onClick={() => navigate("/projects")}
        >
          <span className="relative z-10">View All Projects</span>

          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-30"></span>
        </motion.button>
      </div>
    </section>
  );
}
