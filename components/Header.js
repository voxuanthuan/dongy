import Link from 'next/link'
import styles from '../styles/Header.module.scss'

const Header = () => (
    <>
        <nav className={styles.nav__horizontal}>
            <h1 className={styles.logo}>Logo</h1>
            <ul>
                <li>
                    <Link href="/">
                        <a>Trang Chủ</a>
                    </Link>
                </li>
                <li>
                    <Link href="/posts">
                        <a>Bài Viết</a>
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        <a>Sản Phẩm</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contract">
                        <a>Liên Hệ</a>
                    </Link>
                </li>
            </ul>
        </nav>
        <nav className={styles.nav__dropdown}>
            <select>
                <option value="#">Trang Chủ</option>
                <option value="#">Bài Viết</option>
                <option value="#">Sản Phẩm</option>
                <option value="#">Liên Hệ</option>
            </select>
        </nav>
    </>
)

export default Header
