import Dish from "./Dish";
import data from "../data";
import styles from "../styles/Menu.module.css";

export default function Menu() {
	const order = ["Forrett", "Hovedrett", "Dessert"];

	return (
		<div className={styles.all}>
			<header className={styles.header}>
				<div className={styles.left}>
					<p>+4798579720</p>
					<p>www.dailygo.com</p>
					<p>dailygo@gmail.com</p>
					<p>OPEN DAILY 6:00 - 24.00</p>
				</div>
				<div className={styles.center}>
					<img
						src={`${import.meta.env.BASE_URL}menu-logo.png`}
						alt="menu logo"
						className={styles.logo}
					/>
					<h1>
						<span className={styles.daily}>Daily</span>
						<span className={styles.go}>Go</span>
					</h1>
				</div>

				<div className={styles.right}>
					<p>
						Oppdag en harmonisk smaksopplevelse i hver rett. Vi bruker kun
						friske, lokale råvarer for å gjøre ditt måltid til dagens
						høydepunkt.
					</p>
				</div>
			</header>
			<main className={styles.main}>
				{order.map((categoryName) => {
					const categoryDishes = data.filter(
						(dish) => dish.kategori === categoryName,
					);

					if (categoryDishes.length === 0) return null;

					return (
						<section key={categoryName} className={styles.categorySection}>
							<h2 className={styles.categoryTitle}>{categoryName}</h2>

							<div className={styles.menuContainer}>
								{categoryDishes.map((dish) => (
									<Dish key={dish.id} {...dish} />
								))}
							</div>
						</section>
					);
				})}
			</main>
		</div>
	);
}
