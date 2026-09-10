const express = require("express");

const {
  getBeekeeperDashboard,
} = require("../controllers/beekeeperController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  authorize("beekeeper"),
  getBeekeeperDashboard
);

module.exports = router;