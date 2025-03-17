const express = require('express');
const { resolve } = require('path');
const connectDB = require('./database'); // Import DB connection
const authRoutes = require('./routes/auth'); // Import Auth Routes
require('dotenv').config(); // Load environment variables

const app = express();
const port = 3010;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON data
app.use(express.static('static'));

// Routes
app.use('/api/auth', authRoutes); // Use Auth Routes

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
