const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Get all users
router.get('/users', adminController.getAllUsers);

// Get all institutions
router.get('/institutions', adminController.getAllInstitutions);

// Get all students
router.get('/students', adminController.getAllStudents);

// Get all certificates
router.get('/certificates', adminController.getAllCertificates);

// Get system stats
router.get('/stats', adminController.getSystemStats);

module.exports = router;