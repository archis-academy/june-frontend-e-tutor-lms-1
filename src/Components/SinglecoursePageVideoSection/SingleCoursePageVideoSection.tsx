
"use client";
import styles from "./SingleCoursePageVideoSection.module.scss"
import Image from "next/image"
import star from "../../../public/star.svg"
import { CoursesData } from "@/utils/CoursesData"
import ReactPlayer from "react-player";

function SingleCoursePageVideoSection(){
    return(
<div className= {styles.singlecoursePageVideoSection}>
    <div className={styles.singlecoursePageVideoSectionTitle}>
        <div className={styles.singlecoursePageVideoSectionTitleRouter}>
            <p>Home &gt; </p> 
            <p>Development &gt; </p>
            <p>Web Development &gt; </p>
            <p>Webflow</p>
        </div>
        <h3>Complete Website Responsive Design: from Figma to Webflow to Website Design</h3>
        <p>3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.</p>
        <div className={styles.singlecoursePageVideoSectionInfo}>
            <div className={styles.singlecoursePageVideoSectionInfoTrainer}>
                {/* <Image src:{}/> */}
                <div className={styles.singlecoursePageVideoSectionTrainerName}>
                    <span>Created by:</span>
                    <p>Kristin Watson</p>
                </div>
            </div>
            <div className={styles.singlecoursePageVideoSectionInfoRating}>
                <div>
                <Image src={star}/>
                <Image src={star}/>
                <Image src={star}/>
                <Image src={star}/>
                <Image src={star}/>
                </div>
                <p> 4.8 <span>(451,444 Rating)</span></p>
            </div>
        </div>
    </div>
    <div className={styles.singlecoursePageVideoSectionVideo}>
    <ReactPlayer
   url="https://www.youtube.com/watch?v=cL-ST_60Naw&t=5s&ab_channel=Archi%27sAcademy"
   controls
   width="872px"
   height="492px"
/>

    </div>
</div>
    )
}

export default SingleCoursePageVideoSection;
