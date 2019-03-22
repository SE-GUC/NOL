var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { MUNusers } = require('../models/MUNuserContoller');



router.get('/', (req, res) => {
    MUNusers.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving users :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:username', (req, res) => {
    if (!ObjectId.isValid(req.params.username))
        return res.status(400).send(`No record with given user name : ${req.params.username}`);

    MUNusers.findByusername(req.params.username, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving user :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.post('/', (req, res) => {
    var MUNuser = new MUNusers({
        username: req.body.username,
        email: req.body.email,
        aL: req.body.aL,
        password: req.body.password,
        preferredcommittee:req.body.preferredcommittee,
    });
    MUNuser.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Save :' + JSON.stringify(err, undefined, 2)); }
    });
    
});

router.put('/:username', (req, res) => {
    if (!ObjectId.isValid(req.params.username))
        return res.status(400).send(`No record with given username : ${req.params.username}`);

    var MUNuser = {
        username: req.body.username,
        email: req.body.email,
        id: req.body.id,
        password: req.body.password,
        preferredcommittee:req.body.preferredcommittee,
        aL: req.body.aL,

    };
    MUNusers.findByIdAndUpdate(req.params.username, { $set: MUNuser }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:username', (req, res) => {
    if (!ObjectId.isValid(req.params.username))
        return res.status(400).send(`No record with given id : ${req.params.username}`);

    MUNusers.findByIdAndRemove(req.params.username, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;

