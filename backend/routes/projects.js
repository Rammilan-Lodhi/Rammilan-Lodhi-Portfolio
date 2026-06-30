const express = require("express");
const router = express.Router();
const { projects } = require("../data/fallback");

router.get("/", (req, res) => {
  res.json({ success: true, data: projects });
});

router.get("/:id", (req, res) => {
  const project = projects.find((p) => p.id === parseInt(req.params.id) || p.slug === req.params.id);
  if (!project) return res.status(404).json({ success: false, message: "Project not found" });
  res.json({ success: true, data: project });
});

module.exports = router;
