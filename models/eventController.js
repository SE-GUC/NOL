var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var events = mongoose.model('events', {

     title: {
         type: String,
         required: true
     },
     summary: {
         type: String,
         required: true
     },
     MoreDetails: {
         type: String,
         required: true
     }
});

module.exports = {events};