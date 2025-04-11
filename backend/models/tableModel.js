// backend/models/tableModel.js
const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	capacity: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		enum: ['available', 'booked', 'in service'],
		default: 'available',
	},
}, { timestamps: true });

module.exports = mongoose.model('Table', tableSchema);
