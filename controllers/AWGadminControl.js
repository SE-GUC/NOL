const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { AWGadmins} = require('../models/AWGadminController');
const enc = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

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

module.exports = router; 