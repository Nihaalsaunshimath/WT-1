 // server/models/TrafficViolationReport.js
// const mongoose = require('mongoose');
// const trafficViolationReportSchema = new mongoose.Schema({
//     vehicleNumber: { type: String, required: true },
//     location: { type: String, required: true },
//     violationType: { type: String, required: true },
//     image: { type: String, required: true },
//     reportedAt: { type: Date, default: Date.now },
//   });
  
//   module.exports = mongoose.model('TrafficViolationReport', trafficViolationReportSchema);
const mongoose = require('mongoose');

const trafficViolationReportSchema = new mongoose.Schema({
  vehicleNumber: { type: String, required: true },
  location: { type: String, required: true },
  violationType: { type: String, required: true },
  image: { type: String, required: true },
  reportedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TrafficViolationReport', trafficViolationReportSchema);
