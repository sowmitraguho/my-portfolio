import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // shadcn button
import { Badge } from "@/components/ui/badge"; // shadcn badge
import { FiGithub, FiExternalLink, FiInfo } from "react-icons/fi";
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
    live: "https://sweet-biscuit-c0800c.netlify.app/",
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
    id: "learnxyz",
    title: "LearnXYZ",
    image: 'https://i.ibb.co/sv9tGYvG/learn-XYZBanner.png',
    tech: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "An interactive learning platform for math, science, and tech courses with structured lessons and quizzes.",
    github: "https://github.com/sowmitraguho/LearnXYZ",
    live: "https://lambent-otter-224dfd.netlify.app/",
  },
  {
    id: "hobby-hub",
    title: "Hobby Hub",
    image: 'https://i.ibb.co/60Tt2W74/hobbyhub-Banner.png',
    tech: ["React", "Firebase", "Stripe", "TailwindCSS"],
    description:
      "An event organizing site where users can create, discover, and participate in various hobbies and events.",
    github: "https://github.com/sowmitraguho/hobbyhub",
    live: "https://gentle-dieffenbachia-f7dd6c.netlify.app/",
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
    </section>
  );
}
