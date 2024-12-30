// // server/routes/potholeRoutes.js
// const express = require('express');
// const { body } = require('express-validator');
// potholeController = require('../controller/potholeReportController');

// const router = express.Router();

// router.post(
//   '/create',
//   [
//     body('location').notEmpty().withMessage('Location is required'),
//     body('severity').notEmpty().withMessage('Severity is required'),
//     body('image').notEmpty().withMessage('Image URL is required'),
//   ],
//   potholeController.savePotholeReport
// );

// module.exports = router;
const express = require('express');
const multer = require('multer');
const { body } = require('express-validator');
const potholeController = require('../controller/potholeReportController');

const router = express.Router();

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Adjust storage destination as needed

router.post(
  '/create',
  upload.single('image'),
  [
    body('location').notEmpty().withMessage('Location is required'),
    body('severity').notEmpty().withMessage('Severity is required'),
  ],
  potholeController.savePotholeReport
);

module.exports = router;
