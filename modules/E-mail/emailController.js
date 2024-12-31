// controllers/emailController.js
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const express = require('mongoose');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, // Use 587 for TLS if 465 doesn't work
  secure: true, // true for SSL (port 465), false for TLS (port 587)
  auth: {
    user: 'ssetpal6@gmail.com',
    pass: 'epyasnkvdpdtysij' // Use 16-character App Password here
  }
});
  
// Sample data for the email
const emailData = {
  name: 'Uday',
  message: 'This is a test email sent using EJS template rendering.'
};

// Function to send email
const sendEmail = (req, res) => {
  // Make sure that res is available inside the renderFile callback
  ejs.renderFile(path.join(__dirname, './emailTemplate.ejs'), emailData, (err, html) => {
    if (err) {
      console.log("Error rendering EJS template:", err);
      return res.status(500).send('Error rendering email template');
    }

    // Email options
    const mailOptions = {
      from: '"Jingalala" <lalajingalala92@gmail.com>', // sender address
      to: 'ppadiya473@rku.ac.in', // receiver's email address
      subject: 'Test Email with EJS Template',
      html: html // HTML content from rendered EJS template
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).send('Error sending email');
      }
      console.log('Email sent successfully: ' + info.response);
      res.status(200).send('Email sent successfully');
    });
  });
};

module.exports = {
  sendEmail
};
