var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var subdomains = mongoose.model('subdomains', {
     name: {
         type: String,
         required: true
     },
     description: {
         type: String
     }
});



module.exports = {subdomains};