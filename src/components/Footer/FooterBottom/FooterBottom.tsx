'use client';

import React, { useState } from "react";
import styles from './FooterBottom.module.scss';

export default function FooterBottom() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <footer className={styles.footer}> 
            <div className={styles.footerBox}>
                <p>© 2021 - Eduflex. Designed by Templatecookie. All rights reserved</p>  
                <div className={styles.menuContainer + (menuOpen ? ' ' + styles.open : '')} onClick={toggleMenu}>
                    <div className={styles.menuItem}>
                        <a href="#link1">English</a>
                        <span className={styles.arrow}></span>
                    </div>
                    {menuOpen && (
                        <div className={styles.subMenu}>
                            <div className={styles.subMenuItem}><a href="#link2">Turkish</a></div>
                            <div className={styles.subMenuItem}><a href="#link3">French</a></div>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}