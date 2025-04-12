import { useState } from "react";
import styles from "./InvoiceList.module.scss";

function InvoceList() {
	const [invoices, setInvoices] = useState([
		{
			customerName: "Nguyễn Văn A",
			customerPhoneNumber: "0912345678",
			customerEmail: "a.nguyen@example.com",
			table: 1,
			date: new Date("2025-04-11"),
			startTime: "18:00",
			endTime: "19:30",
			isPay: true,
			status: "confirmed"
		},
		{
			customerName: "Vũ Thị K",
			customerPhoneNumber: "0922556677",
			customerEmail: "k.vu@example.com",
			table: 2,
			date: new Date("2025-04-02"),
			startTime: "15:00",
			endTime: "16:00",
			isPay: false,
			status: "waiting"
		},
		{
			customerName: "Trần Thị B",
			customerPhoneNumber: "0987654321",
			customerEmail: "b.tran@example.com",
			table: 3,
			date: new Date("2025-04-10"),
			startTime: "12:00",
			endTime: "13:00",
			isPay: false,
			status: "confirmed"
		},
		{
			customerName: "Lê Văn C",
			customerPhoneNumber: "0909090909",
			customerEmail: "c.le@example.com",
			table: 4,
			date: new Date("2025-04-09"),
			startTime: "14:30",
			endTime: "15:30",
			isPay: true,
			status: "rejected"
		},
		{
			customerName: "Phạm Thị D",
			customerPhoneNumber: "0933221100",
			customerEmail: "d.pham@example.com",
			table: 5,
			date: new Date("2025-04-08"),
			startTime: "17:00",
			endTime: "18:00",
			isPay: false,
			status: "waiting"
		},
		{
			customerName: "Đỗ Văn E",
			customerPhoneNumber: "0944556677",
			customerEmail: "e.do@example.com",
			table: 6,
			date: new Date("2025-04-07"),
			startTime: "10:00",
			endTime: "11:00",
			isPay: true,
			status: "confirmed"
		},
		{
			customerName: "Bùi Thị F",
			customerPhoneNumber: "0966889900",
			customerEmail: "f.bui@example.com",
			table: 7,
			date: new Date("2025-04-06"),
			startTime: "13:00",
			endTime: "14:30",
			isPay: false,
			status: "rejected"
		},
		{
			customerName: "Hoàng Văn G",
			customerPhoneNumber: "0977123456",
			customerEmail: "g.hoang@example.com",
			table: 8,
			date: new Date("2025-04-05"),
			startTime: "19:00",
			endTime: "20:00",
			isPay: true,
			status: "confirmed"
		},
		{
			customerName: "Lý Thị H",
			customerPhoneNumber: "0988112233",
			customerEmail: "h.ly@example.com",
			table: 9,
			date: new Date("2025-04-04"),
			startTime: "11:30",
			endTime: "12:30",
			isPay: false,
			status: "waiting"
		},
		{
			customerName: "Ngô Văn I",
			customerPhoneNumber: "0911333444",
			customerEmail: "i.ngo@example.com",
			table: 10,
			date: new Date("2025-04-03"),
			startTime: "16:00",
			endTime: "17:30",
			isPay: true,
			status: "confirmed"
		}
	]);



	// Sắp xếp invoices: chưa confirm lên trước, mới nhất lên đầu
	const sortedInvoices = [...invoices].sort((a, b) => {
		const statusOrder = { waiting: 0, rejected: 1, confirmed: 2 };

		if (statusOrder[a.status] !== statusOrder[b.status]) {
			return statusOrder[a.status] - statusOrder[b.status]; // Ưu tiên waiting trước
		}

		return b.date - a.date; // Mới nhất lên trước
	});


	const handleConfirm = (id) => {
		setInvoices(prev =>
			prev.map((inv) =>
				inv.id === id ? { ...inv, status: "confirmed" } : inv
			)
		);
	};

	const handleReject = (id) => {
		setInvoices(prev =>
			prev.map((inv) =>
				inv.id === id ? { ...inv, status: "rejected" } : inv
			)
		);
	};


	return (
		<div className={styles.wrapper}>
			<h2>Danh sách hóa đơn</h2>
			<table className={styles.invoiceTable}>
				<thead>
					<tr >
						<th>Tên khách</th>
						<th>SĐT</th>
						<th>Email</th>
						<th>Bàn</th>
						<th>Ngày</th>
						<th>Giờ</th>
						<th>Xác nhận</th>
					</tr>
				</thead>
				<tbody>
					{sortedInvoices.map((inv) => (
						<tr key={inv.id} className={inv.isConfirm ? styles.confirmed : styles.notConfirmed}>
							<td>{inv.customerName}</td>
							<td>{inv.customerPhoneNumber}</td>
							<td>{inv.customerEmail}</td>
							<td>{inv.table}</td>
							<td>{inv.date.toLocaleDateString()}</td>
							<td>{inv.startTime} - {inv.endTime}</td>
							<td>
								{inv.status === "confirmed" ? (
									<button className={styles.confirmedBtn} disabled>Đã duyệt</button>
								) : inv.status === "rejected" ? (
									<button className={styles.rejectedBtn} disabled>Đã từ chối</button>
								) : (<div>
									<button
										className={styles.confirmBtn}
										onClick={() => handleConfirm(inv.id)}
									>
										Xác nhận
									</button>
									<button
										className={styles.confirmBtn}
										onClick={() => handleReject(inv.id)}
									>
										Từ chối
									</button>
								</div>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default InvoceList;
