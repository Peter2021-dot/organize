import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

type Item = {
  text: string;
  href: string;
};

type Props = {
  text: string;
  items: Item[];
};

const NavDropdown = ({ text, items }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 100); // Delay closing by 300ms
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <button
        className="text-white py-1 flex items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50  rounded-2xl p-2 hover:bg-blue-700 dark:hover:bg-gray-600 dark:rounded-2xl dark:p-2"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {text} <FaChevronDown className="ml-1" />
      </button>
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md dark:rounded-2xl py-2 z-10"
          role="menu"
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 rounded-2xl dark:rounded-2xl text-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-gray-500 hover:text-white focus:bg-blue-500 focus:text-white focus:outline-none"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
