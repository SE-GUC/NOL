const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { users } = require('../models/user');
const enc = require('../middleware/auth');
var { MUNusers } = require('../models/MUNuserController');
var { faqs } = require('../models/faqsController');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;


router.get('/getallfaqs', enc, (req, res) => {
    faqs.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving FAQs :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;