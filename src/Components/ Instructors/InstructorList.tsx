import React from "react";
import InstructorCard from "./InstructorCard";
import { Instructor } from "@/types/Instructor";
import "@/public/common/iconNima.svg";
import "@/public/common/iconVako.svg";

const InstructorList: React.FC = () => {
  const instructors: Instructor[] = [
    {
      image: "iconVako.svg",
      name: "Vako Shvili",
      title: "Web Designer & Best-Selling Instructor",
      rating: 4.9,
      students: 236568,
      courses: 9,
      description: "One day Vako had enough with the 9-to-5 grind...",
    },
    {
      image: "/iconNima.svg",
      name: "Nima Tahami",
      title: "Entrepreneur & Designer - Founder of ShiftRide",
      rating: 4.6,
      students: 5342,
      courses: 1,
      description:
        "I'm an entrepreneur & designer with a high passion for building products...",
    },
  ];

  return (
    <div>
      {instructors.map((instructor, index) => (
        <InstructorCard key={index} {...instructor} />
      ))}
    </div>
  );
};

export default InstructorList;
