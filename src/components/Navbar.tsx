"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGraduationCap } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import NavigationItems from "../../assets/NavigationItems.json";
import mobileNavigationItems from "../../assets/mobileNavigationItems.json";
import NavLink from "./NavLink";
import NavDropdown from "./NavDropdown";
import MobileNavLink from "./MobileNavLink";
import MobileNavDropdown from "./MobileNavDropdown";
import Link from "next/link";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle theme"
      className="p-2 rounded-full hover:bg-blue-600 dark:hover:bg-gray-700 transition-colors duration-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} stroke="#ffff" />}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link
            href="#"
            className="text-white text-2xl font-bold flex items-center"
          >
            <FaGraduationCap className="mr-2" /> VicShaPer
          </Link>
          <div className="hidden lg:flex items-center space-x-4 ">
            <NavLink href="/" text="Home" />
            {NavigationItems.map((item, idx) => (
              <NavDropdown key={idx} text={item.text} items={item.items} />
            ))}
            <NavLink href="/contact" text="Contact" />
            <ThemeToggle />
          </div>
          <div className="lg:hidden flex items-center">
            <ThemeToggle />
            <button
              className="ml-4 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden mt-4">
            <MobileNavLink href="#" text="Home" />
            {mobileNavigationItems.map((item, id) => (
              <MobileNavDropdown key={id} text={item.text} items={item.items} />
            ))}
            <MobileNavLink href="#" text="Contact" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
