// backend/routes/tableRoutes.js
const express = require('express');
const router = express.Router();
const { createTable, getTables } = require('../controllers/tableController');

router.post('/', createTable);     // POST /api/tables thì gọi hàm createTable
router.get('/', getTables);        // GET /api/tables thì gọi hàm getTables

module.exports = router;
