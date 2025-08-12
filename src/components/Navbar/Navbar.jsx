import React, { useState } from "react";
import { Link } from "react-router"; // or "react-router" if you use that
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border shadow-md dark:bg-background dark:border-border z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          Your Name
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {["about", "projects", "contact"].map((item) => (
            <Link
              key={item}
              to={`#${item}`}
              className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition hover:from-red-500 hover:via-pink-500 hover:to-blue-500"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <Button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90"
          >
            Download Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border dark:bg-background dark:border-border">
          <div className="flex flex-col p-4 gap-4">
            {["about", "projects", "contact"].map((item) => (
              <Link
                key={item}
                to={`#${item}`}
                className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition hover:from-red-500 hover:via-pink-500 hover:to-blue-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <Button
              onClick={() => {
                window.open("/resume.pdf", "_blank");
                setMobileMenuOpen(false);
              }}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 w-full"
            >
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
