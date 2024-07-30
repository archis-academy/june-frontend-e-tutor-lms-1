import React from "react";
import { HomePageCompanies } from "@/components/HomePageCompanies/HomePageCompanies";
import { PopularInstructors } from "@/components/PopularInstructors/PopularInstructors";
import FeaturedCourses from "@/components/FeaturedCourses/featuredcourses";


export default function Home() {
  return (
    <main>
      <div>
        <FeaturedCourses />
        <PopularInstructors />
        <HomePageCompanies />
      </div>
    </main>
  );
}
