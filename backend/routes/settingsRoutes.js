const express = require("express");

const {
  getSettings,
  updateGeneralSettings,
  updateNotificationSettings,
  updatePrivacySettings,
} = require("../controllers/settingsController");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.get(
  "/",
  protect,
  getSettings
);

router.put(
  "/general",
  protect,
  updateGeneralSettings
);

router.put(
  "/notifications",
  protect,
  updateNotificationSettings
);

router.put(
  "/privacy",
  protect,
  updatePrivacySettings
);

module.exports = router;