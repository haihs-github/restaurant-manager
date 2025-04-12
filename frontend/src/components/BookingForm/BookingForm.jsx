import styles from './BookingForm.module.scss';
import { useState } from 'react';

function BookingForm({ invoice, handleClose, handleBooking }) {
	const [newInvoice, setNewInvoice] = useState(invoice);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewInvoice((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleBooking(newInvoice);
	};

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit}>
			<h2>
				Xin vui lòng cung cấp thông tin của bạn, nhân viên chúng tôi sẽ liên hệ đặt bàn với bạn sớm nhất
			</h2>

			<input
				type="text"
				name="customerName"
				placeholder="Họ và tên"
				value={newInvoice.customerName}
				onChange={handleChange}
				required
				className={styles.inputField}
			/>

			<input
				type="text"
				name="customerPhoneNumber"
				placeholder="Số điện thoại"
				value={newInvoice.customerPhoneNumber}
				onChange={handleChange}
				required
				className={styles.inputField}
			/>

			<input
				type="email"
				name="customerEmail"
				placeholder="Email của bạn"
				value={newInvoice.customerEmail}
				onChange={handleChange}
				required
				className={styles.inputField}
			/>

			<button type="submit">Đặt bàn ngay</button>
			<button type="button" onClick={handleClose}>Hủy</button>
		</form>
	);
}

export default BookingForm;
