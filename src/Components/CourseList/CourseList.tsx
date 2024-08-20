"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CourseCard } from "../CourseCard/CourseCard";
import { CoursesData } from "@/utils/CoursesData";
import filterIconBlack from "@/public/common/filter-icon-black.svg";
import searchIcon from "@/public/common/search-icon.svg";
import dropDownIcon from "@/public/common/drop-down-arrow.svg";
import styles from "./CourseList.module.scss";
import { CourseListAccordionFilter } from "../CourseListAccordionFilter/CourseListAccordionFilter";

export const CourseList: React.FC = () => {
  //Handles dropdown list
  const [sortByDropDownVisibility, setSortByDropDownVisibility] =
    useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropDownVisibility = (): void => {
    setSortByDropDownVisibility((prevVisibility) => !prevVisibility);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setSortByDropDownVisibility(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //Updates sort key word
  const [sortKey, setSetKey] = useState<string>("Trending");
  const handleSortKey = (key: React.MouseEvent<HTMLLIElement>): void => {
    const newSortKey = (key.target as HTMLElement).textContent || "";
    setSetKey(newSortKey);
    setSortByDropDownVisibility(false);
    //Todo: list courses according to sort key word
  };

  return (
    <section className={styles.courseList}>
      <div className={styles.filterSortContainer}>
        <div className={styles.filterContainer}>
          <div className={styles.filterWrapper}>
            <button className={styles.FilterBtn}>
              <Image src={filterIconBlack} alt="filter-icon" />
              <span>Filter</span>
              <span>{0}</span>
            </button>
          </div>
          <div className={styles.searchInputWrapper}>
            <div className={styles.searchIconWrapper}>
              <Image src={searchIcon} alt="search-icon" />
            </div>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search for a course..."
              style={{ backgroundImage: `${searchIcon}` }}
            />
          </div>
        </div>
        <div className={styles.sortContainer} ref={dropdownRef}>
          <span className={styles.sortBy}>Sort by:</span>
          <button className={styles.sortDropDown} onClick={handleDropDownVisibility}>
            <span>{sortKey}</span>
            <Image src={dropDownIcon} alt="drop-down-arrow" />
          </button>
          <ul
            className={styles.sortByList}
            style={{ display: sortByDropDownVisibility ? "block" : "none" }}
          >
            {["Trending", "Latest", "Oldest", "Cheapest", "Most Expensive"].map(
              (key) =>
                key !== sortKey ? (
                  <li key={key} className={styles.sortKey} onClick={handleSortKey}>
                    {key}
                  </li>
                ) : null
            )}
          </ul>
        </div>
      </div>
      <div className={styles.courseCardsWrapper}>
        {CoursesData.map((card, index) => {
          return (
            <CourseCard
              key={index}
              id={card.id}
              title={card.title}
              category={card.category}
              categoryColor={card.categoryColor}
              categoryBgColor={card.categoryBgColor}
              price={card.price}
              thumbnail={card.thumbnail}
              review={card.review}
              registeredStudents={card.registeredStudents}
              courseOwner={card.courseOwner}
              level={card.level}
              duration={card.duration}
              description={card.description}
            />
          );
        })}
      </div>
      <CourseListAccordionFilter />
    </section>
  );
};
