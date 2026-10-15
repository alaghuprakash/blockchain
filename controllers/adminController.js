const User = require('../models/User');
const Institution = require('../models/Institution');
const Student = require('../models/Student');
const Certificate = require('../models/Certificate');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all institutions
const getAllInstitutions = async (req, res) => {
  try {
    const institutions = await Institution.find().sort({ createdAt: -1 });
    res.json(institutions);
  } catch (error) {
    console.error('Get all institutions error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (error) {
    console.error('Get all students error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all certificates
const getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 });
    res.json(certificates);
  } catch (error) {
    console.error('Get all certificates error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get system stats
const getSystemStats = async (req, res) => {
  try {
    const [usersCount, institutionsCount, studentsCount, certificatesCount] = await Promise.all([
      User.countDocuments(),
      Institution.countDocuments(),
      Student.countDocuments(),
      Certificate.countDocuments()
    ]);

    res.json({
      users: usersCount,
      institutions: institutionsCount,
      students: studentsCount,
      certificates: certificatesCount
    });
  } catch (error) {
    console.error('Get system stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllUsers,
  getAllInstitutions,
  getAllStudents,
  getAllCertificates,
  getSystemStats
};