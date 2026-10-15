const express = require('express');
const router = express.Router();
const institutionController = require('../controllers/institutionController');
const { authenticateToken } = require('../middleware/auth');

// Register institution (public route)
router.post('/register', institutionController.registerInstitution);

// Get institution profile (requires authentication)
router.get('/profile/:id', authenticateToken, institutionController.getInstitutionProfile);

// Update institution profile (requires authentication)
router.put('/profile/:id', authenticateToken, institutionController.updateInstitutionProfile);

// Get all institutions (requires authentication)
router.get('/', authenticateToken, institutionController.getAllInstitutions);

module.exports = router;