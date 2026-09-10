const Hive = require("../models/Hive");

// ========================================
// Create Hive
// ========================================

const createHive = async (req, res) => {
  try {
    const {
      hiveId,
      location,
      hiveType,
      status,
      colonyStrength,
      queenPresent,
      installationDate,
      notes,
    } = req.body;

    if (!hiveId || !location) {
      return res.status(400).json({
        success: false,
        message: "Hive ID and location are required",
      });
    }

    const existingHive = await Hive.findOne({
      beekeeper: req.user._id,
      hiveId: hiveId.trim(),
    });

    if (existingHive) {
      return res.status(409).json({
        success: false,
        message: "A hive with this ID already exists",
      });
    }

    const hive = await Hive.create({
      beekeeper: req.user._id,
      hiveId: hiveId.trim(),
      location,
      hiveType,
      status,
      colonyStrength,
      queenPresent,
      installationDate,
      notes,
    });

    return res.status(201).json({
      success: true,
      message: "Hive created successfully",
      data: hive,
    });
  } catch (error) {
    console.error("Create hive error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create hive",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
};

// ========================================
// Get All Hives
// ========================================

const getHives = async (req, res) => {
  try {
    const hives = await Hive.find({
      beekeeper: req.user._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: hives.length,
      data: hives,
    });
  } catch (error) {
    console.error("Get hives error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch hives",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
};

// ========================================
// Get Single Hive
// ========================================

const getHiveById = async (req, res) => {
  try {
    const hive = await Hive.findOne({
      _id: req.params.id,
      beekeeper: req.user._id,
    });

    if (!hive) {
      return res.status(404).json({
        success: false,
        message: "Hive not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: hive,
    });
  } catch (error) {
    console.error("Get hive error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch hive",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
};

// ========================================
// Update Hive
// ========================================

const updateHive = async (req, res) => {
  try {
    const {
      hiveId,
      location,
      hiveType,
      status,
      colonyStrength,
      queenPresent,
      installationDate,
      notes,
    } = req.body;

    const hive = await Hive.findOne({
      _id: req.params.id,
      beekeeper: req.user._id,
    });

    if (!hive) {
      return res.status(404).json({
        success: false,
        message: "Hive not found",
      });
    }

    if (hiveId !== undefined) {
      const duplicateHive = await Hive.findOne({
        beekeeper: req.user._id,
        hiveId: hiveId.trim(),
        _id: { $ne: hive._id },
      });

      if (duplicateHive) {
        return res.status(409).json({
          success: false,
          message: "Another hive with this ID already exists",
        });
      }

      hive.hiveId = hiveId.trim();
    }

    if (location !== undefined) {
      hive.location = location;
    }

    if (hiveType !== undefined) {
      hive.hiveType = hiveType;
    }

    if (status !== undefined) {
      hive.status = status;
    }

    if (colonyStrength !== undefined) {
      hive.colonyStrength = colonyStrength;
    }

    if (queenPresent !== undefined) {
      hive.queenPresent = queenPresent;
    }

    if (installationDate !== undefined) {
      hive.installationDate = installationDate;
    }

    if (notes !== undefined) {
      hive.notes = notes;
    }

    await hive.save();

    return res.status(200).json({
      success: true,
      message: "Hive updated successfully",
      data: hive,
    });
  } catch (error) {
    console.error("Update hive error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update hive",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
};

// ========================================
// Delete Hive
// ========================================

const deleteHive = async (req, res) => {
  try {
    const hive = await Hive.findOneAndDelete({
      _id: req.params.id,
      beekeeper: req.user._id,
    });

    if (!hive) {
      return res.status(404).json({
        success: false,
        message: "Hive not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Hive deleted successfully",
    });
  } catch (error) {
    console.error("Delete hive error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete hive",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
};

module.exports = {
  createHive,
  getHives,
  getHiveById,
  updateHive,
  deleteHive,
};