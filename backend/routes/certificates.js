const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// Fallback certificate data
const fallbackCertificates = [
  {
    id: 1,
    title: "NPTEL DBMS",
    issuer: "NPTEL",
    year: "2024",
    file: null,
    type: "pdf",
  },
  {
    id: 2,
    title: "React.js Developer Intern",
    issuer: "Saarthilms",
    year: "2024",
    file: null,
    type: "image",
  },
  {
    id: 3,
    title: "Full Stack Intern",
    issuer: "InternPe",
    year: "2023",
    file: null,
    type: "image",
  },
];

// GET /api/certificates — list all certificates
router.get("/", (req, res) => {
  const certsDir = path.join(__dirname, "../assets/certificates");

  if (!fs.existsSync(certsDir)) {
    return res.json({ success: true, data: fallbackCertificates });
  }

  const files = fs.readdirSync(certsDir);
  if (files.length === 0) {
    return res.json({ success: true, data: fallbackCertificates });
  }

  const certs = files
    .filter((f) => /\.(pdf|png|jpg|jpeg)$/i.test(f))
    .map((f, i) => ({
      id: i + 1,
      title: f.replace(/\.[^.]+$/, "").replace(/-|_/g, " "),
      file: `/api/certificates/file/${f}`,
      type: f.endsWith(".pdf") ? "pdf" : "image",
    }));

  res.json({ success: true, data: certs.length ? certs : fallbackCertificates });
});

// GET /api/certificates/file/:filename — serve the file
router.get("/file/:filename", (req, res) => {
  const filePath = path.join(__dirname, "../assets/certificates", req.params.filename);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ success: false, message: "Certificate file not found" });
  }
});

module.exports = router;
