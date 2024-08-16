"use client"

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { useState } from "react";
import {
   
      FaChevronDown,
    } from "react-icons/fa";


type Item = {
  text:string,
  href:string
}

type Props = {
  text:string,
  items:Item[]
}

const MobileNavDropdown = ({ text, items }:Props) => {
      const [isOpen, setIsOpen] = useState(false);
    
      return (
        <div>
          <button
            className="w-full text-left text-white hover:text-blue-200 py-2 flex items-center justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            {text}{" "}
            <FaChevronDown
              className={`ml-1 transform ${
                isOpen ? "rotate-180" : ""
              } transition-transform`}
            />
          </button>
          {isOpen && (
            <div className="pl-4">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-white hover:text-blue-200 py-2"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    };


export default MobileNavDropdown 