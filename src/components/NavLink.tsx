import Link from "next/link";
import React from "react";

type Item = {
  text: string;
  href: string;
};

const NavLink = ({ href, text }: Item) => (
  <Link
    href={href}
    className="text-white hover:text-blue-200 hover:bg-blue-700 rounded-2xl p-2  py-2 dark:hover:bg-gray-600 dark:rounded-2xl dark:p-2"
  >
    {text}
  </Link>
);

export default NavLink;
