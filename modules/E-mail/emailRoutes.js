// routes/emailRoutes.js
const express = require('express');
const router = express.Router();
const emailController = require('./emailController');

// Route to send an email
router.post('/send-email', emailController.sendEmail);

module.exports = router;
