// userRoutes.js
const express = require("express");
const router = express.Router();
const apiResponse = require("../utils/response");

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Bob Smith" },
];

router.get("/users/all", (req, res) => {
  res.json(apiResponse(200, users));
});

router.get("/user/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    res.json(apiResponse(200, user));
  } else {
    res.status(404).json(apiResponse(404, null));
  }
});

module.exports = router;
