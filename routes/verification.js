const express = require('express');
const router = express.Router();
const verificationController = require('../controllers/verificationController');

// Verify certificate
router.get('/certificate/:certificateId', verificationController.verifyCertificate);

// Verify skill
router.get('/skill/:skillId', verificationController.verifySkill);

module.exports = router;