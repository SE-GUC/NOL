
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { users } = require('../models/users');
const enc = require('../middleware/auth');
var { MUNusers } = require('../models/MUNuserContoller');
var { aboutuss } = require('../models/aboutusController');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

router.post('/',enc, async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let user = await users.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Incorrect email or password.');
    }
 
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect email or password.');
    }
    const token = jwt.sign({ _id: user._id }, 'PrivateKey');
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
});

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
 
    return Joi.validate(req, schema);
}

router.get('/munusers', enc, (req, res) => {
    MUNusers.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving users :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/munusers/:username', enc, (req, res) => {
    if (!ObjectId.isValid(req.params.username))
        return res.status(400).send(`No record with given user name : ${req.params.username}`);

    MUNusers.findByusername(req.params.username, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving user :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/munusers/:username', enc, (req, res) => {
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

router.delete('/munusers/:username', enc, (req, res) => {
    if (!ObjectId.isValid(req.params.username))
        return res.status(400).send(`No record with given id : ${req.params.username}`);

    MUNusers.findByIdAndRemove(req.params.username, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/aboutus', enc, (req, res) => {
    aboutuss.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving about us :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.get('/aboutus/:clubname',enc,  (req, res) => {
    if (!ObjectId.isValid(req.params.clubname))
        return res.status(400).send(`No record with given clubname : ${req.params.clubname}`);

        aboutuss.findById(req.params.clubname, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving about us :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/aboutus',enc, (req, res) => {
    var aboutus = new aboutuss({
        Misson: req.body.Misson,
        vision: req.body.vision,
        clubname: req.body.clubname,
        achievement_Desc: req.body.achievement_Desc,
        achievement_Pic: req.body.achievement_Pic,
    });
    aboutus.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.put('/aboutus/:clubname', enc, (req, res) => {
    if (!ObjectId.isValid(req.params.clubname))
        return res.status(400).send(`No record with given clubname : ${req.params.clubname}`);

    var aboutus = {
        Misson: req.body.Misson,
        vision: req.body.vision,
        clubname: req.body.clubname,
        achievement_Desc: req.body.achievement_Desc,
        achievement_Pic: req.body.achievement_Pic,
    };
    aboutuss.findByIdAndUpdate(req.params.clubname, { $set: aboutus }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in aboutus Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/aboutus/:clubname', enc, (req, res) => {
    if (!ObjectId.isValid(req.params.clubname))
        return res.status(400).send(`No record with given clubname: ${req.params.clubname}`);

    aboutuss.findByIdAndRemove(req.params.clubname, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in about us Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;