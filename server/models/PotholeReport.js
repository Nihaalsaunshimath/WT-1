// // server/models/PotholeReport.js
// const mongoose = require('mongoose');
// const potholeReportSchema = new mongoose.Schema({
//     location: { type: String, required: true },
//     severity: { type: String, required: true },
//     image: { type: String, required: true },
//     reportedAt: { type: Date, default: Date.now },
//   });
  
//   module.exports = mongoose.model('PotholeReport', potholeReportSchema);
const mongoose = require('mongoose');

const potholeReportSchema = new mongoose.Schema({
  location: { type: String, required: true },
  severity: { type: String, required: true },
  image: { type: String, required: true },
  reportedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PotholeReport', potholeReportSchema);
