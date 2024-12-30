// server/routes/adminRoutes.js
const express = require('express');
const { body } = require('express-validator');
const adminController = require('../controller/adminController');

const router = express.Router();

// Define the route for admin registration
router.post(
  '/register',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  adminController.registerAdmin
);

// Define the route for admin login
router.post(
  '/login',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  adminController.loginAdmin
);

module.exports = router;