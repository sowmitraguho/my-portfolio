import React, { useContext } from "react";
import { SiC, SiCplusplus, SiJavascript, SiTypescript, SiPython, SiReact, SiTailwindcss, SiBootstrap, SiHtml5, SiCss3, SiDaisyui, SiShadcnui, SiExpress, SiNodedotjs, SiFirebase, SiMongodb, SiNetlify, SiRender, SiGit, SiNextdotjs } from "react-icons/si";
import Lottie from "lottie-react";
import skillsAnimation from "@/assets/Lottifiles/skillsAnimation.json"; // Replace with your lottie JSON path
import { ThemeContext } from "@/Contexts/ThemeContexts/ThemeContext";
import Particles from "@/components/Particles/Particles";
import LightRays from "@/components/BackgroundAnimation/LightRays";
import SkillCard from "@/components/SkillCard/SkillCard";

const skillSections = [
  {
    section: "Programming Languages",
    skills: [
      { name: "C", icon: <SiC size={30} />, description: "Procedural programming language" },
      { name: "C++", icon: <SiCplusplus size={30} />, description: "Object-oriented programming" },
      { name: "JavaScript", icon: <SiJavascript size={30} />, description: "Dynamic scripting language" },
      { name: "TypeScript", icon: <SiTypescript size={30} />, description: "JavaScript with types (Learning)" },
      { name: "Python", icon: <SiPython size={30} />, description: "High-level general purpose" },
    ],
  },
  {
    section: "Frontend Technologies",
    skills: [
      { name: "ReactJS", icon: <SiReact size={30} />, description: "UI library" },
      { name: "TailwindCSS", icon: <SiTailwindcss size={30} />, description: "Utility-first CSS" },
      { name: "Bootstrap", icon: <SiBootstrap size={30} />, description: "CSS framework" },
      { name: "HTML", icon: <SiHtml5 size={30} />, description: "Markup language" },
      { name: "CSS", icon: <SiCss3 size={30} />, description: "Style sheets" },
      { name: "DaisyUI", icon: <SiDaisyui size={30} />, description: "Tailwind CSS components" },
      { name: "ShadcnUI", icon: <SiShadcnui size={30} />, description: "Component library" },
      { name: "NextJS", icon: <SiNextdotjs size={30} />, description: "React framework (Learning)" },
    ],
  },
  {
    section: "Backend & Databases",
    skills: [
      { name: "Express", icon: <SiExpress size={30} />, description: "Node.js framework" },
      { name: "NodeJS", icon: <SiNodedotjs size={30} />, description: "JavaScript runtime" },
      { name: "Firebase", icon: <SiFirebase size={30} />, description: "Backend platform" },
      { name: "MongoDB", icon: <SiMongodb size={30} />, description: "NoSQL database" },
    ],
  },
  {
    section: "DevOps & Version Control",
    skills: [
      { name: "Netlify", icon: <SiNetlify size={30} />, description: "Deployment platform" },
      { name: "Render", icon: <SiRender size={30} />, description: "Cloud hosting" },
      { name: "Git", icon: <SiGit size={30} />, description: "Version control" },
    ],
  },
];



const SkillSection = () => {
  const { theme } = useContext(ThemeContext);
  const particleColors = theme === "dark"
    ? ["#ffffff", "#aaaaaa"] 
    : ["#1e40af", "#3b82f6"];
  return (
    <section className="relative px-6 md:px-20 py-16 transition-colors duration-500 min-h-screen">
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
      <h2 className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
        My Skills & Expertise
      </h2>
     <div className="flex flex-col-reverse md:flex-row items-start gap-10">
       {/* Left Skills List */}
      <div className="flex-1 space-y-10 max-w-xl w-full">
        {skillSections.map(({ section, skills }) => (
          <div key={section}>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">{section}</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map(({ name, icon, description }) => (
                <SkillCard key={name} icon={icon} name={name} description={description} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Lottie Animation */}
      <div className="flex-1 max-w-lg w-full md:flex items-center justify-center md:mt-50">
        <Lottie animationData={skillsAnimation} loop autoplay style={{ width: "100%", height: "100%" }} />
      </div>
     </div>
    </section>
  );
};

export default SkillSection;
