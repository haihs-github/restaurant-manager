import styles from './AddTableForm.module.scss';

function AddTableForm({ handleChange, handleSubmit, newTable, handleCloseForm }) {
	return (
		<form onSubmit={handleSubmit} className={styles.addForm}>
			<input
				type="text"
				name="name"
				placeholder="Tên bàn"
				value={newTable.name}
				onChange={handleChange}
				required
			/>
			<input
				type="number"
				name="capacity"
				placeholder="Sức chứa"
				value={newTable.capacity}
				onChange={handleChange}
				required
			/>
			<select
				name="status"
				value={newTable.status}
				onChange={handleChange}
			>
				<option value="available">Còn trống</option>
				<option value="booked">Đã đặt</option>
				<option value="in service">Đang phục vụ</option>
			</select>
			<button type="submit" className={styles.btn} >Thêm bàn</button>
			<button type="button" onClick={handleCloseForm} className={styles.btn}>Đóng</button>
		</form >
	);
}

export default AddTableForm;