const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");


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
     }  
});



module.exports = {users};
