const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { users } = require('../models/users');
const enc = require('../middleware/auth');
var { committiees } = require('../models/committieeController');
var { MUNusers } = require('../models/MUNuserController');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;




router.get('/allCommittiees',  enc,(req, res) => {
    committiees.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/allCommittiees/:name', enc, (req, res) => {
    if (!ObjectId.isValid(req.params.name))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    committiees.findById(req.params.name, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/committiee',  enc,(req, res) => {
    var committiee = new committiees({
        name: req.body.name,
        head_Id: req.body.head_Id
    });
    committiee.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in committiee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/committiee/:name', enc, (req, res) => {
    if (!ObjectId.isValid(req.params.name))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var committiee = {
        name: req.body.name,
        head_Id: req.body.head_Id
    };
    committiees.findByIdAndUpdate(req.params.name, { $set: committiee }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in committiee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/committiee/:name', enc, (req, res) => {
    if (!ObjectId.isValid(req.params.name))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    committiees.findByIdAndRemove(req.params.name, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in committiee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;