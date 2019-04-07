const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { AWG_AboutUs } = require('../models/AWG_AboutUsController');
var { announcement } = require('../models/announcementController');
const express = require('express');
const router = express.Router();
const enc = require('../middleware/auth');
const ObjectId = require('mongoose').Types.ObjectId;



router.get('/announcement/', (req, res) => {
    announcement.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving AWG_About_Us section :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/announcement/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        announcement.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving AWG_About_Us section :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', async (req, res) => {
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
 
    res.send('sign in successful')
});
 
function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
 
    return Joi.validate(req, schema);
}

router.get('/announcement', (req, res) => {
    announcements.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving about us :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.get('/announcement/:clubname', (req, res) => {
    if (!ObjectId.isValid(req.params.clubname))
        return res.status(400).send(`No record with given clubname : ${req.params.clubname}`);

        announcements.findById(req.params.clubname, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving about us :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/munusers', (req, res) => {
    MUNusers.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving users :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/munusers/:username', (req, res) => {
    if (!ObjectId.isValid(req.params.username))
        return res.status(400).send(`No record with given user name : ${req.params.username}`);

    MUNusers.findByusername(req.params.username, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving user :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/get', (req, res) => {
    events.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving events :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/get/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        announcements.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving event :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/getallfaqs', (req, res) => {
    subscription.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving FAQs :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/getspecificann/:id',  (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    subscriptions.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving FAQ :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/updateann/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var announcement = {
        description: req.body.description,
        
    };
    announcements.findByIdAndUpdate(req.params.id, { $set: announcement }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in FAQ Update :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;