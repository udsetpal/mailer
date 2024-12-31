const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    await mongoose.connect(mongoURI);
    console.log('\x1b[32m%s\x1b[0m', 'MongoDB connected successfully.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
