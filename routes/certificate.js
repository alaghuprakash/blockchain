const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificateController');
const { authenticateToken } = require('../middleware/auth');

// Issue certificate (requires authentication)
router.post('/issue', authenticateToken, certificateController.issueCertificate);

// Get certificate by ID (requires authentication)
router.get('/:id', authenticateToken, certificateController.getCertificateById);

// Get all certificates (requires authentication)
router.get('/', authenticateToken, certificateController.getAllCertificates);

// Verify certificate (public route for verification)
router.get('/verify/:certificateId', certificateController.verifyCertificate);

module.exports = router;