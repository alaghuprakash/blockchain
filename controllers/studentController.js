const Student = require('../models/Student');
const User = require('../models/User');

// Register student
exports.registerStudent = async (req, res) => {
  try {
    const { studentName, registerNo, department, email, password } = req.body;

    // Check if student register number already exists
    let student = await Student.findOne({ registerNo });
    if (student) {
      return res.status(400).json({ message: 'Student with this register number already exists' });
    }

    // Check if student email already exists
    student = await Student.findOne({ email });
    if (student) {
      return res.status(400).json({ message: 'Student with this email already exists' });
    }

    // Check if user with this email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create student
    student = new Student({
      studentName,
      registerNo,
      department,
      email
    });

    await student.save();

    // Create user account for student
    user = new User({
      name: studentName,
      email,
      password,
      role: 'student'
    });

    await user.save();

    res.status(201).json({
      message: 'Student registered successfully',
      student: {
        id: student._id,
        studentName: student.studentName,
        registerNo: student.registerNo,
        department: student.department,
        email: student.email
      }
    });
  } catch (error) {
    console.error('Register student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get student profile
exports.getStudentProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    console.error('Get student profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update student profile
exports.updateStudentProfile = async (req, res) => {
  try {
    const { studentName, department } = req.body;
    
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { studentName, department },
      { new: true, runValidators: true }
    );
    
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    
    res.json({
      message: 'Student updated successfully',
      student
    });
  } catch (error) {
    console.error('Update student profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all students (for admin/institution)
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (error) {
    console.error('Get all students error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
