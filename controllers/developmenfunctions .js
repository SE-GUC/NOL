const { development } = require('../models/developmentController');
const express = require('express');
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId;


router.get('/', (req, res) => {
    development.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving development :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    development.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving user :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    var dev = new development({
        title: req.body.title,
        description: req.body.description
    });
    dev.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var dev = {
        title: req.body.title,
        description: req.body.description
    };
    development.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in development Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    development.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in development Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;