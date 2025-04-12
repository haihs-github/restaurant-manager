import styles from './EditTableForm.module.scss';
import { useState } from 'react';
function EditTableForm({ table, tables, handleUpdateTable, setShowEditTableForm }) {
	const [newTable, setNewTable] = useState(table);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault(); // chặn reload trang
				handleUpdateTable(newTable); // gọi hàm cập nhật
				setShowEditTableForm(false); // đóng form sau khi lưu
			}}
			className={styles.addForm}
		>
			<div className={styles.name}>Bàn {table.name}</div>
			<input
				type="text"
				name="name"
				placeholder="Tên bàn"
				value={newTable.name}
				onChange={(e) => setNewTable({ ...newTable, name: e.target.value })}
				required
			/>
			<input
				type="number"
				name="capacity"
				placeholder="Sức chứa"
				value={newTable.capacity}
				onChange={(e) => setNewTable({ ...newTable, capacity: e.target.value })}
				required
			/>
			<select
				name="status"
				value={newTable.status}
				onChange={(e) => setNewTable({ ...newTable, status: e.target.value })}
			>
				<option value="available">Còn trống</option>
				<option value="booked">Đã đặt</option>
				<option value="in service">Đang phục vụ</option>
			</select>
			<button type="submit" className={styles.btn} >Lưu thay đổi</button>
			<button type="button" onClick={() => setShowEditTableForm(false)} className={styles.btn}>Hủy</button>
		</form >
	);
}

export default EditTableForm;