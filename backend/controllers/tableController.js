// backend/controllers/tableController.js
const Table = require('../models/tableModel'); // Import model Table

// Thêm bàn mới
exports.createTable = async (req, res) => {
	try {
		const { name, capacity } = req.body;
		const table = new Table({ name, capacity });
		await table.save();
		res.status(201).json(table);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Lấy danh sách bàn
exports.getTables = async (req, res) => {
	try {
		const tables = await Table.find();
		res.json(tables);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
