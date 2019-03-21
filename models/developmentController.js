const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');


var development = mongoose.model('development', {
     title:{
         type: String,
         required: true,
         minlength: 5,
        maxlength: 50
     },
     description: {
         type: String,
         required: true,
         minlength: 5,
         maxlength: 255,

     }
});



module.exports = {development};
