import React, { useContext } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../../assets/Lottifiles/heroAnimation2.json";
import Galaxy from "@/components/BackgroundAnimation/Galaxy";
import { ThemeContext } from "@/Contexts/ThemeContexts/ThemeContext";
import Particles from "@/components/Particles/Particles";
import LightRays from "@/components/BackgroundAnimation/LightRays";
import { Link } from "react-router";

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);
  const particleColors = theme === "dark"
    ? ["#ffffff", "#aaaaaa"] 
    : ["#1e40af", "#3b82f6"];
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 transition-colors duration-500 overflow-hidden pt-24 md:pt-6">

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
        {theme == 'dark' ? <Particles
          particleColors={particleColors}
          particleCount={600}
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
          <Link
            to=""
            className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:scale-102"
          >
            Download Resume
          </Link>


          {/* Second button: router Link with cleaner gradient border */}
          <Link
            to="/contact"
            className="inline-block px-16 py-3 rounded-md border-2 border-transparent font-semibold relative overflow-hidden group hover:scale-102"
          >
            {/* Border Gradient */}
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]">
              <span className="flex h-full w-full rounded-md bg-white dark:bg-gray-900 items-center justify-center group-hover:bg-gradient-to-r transition-all duration-300">
                Contact Me
              </span>
            </span>
          </Link>
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
