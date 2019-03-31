var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var contactus = mongoose.model('contactus', {
     description:{
         type: String,
         required: true
     },
     number:{
        type: String,
        required: true
    },
     email: {
         type: String,
         required: true
     },
     instagram: {
         type: String,
         required: true
     },
     facebook: {
         type: String,
         required: true
     },
     snapchat: {
        type: String,
        required: true
    }
});


module.exports = {contactus};