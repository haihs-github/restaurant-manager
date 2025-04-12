import styles from "./BookingTableList.module.scss";
import { useState } from "react";
import BookTableListItem from "../../components/BookTableListItem";
import BookingForm from "../../components/BookingForm";

function BookingTableList() {
	const [tables, setTables] = useState([
		{ id: 1, name: "101", capacity: 2, status: "available" },
		{ id: 2, name: "102", capacity: 4, status: "booked" },
		{ id: 3, name: "103", capacity: 4, status: "booked" },
		{ id: 4, name: "104", capacity: 4, status: "in service" },
		{ id: 5, name: "105", capacity: 4, status: "booked" },
		{ id: 6, name: "106", capacity: 4, status: "in service" },
		{ id: 7, name: "107", capacity: 4, status: "booked" },
	]);

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
			isConfirm: true
		},
		{
			customerName: "Trần Thị B",
			customerPhoneNumber: "0987654321",
			customerEmail: "b.tran@example.com",
			table: 2,
			date: new Date("2025-04-10"),
			startTime: "12:00",
			endTime: "13:00",
			isPay: false,
			isConfirm: true
		},
		{
			customerName: "Lê Văn C",
			customerPhoneNumber: "0909090909",
			customerEmail: "c.le@example.com",
			table: 2,
			date: new Date("2025-04-09"),
			startTime: "14:30",
			endTime: "15:30",
			isPay: true,
			isConfirm: true
		},
		{
			customerName: "Phạm Thị D",
			customerPhoneNumber: "0933221100",
			customerEmail: "d.pham@example.com",
			table: 1,
			date: new Date("2025-04-08"),
			startTime: "17:00",
			endTime: "18:00",
			isPay: false,
			isConfirm: true
		},
		{
			customerName: "Đỗ Văn E",
			customerPhoneNumber: "0944556677",
			customerEmail: "e.do@example.com",
			table: 5,
			date: new Date("2025-04-07"),
			startTime: "10:00",
			endTime: "11:00",
			isPay: true,
			isConfirm: true
		},
		{
			customerName: "Bùi Thị F",
			customerPhoneNumber: "0966889900",
			customerEmail: "f.bui@example.com",
			table: 4,
			date: new Date("2025-04-06"),
			startTime: "13:00",
			endTime: "14:30",
			isPay: false,
			isConfirm: true
		},
		{
			customerName: "Hoàng Văn G",
			customerPhoneNumber: "0977123456",
			customerEmail: "g.hoang@example.com",
			table: 3,
			date: new Date("2025-04-05"),
			startTime: "19:00",
			endTime: "20:00",
			isPay: true,
			isConfirm: true
		},
		{
			customerName: "Lý Thị H",
			customerPhoneNumber: "0988112233",
			customerEmail: "h.ly@example.com",
			table: 7,
			date: new Date("2025-04-04"),
			startTime: "11:30",
			endTime: "12:30",
			isPay: false,
			isConfirm: true
		},
		{
			customerName: "Ngô Văn I",
			customerPhoneNumber: "0911333444",
			customerEmail: "i.ngo@example.com",
			table: 5,
			date: new Date("2025-04-03"),
			startTime: "16:00",
			endTime: "17:30",
			isPay: true,
			isConfirm: true
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
			isConfirm: true
		}
	]);


	const [startTime, setStartTime] = useState("18:00");
	const [endTime, setEndTime] = useState("19:00");
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [filteredTables, setFilteredTables] = useState([]);
	const [showBookingForm, setShowBookingForm] = useState(false);
	const [selectedTable, setSelectedTable] = useState(null);

	const generateTimeOptions = () => {
		const times = [];
		for (let h = 8; h < 24; h++) {
			for (let m = 0; m < 60; m += 30) {
				const hh = h.toString().padStart(2, '0');
				const mm = m.toString().padStart(2, '0');
				times.push(`${hh}:${mm}`);
			}
		}
		return times;
	};

	const isOverlap = (startA, endA, startB, endB) => {
		return !(endA <= startB || startA >= endB);
	};

	const checkTableAvailable = (tableId) => {
		return !invoices.some(invoice => {
			// Bỏ qua các hóa đơn chưa xác nhận
			if (!invoice.isConfirm) return false;

			// So sánh ngày trước
			const invoiceDate = invoice.date.toISOString().split("T")[0];
			const selectedDateStr = selectedDate.toISOString().split("T")[0];

			if (invoice.table !== tableId || invoiceDate !== selectedDateStr) return false;

			// Nếu ngày trùng thì kiểm tra thời gian
			return isOverlap(startTime, endTime, invoice.startTime, invoice.endTime);
		});
	};

	const handleSearch = () => {
		// Kiểm tra điều kiện giờ kết thúc phải lớn hơn giờ bắt đầu
		if (startTime >= endTime) {
			alert("Giờ kết thúc phải lớn hơn giờ bắt đầu.");
			return;
		}

		const availableTables = tables.filter(table => checkTableAvailable(table.id));
		setFilteredTables(availableTables);
	};

	const handleBooking = (newInvoice) => {
		setInvoices([...invoices, newInvoice]);
		setFilteredTables((prevTables) =>
			prevTables.map((table) =>
				table.id === newInvoice.table ? { ...table, isAvailable: false } : table
			)
		);
		console.log("Đặt bàn thành công", invoices);
		alert("Chúng tôi xin ghi nhận thông tin của bạn, Hãy chú ý điện thoại và Email, nhân viên của chúng tôi sẽ liên hệ với bạn sớm nhất có thể");
		handleClose()
	}

	const handleClose = () => {
		setShowBookingForm(false)
	}
	return (
		<div className={styles.container}>
			<h3 className={styles.heading}>Bạn muốn đặt bàn lúc nào</h3>

			{/* Form lọc giờ */}
			<div className={styles.filterForm}>
				<label>
					Ngày:
					<input
						type="date"
						value={selectedDate.toISOString().split("T")[0]}
						min={new Date().toISOString().split("T")[0]}
						onChange={(e) => setSelectedDate(new Date(e.target.value))}
					/>
				</label>
				<label>
					Từ:
					<select value={startTime} onChange={(e) => setStartTime(e.target.value)}>
						{generateTimeOptions().map(time => (
							<option key={time} value={time}>{time}</option>
						))}
					</select>
				</label>
				<label>
					Đến:
					<select value={endTime} onChange={(e) => setEndTime(e.target.value)}>
						{generateTimeOptions().map(time => (
							<option key={time} value={time}>{time}</option>
						))}
					</select>
				</label>
				<button onClick={handleSearch} className={styles.searchButton}>Tìm kiếm</button>
			</div>

			{/* Danh sách bàn sau khi tìm */}
			{filteredTables.length > 0 && (
				<div className={styles.grid}>
					{filteredTables.map((table) => (
						<BookTableListItem
							table={table}
							key={table.id}
							onBook={() => {
								setSelectedTable(table);
								setShowBookingForm(true);
							}}
						/>
					))}
				</div>
			)}
			{showBookingForm && (
				<>
					<div className={styles.overlay} onClick={handleClose}></div>
					<div className={styles.modal}>
						<BookingForm invoice={{
							customerName: "",
							customerPhoneNumber: "",
							customerEmail: "",
							table: selectedTable.id,
							date: new Date(),
							startTime: { startTime },
							endTime: { endTime },
							isPay: false,
							isConfirm: false
						}} handleBooking={handleBooking} handleClose={handleClose} />
					</div>
				</>
			)}
		</div>
	);
}

export default BookingTableList;
