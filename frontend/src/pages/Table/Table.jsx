import TableList from "../../layout/TableList";
import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar/Sidebar";
import TableSidebar from "../../components/TableSidebar/TableSidebar";
import styles from "./Table.module.scss"; // nếu cậu dùng SCSS module
import InServicedTableList from "../../layout/InServicedTableList";

function Table() {
	return (
		<div>
			<Header />
			<div className={styles.mainContent}>
				<div className={styles.tableList}>
					<InServicedTableList />
					<TableList />
				</div>
				<div className={styles.sidebar}>
					<Sidebar pageSidebar={<TableSidebar />} />
				</div>
			</div>
		</div>
	);
}

export default Table;
