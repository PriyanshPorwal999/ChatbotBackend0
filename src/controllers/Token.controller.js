const Token = require("../models/tokenNumber.models.js");

// Function to generate a random token
function generateToken() {
  return (
    Math.random().toString(36).substring(2, 10).toUpperCase() +
    Math.random().toString(36).substring(2, 10).toUpperCase()
  );
}

// Unified Controller Function
const handleTokenRequest = async (req, res) => {
  const act = req.query.act;          // act=generate
  const act1 = req.query.act1;        // act1=check or token value
  const tokenQuery = req.query.token; // directly passed token

  try {
    // 🔍 1. Check Token
    if (act1 === 'check' || /^[A-Z0-9]{16}$/.test(act1) || /^[A-Z0-9]{16}$/.test(tokenQuery)) {
      const tokenToCheck = act1 || tokenQuery;
      console.log("Checking Token:", tokenToCheck);

      const tokenData = await Token.findOne({ token: tokenToCheck });

      if (!tokenData) {
        return res.status(404).json({
          status: "not found",
          message: "Token not found in our system. Please check the value and try again."
        });
      }

      return res.json({
        status: "valid",
        token: tokenData.token,
        created_at: tokenData.created_at,
        message: "Token is valid and registered in our system."
      });
    }

    // 🔄 2. Generate New Token
    if (act === 'generate') {
      const newTokenValue = generateToken();
      const newToken = new Token({ token: newTokenValue });
      await newToken.save();

      return res.status(201).json({
        status: "generated",
        token: newTokenValue,
        message: "Token has been successfully generated and saved."
      });
    }

    // ❌ Invalid Request
    return res.status(400).json({
      status: "error",
      message: "Invalid parameters. Use act=generate to create a token or provide a valid token to check."
    });

  } catch (err) {
    console.error("Token Handler Error:", err.message);
    res.status(500).json({ status: "error", message: "Server error occurred" });
  }
};

module.exports = {
  handleTokenRequest,
};
