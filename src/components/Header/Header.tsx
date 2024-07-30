import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavLinks}>
            <li>
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className={styles.link}>
                Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.link}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/become-an-instructor" className={styles.link}>
                Become an Instructor
              </Link>
            </li>
          </ul>
        </nav>
        <select name="" id="">
          <option value="english">English</option>
          <option value="turkish">Turkish</option>
        </select>
      </div>
      <div className={styles.headerBottom}>
        <div className={styles.headerBottomLeft}>
          <div className={styles.logoDiv}>
            <img
              src="/e-tutor.svg"
              alt="etutor-icons"
              className={styles.etutorLogo}
            />
            <p className={styles.etutor}>E-tutor</p>
          </div>
          <select name="" id="" className={styles.headerBrowse}>
            <option value="browse">Browse</option>
          </select>
          <input
            className={styles.headerSearch}
            type="text"
            name=""
            id=""
            placeholder="What do you want to learn..."
          />
        </div>
        <div className={styles.headerBottomRight}>
          <img src="/notification-icon.svg" alt="notification" />
          <img src="/heart-icon.svg" alt="heart" />
          <img src="/cart-icon.svg" alt="cart" />
          <button className={styles.createAccount}>Create Account</button>
          <button className={styles.signIn}>Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
