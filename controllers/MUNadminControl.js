const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');

const enc = require('../middleware/auth');

var { committiees } = require('../models/committieeController');


const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;



router.get('/allCommittiees',  enc,async(req, res) => {
    const committiee = await committiees.find();
    
    if (!committiee) { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
        else { res.json({ data: committiee }); }
    });

router.get('/allCommittiees/:id', enc,async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    committiees.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/committiee',  enc,async(req, res) => {
    const newCommittiee = await committiees.create(req.body);
        if (!newCommittiee) { 
            console.log('Error in committiee Save :' + JSON.stringify(err, undefined, 2));
            
             }
        else { 
           res.json({
                msg: "Committiee was created successfully",
                data: newCommittiee
              });
         }
    //});
    
});

router.put('/committiee/:id', enc, async(req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

var committiee = {
    name: req.body.name,
    head_Id: req.body.head_Id
};
committiees.findByIdAndUpdate(req.params.id, { $set: committiee }, { new: true }, (err, doc) => {
    if (!err) { //res.send(doc);
        res.json({ msg: "Consultancy Agency updated successfully" }); }
    else { console.log('Error in committiee Update :' + JSON.stringify(err, undefined, 2)); }
});
});


router.delete('/committiee/:name', enc, async(req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        const id = req.params.id;
    const deletedCommittiee = await committiees.findByIdAndRemove(id);
   
      if (!deletedCommittiee)
        return res
          .status(400)
          .send({ error: "Committiee does not exist" });
      res.json({
        msg: "Consultancy Agency was deleted successfully",
        data: deletedCommittiee});
      }
    else{
        res.json({
            msg: "Committiee was deleted successfully",
            data: deletedCommittiee
          });
    }
});    
    

module.exports = router;