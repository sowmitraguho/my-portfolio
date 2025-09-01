import React, { useContext } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react"; // for later Lottie animation
import educationAnimation from "../../assets/Lottifiles/Book loading.json"; // placeholder path
import Particles from "@/components/Particles/Particles";
import LightRays from "@/components/BackgroundAnimation/LightRays";
import { ThemeContext } from "@/Contexts/ThemeContexts/ThemeContext";

const educationData = [
  {
    title: "BSc in EEE",
    institution: "University of Chittagong",
    year: "CGPA 2.89 / 4.00",
    description:
      "Completed Bachelor of Science in Electrical and Electronic Engineering with a passion for technology and innovation. Developed strong analytical and problem-solving skills through coursework and projects.",
  },
  {
    title: "HSC",
    institution:
      "Chattagram City Corporation Kaiser-Niloufer College",
    year: "GPA: 4.50 / 5.00",
    description:
      "Completed Higher Secondary Certificate with a strong foundation in science and mathematics. Achieved soft skills like communication and teamwork.",
  },
  {
    title: "SSC",
    institution: "J M Sen School & College",
    year: "GPA: 5.00 / 5.00",
    description:
      "Achieved perfect GPA in Secondary School Certificate examination. Participated in various extracurricular activities and developed skills in team leadership and group collaboration.",
  },
];

const Education = () => {
  const { theme } = useContext(ThemeContext);
  const particleColors = theme === "dark"
    ? ["#ffffff", "#aaaaaa"] // light particles for dark mode
    : ["#1e40af", "#3b82f6"]; // blue-ish particles for light mode
  return (
    <section
      id="education"
      className="relative py-20 px-6 md:px-20 transition-colors duration-500"
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
                particleCount={500}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              /> 
      
            </div>
      {/* Headline */}
      <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6 text-center">
          My Education
      </h2>
      <p className="text-center mt-5 mb-24 text-xl">
        I am a self-taught web developer, so my academic background doesn't fully reflect my skills and experience in web development.
      </p>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Lottie Animation */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-64">
            <Lottie animationData={educationAnimation} loop={true} />
          </div>
        </div>

        {/* Right: Timeline */}
        <div className="w-full md:w-2/3 relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 h-full rounded-full"></div>

          <div className="flex flex-col gap-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:items-start"
                    : "md:flex-row-reverse md:items-start"
                }`}
              >
                {/* Connector dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Card */}
                <div className="mt-10 md:mt-0 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full md:w-[45%]">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.institution}
                  </p>
                  <p className="text-sm font-medium text-blue-500 dark:text-blue-400 mt-1">
                    {edu.year}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-3">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
