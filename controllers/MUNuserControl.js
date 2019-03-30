const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { AWG_AboutUs } = require('../models/AWG_AboutUsController');
const express = require('express');
const router = express.Router();
const enc = require('../middleware/auth');
const ObjectId = require('mongoose').Types.ObjectId;



router.get('/AWG_AboutUs/',async (req, res) => {
    const AWG_About_Us = await AWG_AboutUs.find();
    
    if (!AWG_About_Us) { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
        else { res.json({ data: AWG_About_Us }); }
});


router.get('/AWG_AboutUs/:id',async(req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        const id = req.params.id;
        const AWGaboutUs = await AWG_AboutUs.findById(id);
        if (!AWGaboutUs)
          return res.status(404).send({ error: "AWG aboutUs does not exist" });
        res.json({ data: AWGaboutUs });
      } else {
        return res.status(404).send({ error: "AWG aboutUs does not exist" });
      }
});

module.exports = router;