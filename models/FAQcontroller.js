
var express = require('express');
var router = express.Router()
const mongoose = require('mongoose');
const Schema = mongoose.Schema

var faqs = mongoose.model('faqs', {
    
    question: {
        type: String,
        required:true
    },
    answer: {
        type: [{ type: Schema.Types.String }],
        default:[]
    }
});



module.exports = {faqs};