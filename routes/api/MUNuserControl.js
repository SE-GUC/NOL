const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { AWG_AboutUs } = require('../models/AWG_AboutUsController');
var { faqs } = require('../models/faqsController');
const express = require('express');
const router = express.Router();
const enc = require('../middleware/auth');
const ObjectId = require('mongoose').Types.ObjectId;



router.get('/AWG_AboutUs/', (req, res) => {
    AWG_AboutUs.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving AWG_About_Us section :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/AWG_AboutUs/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        AWG_AboutUs.findById(req.params.id, (err, doc) => {
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

router.get('/aboutus', (req, res) => {
    aboutuss.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving about us :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.get('/aboutus/:clubname', (req, res) => {
    if (!ObjectId.isValid(req.params.clubname))
        return res.status(400).send(`No record with given clubname : ${req.params.clubname}`);

        aboutuss.findById(req.params.clubname, (err, doc) => {
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

    events.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving event :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/getallfaqs', (req, res) => {
    faqs.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving FAQs :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/getspecificfaq/:id',  (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    faqs.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving FAQ :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/updatefaq/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var faq = {
        question: req.body.question,
        answer: req.body.answer,
    };
    faqs.findByIdAndUpdate(req.params.id, { $set: faq }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in FAQ Update :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;