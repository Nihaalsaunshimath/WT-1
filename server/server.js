// const express = require('express');
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// // Import route files
// const strayAnimalRoutes = require('./routes/strayAnimalRoutes');
// const trafficViolationRoutes = require('./routes/trafficViolationRoutes');
// const potholeRoutes = require('./routes/potholeRoutes');
// const wasteRoutes = require('./routes/wasteReportRoutes');
// const adminRoutes = require('./routes/adminRoutes');

// // Initialize the app
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware for parsing JSON
// app.use(express.json());

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => {
//     console.error('MongoDB connection error:', err);
//     process.exit(1); // Exit if the DB connection fails
//   });

// // Register routes
// app.use('/api/stray-animals', strayAnimalRoutes);
// app.use('/api/traffic-violations', trafficViolationRoutes);
// app.use('/api/potholes', potholeRoutes);
// app.use('/api/waste-reports', wasteRoutes);
// app.use('/api/admin', adminRoutes);

// // Handle 404 errors
// app.use((req, res, next) => {
//   res.status(404).json({ message: 'Endpoint not found' });
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error('Unexpected Error:', err.message);
//   res.status(500).json({ message: 'An unexpected error occurred', error: err.message });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// // Middleware to protect routes
// const authenticate = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ message: 'Access Denied' });

//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).json({ message: 'Invalid Token' });
//   }
// };
// app.js (Express backend)
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors'); 
// app.use(cors({ origin: 'http://localhost:3000' })); 
// Import the cors module
require('dotenv').config();

// Import route files
const strayAnimalRoutes = require('./routes/strayAnimalRoutes');
const trafficViolationRoutes = require('./routes/trafficViolationRoutes');
const potholeRoutes = require('./routes/potholeRoutes');
const wasteRoutes = require('./routes/wasteReportRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors()); // This enables CORS for all origins, modify for restricted access if needed
// app.use(cors({ origin: 'http://localhost:3000' }));
// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if the DB connection fails
  });

// Register routes
app.use('/api/stray-animals', strayAnimalRoutes);
app.use('/api/traffic-violations', trafficViolationRoutes);
app.use('/api/potholes', potholeRoutes);
app.use('/api/waste-reports', wasteRoutes);
app.use('/api/admin', adminRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unexpected Error:', err.message);
  res.status(500).json({ message: 'An unexpected error occurred', error: err.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
