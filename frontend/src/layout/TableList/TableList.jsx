import TableListItem from "../../components/TableListItem";
import styles from "./TableList.module.scss";

function TableList() {
	const tables = [
		{ id: 1, name: "101", capacity: 2, status: "available" },
		{ id: 2, name: "102", capacity: 4, status: "booked" },
		{ id: 3, name: "103", capacity: 4, status: "booked" },
		{ id: 4, name: "104", capacity: 4, status: "in service" },
		{ id: 5, name: "105", capacity: 4, status: "booked" },
		{ id: 6, name: "106", capacity: 4, status: "in service" },
		{ id: 7, name: "107", capacity: 4, status: "booked" },
	];

	return (
		<div className={styles.container}>
			<h3 className={styles.heading}>Danh sách bàn</h3>
			<div className={styles.grid}>
				{tables.map((table) => (
					<TableListItem table={table} key={table.id} />
				))}
			</div>
		</div>
	);
}

export default TableList;
