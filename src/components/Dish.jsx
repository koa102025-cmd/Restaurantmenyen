import styles from "../styles/Dish.module.css";

export default function Dish(props) {
	return (
		<div className={styles.dishCard}>
			<h2>{props.tittel}</h2>
			<p className={styles.pris}>{props.pris}</p>

			<p className={styles.ingredienser}>{props.ingredienser}</p>

			<p className={styles.kategori}>{props.kategori}</p>
		</div>
	);
}
