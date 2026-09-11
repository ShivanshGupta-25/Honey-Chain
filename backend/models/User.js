const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },

    role: {
      type: String,
      enum: ["beekeeper", "consumer", "admin"],
      default: "consumer",
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      trim: true,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    settings: {
      language: {
        type: String,
        enum: ["en"],
        default: "en",
      },

      timezone: {
        type: String,
        default: "Asia/Kolkata",
      },

      dateFormat: {
        type: String,
        enum: [
          "DD/MM/YYYY",
          "MM/DD/YYYY",
          "YYYY-MM-DD",
        ],
        default: "DD/MM/YYYY",
      },

      notifications: {
        hiveHealth: {
          type: Boolean,
          default: true,
        },

        batchUpdates: {
          type: Boolean,
          default: true,
        },

        system: {
          type: Boolean,
          default: true,
        },

        email: {
          type: Boolean,
          default: true,
        },
      },

      privacy: {
        profileVisibility: {
          type: String,
          enum: ["private", "organization"],
          default: "private",
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);