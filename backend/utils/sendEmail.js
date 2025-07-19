const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Usage: sendMail(to, subject, text)
exports.sendMail = (to, subject, text) =>
  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  });
