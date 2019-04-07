var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var merchandise = mongoose.model('merchandise', {

    picture: {
         type: String,
         required: true
     },
     releaseDate: {
         type: String,
         required: true
     }
});

module.exports = {merchandise};