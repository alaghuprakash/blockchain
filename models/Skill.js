const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const skillSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  skillCategory: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  skillBadge: {
    type: String, // URL or base64 of skill badge/icon
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update updatedAt on save
skillSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

skillSchema.plugin(uniqueValidator.default);

// Index for faster searching
skillSchema.index({ skillName: 'text', skillCategory: 'text' });

module.exports = mongoose.model('Skill', skillSchema);