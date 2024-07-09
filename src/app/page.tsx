import styles from "./page.module.css";
import BestSellingCourses from "../Components/HomePage/BestSellingCourses/BestSellingCourses";

export default function Home() {
	return (
		<main className={styles.main}>
			<BestSellingCourses />
		</main>
	);
}
