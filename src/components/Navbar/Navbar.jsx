import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import { NameLogo } from "../NameLogo/NameLogo";

const Navbar = () => {
  //const { loggedInUser, logOut, loading } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //if(loading) return <Spinner/>;

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
            to="/contactus"
            className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition hover:from-red-500 hover:via-pink-500 hover:to-blue-500"
          >
            Contact
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <ThemeToggle />

        

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
            About Us
          </Link>
          
          <Link
            to="/contact"
            className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition hover:from-red-500 hover:via-pink-500 hover:to-blue-500"
          >
            Contact Us
          </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;