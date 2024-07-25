import { HomePageCategories } from "@/components/HomePageCategories/HomePageCategories";
import { PopularInstructors } from "@/components/PopularInstructors/PopularInstructors";
import { HomePageCompanies } from "@/components/HomePageCompanies/HomePageCompanies";

export default function Home() {
  return (
    <main>
      <HomePageCategories />
      <PopularInstructors />
      <HomePageCompanies />
    </main>
  );
}
