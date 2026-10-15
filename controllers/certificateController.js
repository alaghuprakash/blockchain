const Certificate = require('../models/Certificate');

// Issue certificate
const issueCertificate = async (req, res) => {
  try {
    const { studentId, institutionId, skillId, issueDate, expiryDate, certificateData } = req.body;

    const certificate = new Certificate({
      studentId,
      institutionId,
      skillId,
      issueDate,
      expiryDate,
      certificateData
    });

    await certificate.save();

    res.status(201).json({
      message: 'Certificate issued successfully',
      certificate
    });
  } catch (error) {
    console.error('Issue certificate error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get certificate by ID
const getCertificateById = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);
    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }
    res.json(certificate);
  } catch (error) {
    console.error('Get certificate error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all certificates (for admin/institution)
const getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 });
    res.json(certificates);
  } catch (error) {
    console.error('Get all certificates error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Verify certificate
const verifyCertificate = async (req, res) => {
  try {
    const { certificateId } = req.params;

    const certificate = await Certificate.findById(certificateId);
    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found', valid: false });
    }

    res.json({
      message: 'Certificate verification successful',
      valid: true,
      certificate: {
        id: certificate._id,
        studentId: certificate.studentId,
        institutionId: certificate.institutionId,
        issueDate: certificate.issueDate,
        expiryDate: certificate.expiryDate
      }
    });
  } catch (error) {
    console.error('Verify certificate error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  issueCertificate,
  getCertificateById,
  getAllCertificates,
  verifyCertificate
};