"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: "/", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "portofolio", label: "Portofolio", href: "/portofolio" },
    { id: "skills", label: "Skills", href: "/skills" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full px-6 py-4 transition-all duration-500 z-50 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center transform hover:rotate-12 transition-all duration-300">
            <span className="font-bold text-white text-xl">W</span>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-purple-500/30 animate-pulse"></div>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Wafi
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                pathname === item.href
                  ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <div className="h-1 w-full bg-gradient-to-r from-indigo-400 to-purple-500 mt-1 rounded-full"></div>
              )}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="/CV_Wafi_ATS.pdf"
            download
            className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                  menuOpen ? "rotate-45 top-2" : "top-0"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-full bg-white top-2 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                  menuOpen ? "-rotate-45 top-2" : "top-4"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-800/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 mb-2 rounded-lg font-medium transition-all duration-300 ${
                pathname === item.href
                  ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            className="w-full block px-4 py-3 mt-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
