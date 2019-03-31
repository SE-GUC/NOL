var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var announcements = mongoose.model('announcements', {
    Description:{
        type: String,
        required: true
    },
    posted_date:{
        type: String,
        required: true
    }
});

module.exports = {announcements};