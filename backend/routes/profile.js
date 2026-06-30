const express = require("express");
const router = express.Router();
const { profile, skills, experience, achievements } = require("../data/fallback");

router.get("/", (req, res) => {
  res.json({ success: true, data: profile });
});

router.get("/skills", (req, res) => {
  res.json({ success: true, data: skills });
});

router.get("/experience", (req, res) => {
  res.json({ success: true, data: experience });
});

router.get("/achievements", (req, res) => {
  res.json({ success: true, data: achievements });
});

module.exports = router;
