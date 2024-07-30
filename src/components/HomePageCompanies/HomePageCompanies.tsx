import Image from "next/image";
import Link from "next/link";
import { HomePageCompaniesData } from "./HomePageCompaniesData";
import styles from "./HomePageCompanies.module.scss";

export const HomePageCompanies = () => {
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
        {HomePageCompaniesData.map((item, index) => {
          return (
            <div className={styles.companyLogoCard} key={index}>
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
