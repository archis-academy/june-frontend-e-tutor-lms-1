import React from "react";
import { Course } from '@/types/course';
import styles from './featurecoursecard.module.scss';
import Image from "next/image";
import kevin from '@/public/kevin.svg';
import star from '@/public/star.svg';
import user from '@/public/user.svg';
import barchan from '@/public/barchan.svg';
import clock from '@/public/clock.svg';


const FeatureCourseCard: React.FC<Course> = ({ category, description, price, image }) => {
    return (
        <div className={styles.coursecardsection}>
            <div className={styles.coursecardsectionImage}>
                <Image src={image} alt="0" width={300} height={300} />
            </div>
            <div className={styles.coursecardsectionbox}>
                <div className={styles.coursecardcategory}>
                    <h3 className={styles.coursecardcategorybox}>{category}</h3>
                    <div className={styles.coursecardcategoryline}>
                        <p className={styles.coursecardcategorylinep}>{price}</p>
                        <p className={styles.featuredsectioninformationboxmanyp}>26.00$</p>
                    </div>
                </div>
                <p>{description}</p>
                <div className={styles.featuredsectionperson}>
                    <div className={styles.featuredsectionpersonbox}>
                        <Image
                            src={kevin}
                            alt="Picture of the author"
                        />
                        <p>Kevin Gilbert</p>
                    </div>
                    <div className={styles.featuresectionpersonboxnumber}>
                        <Image
                            src={star}
                            alt="Picture of the author"
                        />
                        <p>5.0</p>
                        <p className={styles.featuredsectionpersonboxnumberp}>(357,914)</p>
                    </div>
                </div>
                <div className={styles.featuredsectionusersection}>
                    <div className={styles.featuredsectionuserboxone}>
                        <Image
                            src={user}
                            alt="Picture of the author" />
                        <p>265.7.K</p>
                        <p>students</p>
                    </div>
                    <div className={styles.featuredsectionuserboxtwo}>
                        <Image
                            src={barchan}
                            alt="Picture of the author" />
                        <p>beginner</p>
                    </div>
                    <div className={styles.featuredsectionuserboxthree}>
                        <Image
                            src={clock}
                            alt="Picture of the author" />
                        <p>6 hour</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FeatureCourseCard;