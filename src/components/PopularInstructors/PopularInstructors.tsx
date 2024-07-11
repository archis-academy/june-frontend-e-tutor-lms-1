import { PopularInstructorsData } from "./PopularInstructorsData";
import { PopularInstructorsCard } from "../PopularInstructorsCard/PopularInstructorsCard";

export const PopularInstructors = () => {
	const instructorsData = PopularInstructorsData;

	return (
		<section>
			<h2>Top Instructors of the Month</h2>
			{instructorsData.map((data) => {
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
			<p>
				Thousands of students waiting for a instructor. Start teaching & earning now! <span>Become Instructor →</span>
			</p>
		</section>
	);
};
