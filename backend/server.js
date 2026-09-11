require("dns").setServers(["8.8.8.8"]);

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const beekeeperRoutes = require("./routes/beekeeperRoutes");
const hiveRoutes = require("./routes/hiveRoutes");
const settingsRoutes = require("./routes/settingsRoutes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ================================
// Security Middleware
// ================================

app.use(helmet());

// ================================
// CORS
// ================================

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// ================================
// Request Logging
// ================================

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ================================
// Body Parsing
// ================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================================
// Rate Limiting
// ================================

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use("/api", apiLimiter);

// ================================
// Root Route
// ================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Honey Chain API is running",
    version: "1.0.0",
  });
});

// ================================
// Health Check
// ================================

app.get("/api/health", (req, res) => {
  const databaseStatus =
    mongoose.connection.readyState === 1
      ? "connected"
      : "disconnected";

  res.status(200).json({
    success: true,
    message: "Honey Chain backend is healthy",
    database: databaseStatus,
    timestamp: new Date().toISOString(),
  });
});


// ================================
// Auth Routes
// ================================

app.use("/api/auth", authRoutes);

// ================================
// Beekeeper Routes
// ================================

app.use("/api/beekeeper", beekeeperRoutes);
app.use("/api/hives", hiveRoutes);


// ================================
// Settings Routes
// ================================

app.use("/api/settings", settingsRoutes);


// ================================
// 404 Handler
// ================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// ================================
// Start Server
// ================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Honey Chain server running on port ${PORT}`
  );
});