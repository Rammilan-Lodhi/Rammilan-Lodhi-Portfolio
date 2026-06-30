// const express = require("express");
// const router = express.Router();
// const { body, validationResult } = require("express-validator");
// const nodemailer = require("nodemailer");

// const validate = [
//   body("name").trim().notEmpty().withMessage("Name is required"),
//   body("email").isEmail().withMessage("Valid email is required"),
//   body("message").trim().isLength({ min: 10 }).withMessage("Message must be at least 10 characters"),
// ];

// router.post("/", validate, async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ success: false, errors: errors.array() });
//   }

//   const { name, email, message } = req.body;

//   // Send email if CONTACT_EMAIL and GMAIL_PASS are configured
//   if (process.env.CONTACT_EMAIL && process.env.GMAIL_PASS) {
//     try {
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.CONTACT_EMAIL,
//           pass: process.env.GMAIL_PASS,
//         },
//       });

//       await transporter.sendMail({
//         from: `"Portfolio Contact" <${process.env.CONTACT_EMAIL}>`,
//         to: process.env.CONTACT_EMAIL,
//         subject: `Portfolio Contact from ${name}`,
//         html: `
//           <h2>New Contact Message</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Message:</strong></p>
//           <p>${message}</p>
//         `,
//       });
//     } catch (err) {
//       console.error("Email send failed:", err.message);
//     }
//   }

//   console.log(`📩 Contact from ${name} <${email}>: ${message}`);
//   res.json({ success: true, message: "Message received! I'll get back to you soon." });
// });

// module.exports = router;

//++++++++++++++++++++++++++
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const validate = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message')
    .trim()
    .isLength({ min: 10 })
    .withMessage('Message must be at least 10 characters'),
];

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.GMAIL_PASS,
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});

router.post('/', validate, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const { name, email, message } = req.body;

  try {
    await transporter.verify();

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>📩 New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <div style="background:#f5f5f5;padding:15px;border-radius:8px;">
            ${message}
          </div>

          <br>

          <small>
            This message was sent from your portfolio contact form.
          </small>
        </div>
      `,
    });

    console.log(`✅ Email sent successfully`);
    console.log(`📩 Contact from ${name} <${email}>`);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch (err) {
    console.error('❌ Email Error:', err);

    return res.status(500).json({
      success: false,
      message: 'Unable to send email.',
      error: err.message,
    });
  }
});

module.exports = router;
