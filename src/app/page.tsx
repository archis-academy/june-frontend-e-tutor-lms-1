import { HomePageCategories } from "@/components/HomePageCategories/HomePageCategories";
import { PopularInstructors } from "@/components/PopularInstructors/PopularInstructors";
import { HomePageCompanies } from "@/components/HomePageCompanies/HomePageCompanies";
import  FeatureCourse  from "@/components/FeaturedCourses/FeaturedCourses";

export default function Home() {
  return (
    <main>
      <HomePageCategories />
      <FeatureCourse/>
      <PopularInstructors />
      <HomePageCompanies />
    </main>
  );
}
