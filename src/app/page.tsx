import { HomePageCategories } from "@/components/HomePageCategories/HomePageCategories";
import { BestSellingCourses } from "@/components/BestSellingCourses/BestSellingCourses";
import { PopularInstructors } from "@/components/PopularInstructors/PopularInstructors";
import { HomePageCompanies } from "@/components/HomePageCompanies/HomePageCompanies";

export default function Home() {
  return (
    <main>
      <HomePageCategories />
      <BestSellingCourses />
      <PopularInstructors />
      <HomePageCompanies />
    </main>
  );
}
