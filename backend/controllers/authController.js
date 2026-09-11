const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


// ========================================
// Format User Response
// ========================================

const getUserResponse = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
  phone: user.phone,
  profileImage: user.profileImage,
  location: user.location,
  isActive: user.isActive,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});


// ========================================
// Generate JWT
// ========================================

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};


// ========================================
// Signup
// ========================================

const signup = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      phone,
    } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    // Validate role
    const allowedRoles = [
      "beekeeper",
      "consumer",
      "admin",
    ];

    if (role && !allowedRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user role",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      12
    );

    // Create user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: role || "consumer",
      phone: phone || "",
    });

    // Generate token
    const token = generateToken(user);

    res.status(201).json({
      success: true,
      message: "Account created successfully",

      token,

      user: getUserResponse(user),
    });

  } catch (error) {
    console.error("Signup error:", error);

    res.status(500).json({
      success: false,
      message: "Server error during signup",
    });
  }
};


// ========================================
// Login
// ========================================

const login = async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Explicitly select password
    const user = await User.findOne({
      email: email.toLowerCase(),
    }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check account status
    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Your account has been deactivated",
      });
    }

    // Compare password
    const isPasswordCorrect =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate token
    const token = generateToken(user);

    res.status(200).json({
      success: true,
      message: "Login successful",

      token,

      user: getUserResponse(user),
    });

  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};


// ========================================
// Get Current User
// ========================================

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user: getUserResponse(user),
    });

  } catch (error) {
    console.error("Get user error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// ========================================
// Update Profile
// ========================================

const updateProfile = async (req, res) => {
  try {
    const {
      name,
      phone,
      location,
      profileImage,
    } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // -------------------------------
    // Name validation
    // -------------------------------

    if (name !== undefined) {
      const trimmedName = name.trim();

      if (trimmedName.length < 2) {
        return res.status(400).json({
          success: false,
          message: "Name must contain at least 2 characters",
        });
      }

      if (trimmedName.length > 100) {
        return res.status(400).json({
          success: false,
          message: "Name cannot exceed 100 characters",
        });
      }

      user.name = trimmedName;
    }

    // -------------------------------
    // Phone
    // -------------------------------

    if (phone !== undefined) {
      user.phone = phone.trim();
    }

    // -------------------------------
    // Profile image
    // -------------------------------

    if (profileImage !== undefined) {
      user.profileImage = profileImage;
    }

    // -------------------------------
    // Location
    // -------------------------------

    if (location !== undefined) {
      user.location = location;
    }

    // Save changes
    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: getUserResponse(user),
    });

  } catch (error) {
    console.error("Profile update error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while updating profile",
    });
  }
};


// ========================================
// Change Password
// ========================================

const changePassword = async (req, res) => {
  try {
    const {
      currentPassword,
      newPassword,
    } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Current password and new password are required",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message:
          "New password must contain at least 6 characters",
      });
    }

    const user = await User.findById(
      req.user.id
    ).select("+password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const passwordMatch =
      await bcrypt.compare(
        currentPassword,
        user.password
      );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    user.password =
      await bcrypt.hash(newPassword, 12);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });

  } catch (error) {
    console.error(
      "Change password error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server error while changing password",
    });
  }
};


// ========================================
// Export Controllers
// ========================================

module.exports = {
  signup,
  login,
  getMe,
  updateProfile,
  changePassword,
};