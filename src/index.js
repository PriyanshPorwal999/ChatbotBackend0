const express = require("express");
const connectDB = require("./db/index.js");
const tokenRoutes = require("./routes/token.routes.js");
require("dotenv").config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use("/api", tokenRoutes);

app.get("/", (req,res) => 
{
  console.log("Route is working");
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
