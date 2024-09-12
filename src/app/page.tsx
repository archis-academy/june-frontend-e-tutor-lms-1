import { HomePageCategories } from "@/Components/HomePageCategories/HomePageCategories";
import { BestSellingCourses } from "@/Components/BestSellingCourses/BestSellingCourses";
import { PopularInstructors } from "@/Components/PopularInstructors/PopularInstructors";
import { HomePageCompanies } from "@/Components/HomePageCompanies/HomePageCompanies";
import HomepageHeroSection from "@/Components/HomepageHeroSection/HomepageHeroSection";
import FeatureCourse from "@/Components/FeaturedCourses/FeaturedCourses";
import { FooterTop } from "@/Components/Footer/FooterTop/FooterTop";
import RecentlyAddedComponent from "@/Components/HomepageRecentlyAdded/HomepageRecentlyAdded";

export default function Home() {
  return (
    <main>
      <HomepageHeroSection />
      <HomePageCategories />
      <BestSellingCourses />
      <FeatureCourse />
      <RecentlyAddedComponent />
      <PopularInstructors />
      <HomePageCompanies />
      <FooterTop />
    </main>
  );
}
