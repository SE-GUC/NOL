const bcrypt = require('bcrypt');
//const { AWGamins, validate } = require('../models/AWGadmins');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { AWGadmins } = require('../models/AWGadminController')
const mongoose = require('mongoose')

//Changed to mun
router.post('/AWGadmin/signup', async (req, res) => {
    // const { error } = validate(req.body);
    // if (error) {
    //     return res.status(400).send(error.details[0].message);
    // }
    let AWGadmin = await AWGadmins.findOne({ email: req.body.email });
    if (AWGadmin) {
        return res.status(400).send('That AWGadmin already exisits!');
    } else {
        //Changed to mun
        AWGadmin = new AWGadmins({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            name: req.body.name  
        });
        const salt = await bcrypt.genSalt(10);
        AWGadmin.password = await bcrypt.hash(AWGadmin.password, salt);
        await AWGadmin.save();
        res.send(AWGadmin);
    }
});


module.exports = router;