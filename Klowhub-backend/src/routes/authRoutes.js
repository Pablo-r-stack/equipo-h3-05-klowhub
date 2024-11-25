const express = require("express");
const {
  register,
  login,
  getAvatars,
} = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/avatars", getAvatars);

module.exports = router;
