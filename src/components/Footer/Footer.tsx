import React from "react";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterMiddle from "./FooterMiddle/FooterMiddle";
import styles from "./Footer.module.scss";



export default function Footer() {
  return (
    <footer>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom/>
    </footer>
  );
}