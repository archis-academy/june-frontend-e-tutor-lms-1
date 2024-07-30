import React from "react";
import FeaturedCourses from "@/app/components/FeaturedCourses/featuredcourses";
import { HomePageCompanies } from "@/components/HomePageCompanies/HomePageCompanies";
import { PopularInstructors } from "@/components/PopularInstructors/PopularInstructors";


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
