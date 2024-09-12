import React from "react";
import styles from "./HomepageHeroSection.module.scss";
import Image from "next/image";

const HomepageHeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h1>
          Learn with expert <br /> anytime anywhere
        </h1>
        <p>
          Our mission is to help people to find the best course <br /> online and
          learn with expert anytime, anywhere.
        </p>
        <button className={styles.createAccountButton}>Create Account</button>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/HomepageHeroSection/heroSectionImage.png"
          alt="Homepage Hero Image"
          width={900}
          height={548}
        />
      </div>
    </section>
  );
};

export default HomepageHeroSection;
