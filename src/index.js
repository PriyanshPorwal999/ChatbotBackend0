const express = require("express");
const connectDB = require("./db/index.js");
const tokenRoutes = require("./routes/token.routes.js");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors());

// Connect to MongoDB
connectDB();

// Use routes
app.use("/api", tokenRoutes);

app.get("/", (req,res) => 
{
  console.log("Route is working");
})

app.post("/testpost", (req, res) => {
  console.log("🔥 POST /testpost hit");
  res.json({ msg: "POST is working on Railway!" });
});


app.use((req, res, next) => {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.originalUrl);
  next();
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
