var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { subscription } = require('../models/subscriptionController');



router.put('/subscribe/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var subscription = {
        email: req.body.email
       
    };
    subscriptions.findByIdAndUpdate(req.params.id, { $set: subscription }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in subscription Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/deletesub/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    subscriptions.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;