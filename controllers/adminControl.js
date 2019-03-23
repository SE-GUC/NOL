const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { users } = require('../models/user');
const enc = require('../middleware/auth');
const { faqs } = require('../models/faqsController');
const { subdomains } = require('../models/subdomainController');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

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


router.get('/',enc, (req, res) => {
    users.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving users :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id',enc, (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    users.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving user :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id',enc, (req, res) => {
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

router.delete('/:id', enc,(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    users.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/create/faq', enc, (req, res) => {
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
    router.get('/getallfaqs', enc, (req, res) => {
        faqs.find((err, docs) => {
            if (!err) { res.send(docs); }
            else { console.log('Error in Retriving FAQs :' + JSON.stringify(err, undefined, 2)); }
        });
    });
    
    router.get('/getspecificfaq/:id', enc,  (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.params.id}`);
    
        faqs.findById(req.params.id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Retriving FAQ :' + JSON.stringify(err, undefined, 2)); }
        });
    });

    
    router.put('/updatefaq/:id', enc, (req, res) => {
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
    
    router.delete('/deletefaq/:id', enc,  (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.params.id}`);
    
        faqs.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in FAQ Delete :' + JSON.stringify(err, undefined, 2)); }
        });
    });

    //Subdomains
    router.get('/getallsubdomains', enc, (req, res) => {
        subdomains.find((err, docs) => {
            if (!err) { res.send(docs); }
            else { console.log('Error in Retriving subdomains :' + JSON.stringify(err, undefined, 2)); }
        });
    });
    
    router.get('/getspecificsubdomain/:id', enc, (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.params.id}`);
    
        subdomains.findById(req.params.id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Retriving subdomain :' + JSON.stringify(err, undefined, 2)); }
        });
    });
    
    router.post('/createsubdomain', enc, (req, res) => {
        var subdomain = new subdomains({
            name: req.body.name,
            description: req.body.description,
        });
        subdomain.save((err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in subdomain Save :' + JSON.stringify(err, undefined, 2)); }
        });
    });
    
    router.put('/updatesubdomain/:id', enc, (req, res) => {
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
    
    router.delete('/deletesubdomain/:id', enc, (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.params.id}`);
    
        subdomains.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in subdomain Delete :' + JSON.stringify(err, undefined, 2)); }
        });
    });

    //Edit users
    router.put('/updateuser/:id', enc, (req, res) => {
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
    
    
    router.delete('/deleteuser/:id', enc, (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.params.id}`);
    
        users.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in user Delete :' + JSON.stringify(err, undefined, 2)); }
        });
    });

module.exports = router; 
