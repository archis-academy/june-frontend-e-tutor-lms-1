import Image from "next/image";
import { CourseFilterData } from "@/types/courseFilter";
import styles from "./Accordion.module.scss";
import { useRef, useState } from "react";

export const Accordion: React.FC<CourseFilterData> = ({ title, icon, children }) => {
  return <div className={styles.accordion}></div>;
};
