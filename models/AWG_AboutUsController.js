var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var AWG_AboutUs = mongoose.model('AWG_AboutUs', {
     description:{
         type: String,
         required: true
     },
     mission: {
         type: String,
         required:true
     },
     vision:{
         type:String,
         required:true
     }
});



module.exports = {AWG_AboutUs};