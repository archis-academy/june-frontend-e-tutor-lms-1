import Image from "next/image";
import Link from "next/link";
import { HomePageCompaniesType } from "@/types/homePageCompanies";
import { HomePageCompaniesData } from "./HomePageCompaniesData";
import styles from "./HomePageCompanies.module.scss";

export const HomePageCompanies = () => {
  const companies: HomePageCompaniesType[] = HomePageCompaniesData;
  return (
    <section className={styles.homePageCompanies}>
      <div className={styles.info}>
        <h3 className={styles.title}>6.3K Trusted Companies</h3>
        <p className={styles.description}>
          Nullam egestas tellus at enim ornare tristique. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra.
        </p>
      </div>
      <div className={styles.companyLogosWrapper}>
        {companies.map((item) => {
          return (
            <div className={styles.companyLogoCard}>
              <Link href={item.website} target="_blank">
                <Image
                  src={item.companyLogo}
                  width={100}
                  height={100}
                  alt="company-logo"
                  className={styles.companyLogo}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
