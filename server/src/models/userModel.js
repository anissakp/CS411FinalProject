const mongoose = require('mongoose');

const uerSchema = new mongoose.Schema({
    userID: {//their spotify id
        type: String
    },
    location: {//location name assciated with their account
        type: String
    },
    playlistID:{ //playlist for that location
        type: String
    }
  });

module.exports = mongoose.model('user', userSchema);