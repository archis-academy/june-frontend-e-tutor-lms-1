import { HomePageCategories } from "@/components/HomePageCategories/HomePageCategories";
import { BestSellingCourses } from "@/components/BestSellingCourses/BestSellingCourses";
import { PopularInstructors } from "@/components/PopularInstructors/PopularInstructors";
import { HomePageCompanies } from "@/components/HomePageCompanies/HomePageCompanies";
import HomepageHeroSection from "@/components/HomepageHeroSection/HomepageHeroSection";
import FeatureCourse from "@/components/FeaturedCourses/FeaturedCourses";
import RecentlyAddedComponent from "@/Components/HomepageRecentlyAdded/HomepageRecentlyAdded";
import CtaComponent from "../components/CtaComponent/CtaComponent";
import { FooterTop } from "@/components/Footer/FooterTop/FooterTop";

export default function Home() {
  return (
    <main>
      <HomepageHeroSection />
      <HomePageCategories />
      <BestSellingCourses />

      <FeatureCourse />
      <RecentlyAddedComponent />
      <CtaComponent />
      <PopularInstructors />
      <HomePageCompanies />
      <FooterTop />
    </main>
  );
}
