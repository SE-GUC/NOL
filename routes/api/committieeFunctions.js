var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { committiees } = require('../../models/committieeController');



router.get('/',async (req, res) => {
    const committiee = await committiees.find();
    
    if (!committiee) { console.log('Error in Retriving committiees :' + JSON.stringify(err, undefined, 2)); }
        else { res.json({ data: committiee }); }
    });


router.get('/:id', async(req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const id = req.params.id;
    const committiee = await committiees.findById(id);
    if (!committiee)
      return res.status(404).send({ error: "Committiee does not exist" });
    res.json({ data: committiee });
  } else {
    return res.status(404).send({ error: "Committiee does not exist" });
}
}
);


router.post('/', async(req, res) => {
    try {
        
        const newComm= await committiees.create(req.body);
        res.json({
          msg: "Committiee was created successfully",
          data: newComm
        });
      } catch (error) {
        console.log(error);
        return res.status(400).send("Error");
      }
    
});

router.put('/:id', async(req, res) => {
    try {
        const updateCommittiee = await committiees.findByIdAndUpdate(
            { _id: req.params.id },
            req.body
          );
          if (!updateCommittiee){
            return res
              .status(404)
              .send({ error: "Committiee  does not exist" });}
         
         else {
            res.json({ 
              data:  await committiees.findById( { _id: req.params.id }),
              msg: "Committiee updated successfully" });
        }
      } catch {
        console.log(error);
        return res.status(404).send({ error: "Committiee does not exist" });
      }
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
        msg: "Committiee was deleted successfully",
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