import { createContext, useState, useContext } from "react";

// Tạo context
const TableContext = createContext();

// Tạo provider để bọc toàn bộ app
export const TableProvider = ({ children }) => {
	const [selectedTable, setSelectedTable] = useState(null);

	return (
		<TableContext.Provider value={{ selectedTable, setSelectedTable }}>
			{children}
		</TableContext.Provider>
	);
};

// Custom hook cho tiện dùng ở các component khác
export const useTable = () => useContext(TableContext);
