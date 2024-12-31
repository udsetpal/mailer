// config/emailConfig.js

require('dotenv').config();

module.exports = {
  transportOptions: {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Accessing the email from .env
      pass: process.env.EMAIL_PASS  // Accessing the password from .env
    }
  }
};

