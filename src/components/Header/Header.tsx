import React from "react";
import styles from "./Header.module.scss";
import HeaderLinks from "./HeaderLinks";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <nav className={styles.headerNav}>
          <HeaderLinks />
        </nav>
        <div className={styles.selectContainer}>
          <select className={styles.currencySelect}>
            <option value="usd">USD</option>
            <option value="tl">TL</option>
          </select>
          <select className={styles.languageSelect}>
            <option value="english">English</option>
            <option value="turkish">Turkish</option>
          </select>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className={styles.headerBottomLeft}>
          <div className={styles.logoDiv}>
            <img
              src="/Header/e-tutor.svg"
              alt="etutor-icons"
              className={styles.etutorLogo}
            />
            <p className={styles.etutor}>E-tutor</p>
          </div>
          <select name="" id="" className={styles.headerBrowse}>
            <option value="browse">Browse</option>
          </select>
          <div className={styles.headerSearch}>
            <img
              src="/Header/search-icon.svg"
              alt="search"
              className={styles.searchIcon}
            />
            <input
              className={styles.headerSearchInput}
              type="text"
              name=""
              id=""
              placeholder="What do you want to learn..."
            />
          </div>
        </div>
        <div className={styles.headerBottomRight}>
          <div className={styles.headerIcons}>
            <img src="/Header/notification-icon.svg" alt="notification" />
            <img src="/Header/heart-icon.svg" alt="heart" />
            <img src="/Header/cart-icon.svg" alt="cart" />
          </div>
          <button className={styles.createAccount}>Create Account</button>
          <button className={styles.signIn}>Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
