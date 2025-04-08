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

module.exports = {
  generateAndSaveToken,
};
