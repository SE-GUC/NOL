const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const enc = require('../middleware/auth');
var { events } = require('../models/eventController');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;


router.get('/get',enc, (req, res) => {
    events.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving events :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/get/:id', enc,(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    events.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving event :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;