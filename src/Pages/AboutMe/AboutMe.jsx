import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import myPhoto from "@/assets/myPhotoHR.png";
import Particles from "@/components/Particles/Particles";
import LightRays from "@/components/BackgroundAnimation/LightRays";
import { ThemeContext } from "@/Contexts/ThemeContexts/ThemeContext";
import Education from '../EducationSection/EducationSection';
import { Link, useNavigate } from "react-router";
import SkillSection from "../SkillSection/SkillSection";

const AboutMe = () => {
     const { theme } = useContext(ThemeContext);
     const navigate = useNavigate();
      const particleColors = theme === "dark"
        ? ["#ffffff", "#aaaaaa"]
        : ["#1e40af", "#3b82f6"];
    return (
        <div>
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
          I'm a <strong>self-taught web developer</strong> with a passion for building visually appealing, responsive, and user-friendly websites. My programming journey started from curiosity, experimenting with small projects and teaching myself the fundamentals through online resources. Over time, I honed my skills in <strong>React, TailwindCSS, Framer Motion, and ShadCN UI</strong>, focusing on creating smooth animations, clean UI design, and seamless dark/light mode experiences.

          I enjoy working on projects that blend creativity with functionality — whether it's crafting an elegant portfolio, developing a complex management system, or designing interactive learning platforms. My favorite part of the process is transforming ideas into engaging digital experiences that people can actually use and enjoy.

          Outside of coding, I love exploring new tech trends, experimenting with design ideas, and occasionally diving into hobbies like sports and creative activities. I approach both work and life with curiosity, persistence, and a willingness to keep learning.

          For me, web development isn't just a skill — it's a way to create, connect, and bring ideas to life.



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
           <Education/>
           <SkillSection/>
        </div>
    );
};

export default AboutMe;