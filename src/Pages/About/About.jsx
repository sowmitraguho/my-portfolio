import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; 
import myPhoto from "@/assets/myPhoto.png"; 
import Particles from "@/components/Particles/Particles";
import LightRays from "@/components/BackgroundAnimation/LightRays";
import { ThemeContext } from "@/Contexts/ThemeContexts/ThemeContext";


const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-20  transition-colors duration-500 overflow-hidden flex flex-col md:flex-row items-center justify-center gap-10"
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
    {theme == 'dark' ?  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  /> : <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />}
    
  </div>
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-shrink-0 max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-300 dark:ring-gray-700"
      >
        <img
          src={myPhoto} // replace with your real image path
          alt="Sowmitra Guha"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
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
          Hello! I’m <strong>Sowmitra Guha</strong>, a passionate Web Developer
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

        <Button
          variant="outline"
          className="bg-transparent border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Me
        </Button>
      </motion.div>
    </section>
  );
};

export default About;
