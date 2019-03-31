const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');

const enc = require('../middleware/auth');
var { faqs } = require('../models/faqsController');
var { committiees } = require('../models/committieeController');
var { MUNusers } = require('../models/MUNuserController');
var { aboutuss } = require('../models/aboutusController');
var { events } = require('../models/eventController');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;



router.get('/allCommittiees',(req, res) => {
    committiees.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/allCommittiees/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    committiees.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/committiee',(req, res) => {
    var committiee = new committiees({
        name: req.body.name,
        head_Id: req.body.head_Id
    });
    committiee.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in committiee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/committiee/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var committiee = {
        name: req.body.name,
        head_Id: req.body.head_Id
    };
    committiees.findByIdAndUpdate(req.params.id, { $set: committiee }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in committiee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/committiee/:name', enc, (req, res) => {
    if (!ObjectId.isValid(req.params.name))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    committiees.findByIdAndRemove(req.params.name, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in committiee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

//Changed to mun
router.post('/', async (req, res) => {
    // const { error } = validate(req.body);
    // if (error) {
    //     return res.status(400).send(error.details[0].message);
    // }
    let user = await MUNusers.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Incorrect email or password.');
    }
 
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (req.body.password != user.password) {
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

    //if (req.body.username) {MUNuser.username = req.body.username} 
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



router.get('/get/event', (req, res) => {
    events.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving events :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/get/event/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    events.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving event :' + JSON.stringify(err, undefined, 2)); }
    });
});
//create

router.post('/create/event',(req, res) => {
    var event = new events({
        title: req.body.title,
        summary: req.body.summary,
        MoreDetails: req.body.MoreDetails,
    });
    await event.save();
    res.send(event); 
});
    

router.delete('/committiee/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    committiees.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in committiee Delete :' + JSON.stringify(err, undefined, 2)); };
    });
});
//update
router.put('/update/event/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var event = {
        title: req.body.title,
        summary: req.body.summary,
        MoreDetails: req.body.MoreDetails,
    };
    events.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in event Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/delete/event/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    events.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in event Delete :' + JSON.stringify(err, undefined, 2)); }

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