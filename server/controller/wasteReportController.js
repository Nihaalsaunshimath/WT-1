// const multer = require('multer');
// const { validationResult } = require('express-validator');
// const WasteReport = require('../models/WasteReport'); // Import the WasteReport model

// // Configure multer for file uploads
// const upload = multer({ dest: 'uploads/' });

// exports.saveWasteReport = async (req, res) => {
//   try {
//     // Validate incoming request
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     // Destructure required fields from the request body
//     const { name, email, title, description, location } = req.body;

//     // Get file path from multer
//     const imagePath = req.file ? req.file.path : null;

//     // Create a new waste report
//     const report = new WasteReport({
//       name,
//       email,
//       title,
//       description,
//       location,
//       image: imagePath,
//     });

//     // Save to the database
//     await report.save();
//     res.status(201).json({ message: 'Waste report created successfully', data: report });
//   } catch (error) {
//     console.error('Error saving waste report:', error.stack || error.message || error);
//     res.status(500).json({ message: 'Error saving waste report', error: error.stack || error.message || error });
//   }
// };


// Export both saveWasteReport and upload
// module.exports = {
//   saveWasteReport,
//   upload, // Export multer upload for use in your routes
// };

const { validationResult } = require('express-validator');
const WasteReport = require('../models/WasteReport');
const path = require('path');

// Save waste report
exports.saveWasteReport = async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, title, description, location } = req.body;

    // Check if file exists
    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required' });
    }

    const imagePath = path.join('uploads', req.file.filename);

    // Create a new waste report
    const report = new WasteReport({
      name,
      email,
      title,
      description,
      location,
      image: imagePath,
    });

    // Save to database
    const savedReport = await report.save();
    console.log('Report saved:', savedReport);

    res.status(201).json({
      message: 'Waste report created successfully',
      data: savedReport,
    });
  } catch (error) {
    console.error('Error saving waste report:', error);
    res.status(500).json({ message: 'Error saving waste report', error: error.message });
  }
};
