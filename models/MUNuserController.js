var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var MUNusers = mongoose.model('MUNusers', {
   
     email: {
         type: String,
         required: true
     },
     username: {
         type: String,
         required: true

     },
     password: {
         type: String,
         required: true
     },
     aL:{
         type: String,
         required: true
     },
     preferredcommittee:{
         type: String,
         required: true
     },
});



module.exports = {MUNusers};