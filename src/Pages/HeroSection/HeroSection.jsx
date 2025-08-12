import React, { useContext } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../../assets/Lottifiles/heroAnimation2.json";
import Galaxy from "@/components/BackgroundAnimation/Galaxy";
import { ThemeContext } from "@/Contexts/ThemeContexts/ThemeContext";
import Particles from "@/components/Particles/Particles";
import LightRays from "@/components/BackgroundAnimation/LightRays";

const HeroSection = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 transition-colors duration-500 overflow-hidden">

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

  {/* Left Text Content */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="flex-1 max-w-xl text-center md:text-left relative z-10"
  >
    <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
      Hi, I'm Sowmitra Guha
    </h1>
    <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300">
      A passionate Web Developer & Software Engineer<br />
      Building beautiful, fast, and scalable web applications.
    </p>
    <div className="mt-8 flex justify-center md:justify-start gap-4">
      <a
        href="#projects"
        className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:brightness-110 transition"
      >
        View Projects
      </a>
      <a
        href="#contact"
        className="inline-block px-6 py-3 rounded-md border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition"
      >
        Contact Me
      </a>
    </div>
  </motion.div>

  {/* Right Animation Content */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="flex-1 max-w-md md:max-w-lg mt-10 md:mt-0 relative z-10"
  >
    <Lottie animationData={heroAnimation} loop autoplay />
  </motion.div>
</section>

  );
};

export default HeroSection;
