const express = require('express');
const router = express.Router();
const { handleTokenRequest } = require('../controllers/token.controller');

// Use the same route for both generate and validate
router.post('/token', handleTokenRequest);

module.exports = router;
