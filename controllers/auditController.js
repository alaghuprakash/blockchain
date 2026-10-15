const AuditLog = require('../models/AuditLog');

// Get all audit logs
const getAllAuditLogs = async (req, res) => {
  try {
    const auditLogs = await AuditLog.find()
      .populate('userId', 'name email role')
      .sort({ timestamp: -1 });
    res.json(auditLogs);
  } catch (error) {
    console.error('Get all audit logs error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get audit logs by user ID
const getAuditLogsByUserId = async (req, res) => {
  try {
    const auditLogs = await AuditLog.find({ userId: req.params.userId })
      .sort({ timestamp: -1 });
    res.json(auditLogs);
  } catch (error) {
    console.error('Get audit logs by user ID error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get audit logs by resource type and ID
const getAuditLogsByResource = async (req, res) => {
  try {
    const { resourceType, resourceId } = req.params;

    const auditLogs = await AuditLog.find({
      resourceType,
      resourceId
    })
    .populate('userId', 'name email role')
    .sort({ timestamp: -1 });

    res.json(auditLogs);
  } catch (error) {
    console.error('Get audit logs by resource error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create audit log (typically called internally, not via API)
const createAuditLog = async (auditData) => {
  try {
    const auditLog = new AuditLog(auditData);
    await auditLog.save();
    return auditLog;
  } catch (error) {
    console.error('Create audit log error:', error);
    throw error;
  }
};

module.exports = {
  getAllAuditLogs,
  getAuditLogsByUserId,
  getAuditLogsByResource,
  createAuditLog
};