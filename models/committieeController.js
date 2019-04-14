var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var committiees = mongoose.model('committiees', {
     name:{
         type: String,
         required: true
     },
     head_name:{
        type:String,
        required:true
     },
     head_Id: {
         type: Number,
         required:true
     }
});



module.exports = {committiees};