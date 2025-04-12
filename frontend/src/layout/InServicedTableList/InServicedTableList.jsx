import styles from "./InServicedTableList.module.scss";
import TableListItem from "../../components/TableListItem";
import { useState } from "react";

function InServicedTableList() {
	const [tables, setTables] = useState([{ id: 1, name: "101", capacity: 2, status: "available" },
	{ id: 2, name: "102", capacity: 4, status: "booked" },
	{ id: 3, name: "103", capacity: 4, status: "in service" },
	{ id: 4, name: "104", capacity: 4, status: "in service" },
	{ id: 5, name: "105", capacity: 4, status: "booked" },
	{ id: 6, name: "106", capacity: 4, status: "in service" },
	{ id: 7, name: "107", capacity: 4, status: "booked" },])
	const handleUpdateTable = (table) => {
		const updatedTables = tables.map((t) => {
			if (t.id === table.id) {
				return { ...t, status: "available" };
			}
			return t;
		});
		setTables(updatedTables);
	}
	console.log("tables", tables)
	return (
		<div className={styles.container}>
			<h3 className={styles.heading}>Bàn đang hoạt động</h3>
			<div className={styles.grid}>
				{tables.map((table) => {
					return table.status === "in service" && (<TableListItem
						table={table}
						key={table.id}
						tables={tables}
						button={"Kết thúc phục vụ"}
						handleUpdateTable={handleUpdateTable}
					/>)
				}
				)}
			</div>
		</div>
	);
}

export default InServicedTableList;