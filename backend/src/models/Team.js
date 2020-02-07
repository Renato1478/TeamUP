const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    thumbnail: String,
    game: String,
    location: String,
    language: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Team', TeamSchema);