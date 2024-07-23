import { popularInstructors } from "@/types/popularInstructors";
import Image from "next/image";
import starIcon from "@/public/assets/star.svg";
import styles from "./PopularInstructorsCard.module.scss";

export const PopularInstructorsCard: React.FC<popularInstructors> = ({ name, role, thumbnail, review, numberOfStudents }) => {
	return (
		<div className={styles.instructorCard}>
			<Image
				className={styles.instructorThumbnail}
				src={thumbnail}
				width={244}
				height={244}
				priority
				alt="instructor profile picture"
			/>
			<div className={styles.personalInfo}>
				<p className={styles.name}>{name}</p>
				<p className={styles.title}>{role}</p>
			</div>
			<div className={styles.stats}>
				<div className={styles.ratingContainer}>
					<Image src={starIcon} alt="star icon" />
					<span className={styles.rating}>{review}</span>
				</div>
				<div className={styles.studentNumberContainer}>
					<span className={styles.studentNumber}>{numberOfStudents}</span>
					<span className={styles.students}> students</span>
				</div>
			</div>
		</div>
	);
};
