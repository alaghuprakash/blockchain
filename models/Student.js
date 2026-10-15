const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
    trim: true,
  },
  registerNo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

studentSchema.plugin(uniqueValidator.default);

module.exports = mongoose.model('Student', studentSchema);