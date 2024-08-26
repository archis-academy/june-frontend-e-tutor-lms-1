"use client";
import Image from "next/image";
import Etour from "../../../../public/etutorlogo.png";
import Facebook from "../../../../public/facebook.png";
import Twitter from "../../../../public/Twiter.png";
import Linkledin from "../../../../public/Linkedin.png";
import Youtube from "../../../../public/youtube.png";
import Apple from "../../../../public/applelogo.png";
import Google from "../../../../public/googleapp.png";

import { useState } from "react";
import styles from "./FooterBottom.module.scss";

export default function FooterBottom() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footersectionbox}>
        <div className={styles.footersectionboxleft}>
          <Image src={Etour} width={175} height={50} alt="logo" />
          <p>
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis
            odio at..
          </p>
          <div className={styles.footersectionsocial}>
            <a href="https://www.facebook.com/">
              <Image src={Facebook} width={20} height={20} alt="logo" />
            </a>
            <a href="https://twitter.com/">
              <Image src={Twitter} width={20} height={20} alt="logo" />
            </a>
            <a href="https://www.linkledin.com/">
              <Image src={Linkledin} width={20} height={20} alt="logo" />
            </a>
            <a href="https://www.youtube.com/">
              <Image src={Youtube} width={20} height={20} alt="logo" />
            </a>
          </div>
        </div>
        <div className={styles.footersectionboxmiddle}>
          <div className={styles.footersectionboxmiddlebox}>
            <h3>Top 4 Category</h3>
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
          <div className={styles.footersectionboxmiddlebox}>
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
          <div className={styles.footersectionboxmiddlebox}>
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
        <div className={styles.footersectionboxright}>
          <h3>Downlaod our app</h3>
          <div className={styles.footersectionboxrightapp}>
            <Image src={Apple} width={30} height={30} alt="logo" />
            <div>
              <h3>Download now</h3>
              <a href="https://www.apple.com/tr/watch/">App Store</a>
            </div>
          </div>
          <div className={styles.footersectionboxrightapp}>
            <Image src={Google} width={30} height={30} alt="logo" />
            <div>
              <h3>Download now</h3>
              <a href="https://play.google.com/">App Store</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBox}>
        <p>© 2021 - Eduflex. Designed by Templatecookie. All rights reserved</p>
        <div
          className={styles.menuContainer + (menuOpen ? " " + styles.open : "")}
          onClick={toggleMenu}
        >
          <div className={styles.menuItem}>
            <a href="#link1">English</a>
            <span className={styles.arrow}></span>
          </div>
          {menuOpen && (
            <div className={styles.subMenu}>
              <div className={styles.subMenuItem}>
                <a href="#link2">Turkish</a>
              </div>
              <div className={styles.subMenuItem}>
                <a href="#link3">French</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
