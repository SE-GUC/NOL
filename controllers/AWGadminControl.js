const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { users } = require('../models/user');
//const enc = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { faqs } = require('../models/faqsController');
const { subdomains } = require('../models/subdomainController');
const { AWGadmins} = require('../models/AWGadminController');


router.post('/create/faq', (req, res) => {
    var faq = new faqs({
        admin_id: req.body.admin_id,
        user_id: req.body.user_id,
        AWGadmin_ID: req.body.AWGadmin_ID,
        question: req.body.question,
        answer: req.body.answer,
        qes_date: req.body.qes_date,
        ans_date: req.body.ans_date,
    });
    faq.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in FAQ Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

    //FAQs
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
            admin_id: req.body.admin_id,
            user_id: req.body.user_id,
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
    
    router.delete('/deletefaq/:id',  (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.params.id}`);
    
        faqs.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in FAQ Delete :' + JSON.stringify(err, undefined, 2)); }
        });
    });

    //Subdomains
    router.get('/getallsubdomains', (req, res) => {
        subdomains.find((err, docs) => {
            if (!err) { res.send(docs); }
            else { console.log('Error in Retriving subdomains :' + JSON.stringify(err, undefined, 2)); }
        });
    });
    
    router.get('/getspecificsubdomain/:id', (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.params.id}`);
    
        subdomains.findById(req.params.id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Retriving subdomain :' + JSON.stringify(err, undefined, 2)); }
        });
    });
    
    router.post('/createsubdomain', (req, res) => {
        var subdomain = new subdomains({
            name: req.body.name,
            description: req.body.description,
        });
        subdomain.save((err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in subdomain Save :' + JSON.stringify(err, undefined, 2)); }
        });
    });
    
    router.put('/updatesubdomain/:id', (req, res) => {
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
    
    router.delete('/deletesubdomain/:id', (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.params.id}`);
    
        subdomains.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in subdomain Delete :' + JSON.stringify(err, undefined, 2)); }
        });
    });

    //Edit users
    router.put('/updateuser/:id', (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.params.id}`);
    
        var user = {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        };
        users.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in user Update :' + JSON.stringify(err, undefined, 2)); }
        });
    });
    
    
    router.delete('/deleteuser/:id', (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.params.id}`);
    
        users.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in user Delete :' + JSON.stringify(err, undefined, 2)); }
        });
    });

module.exports = router; 