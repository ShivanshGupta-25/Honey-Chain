const User = require("../models/User");


// ========================================
// Ensure Settings Exist
// ========================================

const ensureSettings = (user) => {
  if (!user.settings) {
    user.settings = {};
  }

  if (!user.settings.notifications) {
    user.settings.notifications = {};
  }

  if (!user.settings.privacy) {
    user.settings.privacy = {};
  }

  return user;
};


// ========================================
// Get Settings
// ========================================

const getSettings = async (req, res) => {
  try {
    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user = ensureSettings(user);

    await user.save();

    res.status(200).json({
      success: true,
      settings: user.settings,
    });

  } catch (error) {
    console.error(
      "Get settings error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch settings",
    });
  }
};


// ========================================
// Update General Settings
// ========================================

const updateGeneralSettings = async (
  req,
  res
) => {
  try {
    const {
      language,
      timezone,
      dateFormat,
    } = req.body;

    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user = ensureSettings(user);

    if (language !== undefined) {
      if (language !== "en") {
        return res.status(400).json({
          success: false,
          message: "Unsupported language",
        });
      }

      user.settings.language = language;
    }

    if (timezone !== undefined) {
      user.settings.timezone = timezone;
    }

    if (dateFormat !== undefined) {
      const allowedFormats = [
        "DD/MM/YYYY",
        "MM/DD/YYYY",
        "YYYY-MM-DD",
      ];

      if (!allowedFormats.includes(dateFormat)) {
        return res.status(400).json({
          success: false,
          message: "Invalid date format",
        });
      }

      user.settings.dateFormat =
        dateFormat;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "General settings updated",
      settings: user.settings,
    });

  } catch (error) {
    console.error(
      "General settings error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to update general settings",
    });
  }
};


// ========================================
// Update Notifications
// ========================================

const updateNotificationSettings = async (
  req,
  res
) => {
  try {
    const {
      hiveHealth,
      batchUpdates,
      system,
      email,
    } = req.body;

    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user = ensureSettings(user);

    if (hiveHealth !== undefined) {
      user.settings.notifications.hiveHealth =
        Boolean(hiveHealth);
    }

    if (batchUpdates !== undefined) {
      user.settings.notifications.batchUpdates =
        Boolean(batchUpdates);
    }

    if (system !== undefined) {
      user.settings.notifications.system =
        Boolean(system);
    }

    if (email !== undefined) {
      user.settings.notifications.email =
        Boolean(email);
    }

    await user.save();

    res.status(200).json({
      success: true,
      message:
        "Notification settings updated",
      settings: user.settings,
    });

  } catch (error) {
    console.error(
      "Notification settings error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to update notification settings",
    });
  }
};


// ========================================
// Update Privacy
// ========================================

const updatePrivacySettings = async (
  req,
  res
) => {
  try {
    const {
      profileVisibility,
    } = req.body;

    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user = ensureSettings(user);

    const allowedVisibility = [
      "private",
      "organization",
    ];

    if (
      profileVisibility !== undefined &&
      !allowedVisibility.includes(
        profileVisibility
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid profile visibility option",
      });
    }

    if (profileVisibility !== undefined) {
      user.settings.privacy.profileVisibility =
        profileVisibility;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message:
        "Privacy settings updated",
      settings: user.settings,
    });

  } catch (error) {
    console.error(
      "Privacy settings error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to update privacy settings",
    });
  }
};


module.exports = {
  getSettings,
  updateGeneralSettings,
  updateNotificationSettings,
  updatePrivacySettings,
};