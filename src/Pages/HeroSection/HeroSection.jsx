import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../../assets/Lottifiles/heroAnimation.json"; 

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 max-w-xl text-center md:text-left"
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
        className="flex-1 max-w-md md:max-w-lg mt-10 md:mt-0"
      >
        <Lottie animationData={heroAnimation} loop={true} autoplay={true} />

      </motion.div>
    </section>
  );
};

export default HeroSection;
