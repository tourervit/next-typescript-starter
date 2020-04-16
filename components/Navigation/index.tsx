import Link from "next/link";
import styles from "./navigation.module.scss";

export const Navigation = () => (
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
			<Link as="/books/42hfh2g-fh2h584" href="/books/[id]">
				<a className={styles.link}>Book 1</a>
			</Link>
		</li>
		<li>
			<Link as="/books/hfj4f39-8gjfn74" href="/books/[id]">
				<a className={styles.link}>Book 2</a>
			</Link>
		</li>
	</ul>
);
