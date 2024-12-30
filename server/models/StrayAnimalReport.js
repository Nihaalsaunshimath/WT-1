// server/models/StrayAnimalReport.js
// const mongoose = require('mongoose');

// const strayAnimalReportSchema = new mongoose.Schema({
//   animalType: { type: String, required: true },
//   location: { type: String, required: true },
//   status: { type: String, required: true },
//   image: { type: String, required: true },
//   reportedAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('StrayAnimalReport', strayAnimalReportSchema);
const mongoose = require('mongoose');

const strayAnimalReportSchema = new mongoose.Schema({
  animalType: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, required: true },
  image: { type: String, required: true },
  reportedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('StrayAnimalReport', strayAnimalReportSchema);
