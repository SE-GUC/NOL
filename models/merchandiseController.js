const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');


var merchandise = mongoose.model('merchandise', new mongoose.Schema({
     release:{
         type: String,
         required: true,
     },
     picture:{
         type: String,
         required: true,
         unique: true
     }
}));



module.exports = {merchandise};

