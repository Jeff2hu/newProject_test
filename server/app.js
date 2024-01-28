// app.js 或 index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const userRoutes = require("./routes/user");

// 使用正確的路徑
app.use("/api", loginRoutes);
app.use("/api", userRoutes);
app.use("/api", registerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
