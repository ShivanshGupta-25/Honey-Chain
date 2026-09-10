const mongoose = require("mongoose");

const hiveSchema = new mongoose.Schema(
  {
    beekeeper: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Beekeeper is required"],
      index: true,
    },

    hiveId: {
      type: String,
      required: [true, "Hive ID is required"],
      trim: true,
    },

    location: {
      type: String,
      required: [true, "Hive location is required"],
      trim: true,
    },

    hiveType: {
      type: String,
      enum: [
        "Langstroth",
        "Top Bar",
        "National",
        "Dadant",
        "Other",
      ],
      default: "Langstroth",
    },

    status: {
      type: String,
      enum: ["active", "inactive", "maintenance"],
      default: "active",
    },

    colonyStrength: {
      type: String,
      enum: ["weak", "moderate", "strong"],
      default: "moderate",
    },

    queenPresent: {
      type: Boolean,
      default: true,
    },

    installationDate: {
      type: Date,
      default: Date.now,
    },

    notes: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

hiveSchema.index(
  { beekeeper: 1, hiveId: 1 },
  { unique: true }
);

module.exports = mongoose.model("Hive", hiveSchema);