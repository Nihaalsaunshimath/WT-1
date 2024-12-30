// // server/controller/trafficViolationController.js
// const TrafficViolationReport = require('../models/TrafficViolationReport');

// // Save traffic violation report
// exports.saveTrafficViolationReport = async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { vehicleNumber, location, violationType, image } = req.body;

//     const report = new TrafficViolationReport({ vehicleNumber, location, violationType, image });
//     await report.save();

//     res.status(201).json({ message: 'Traffic violation report created successfully', data: report });
//   } catch (error) {
//     console.error('Error saving traffic violation report:', error);
//     res.status(500).json({ message: 'Error saving traffic violation report', error });
//   }
// };
const { validationResult } = require('express-validator');
const TrafficViolationReport = require('../models/TrafficViolationReport');
const path = require('path');

// Save traffic violation report
exports.saveTrafficViolationReport = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { vehicleNumber, location, violationType } = req.body;

    // Get file path from multer
    const imagePath = req.file ? req.file.path : null;

    const report = new TrafficViolationReport({
      vehicleNumber,
      location,
      violationType,
      image: imagePath,
    });

    await report.save();

    res.status(201).json({ message: 'Traffic violation report created successfully', data: report });
  } catch (error) {
    console.error('Error saving traffic violation report:', error);
    res.status(500).json({ message: 'Error saving traffic violation report', error });
  }
};
