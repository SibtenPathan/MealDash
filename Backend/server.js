const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu'); // Import the menu routes
const authMiddleware = require('./middleware/authMiddleware'); // Import the authentication middleware

require('dotenv').config(); // Add this line to load environment variables
const connectDB = require('./config/db'); // Import the connectDB function

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB(); // Call the function to connect

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes); // Use the menu routes

// Protected Route Example
app.get('/protected', authMiddleware, (req, res) => {
    res.json({ msg: 'You have accessed a protected route!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
