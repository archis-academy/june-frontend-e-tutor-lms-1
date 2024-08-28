import { HomePageCategories } from "@/components/HomePageCategories/HomePageCategories";
import { BestSellingCourses } from "@/components/BestSellingCourses/BestSellingCourses";
import { PopularInstructors } from "@/components/PopularInstructors/PopularInstructors";
import { HomePageCompanies } from "@/components/HomePageCompanies/HomePageCompanies";
import FeatureCourse from "@/components/FeaturedCourses/FeaturedCourses";
import { FooterTop } from "@/components/Footer/FooterTop/FooterTop";

export default function Home() {
  return (
    <main>
      <HomePageCategories />
      <BestSellingCourses />
      <FeatureCourse />
      <PopularInstructors />
      <HomePageCompanies />
      <FooterTop />
    </main>
  );
}
