const express = require("express");
const router = express.Router();
const { generateAndSaveToken,getTokenByValue } = require("../controllers/Token.controller.js");

// POST /api/generate_token
router.post("/generate_token", generateAndSaveToken);

// GET /api/token/:tokenValue
router.get("/token/:tokenValue", getTokenByValue);

module.exports = router;
