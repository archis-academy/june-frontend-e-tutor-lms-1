import Image from "next/image";
import styles from "./CtaComponent.module.scss";
import arrowRightImg from "@/public/common/arrow-right.svg";
import ctaImg from "@/public/PopularInstructors/cta-profile.png";

function CtaComponent() {
  return (
    <div className={`${styles["cta-component"]}`}>
      <div className={`${styles["cta-content"]}`}>
        <div className={`${styles["cta-content-left"]}`}>
          <div className={`${styles["cta-content-left-title-btn"]}`}>
            <h3 className={`${styles["cta-content-left-header"]}`}>
              Become an instructor
            </h3>
            <p className={`${styles["cta-content-left-paragraph"]}`}>
              Instructors from around the world teach millions of students on Udemy.
              We provide the tools and skills to teach what you love.
            </p>

            <a href="#">
              Start teaching{" "}
              <Image
                className={`${styles["cta-content-left-btn-arrow"]}`}
                src={arrowRightImg}
                alt="arrowRightImg"
              />
            </a>
          </div>

          <Image
            style={{ width: "clamp(170px, 500px, 300px)", height: "270px" }}
            src={ctaImg}
            alt="CtaImg"
          />
        </div>
        <div className={`${styles["cta-content-right"]}`}>
          <h3 className={`${styles["cta-content-right-header"]}`}>
            Your teaching & earning steps
          </h3>
          <div className={`${styles["cta-content-right-steps"]}`}>
            <div className={`${styles["cta-content-right-steps-one"]}`}>
              <span style={{ backgroundColor: "#EBEBFF", color: "#564FFD" }}>1</span>
              <p>Apply to become instructor</p>
            </div>
            <div className={`${styles["cta-content-right-steps-one"]}`}>
              <span style={{ backgroundColor: "#FFF0F0", color: "#FF6636" }}>2</span>
              <p>Build & edit your profile</p>
            </div>

            <div className={`${styles["cta-content-right-steps-one"]}`}>
              <span style={{ backgroundColor: "#FFF0F0", color: "#E34444" }}>3</span>
              <p>Create your new course</p>
            </div>
            <div className={`${styles["cta-content-right-steps-one"]}`}>
              <span style={{ backgroundColor: "#E1F7E3", color: "#23BD33" }}>4</span>
              <p>Start teaching & earning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CtaComponent;
