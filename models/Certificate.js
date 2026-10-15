const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const certificateSchema = new mongoose.Schema({
  certificateId: {
    type: String,
    required: true,
    unique: true,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  institutionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Institution',
    required: true,
  },
  certificateName: {
    type: String,
    required: true,
    trim: true,
  },
  issueDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  expiryDate: {
    type: Date,
  },
  blockchainHash: {
    type: String,
    required: true,
    unique: true,
  },
  transactionId: {
    type: String,
    unique: true,
  },
  qrCode: {
    type: String, // URL or base64 of QR code image
  },
  pdfUrl: {
    type: String, // URL to stored PDF
  },
  status: {
    type: String,
    enum: ['issued', 'revoked', 'expired'],
    default: 'issued',
  },
  digitalSignature: {
    type: String,
  },
  // Skill sets - Creative enhancement
  skills: [{
    skillName: {
      type: String,
      required: true,
      required: true,
      trim: true,
    },
    proficiencyLevel: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced', 'expert'],
      default: 'intermediate',
    },
    skillDescription: {
      type: String,
    },
    skillCategory: {
      type: String,
      trim: true,
    },
    endorsedBy: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    endorsementDate: {
      type: Date,
      default: Date.now,
    },
    skillBadge: {
      type: String, // URL or base64 of skill badge/icon
    }
  }],
  metadata: {
    type: mongoose.Schema.Types.Mixed,
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
certificateSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Index for faster skill-based searching
certificateSchema.index({ 'skills.skillName': 1 });
certificateSchema.index({ 'skills.skillCategory': 1 });

certificateSchema.plugin(uniqueValidator.default);

module.exports = mongoose.model('Certificate', certificateSchema);