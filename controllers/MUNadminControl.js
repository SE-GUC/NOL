const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const enc = require('../middleware/auth');
var { events } = require('../models/eventController');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;


router.get('/get/event', (req, res) => {
    events.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving events :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/get/event/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    events.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving event :' + JSON.stringify(err, undefined, 2)); }
    });
});
//create
router.post('/create/event',(req, res) => {
    var event = new events({
        title: req.body.title,
        summary: req.body.summary,
        MoreDetails: req.body.MoreDetails,
    });
    event.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in event Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//update
router.put('/update/event/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var event = {
        title: req.body.title,
        summary: req.body.summary,
        MoreDetails: req.body.MoreDetails,
    };
    events.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in event Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/delete/event/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    events.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in event Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;