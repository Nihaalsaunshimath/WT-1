// server/models/WasteReport.js
// const mongoose = require('mongoose');

// const wasteReportSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   location: { type: String, required: true },
//   image: { type: String, required: true }, // URL or path to the uploaded image
//   reportedAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('WasteReport', wasteReportSchema);
// const mongoose = require('mongoose');

// const wasteReportSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   location: { type: String, required: true },
//   image: { type: String, required: true },
//   reportedAt: { type: Date, default: Date.now },
// });

// const WasteReport = mongoose.model('WasteManagementReport', wasteReportSchema);

// module.exports = WasteReport;


const mongoose = require('mongoose');

// Define schema
const wasteReportSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    reportedAt: { type: Date, default: Date.now },
  },
  { collection: 'WasteManagementReport' } // Explicit collection name
);

// Create model
const WasteReport = mongoose.model('WasteReport', wasteReportSchema);

module.exports = WasteReport;


