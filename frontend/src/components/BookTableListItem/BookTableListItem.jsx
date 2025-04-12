// import { useState } from 'react';
import styles from './BookTableListItem.module.scss';

function BookTableListItem({ table, onBook }) {
	return (
		<div className={styles.cardWrapper}>
			<div className={styles.card}>
				<div className={styles.id}>#{table.id}</div>
				<div className={styles.name}>Bàn {table.name}</div>
				<div className={styles.capacity}>Chỗ ngồi: {table.capacity}</div>

				<button className={styles.bookBtn} onClick={() => onBook(table)}>
					Đặt bàn
				</button>
			</div>
		</div>
	);
}

export default BookTableListItem;
