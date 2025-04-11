import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<NavLink to="/" className={styles.link}>
					Trang chủ
				</NavLink>
				<NavLink to="/register" className={styles.link}>
					thêm tài khoản
				</NavLink>
				<NavLink to="/login" className={styles.link}>
					đăng nhập
				</NavLink>
				<NavLink to="/report" className={styles.link}>
					thống kê
				</NavLink>
			</nav>
		</header>

	);
}

export default Header;
