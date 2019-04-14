const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');


var { MUNusers } = require('../../models/MUNuserController');
var { events } = require('../../models/eventController');
var { aboutuss } = require('../../models/aboutusController');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;


//Changed to mun
router.post('/', async (req, res) => {
    // const { error } = validate(req.body);
    // if (error) {
    //     return res.status(400).send(error.details[0].message);
    // }
    let user = await MUNusers.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Incorrect email');
    }
 
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!(validPassword)) {
        return res.status(400).send('Incorrect password.');
    }
    const token = jwt.sign({ _id: user._id }, 'PrivateKey');
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'username', 'email']));
});

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
 
    return Joi.validate(req, schema);
}

router.get('/munusers', (req, res) => {
    MUNusers.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving users :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/munusers/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given user name : ${req.params.username}`);

    MUNusers.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving user :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/munusers/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given username : ${req.params.username}`);

    var MUNuser = {
        username: req.body.username,
        email: req.body.email,
        id: req.body.id,
        password: req.body.password,
        preferredcommittee:req.body.preferredcommittee,
        aL: req.body.aL,

    };
    MUNusers.findByIdAndUpdate(req.params.id, { $set: MUNuser }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/munusers/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.username}`);

    MUNusers.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/aboutus', (req, res) => {
    aboutuss.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving about us :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.get('/aboutus/:id',  (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given clubname : ${req.params.clubname}`);

        aboutuss.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving about us :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/aboutus', async (req, res) => {
    var aboutus = new aboutuss({
        misson: req.body.misson,
        vision: req.body.vision,
        clubname: req.body.clubname,
        achievement_Desc: req.body.achievement_Desc,
        achievement_Pic: req.body.achievement_Pic,
    });
    // aboutus.save((err, doc) => {
    //     console.log(doc)
    //     if (!err) { res.send(doc); }
    //     else { console.log('Error in user Save :' + JSON.stringify(err, undefined, 2)); }
    // });
    await aboutus.save();
    res.send(aboutus);
});
router.put('/aboutus/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given clubname : ${req.params.id}`);

    var aboutus = {
        misson: req.body.misson,
        vision: req.body.vision,
        clubname: req.body.clubname,
        achievement_Desc: req.body.achievement_Desc,
        achievement_Pic: req.body.achievement_Pic,
    };
    aboutuss.findByIdAndUpdate(req.params.id, { $set: aboutus }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in aboutus Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/aboutus/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given clubname: ${req.params.clubname}`);

    aboutuss.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in about us Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;