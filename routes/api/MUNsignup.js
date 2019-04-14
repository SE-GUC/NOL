
const bcrypt = require('bcrypt');
//const { users, validate } = require('../../../models/users');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { MUNusers } = require('../../models/MUNuserController.js')
const mongoose = require('mongoose')

//Changed to mun
router.post('/', async (req, res) => {
    // const { error } = validate(req.body);
    // if (error) {
    //     return res.status(400).send(error.details[0].message);
    // }
    let user = await MUNusers.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        //Changed to mun
        user = new MUNusers({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            aL: req.body.aL,
            preferredcommittee: req.body.preferredcommittee
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        res.send(user);
    }
});


module.exports = router;