const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { authenticateToken } = require('../middleware/auth');

// Register student (public route)
router.post('/register', studentController.registerStudent);

// Get student profile (requires authentication)
router.get('/profile/:id', authenticateToken, studentController.getStudentProfile);

// Update student profile (requires authentication)
router.put('/profile/:id', authenticateToken, studentController.updateStudentProfile);

// Get all students (requires authentication)
router.get('/', authenticateToken, studentController.getAllStudents);

module.exports = router;