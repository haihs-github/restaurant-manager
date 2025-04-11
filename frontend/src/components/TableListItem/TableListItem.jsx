import styles from './TableListItem.module.scss';

function TableListItem({ table }) {
	return (
		<div className={styles.card}>
			<button className={styles.editBtn}>✏️</button>

			<div className={styles.id}>#{table.id}</div>
			<div className={styles.name}>{table.name}</div>
			<div className={styles.capacity}>Chỗ ngồi: {table.capacity}</div>
			<div className={`${styles.status} ${styles[table.status.replace(/\s/g, '')]}`}>
				{table.status}
			</div>

			<button className={styles.bookBtn}>Đặt bàn</button>
		</div>
	);
}

export default TableListItem;
