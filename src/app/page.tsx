import { HomePageCategories } from "@/components/HomePageCategories/HomePageCategories";
import { PopularInstructors } from "@/components/PopularInstructors/PopularInstructors";
import { HomePageCompanies } from "@/components/HomePageCompanies/HomePageCompanies";
import CtaComponent from "../components/CtaComponent/CtaComponent";

export default function Home() {
  return (
    <main>
      <HomePageCategories />
      <CtaComponent/>
      <PopularInstructors />
      <HomePageCompanies />
      
    </main>
  );
}
