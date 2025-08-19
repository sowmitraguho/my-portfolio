import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import myPhoto from "@/assets/myPhoto.png";
import Particles from "@/components/Particles/Particles";
import { ThemeContext } from "@/Contexts/ThemeContexts/ThemeContext";
import { Link, useNavigate } from "react-router";


const About = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const particleColors = theme === "dark"
    ? ["#ffffff", "#aaaaaa"]
    : ["#1e40af", "#3b82f6"];
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-20 transition-colors duration-500 overflow-hidden flex flex-col md:flex-row items-center justify-center gap-10"
      style={{
        background: theme === "dark" ? "" : "linear-gradient(to bottom, rgba(156,163,175,0.5), #ffffff)",
      }}

    >

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
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />

      </div>
      {/* Left: Image with rotating border */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Rotating border layer */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-rotate-border" />

        {/* Glow effect (optional) */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-70 animate-pulse-glow" />

        {/* Static image container */}
        <div className="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-300 dark:ring-gray-700">
          <img
            src={myPhoto}
            alt="Sowmitra Guha"
            className="w-full h-auto object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </motion.div>


      {/* Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center md:text-left"
      >
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Hello! I'm <strong>Sowmitra Guha</strong>, a passionate Web Developer
          and Software Engineer dedicated to crafting beautiful, fast, and
          scalable web applications. With a strong foundation in JavaScript,
          React, and modern development tools, I enjoy turning ideas into
          reality through code.
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I specialize in building responsive user interfaces, implementing
          smooth animations, and ensuring optimal performance. I am always eager
          to learn new technologies and improve my craft.
        </p>

        <Link
          to="/contact"
          className="inline-block px-16 py-6 rounded-md border-2 border-transparent font-semibold relative overflow-hidden group hover:scale-102"
        >
          {/* Border Gradient */}
          <span className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]">
            <span className="flex h-full w-full rounded-md bg-white dark:bg-gray-900 items-center justify-center group-hover:bg-gradient-to-r transition-all duration-300">
              Contact Me
            </span>
          </span>
        </Link>

      </motion.div>
    </section>
  );
};

export default About;
