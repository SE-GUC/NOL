const bcrypt = require('bcrypt');
const { AWGadmins, validate } = require('../models/AWGadminController');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
 
router.post('/Asignup', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    let AWGadmin = await users.findOne({ email: req.body.email });
    if (AWGadmin) {
        return res.status(400).send('That user already exisits!');
    } else {
        AWGadmin = new AWGadmins({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        const salt = await bcrypt.genSalt(10);
        AWGadmin.password = await bcrypt.hash(AWGadmin.password, salt);
        await AWGadmin.save();
        res.send(AWGadmin);
    }
});


module.exports = router;