import React from "react";

const Footer = () => {
  const year = new Date();
  return (
    <div>
      <footer className="rounded-lg dark:bg-gray-800 w-full bg-blue-500 text-white">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm sm:text-center dark:text-gray-400">
            © {year.getFullYear()} Your University Name. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-mediu dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Academics
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Admissions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Research
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Campus Life
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Terms of Use Applicable Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                All rights reserve
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
