"use client";
import styles from './featuredcourses.module.scss';
import { Course } from '@/types/courses';
import React, { useState } from 'react';
import FeatureCourseCard from './FeatureCourseCard/featurecoursecar';

const featureCourse: Course[] = [
    {
        id: 1,
        category: "Health & Fitness",
        price: "14.00$",
        description: "Investing In Stocks The Complete Course! (13 H...",
        image: "courseone.svg"
    },
    {
        id: 2,
        category: "Personal Development",
        price: "14.00$",
        description: "Google Analytics Certification - Learn How To...",
        image: "coursetwo.svg"
    },
    {
        id: 3,
        category: "Productivity",
        price: "14.00$",
        description: "Adobe XD for Web Design: Essential Principles",
        image: "coursethree.svg"
    },
    {
        id: 4,
        category: "Music",
        price: "14.00$",
        description: "The Python Mega Course: Build 10 Real World ...",
        image: "coursefour.svg"
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