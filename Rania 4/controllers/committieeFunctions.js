var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { committiees } = require('../models/committieeController');



router.get('/', (req, res) => {
    committiees.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    committiees.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var committiee = new committiees({
        name: req.body.name,
        head_Id: req.body.head_Id
    });
    committiee.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in committiee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var committiee = {
        name: req.body.name,
        head_Id: req.body.head_Id
    };
    committiees.findByIdAndUpdate(req.params.id, { $set: committiee }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in committiee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    committiees.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in committiee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;