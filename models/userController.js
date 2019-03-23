var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var usersschema = new mongoose.Schema({
    ID:{
        type:String
    },
     fullname:{
         type: String
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

mongoose.model('users', usersschema);


module.exports = router;