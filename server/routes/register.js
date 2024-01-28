// userRoutes.js
const express = require("express");
const router = express.Router();
const apiResponse = require("../utils/response");

const users = [
  { id: 1, email: "user01@gmail.com", password: "1111" },
  { id: 2, email: "user02@gmail.com", password: "2222" },
  { id: 3, email: "user03@gmail.com", password: "3333" },
];

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json(apiResponse(400, null));
  }

  const isExist = users.find((user) => user.email === email);

  if (!isExist) {
    res.json(apiResponse(200, { id: 4, name, email }));
  } else {
    res.status(404).json(apiResponse(404, null));
  }
});

module.exports = router;
