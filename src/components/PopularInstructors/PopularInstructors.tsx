import { PopularInstructorsData } from "./PopularInstructorsData";
import { PopularInstructorsCard } from "../PopularInstructorsCard/PopularInstructorsCard";
import styles from "./PopularInstructors.module.scss";
import Link from "next/link";

export const PopularInstructors = () => {
	return (
		<section className={styles.popularInstructorsSection}>
			<h2 className={styles.title}>Top Instructors of the Month</h2>
			<div className={styles.instructorCards}>
				{PopularInstructorsData.map((data) => {
					return (
						<PopularInstructorsCard
							key={data.key}
							name={data.name}
							role={data.role}
							thumbnail={data.thumbnail}
							review={data.review}
							numberOfStudents={data.numberOfStudents}
						/>
					);
				})}
			</div>
			<p className={styles.description}>
				Thousands of students waiting for an instructor. Start teaching & earning now!{" "}
				<Link href="/" className={styles.becomeInstructor}>
					Become Instructor →
				</Link>
			</p>
		</section>
	);
};
