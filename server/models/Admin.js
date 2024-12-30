// server/models/Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Admin', adminSchema);

// server/routes/wasteReportRoutes.js
const express = require('express');
const { body } = require('express-validator');
const reportController = require('../controller/wasteReportController');

const router = express.Router();