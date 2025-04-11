// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
	console.error(err.stack);
	const status = err.status || 500;
	const message = err.message || 'Lỗi server!';
	res.status(status).json({ message });
};

module.exports = errorHandler;
