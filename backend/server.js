const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); 
const app = express();
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorHandler');

// Middleware
const corsOptions = {
	origin: 'http://localhost:3000', 
	credentials: true,
  };
app.use(cors(corsOptions));
app.use(express.json());
// Routes
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});


app.use('/api/auth', authRoutes);

app.use(errorHandler);
// Kết nối DB và khởi động server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('❌ Failed to start server due to MongoDB error:', err);
});
