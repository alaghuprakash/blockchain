const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const institutionSchema = new mongoose.Schema({
  institutionName: {
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
  address: {
    type: String,
    required: true,
  },
  accreditationNo: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

institutionSchema.plugin(uniqueValidator.default);

module.exports = mongoose.model('Institution', institutionSchema);