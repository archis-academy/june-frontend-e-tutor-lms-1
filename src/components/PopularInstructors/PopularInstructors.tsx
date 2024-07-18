import { PopularInstructorsData } from "./PopularInstructorsData";
import { PopularInstructorsCard } from "../PopularInstructorsCard/PopularInstructorsCard";
import styles from "./PopularInstructors.module.scss";

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
			<p>
				Thousands of students waiting for a instructor. Start teaching & earning now! <span>Become Instructor →</span>
			</p>
		</section>
	);
};
