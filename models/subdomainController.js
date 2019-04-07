var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var subdomain = mongoose.model('subdomain', {
     name: {
         type: String,
         required: true
     },
     description: {
         type: String
     }
});



module.exports = {subdomain};