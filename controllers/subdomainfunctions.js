var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { subdomains } = require('../models/subdomainController');



router.get('/', (req, res) => {
    subdomains.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving subdomains :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    subdomains.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving subdomain :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/create', (req, res) => {
    var subdomain = new subdomains({
        name: req.body.name,
        description: req.body.description,
    });
    subdomain.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in subdomain Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id/update', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var subdomain = {
        name: req.body.name,
        description: req.body.description,
    };
    subdomains.findByIdAndUpdate(req.params.id, { $set: subdomain }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in subdomain Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id/delete', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    subdomains.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in subdomain Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;