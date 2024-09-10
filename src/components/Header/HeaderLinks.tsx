import React from "react";
import Link from "next/link";
import { NavLink } from "../../types/navlinkTypes";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/become-an-instructor", label: "Become an Instructor" },
];

const HeaderLinks: React.FC = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <ul className={styles.headerNavLinks}>
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`${styles.link} ${
              pathname === link.href ? styles.active : ""
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderLinks;
