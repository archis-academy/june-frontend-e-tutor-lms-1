import { BestSellingCourses } from "@/components/BestSellingCourses/BestSellingCourses";
import { PopularInstructors } from "@/components/PopularInstructors/PopularInstructors";
import { HomePageCompanies } from "@/components/HomePageCompanies/HomePageCompanies";

export default function Home() {
  return (
    <main>
      <BestSellingCourses />
      <PopularInstructors />
      <HomePageCompanies />
    </main>
  );
}
