const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');

const { AWG_AboutUs } = require('../models/AWG_AboutUsController');
const { faqs } = require('../models/FAQcontroller');

const enc = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;


router.get('/aboutUs', (req, res) => {
    AWG_AboutUs.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving AWG_About_Us section :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/aboutUs/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        AWG_AboutUs.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving AWG_About_Us section :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/createAboutUs', (req, res) => {
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

router.put('/aboutUs/:id', (req, res) => {
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

router.delete('/aboutUs/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        AWG_AboutUs.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in AWG_About_Us section Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.put('/updateFAQ/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var faq = {
        admin_id: req.body.admin_id,
        user_id: req.body.user_id,
        AWGadmin_ID: req.body.AWGadmin_ID,
        question: req.body.question,
        answer: req.body.answer,
        qes_date: req.body.qes_date,
        ans_date: req.body.ans_date,
    };
    faqs.findByIdAndUpdate(req.params.id, { $set: faq }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in FAQ Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;


