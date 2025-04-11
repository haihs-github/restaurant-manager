import { useState } from "react";
import TableListItem from "../../components/TableListItem";
import styles from "./TableList.module.scss";
import AddButton from "../../components/AddButton";
import AddTableForm from "../../components/AddTableForm";

function TableList() {
	const [showForm, setShowForm] = useState(false);
	const [newTable, setNewTable] = useState({
		name: "",
		capacity: "",
		status: "available"
	});

	const [tables, setTables] = useState([{ id: 1, name: "101", capacity: 2, status: "available" },
	{ id: 2, name: "102", capacity: 4, status: "booked" },
	{ id: 3, name: "103", capacity: 4, status: "booked" },
	{ id: 4, name: "104", capacity: 4, status: "in service" },
	{ id: 5, name: "105", capacity: 4, status: "booked" },
	{ id: 6, name: "106", capacity: 4, status: "in service" },
	{ id: 7, name: "107", capacity: 4, status: "booked" },])

	const handleAddClick = () => {
		setShowForm(true);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewTable({ ...newTable, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setTables([...tables, { ...newTable, id: tables.length + 1 }]);
		console.log("New table added:", newTable);
		console.log("New tables added:", tables);
		setShowForm(false);
		setNewTable({ name: "", capacity: "", status: "available" });
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.heading}>Danh sách bàn</h3>
			<div className={styles.grid}>
				<AddButton handleAddClick={handleAddClick} />

				{showForm && <AddTableForm handleChange={handleChange} handleSubmit={handleSubmit} newTable={newTable} handleCloseForm={() => setShowForm(false)} />}

				{tables.map((table) => (
					<TableListItem table={table} key={table.id} />
				))}
			</div>
		</div>
	);
}

export default TableList;
