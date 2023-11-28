const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        type: String
    },
    songs: {
        type: [ String ]
    }
  });

module.exports = locationSchema;
