const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        type: String
    },
    
    location: {
        type: String
    },
  });

module.exports = mongoose.model('Location', locationSchema);