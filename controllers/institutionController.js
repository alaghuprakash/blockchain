const Institution = require('../models/Institution');
const User = require('../models/User');

// Register institution
exports.registerInstitution = async (req, res) => {
  try {
    const { institutionName, email, address, accreditationNo, password } = req.body;

    // Check if institution email already exists
    let institution = await Institution.findOne({ email });
    if (institution) {
      return res.status(400).json({ message: 'Institution with this email already exists' });
    }

    // Check if user with this email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create institution
    institution = new Institution({
      institutionName,
      email,
      address,
      accreditationNo
    });

    await institution.save();

    // Create user account for institution
    user = new User({
      name: institutionName,
      email,
      password,
      role: 'institution'
    });

    await user.save();

    res.status(201).json({
      message: 'Institution registered successfully',
      institution: {
        id: institution._id,
        institutionName: institution.institutionName,
        email: institution.email,
        address: institution.address,
        accreditationNo: institution.accreditationNo
      }
    });
  } catch (error) {
    console.error('Register institution error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get institution profile
exports.getInstitutionProfile = async (req, res) => {
  try {
    const institution = await Institution.findById(req.params.id);
    if (!institution) {
      return res.status(404).json({ message: 'Institution not found' });
    }
    res.json(institution);
  } catch (error) {
    console.error('Get institution profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update institution profile
exports.updateInstitutionProfile = async (req, res) => {
  try {
    const { institutionName, address, accreditationNo } = req.body;
    
    const institution = await Institution.findByIdAndUpdate(
      req.params.id,
      { institutionName, address, accreditationNo },
      { new: true, runValidators: true }
    );
    
    if (!institution) {
      return res.status(404).json({ message: 'Institution not found' });
    }
    
    res.json({
      message: 'Institution updated successfully',
      institution
    });
  } catch (error) {
    console.error('Update institution profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all institutions (for admin)
exports.getAllInstitutions = async (req, res) => {
  try {
    const institutions = await Institution.find().sort({ createdAt: -1 });
    res.json(institutions);
  } catch (error) {
    console.error('Get all institutions error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
