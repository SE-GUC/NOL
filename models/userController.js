const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const Joi = require('joi');


var users = mongoose.model('users', {
     fullname:{
         type: String,
         required: true,
         minlength: 5,
        maxlength: 50
     },
     email: {
         type: String,
         required: true,
         minlength: 5,
         maxlength: 255,
         unique: true
     },
     username: {
         type: String,
         required: true,
         minlength: 5,
         maxlength: 50
     },
     password: {
         type: String,
         required: true,
         minlength: 5,
         maxlength: 1024
     }  
});


module.exports = {users};
