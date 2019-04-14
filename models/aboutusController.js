var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var aboutuss = mongoose.model('aboutuss', {
    misson:{
        type: String,
        required: true
    },
    vision:{
        type: String,
        required: true
    },
    clubname:{
        type: String,
        required: true
    },
    achievement_Desc: {
        type: String,
        required: true
    },
    achievement_Pic:{
        type: String,
        required: true
    }
});

module.exports = {aboutuss};