const mongoose = require('mongoose');   

const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);
