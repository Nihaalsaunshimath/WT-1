// const express = require('express');
// const multer = require('multer');
// const { body } = require('express-validator');
// const reportController = require('../controller/wasteReportController');

// const router = express.Router();

// // Configure multer for file uploads
// const upload = multer({ dest: 'uploads/' });

// router.post(
//   '/create',
//   upload.single('image'), // Handle file uploads
//   [
//     body('name').notEmpty().withMessage('Name is required'),
//     body('email').isEmail().withMessage('Valid email is required'),
//     body('description').notEmpty().withMessage('Description is required'),
//     body('location').notEmpty().withMessage('Location is required'),
//   ],
//   reportController.saveWasteReport
// );

// module.exports = router;


const express = require('express');
const multer = require('multer');
const { body } = require('express-validator');
const wasteReportController = require('../controller/wasteReportController');

const router = express.Router();

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/' });

router.post(
  '/create',
  upload.single('image'),
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('location').notEmpty().withMessage('Location is required'),
  ],
  wasteReportController.saveWasteReport
);

module.exports = router;
