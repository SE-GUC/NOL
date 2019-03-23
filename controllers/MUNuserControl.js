const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { users} = require('../models/users');
var { MUNusers } = require('../models/MUNuserController');
const { AWG_AboutUs } = require('../models/AWG_AboutUsController');
const express = require('express');
const router = express.Router();
const enc = require('../middleware/auth');
const ObjectId = require('mongoose').Types.ObjectId;



router.get('/AWG_AboutUs/', (req, res) => {
    AWG_AboutUs.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving AWG_About_Us section :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/AWG_AboutUs/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        AWG_AboutUs.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving AWG_About_Us section :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;