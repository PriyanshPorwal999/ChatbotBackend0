const express = require('express');
const router = express.Router();
const { handleTokenRequest } = require('../controllers/Token.controller.js');

// Use the same route for both generate and validate
router.post('/token', handleTokenRequest);

router.get('/test', (req, res) => {
    res.json({ msg: "GET /api/test working!" });
  });
  

module.exports = router;
