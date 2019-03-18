var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var users = mongoose.model('users', {
     fullname:{
         type: String,
         required: true
     },
     email: {
         type: String
     },
     username: {
         type: String
     },
     password: {
         type: String 
     }
});



module.exports = {users};