var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { announcements } = require('../models/announcementController');

router.get('/', (req, res) => {
    announcements.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving announecement :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    announcements.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving announcements :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var announecement = new announcements({
        Description: req.body.Description,
        posted_date: req.body.posted_date,
        event_id: req.body.event_id,
        user_id: req.body.user_id,
    });
    announecement.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in announcement Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var announcement = {
        Description: req.body.Description,
        posted_date: req.body.posted_date,
        event_id: req.params.event_id,
        user_id: req.params.user_id,
    };
    announcements.findByIdAndUpdate(req.params.id, { $set: announcement }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in announcement Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    announcements.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;