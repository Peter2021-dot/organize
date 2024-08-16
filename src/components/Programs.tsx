"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { programs } from "../data/programsData";
import ProgramCard from "./ProgramCard";

const Programs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, description, image } = programs[currentIndex];

  const handleCircleClick = (e: any) => {
    if (e.target.closest(".prev-button") || e.target.closest(".next-button")) {
      return;
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % programs.length);
  };

  const handlePrev = (e: React.FormEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? programs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e: React.FormEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % programs.length);
  };

  return (
    <div className="py-16 bg-gray-100 flex justify-center items-center">
      <div
        className="w-[600px] h-[600px] rounded-full border-4 border-gray-700 flex flex-col items-center justify-center relative cursor-pointer overflow-hidden"
        onClick={handleCircleClick}
      >
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 prev-button">
          <button
            className="text-gray-700 hover:text-gray-900 p-2"
            onClick={handlePrev}
          >
            <FaChevronLeft className="text-3xl" />
          </button>
        </div>
        <ProgramCard title={title} description={description} image={image} />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 next-button">
          <button
            className="text-gray-700 hover:text-gray-900 p-2"
            onClick={handleNext}
          >
            <FaChevronRight className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
