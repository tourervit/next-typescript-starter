import Link from "next/link";
import styles from "./navigation.module.scss";
import { useState } from "react";

export const Navigation = () => {
	const [isDark, setIsDark] = useState(false);
	const changeTheme = () => {
		setIsDark(prevState => !prevState);
		const theme = isDark ? "dark" : "light";
		localStorage.setItem("theme", theme);
		document.documentElement.className = "";
		document.documentElement.classList.add(`theme-${theme}`);
	};
	return (
		<div>
			<button onClick={changeTheme}>Theme me</button>
			<ul className="text-center">
				<li>
					<Link href="/">
						<a className={styles.link}>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a className={styles.link}>About</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a className={styles.link}>Contact</a>
					</Link>
				</li>
				<li>
					<Link as="/books/1" href="/books/[id]">
						<a className={styles.link}>Book 1</a>
					</Link>
				</li>
				<li>
					<Link as="/books/2" href="/books/[id]">
						<a className={styles.link}>Book 2</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};
