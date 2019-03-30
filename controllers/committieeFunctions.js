var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { committiees } = require('../models/committieeController');



router.get('/',async (req, res) => {
    const committiee = await committiees.find();
    
    if (!committiee) { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
        else { res.json({ data: committiee }); }
    });


router.get('/:id', async(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    committiees.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', async(req, res) => {
   /**  var committiee = new committiees({
        name: req.body.name,
        head_Id: req.body.head_Id
    });*/
    //committiee.save((err, doc) => {
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

router.put('/:id', async(req, res) => {
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

router.delete('/:id',async (req, res) => {
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