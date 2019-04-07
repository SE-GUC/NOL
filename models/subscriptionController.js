var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var subscriptions = mongoose.model('subscriptions', {
     email:{
         type: String,
         required: true
     }
});



module.exports = {subscriptions};