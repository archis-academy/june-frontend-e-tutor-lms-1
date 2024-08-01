import React from "react";
import styles from "./FooterTop.module.scss";

export default function FooterTop() {
    return (
       <footer className={styles.footertopbox}>
        <div className={styles.footertopboxone}>
            <div>
             <p>Start learning with 67.1k students around the world.</p>
             <div className={styles.footertopboxonesection}>
                <button>Join the Family</button>
                <button>Browse all courses</button>
             </div>
             </div>
             <div className={styles.footertopboxtwo}>
            <div className={styles.footertopboxtwoall}>
                <h5>6.3k</h5>
                <p>Online courses</p>
            </div>
            <div className={styles.footertopboxtwoall}>
                <h5>26k</h5>
                <p>Certified Instructor</p>
            </div>
            <div className={styles.footertopboxtwoall}>
                <h5>99.9%</h5>
                <p>Sucess Rate</p>
            </div>
        </div>
        </div>
       </footer>    
    );
}