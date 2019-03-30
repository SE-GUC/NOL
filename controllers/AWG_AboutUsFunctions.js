var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { AWG_AboutUs } = require('../models/AWG_AboutUsController');



router.get('/',async (req, res) => {
    const AWG_About_Us = await AWG_AboutUs.find();
    
    if (!AWG_About_Us) { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
        else { res.json({ data: AWG_About_Us }); }
});

router.get('/:id', async(req, res) => {
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

router.post('/', async(req, res) => {
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

router.put('/:id',async (req, res) => {
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

router.delete('/:id', async(req, res) => {
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

module.exports = router;