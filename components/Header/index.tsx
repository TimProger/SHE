import styles from './styles.module.scss'
import Link from "next/link";

export default function Header() {
    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.header__h1}>Hello</h1>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/profile">About Us</Link>
                    </li>
                    <li>
                        <Link href="/blog/hello-world">Blog Post</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
