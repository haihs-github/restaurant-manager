import styles from './TableSidebar.module.scss';
import { useTable } from '../../context/TableContext'; // import context để lấy table đã chọn

function TableSidebar() {

	const invoices = [
		{
			customerName: "Nguyễn Văn A",
			customerPhoneNumber: "0912345678",
			customerEmail: "a.nguyen@example.com",
			table: 1, // giả lập ObjectId
			date: new Date("2025-04-11"),
			startTime: "18:00",
			endTime: "19:30",
			isPay: true
		},
		{
			customerName: "Trần Thị B",
			customerPhoneNumber: "0987654321",
			customerEmail: "b.tran@example.com",
			table: 2,
			date: new Date("2025-04-10"),
			startTime: "12:00",
			endTime: "13:00",
			isPay: false
		},
		{
			customerName: "Lê Văn C",
			customerPhoneNumber: "0909090909",
			customerEmail: "c.le@example.com",
			table: 2,
			date: new Date("2025-04-09"),
			startTime: "14:30",
			endTime: "15:30",
			isPay: true
		},
		{
			customerName: "Phạm Thị D",
			customerPhoneNumber: "0933221100",
			customerEmail: "d.pham@example.com",
			table: 1,
			date: new Date("2025-04-08"),
			startTime: "17:00",
			endTime: "18:00",
			isPay: false
		},
		{
			customerName: "Đỗ Văn E",
			customerPhoneNumber: "0944556677",
			customerEmail: "e.do@example.com",
			table: 5,
			date: new Date("2025-04-07"),
			startTime: "10:00",
			endTime: "11:00",
			isPay: true
		},
		{
			customerName: "Bùi Thị F",
			customerPhoneNumber: "0966889900",
			customerEmail: "f.bui@example.com",
			table: 4,
			date: new Date("2025-04-06"),
			startTime: "13:00",
			endTime: "14:30",
			isPay: false
		},
		{
			customerName: "Hoàng Văn G",
			customerPhoneNumber: "0977123456",
			customerEmail: "g.hoang@example.com",
			table: 3,
			date: new Date("2025-04-05"),
			startTime: "19:00",
			endTime: "20:00",
			isPay: true
		},
		{
			customerName: "Lý Thị H",
			customerPhoneNumber: "0988112233",
			customerEmail: "h.ly@example.com",
			table: 7,
			date: new Date("2025-04-04"),
			startTime: "11:30",
			endTime: "12:30",
			isPay: false
		},
		{
			customerName: "Ngô Văn I",
			customerPhoneNumber: "0911333444",
			customerEmail: "i.ngo@example.com",
			table: 5,
			date: new Date("2025-04-03"),
			startTime: "16:00",
			endTime: "17:30",
			isPay: true
		},
		{
			customerName: "Vũ Thị K",
			customerPhoneNumber: "0922556677",
			customerEmail: "k.vu@example.com",
			table: 2,
			date: new Date("2025-04-02"),
			startTime: "15:00",
			endTime: "16:00",
			isPay: false
		}
	];
	const { selectedTable: table } = useTable(); // lấy table từ context
	if (!table) return null;
	const filteredInvoices = invoices
		.filter((inv) => inv.table === table.id) // lọc theo table
		.sort((a, b) => new Date(b.date) - new Date(a.date)); // sắp xếp mới → cũ

	return (
		<div className={`${styles.sidebar} ${styles.slideIn}`}>
			<h3>Lịch sử phục vụ bàn {table.name}</h3>
			{filteredInvoices.length === 0 ? (
				<p>Chưa có hóa đơn nào</p>
			) : (
				<ul className={styles.invoiceList}>
					{filteredInvoices.map((inv, index) => (
						<li key={index} className={styles.invoiceItem}>
							<p><strong>Khách:</strong> {inv.customerName}</p>
							<p><strong>Thời gian:</strong> {inv.startTime} - {inv.endTime}</p>
							<p><strong>Ngày:</strong> {inv.date.toLocaleDateString()}</p>
							<p><strong>Đã thanh toán:</strong> {inv.isPay ? '✅' : '❌'}</p>
							<hr />
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default TableSidebar;
