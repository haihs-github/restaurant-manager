// import { useState } from 'react';
import styles from './TableListItem.module.scss';
import { useTable } from '../../context/TableContext';
import EditTableForm from '../EditTableForm/EditTableForm';
import { useState } from 'react';

function TableListItem({ table, tables, handleUpdateTable, button }) {
	// const handleStartService = () => {
	// 	setStatus('in service');
	// };
	const { setSelectedTable } = useTable();
	const showTableHistory = () => {
		setSelectedTable(table)
	}

	const [showEditTableForm, setShowEditTableForm] = useState(false)
	console.log(showEditTableForm)
	return (
		<div className={styles.cardWrapper}>
			{!showEditTableForm &&
				<div className={styles.card}>
					<button className={styles.editBtn} onClick={() => setShowEditTableForm(true)}>✏️</button>

					<div className={styles.id}>#{table.id}</div>
					<div className={styles.name}>Bàn {table.name}</div>
					<div className={styles.capacity}>Chỗ ngồi: {table.capacity}</div>
					{/* <div className={`${styles.status} ${styles[status.replace(/\s/g, '')]}`}>
						{status}
					</div> */}
					{button ? <button className={styles.bookBtn} onClick={() => handleUpdateTable(table)}>
						Đánh dấu khách đã ăn xong
					</button> :
						<button className={styles.bookBtn} onClick={showTableHistory}>
							Xem lịch sử phục vụ
						</button>
					}
				</div>
			}
			{showEditTableForm && <EditTableForm
				table={table}
				tables={tables}
				handleUpdateTable={handleUpdateTable}
				setShowEditTableForm={setShowEditTableForm}
			/>}
		</div>
	);
}

export default TableListItem;
