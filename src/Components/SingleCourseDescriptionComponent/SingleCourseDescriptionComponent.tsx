"use client";
import { useState, useEffect } from "react";
import styles from "./SingleCourseDescriptionComponent.module.scss";
import Image from "next/image";
import CheckCircle from "../../../public/CheckCircle.svg";
import ArrowRight from "../../../public/common/arrow-right.svg";
import { CoursesData } from "@/utils/CoursesData";

interface CourseDetailProps {
  id: number;
  description: string;
}

const DescriptionComponent: React.FC<CourseDetailProps> = ({ id, description }) => {
  const [courseDescription, setCourseDescription] = useState<string>(description);

  useEffect(() => {
    const course = CoursesData.find((course) => course.id === id);
    if (course) {
      setCourseDescription(course.description);
    }
  }, [id]);

  return (
    <div className={`${styles["description-component"]}`}>
      <div className={`${styles["description-component-description"]}`}>
        <h4 className={`${styles["description-component-description-heading"]}`}>
          Description
        </h4>
        <p className={`${styles["description-component-description-paragraph"]}`}>
          {courseDescription}
        </p>
      </div>
      <div className={`${styles["description-component-course-content"]}`}>
        <h4 className="description-component-course-content-heading">
          What you will learn in this course
        </h4>
        <div
          className={`${styles["description-component-course-content-paragraph"]}`}
        >
          <p>
            <Image src={CheckCircle} alt="CheckCircle" /> You will learn how to
            design beautiful websites using Figma, an interface design tool used by
            designers at Uber, Airbnb and Microsoft.
          </p>
          <p>
            <Image src={CheckCircle} alt="CheckCircle" />
            You will learn how to take your designs and build them into powerful
            websites using Webflow, a state of the art site builder used by teams at
            Dell, NASA and more.
          </p>
          <p>
            <Image src={CheckCircle} alt="CheckCircle" />
            You will learn secret tips of Freelance Web Designers and how they make
            great money freelancing online.
          </p>
          <p>
            <Image src={CheckCircle} alt="CheckCircle" />
            Learn to use Python professionally, learning both Python 2 and Python 3!
          </p>
          <p>
            <Image src={CheckCircle} alt="CheckCircle" />
            Understand how to use both the Jupyter Notebook and create .py files
          </p>
          <p>
            <Image src={CheckCircle} alt="CheckCircle" />
            Get an understanding of how to create GUIs in the Jupyter Notebook
            system!
          </p>
        </div>
      </div>
      <div className={`${styles["description-component-whom-course"]}`}>
        <h4 className={`${styles["description-component-whom-course-heading"]}`}>
          Who this course is for:
        </h4>
        <p>
          <Image src={ArrowRight} alt="ArrowRight" />
          This course is for those who want to launch a Freelance Web Design career.
        </p>
        <p>
          <Image src={ArrowRight} alt="ArrowRight" />
          Praesent eget consequat elit. Duis a pretium purus.
        </p>
        <p>
          <Image src={ArrowRight} alt="ArrowRight" />
          Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec
          accumsan.
        </p>
        <p>
          <Image src={ArrowRight} alt="ArrowRight" />
          Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel,
          lacinia quis ex.
        </p>
        <p>
          <Image src={ArrowRight} alt="ArrowRight" />
          Those who are looking to reboot their work life and try a new profession
          that is fun, rewarding and highly in-demand.
        </p>
        <p>
          <Image src={ArrowRight} alt="ArrowRight" />
          Nunc auctor consequat lorem, in posuere enim hendrerit sed.
        </p>
        <p>
          <Image src={ArrowRight} alt="ArrowRight" />
          Duis ornare enim ullamcorper congue consectetur suspendisse interdum
          tristique est sed molestie.
        </p>
      </div>
      <div className={`${styles["description-component-course-requirements"]}`}>
        <h4>Course requirements</h4>
        <ul>
          <li>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</li>
          <li>
            Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero
            nec accumsan.
          </li>
          <li>
            Duis ornare enim ullamcorper congue consectetur suspendisse interdum
            tristique est sed molestie.
          </li>
          <li>
            Those who are looking to reboot their work life and try a new profession
            that is fun, rewarding and highly in-demand.
          </li>
          <li>Praesent eget consequat elit. Duis a pretium purus.</li>
          <li>
            Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel,
            lacinia quis ex.
          </li>
          <li>
            This course is for those who want to launch a Freelance Web Design
            career.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DescriptionComponent;
