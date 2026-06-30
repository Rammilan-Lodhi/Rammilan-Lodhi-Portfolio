require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");

const profileRoutes = require("./routes/profile");
const projectsRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");
const resumeRoutes = require("./routes/resume");
const certificatesRoutes = require("./routes/certificates");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: "Too many requests, please try again later." },
});
app.use("/api", limiter);

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("⚠️  MongoDB not connected — using fallback data:", err.message));

app.use("/api/profile", profileRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/certificates", certificatesRoutes);

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Portfolio API is running 🚀", timestamp: new Date() });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio server running on http://localhost:${PORT}`);
});
