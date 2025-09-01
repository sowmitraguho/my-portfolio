import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import { NameLogo } from "../NameLogo/NameLogo";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaFacebookF,
  FaEnvelope,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

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

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <header className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-md shadow-md border-b border-gray-200/50 dark:border-gray-800/50 fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2">

          <NameLogo />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition hover:from-red-500 hover:via-pink-500 hover:to-blue-500 hover:bg-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition hover:from-red-500 hover:via-pink-500 hover:to-blue-5000"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition hover:from-red-500 hover:via-pink-500 hover:to-blue-5000"
          >
            My Projects
          </Link>

          <Link
            to="/contact"
            className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition hover:from-red-500 hover:via-pink-500 hover:to-blue-500"
          >
            Contact
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <ThemeToggle />
          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:flex gap-2"
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


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col p-4 gap-3">
            <Link
              to="/"
              className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition hover:from-red-500 hover:via-pink-500 hover:to-blue-500 hover:bg-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition hover:from-red-500 hover:via-pink-500 hover:to-blue-5000"
            >
              About Me
            </Link>

            <Link
              to="/contact"
              className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition hover:from-red-500 hover:via-pink-500 hover:to-blue-500"
            >
              Contact Me
            </Link>
          </div>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex gap-2 p-4"
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
      )}
    </header>
  );
};

export default Navbar;