import React from 'react';
import { CourseCardProps } from '../../type/CourseCardSituation';
import styles from './CourseCard.module.css';

const CourseCard: React.FC<CourseCardProps & { className: string }> = ({ image, profession, price, description, rating, numPeople, className }) => {
    // Yıldızları oluşturmak için bir fonksiyon
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <img
                    key={i}
                    src={i < rating ? "/star-filled.png" : ""}
                    alt={i < rating ? "Filled Star" : ""}
                    className={styles['rating-star']}
                />
            );
        }
        return (
            <div className={styles['rating-container']}>
                {stars}
                <p className={styles['rating-number']}>{rating.toFixed(1)}</p>
            </div>
        );
    };

    return (
        <div className={styles['course-card']}>
            <img src={image} alt={profession} className={styles['course-image']} />
            <div className={styles['container-june']}>
                <h2 className={`${styles['prof-june']} ${className}`}>{profession}</h2>
                <p className={styles['price-june']}>${price}</p>
            </div>
            <p className={styles['desc-june']}>{description}</p>
            <div className={styles['containers']}>
                {renderStars(rating)}
                <div className={styles['containers-user']}>
                    <img src="/User.png" alt="User" className={styles['user-icon']} />
                    <p className={styles['enrollment-text']}>{numPeople}K students</p>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
