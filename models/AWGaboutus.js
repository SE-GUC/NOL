var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var AWGaboutus = mongoose.model('AWG_AboutUs', {
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



module.exports = {AWGaboutus};