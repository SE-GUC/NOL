var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { AWG_AboutUs } = require('../models/AWG_AboutUsController');



router.get('/', (req, res) => {
    AWG_AboutUs.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving AWG_About_Us section :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        AWG_AboutUs.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving AWG_About_Us section :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var description = new AWG_AboutUs({
        description: req.body.description,
        mission: req.body.mission,
        vision:req.body.vision
    });
    description.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in AWG_About_Us section Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var description = {
        description: req.body.description,
        mission: req.body.mission,
        vision:req.body.vision
    };
    AWG_AboutUs.findByIdAndUpdate(req.params.id, { $set: description }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in AWG_About_Us section Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        AWG_AboutUs.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in AWG_About_Us section Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;