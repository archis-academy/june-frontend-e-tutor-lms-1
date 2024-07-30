"use client";
import styles from './featuredcourses.module.scss';
import { Course } from '@/types/course';
import React, { useState } from 'react';
import FeatureCourseCard from './featurecoursecard/featurecoursecard';

const featureCourse: Course[] = [
    {
        id: 1,
        category: "Health & Fitness",
        price: "14.00$",
        description: "Investing In Stocks The Complete Course! (13 H...",
        image: "@/public/corleone.svg"
    },
    {
        id: 2,
        category: "Personal Development",
        price: "14.00$",
        description: "Google Analytics Certification - Learn How To...",
        image: "@/public/courseone.svg"
    },
    {
        id: 3,
        category: "Productivity",
        price: "14.00$",
        description: "Adobe XD for Web Design: Essential Principles",
        image: "../@/public/courseone.svg"
    },
    {
        id: 4,
        category: "Music",
        price: "14.00$",
        description: "The Python Mega Course: Build 10 Real World ...",
        image: "C:\Users\samed\Desktop\june-frontend-e-tutor-lms-1\public\coursefour.svg"
    },
];

const FeaturedCourses: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>(featureCourse);

    return (
        <div className={styles.ourfeaturesection}>
            <div className={styles.ourfeaturesectiontitle}>
                <h2>Our feature courses</h2>
                <p>Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec varius purus et eleifend porta.</p>
            </div>
            <div>
                <div className={styles.courseContainer}>
                    {courses.map((course) => (
                        <FeatureCourseCard key={course.id} {...course} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedCourses;