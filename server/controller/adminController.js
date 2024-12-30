// // server/controller/adminController.js
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const Admin = require('../models/Admin');

// // Register admin
// exports.registerAdmin = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if username already exists
//     const existingAdmin = await Admin.findOne({ username });
//     if (existingAdmin) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new admin
//     const admin = new Admin({ username, password: hashedPassword });
//     await admin.save();

//     res.status(201).json({ message: 'Admin registered successfully' });
//   } catch (error) {
//     console.error('Error registering admin:', error);
//     res.status(500).json({ message: 'Error registering admin', error });
//   }
// };
// // Login admin
// exports.loginAdmin = async (req, res) => {
//     try {
//       const { username, password } = req.body;
  
//       // Find admin by username
//       const admin = await Admin.findOne({ username });
//       if (!admin) {
//         return res.status(400).json({ message: 'Invalid username or password' });
//       }
  
//       // Compare passwords
//       const isPasswordValid = await bcrypt.compare(password, admin.password);
//       if (!isPasswordValid) {
//         return res.status(400).json({ message: 'Invalid username or password' });
//       }
  
//       // Generate a JWT token
//       const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
//       res.status(200).json({ message: 'Login successful', token });
//     } catch (error) {
//       console.error('Error logging in admin:', error);
//       res.status(500).json({ message: 'Error logging in admin', error });
//     }
//   };
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// Register Admin
exports.registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering admin', error: err.message });
  }
};

// Login Admin
exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};
