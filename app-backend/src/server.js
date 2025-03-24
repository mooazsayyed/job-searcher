const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const chalk = require('chalk');
const authRoutes = require('./routes/auth');  // Fixed import path

// Initialize express app
const app = express();

// Load environment variables with absolute path
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Add colored debug logging
console.log(chalk.cyan('Current directory:'), chalk.yellow(__dirname));
console.log(chalk.cyan('Environment variables:'), {
  MONGODB_URI: chalk.green(process.env.MONGODB_URI),
  PORT: chalk.yellow(process.env.PORT)
});

// MongoDB connection options
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, mongoOptions)
  .then(() => console.log(chalk.green.bold('✓ Connected to MongoDB')))
  .catch(err => console.error(chalk.red.bold('✗ MongoDB connection error:'), err));

// Handle MongoDB connection errors
mongoose.connection.on('error', (err) => {
  console.error(chalk.red('MongoDB connection error:'), err);
});

mongoose.connection.on('disconnected', () => {
  console.log(chalk.yellow('MongoDB disconnected. Attempting to reconnect...'));
});

mongoose.connection.on('reconnected', () => {
  console.log(chalk.green('MongoDB reconnected'));
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Job Searcher API' });
});

// Set port and start server
const PORT = process.env.PORT || 5000;
// Update the server start log
app.listen(PORT, () => {
  console.log(chalk.blue.bold(`⚡ Server is running on port ${PORT}`));
});