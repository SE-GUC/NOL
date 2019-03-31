const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');

const { subdomains } = require('../models/subdomainController');
const { AWGadmins} = require('../models/AWGadminController');
const { users } = require('../models/users');
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

    faqs.findByIdAndUpdate(req.params.id, { $set: faq }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in FAQ Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/postAWGadmin', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let AWGadmin = await AWGadmins.findOne({ email: req.body.email });
    if (!AWGadmin) {
        return res.status(400).send('Incorrect email or password.');
    }
 
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect email or password.');
    }
    const token = jwt.sign({ _id: AWGadmin._id }, 'PrivateKey');
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
});

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
 
    return Joi.validate(req, schema);
}


router.get('/getAWGadmin',enc, (req, res) => {
    AWGadmins.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving AWGadmins :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/getAWGadmin/:id',enc, (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    AWGadmins.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving AWGadmins :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/putAWGadmin/:id',enc, (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var AWGadmin = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    };
    AWGadmins.findByIdAndUpdate(req.params.id, { $set: AWGadmin }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/DeleteAWGadmin/:id', enc,(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    AWGadmins.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Delete :' + JSON.stringify(err, undefined, 2)); }
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
