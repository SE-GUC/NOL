const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');


var galleries = mongoose.model('galleries', {
    title:{
         type: String,
         required: true,
      
        
     },
     description: {
         type: String,
         required: true,
     

     },
     image: {
         type: String,
         required: true,
        
     },
       
});



module.exports = {galleries};
