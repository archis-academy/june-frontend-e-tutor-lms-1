import { PopularInstructors } from "@/components/PopularInstructors/PopularInstructors";
import { HomePageCompanies } from "@/components/HomePageCompanies/HomePageCompanies";
import HomepageHeroSection from "@/components/HomepageHeroSection/HomepageHeroSection";

export default function Home() {
  return (
    <main>
      <HomepageHeroSection />
      <PopularInstructors />
      <HomePageCompanies />
    </main>
  );
}
