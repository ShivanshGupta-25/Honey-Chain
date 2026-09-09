const express = require("express");

const {
  signup,
  login,
  getMe,
  updateProfile,
  changePassword,
} = require("../controllers/authController");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();


// Public routes

router.post("/signup", signup);

router.post("/login", login);


// Protected routes

router.get("/me", protect, getMe);

router.put(
  "/profile",
  protect,
  updateProfile
);

router.put(
  "/change-password",
  protect,
  changePassword
);


module.exports = router;