import Image from "next/image";
import ETutorLogo from "@/public/Footer/e-tutor-logo.svg";
import Facebook from "@/public/Footer/facebook.svg";
import Twitter from "@/public/Footer/twitter.svg";
import Linkledin from "@/public/Footer/linkedin.svg";
import Youtube from "@/public/Footer/youtube.svg";
import Apple from "@/public/Footer/apple.svg";
import Instagram from "@/public/Footer/insta.svg";
import Google from "@/public/Footer/google-play.svg";
import downArrow from "@/public/Footer/down-arrow.svg";
import styles from "./FooterBottom.module.scss";

export default function FooterBottom() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.socialWrapper}>
          <div className={styles.logoWrapper}>
            <Image src={ETutorLogo} alt="logo" />
          </div>
          <p className={styles.description}>
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis
            odio at.
          </p>
          <div className={styles.socialIconsWrapper}>
            <a
              className={styles.socialIcon}
              href="https://www.facebook.com/"
              target="_blank"
            >
              <Image src={Facebook} alt="logo" />
            </a>
            <a
              className={styles.socialIcon}
              href="https://twitter.com/"
              target="_blank"
            >
              <Image src={Instagram} alt="logo" />
            </a>
            <a
              className={styles.socialIcon}
              href="https://www.linkledin.com/"
              target="_blank"
            >
              <Image src={Linkledin} alt="logo" />
            </a>
            <a
              className={styles.socialIcon}
              href="https://twitter.com/"
              target="_blank"
            >
              <Image src={Twitter} alt="logo" />
            </a>
            <a
              className={styles.socialIcon}
              href="https://www.youtube.com/"
              target="_blank"
            >
              <Image src={Youtube} alt="logo" />
            </a>
          </div>
        </div>
        <div className={styles.linksWrapper}>
          <div className={styles.linkColumn}>
            <h3>Top 4 Categories</h3>
            <ul>
              <li>
                <a href="#">Finance & Accounting</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Become Instructor</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.downloadsContainer}>
          <h3>download our app</h3>
          <div className={styles.storeWrapper}>
            <Image src={Apple} alt="logo" />
            <div>
              <h2>Download now</h2>
              <a href="https://www.apple.com/tr/watch/">App Store</a>
            </div>
          </div>
          <div className={styles.storeWrapper}>
            <Image src={Google} alt="logo" />
            <div>
              <h2>Download now</h2>
              <a href="https://play.google.com/">App Store</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightWrapper}>
        <p>
          © 2021 - Eduflex. Designed by <span>Templatecookie</span>. All rights
          reserved
        </p>
        <div className={styles.languageSelection}>
          <select className={styles.menuContainer}>
            <option>English</option>
            <option>Turkish</option>
          </select>
          <span>
            <Image src={downArrow} alt="down-arrow" />
          </span>
        </div>
      </div>
    </footer>
  );
}
