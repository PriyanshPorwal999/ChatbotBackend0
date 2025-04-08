const express = require("express");
const router = express.Router();
const { generateAndSaveToken } = require("../controllers/generateToken.controller.js");

// POST /api/generate_token
router.post("/generate_token", generateAndSaveToken);

module.exports = router;
