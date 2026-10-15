const express = require('express');
const router = express.Router();
const auditController = require('../controllers/auditController');

// Get all audit logs
router.get('/', auditController.getAllAuditLogs);

// Get audit logs by user ID
router.get('/user/:userId', auditController.getAuditLogsByUserId);

// Get audit logs by resource type and ID
router.get('/resource/:resourceType/:resourceId', auditController.getAuditLogsByResource);

module.exports = router;