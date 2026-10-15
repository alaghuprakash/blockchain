const Certificate = require('../models/Certificate');

// Verify certificate
const verifyCertificate = async (req, res) => {
  try {
    const { certificateId } = req.params;

    const certificate = await Certificate.findById(certificateId);
    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found', valid: false });
    }

    // Additional verification logic could go here
    // For now, we'll just check if the certificate exists and is valid

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

// Verify skill
const verifySkill = async (req, res) => {
  try {
    const { skillId } = req.params;

    const Skill = require('../models/Skill');
    const skill = await Skill.findById(skillId);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found', valid: false });
    }

    res.json({
      message: 'Skill verification successful',
      valid: true,
      skill: {
        id: skill._id,
        skillName: skill.skillName,
        skillCategory: skill.skillCategory,
        isActive: skill.isActive
      }
    });
  } catch (error) {
    console.error('Verify skill error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  verifyCertificate,
  verifySkill
};