import Image from "next/image";
import styles from "./page.module.css";
import { PopularInstructors } from "@/components/PopularInstructors/PopularInstructors";

export default function Home() {
	return (
		<main className={styles.main}>
			<PopularInstructors />
		</main>
	);
}
