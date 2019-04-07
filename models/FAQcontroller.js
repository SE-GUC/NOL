
var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');

var faqs = mongoose.model('faqs', {
     admin_id: {
         type: Number,
         required: true
     },
     user_id: {
         type: Number
         
     },
     AWGadmin_id: {
         type: Number
     },
     question: {
        type: String
    },
    answer: {
        type: String
    },
    qes_date: {
        type: Date
    },
    ans_date: {
        type: Date
    }
});



module.exports = {faqs};