const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// GET /api/resume — returns resume info or download
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Place your resume PDF at: backend/assets/resume.pdf",
    download: "/api/resume/download",
  });
});

// GET /api/resume/download — streams the PDF file
router.get("/download", (req, res) => {
  // PUT RESUME PDF AT: backend/assets/resume.pdf
  const resumePath = path.join(__dirname, "../assets/resume.pdf");

  if (fs.existsSync(resumePath)) {
    res.setHeader("Content-Disposition", 'attachment; filename="Rammilan_Lodhi_Resume.pdf"');
    res.setHeader("Content-Type", "application/pdf");
    fs.createReadStream(resumePath).pipe(res);
  } else {
    res.status(404).json({
      success: false,
      message: "Resume not found. Place your resume at backend/assets/resume.pdf",
    });
  }
});

module.exports = router;
