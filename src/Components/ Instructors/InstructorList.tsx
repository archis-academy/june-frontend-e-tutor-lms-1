import React from "react";
import InstructorCard from "./InstructorCard";
import { Instructor } from "@/types/Instructor";
import iconVako from "@/public/common/iconVako.svg";
import iconNima from "@/public/common/iconNima.svg";

const InstructorList: React.FC = () => {
  const instructors: Instructor[] = [
    {
      image: "/common/iconVako.svg",
      name: "Vako Shvili",
      title: "Web Designer & Best-Selling Instructor",
      rating: 4.9,
      students: 236568,
      courses: 9,
      description:
        "One day Vako had enough with the 9-to-5 grind, or more like 0-to-9 in his case, and quit his job, or more like got himself fired from his own startup. He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed...READ MORE",
    },
    {
      image: "/common/iconNima.svg",
      name: "Nima Tahami",
      title: "Entrepreneur & Designer - Founder of ShiftRide",
      rating: 4.6,
      students: 5342,
      courses: 1,
      description:
        "I'm an entrepreneur & designer with a high passion for building products of all sorts and seeing ideas come to life. As a serial entrepreneur, I've designed and built projects in fields ranging from fashion to technology. I have over 10 years of experience in both...READ MORE",
    },
  ];

  return (
    <div>
      <h2 className="heading">Course instructor (02)</h2>
      <InstructorCard {...instructors[0]} />
      {instructors.slice(1).map((instructor, index) => (
        <InstructorCard key={index} {...instructor} />
      ))}
    </div>
  );
};

export default InstructorList;
