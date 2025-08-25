const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv");
const path = require("path");

// Import routes
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/users.js");
const programRoutes = require("./routes/programs.js");
const contactRoutes = require("./routes/contact.js");
const enrollmentRoutes = require("./routes/enrollments.js");
const adminRoutes = require("./routes/admin.js");

// Import middleware
const errorHandler = require("../middleware/errorHandler.js");
const notFound = require("../middleware/notFound.js");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // limit each IP to 100 requests per windowMs
  message: {
    error: "Too many requests from this IP, please try again later.",
  },
});

// Middleware
app.use(helmet());
app.use(compression());
app.use(limiter);
app.use(morgan("combined"));

// CORS configuration
// Allow configured FRONTEND_URL, or Vercel URL, otherwise default to permissive in serverless to avoid browser network errors
const vercelOrigin = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;
const corsOrigin = process.env.FRONTEND_URL || vercelOrigin || true;
app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Le Jardin Backend is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/admin", adminRoutes);

// Serve static files from frontend build (for production)
if (process.env.NODE_ENV === "production") {
  const frontendBuildPath = path.join(__dirname, "../../dist");
  app.use(express.static(frontendBuildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendBuildPath, "index.html"));
  });
}

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server only when executed directly (not when imported by a serverless function)
if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Le Jardin Backend server running on port ${PORT}`);
    console.log(`📱 Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(
      `🌐 CORS enabled for: ${
        process.env.FRONTEND_URL || "http://localhost:5173"
      }`
    );
  });
}

module.exports = app;
