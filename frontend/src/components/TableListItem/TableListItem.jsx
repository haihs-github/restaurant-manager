// import { useState } from 'react';
import styles from './TableListItem.module.scss';
import { useTable } from '../../context/TableContext';

function TableListItem({ table }) {
	// const handleStartService = () => {
	// 	setStatus('in service');
	// };
	const { setSelectedTable } = useTable();
	const showTableHistory = () => {
		setSelectedTable(table)
	}

	return (
		<div className={styles.cardWrapper}>
			<div className={styles.card}>
				<button className={styles.editBtn}>✏️</button>

				<div className={styles.id}>#{table.id}</div>
				<div className={styles.name}>{table.name}</div>
				<div className={styles.capacity}>Chỗ ngồi: {table.capacity}</div>
				{/* <div className={`${styles.status} ${styles[status.replace(/\s/g, '')]}`}>
					{status}
				</div> */}
				<button className={styles.bookBtn} onClick={showTableHistory}>
					Xem lịch sử phục vụ
				</button>
			</div>
		</div>
	);
}

export default TableListItem;
