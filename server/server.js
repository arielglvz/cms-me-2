const express = require("express");
const app = express();
const cors = require("cors"); 

app.use(cors());
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());

app.use("/api/portfolio", portfolioRoute);
 
const port = process.env.PORT || 5174;

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});