var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { events } = require('../models/eventController');



router.get('/', (req, res) => {
    events.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving events :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    events.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving event :' + JSON.stringify(err, undefined, 2)); }
    });
});
//create
router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    events.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in event Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;