// // server/routes/strayAnimalRoutes.js
// const express = require('express');
// const { body } = require('express-validator');
// const strayAnimalController = require('../controller/strayAnimalReportController');

// const router = express.Router();

// router.post(
//   '/create',
//   [
//     body('animalType').notEmpty().withMessage('Animal type is required'),
//     body('location').notEmpty().withMessage('Location is required'),
//     body('status').notEmpty().withMessage('Status is required'),
//     body('image').notEmpty().withMessage('Image URL is required'),
//   ],
//   strayAnimalController.saveStrayAnimalReport
// );

// module.exports = router;
const express = require('express');
const multer = require('multer');
const { body } = require('express-validator');
const strayAnimalController = require('../controller/strayAnimalReportController');

const router = express.Router();

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Adjust the storage destination as needed

router.post(
  '/create',
  upload.single('image'),
  [
    body('animalType').notEmpty().withMessage('Animal type is required'),
    body('location').notEmpty().withMessage('Location is required'),
    body('status').notEmpty().withMessage('Status is required'),
  ],
  strayAnimalController.saveStrayAnimalReport
);

module.exports = router;
