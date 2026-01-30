import Dish from "./Dish";
import data from "../data";
import styles from "../styles/Menu.module.css";

export default function Menu() {
	const menuElement = data.map((dish) => {
		return <Dish key={dish.id} {...dish} />;
	});

	return (
		<main>
			<div className={styles.logo}>
				{" "}
				<img src="/menu-logo.png" alt="menu logo" />
				<h1>VÅR MENU</h1>
			</div>

			<div className={styles.menuContainer}>{menuElement}</div>
		</main>
	);
}
