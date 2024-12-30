// server/routes/trafficViolationRoutes.js
// const express = require('express');
// const { body } = require('express-validator');
// const trafficController = require('../controller/trafficViolationController');

// const router = express.Router();

// router.post(
//   '/create',
//   [
//     body('vehicleNumber').notEmpty().withMessage('Vehicle number is required'),
//     body('location').notEmpty().withMessage('Location is required'),
//     body('violationType').notEmpty().withMessage('Violation type is required'),
//     body('image').notEmpty().withMessage('Image URL is required'),
//   ],
//   trafficController.saveTrafficViolationReport
// );

// module.exports = router;
const express = require('express');
const multer = require('multer');
const { body } = require('express-validator');
const trafficController = require('../controller/trafficViolationController');

const router = express.Router();

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Adjust storage destination as needed

router.post(
  '/create',
  upload.single('image'),
  [
    body('vehicleNumber').notEmpty().withMessage('Vehicle number is required'),
    body('location').notEmpty().withMessage('Location is required'),
    body('violationType').notEmpty().withMessage('Violation type is required'),
  ],
  trafficController.saveTrafficViolationReport
);

module.exports = router;
