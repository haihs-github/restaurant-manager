// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello from backend!');
});

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('Connected to MongoDB');
		app.listen(5000, () => console.log('Server running on port 5000'));
	})
	.catch(err => console.error(err));

const tableRoutes = require('./routes/tableRoutes');
app.use('/api/tables', tableRoutes);

