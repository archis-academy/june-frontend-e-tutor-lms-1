import { HomePageCategories } from "@/components/HomePageCategories/HomePageCategories";
import { BestSellingCourses } from "@/components/BestSellingCourses/BestSellingCourses";
import { PopularInstructors } from "@/components/PopularInstructors/PopularInstructors";
import { HomePageCompanies } from "@/components/HomePageCompanies/HomePageCompanies";
import  FeatureCourse  from "@/components/FeaturedCourses/FeaturedCourses";
import DescriptionComponent from "../Components/SingleCourseDescriptionComponent/SingleCourseDescriptionComponent";

export default function Home() {
  return (
    <main>
      <DescriptionComponent />
      <HomePageCategories />
      <BestSellingCourses />
      <FeatureCourse/>
      <PopularInstructors />
      <HomePageCompanies />
    </main>
  );
}
