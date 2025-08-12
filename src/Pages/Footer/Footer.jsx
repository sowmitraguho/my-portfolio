import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaFacebookF,
  FaEnvelope,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import Lottie from "lottie-react";
import footerAnim from "../../assets/Lottifiles/footer.json"; // replace with your Lottie JSON

const socialLinks = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/sowmitra-guha-a6066b329",
    label: "LinkedIn",
    color: "text-blue-600",
  },
  {
    icon: <FaFacebookF />,
    href: "https://facebook.com/bndas2",
    label: "Facebook",
    color: "text-blue-700",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:sowmitraguha@gmail.com",
    label: "Email",
    color: "text-red-500",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/sowmitraguho",
    label: "GitHub",
    color: "text-gray-900 dark:text-gray-100",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/+8801521227827",
    label: "WhatsApp",
    color: "text-green-500",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Lottie Animation */}
        <div className="w-32 h-32">
          <Lottie animationData={footerAnim} loop={true} />
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex gap-6"
        >
          {socialLinks.map(({ icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.3, color: "#8b5cf6" }} // violet-500 on hover
              whileTap={{ scale: 0.9 }}
              className={`${color} text-2xl transition-colors duration-300`}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Optional copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-10 text-gray-600 dark:text-gray-400 text-sm"
      >
        © {new Date().getFullYear()} Sowmitra Guha. All rights reserved.
      </motion.p>
    </footer>
  );
}
