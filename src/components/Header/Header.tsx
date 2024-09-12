"use client";

import React from "react";
import styles from "./Header.module.scss";
import HeaderLinks from "./HeaderLinks";
import { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <img
            src={isMenuOpen ? "/Header/close-icon.svg" : "/Header/menu-icon.svg"}
            alt="Menu"
          />
        </button>
        <nav className={`${styles.headerNav} ${isMenuOpen ? styles.open : ""}`}>
          <HeaderLinks />
        </nav>
        <div className={styles.selectContainer}>
          <select className={styles.currencySelect}>
            <option value="usd">USD</option>
            <option value="try">TRY</option>
          </select>
          <select className={styles.languageSelect}>
            <option value="english">English</option>
            <option value="turkish">Turkish</option>
          </select>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.menuContainer}>
          <nav className={styles.headerNavMobile}>
            <HeaderLinks />
          </nav>
        </div>
      )}
      <div className={styles.headerBottom}>
        <div className={styles.headerBottomLeft}>
          <div className={styles.logoDiv}>
            <img
              src="/Header/e-tutor.svg"
              alt="etutor-icons"
              className={styles.etutorLogo}
            />
            <span className={styles["e-tutor"]}>E-Tutor</span>
          </div>
          <select className={styles.headerBrowse}>
            <option value="browse">Browse</option>
            <option value="label">Label</option>
            <option value="business">Business</option>
            <option value="finance-accounting">Finance & Accounting</option>
            <option value="it-software">IT & Software</option>
            <option value="personal-development">Personal Development</option>
            <option value="office-productivity">Office Productivity</option>
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
            <div className={styles.notificationIcon}>
              <a href="#" onClick={toggleDropdown}>
                <img src="/Header/notification-icon.svg" alt="notification" />
              </a>
            </div>
            <div className={styles.dropdownWeb}>
              <div className={styles.heartIcon}>
                <a href="#">
                  <img src="/Header/heart-icon.svg" alt="heart" />
                </a>
              </div>
              <div className={styles.cartIcon}>
                <a href="#">
                  <img src="/Header/cart-icon.svg" alt="cart" />
                </a>
              </div>
            </div>
            {isDropdownOpen && (
              <div className={styles.dropdown}>
                <div className={styles.heartIcon}>
                  <a href="#">
                    <img src="/Header/heart-icon.svg" alt="heart" />
                  </a>
                </div>
                <div className={styles.cartIcon}>
                  <a href="#">
                    <img src="/Header/cart-icon.svg" alt="cart" />
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.createAccount}>Create Account</button>
            <button className={styles.signIn}>Sign In</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
