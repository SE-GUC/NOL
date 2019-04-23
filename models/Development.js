const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const dev = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
  
});

module.exports = {dev};