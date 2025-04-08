const Token = require("../models/tokenNumber.models.js");

// Function to generate a random token
function generateToken() {
  return (
    Math.random().toString(36).substring(2, 10).toUpperCase() +
    Math.random().toString(36).substring(2, 10).toUpperCase()
  );
}

// Controller function to generate and save token
const generateAndSaveToken = async (req, res) => {
  try {
    const token = generateToken();

    const newToken = new Token({ token });
    await newToken.save();

    res.status(201).json({ token });
  } catch (err) {
    console.error("Error generating token:", err.message);
    res.status(500).send("Server Error");
  }
};

// GET: Search for token by value
const getTokenByValue = async (req, res) => {
  try {
    const tokenValue = req.params.tokenValue;
    const tokenData = await Token.findOne({ token: tokenValue });

    if (!tokenData) {
      return res.status(404).json({ message: "Token not found" });
    }

    res.json({ token: tokenData.token, created_at: tokenData.created_at });
  } catch (err) {
    console.error("Error searching token:", err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  generateAndSaveToken,
  getTokenByValue,
};
