import { HomePageCompaniesType } from "@/types/homePageCompanies";
import { HomePageCompaniesData } from "./HomePageCompaniesData";
import styles from "./HomePageCompanies.module.scss";

export const HomePageCompanies = () => {
  const companies: HomePageCompaniesType[] = HomePageCompaniesData;
  return <section className={styles.homePageCompanies}>HomePageCompanies</section>;
};
