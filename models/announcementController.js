var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var announcements = mongoose.model('announcements', {
     Description:{
         type: String,
         required: true
     },
     posted_date: {
         type: Date
     },
     event_id: {
         type: Number
     },
     user_id: {
         type: Number 
     }
});



module.exports = {announcements};