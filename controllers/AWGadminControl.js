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


router.get('/aboutUs', async(req, res) => {
    const AWG_About_Us = await AWG_AboutUs.find();
    
    if (!AWG_About_Us) { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
        else { res.json({ data: AWG_About_Us }); }
});

router.get('/aboutUs/:id',async(req, res) => {
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

router.post('/createAboutUs',enc, async(req, res) => {
    const newAboutUs = await AWG_AboutUs.create(req.body);
    if (!newAboutUs) { 
        console.log('Error in committiee Save :' + JSON.stringify(err, undefined, 2));
        
         }
    else { 
       res.json({
            msg: "AWG_AboutUs was created successfully",
            data: newAboutUs
          });
     }
});

router.put('/aboutUs/:id',enc,async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

var AWGaboutUs = {
    description: req.body.description,
    mission: req.body.mission,
    vission:req.body.vission
};
AWG_AboutUs.findByIdAndUpdate(req.params.id, { $set: AWGaboutUs }, { new: true }, (err, doc) => {
    if (!err) { //res.send(doc);
        res.json({ msg: "AWGaboutUs updated successfully" }); }
    else { console.log('Error in AWGaboutUs Update :' + JSON.stringify(err, undefined, 2)); }
});
});

router.delete('/aboutUs/:id',enc, async(req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        const id = req.params.id;
    const deleteAWG = await AWG_About_Us.findByIdAndRemove(id);
   
      if (!deleteAWG)
        return res
          .status(400)
          .send({ error: "AWG AboutUs does not exist" });
      res.json({
        msg: "AWG AboutUs was deleted successfully",
        data: deleteAWG});
      }
    else{
        res.json({
            msg: "AWG AboutUs was deleted successfully",
            data: deleteAWG
          });
    }
});



router.put('/updateFAQ/:id',enc, async(req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

var faq = {
    admin_id: req.body.admin_id,
    user_id: req.body.user_id,
    AWGadmin_id:req.body.AWGadmin_id,
    question:req.body.question,
    answer:req.body.answer,
    qes_date:req.body.qes_date,
    ans_date:req.body.ans_date
};
faqs.findByIdAndUpdate(req.params.id, { $set: faq }, { new: true }, (err, doc) => {
    if (!err) { //res.send(doc);
        res.json({ msg: "FAQs updated successfully" }); }
    else { console.log('Error in FAQs Update :' + JSON.stringify(err, undefined, 2)); }
});
});
module.exports = router;


