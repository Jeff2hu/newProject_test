// userRoutes.js
const express = require("express");
const router = express.Router();
const apiResponse = require("../utils/response");

const users = [
  { id: 1, email: "user01@gmail.com", password: "1111" },
  { id: 2, email: "user02@gmail.com", password: "2222" },
  { id: 3, email: "user03@gmail.com", password: "3333" },
];

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.json(apiResponse(200, user));
  } else {
    res.status(404).json(apiResponse(404, null));
  }
});

module.exports = router;
