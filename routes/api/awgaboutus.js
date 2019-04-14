var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { AWGaboutus } = require('../../models/AWGaboutus');



router.get('/get',async (req, res) => {
    const aboutus = await AWGaboutus.find();
  res.status(200).json({ data: aboutus });
});

router.get("/:id", async (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const aboutus = await AWGaboutus.findById(id);
      if (!aboutus)
        return res.status(404).send({ error: "What you are looking for does not exist" });
      res.json({ data: aboutus });
    } else {
      return res.status(404).send({ error: "What you are looking for does not exist" });
    }
});

router.post('/create', async(req, res) => {
  try {
      
      const aboutus= await AWGaboutus.create(req.body);
      res.json({
        msg: "Created successfully",
        data: aboutus
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send("Error");
    }
  
});

router.put('/update/:id', async(req, res) => {
  try {
      const aboutus = await AWGaboutus.findByIdAndUpdate(
          { _id: req.params.id },
          req.body
        );
        if (!aboutus){
          return res
            .status(404)
            .send({ error: "No record with given id" });}
       
       else {
          res.json({ 
            data:  await AWGaboutus.findById( { _id: req.params.id }),
            msg: "Updated successfully" });
      }
    } catch {
      console.log(error);
      return res.status(404).send({ error: "No record with given id" });
    }
});

router.delete('/delete/:id',async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
  const aboutus = await AWGaboutus.findByIdAndRemove(id);
 
    if (!aboutus)
      return res
        .status(400)
        .send({ error: "No record with given id" });
    res.json({
      msg: "Deleted successfully",
      data: aboutus});
    }
  else{
      res.json({
          msg: "Deleted successfully",
          data: aboutus
        });
  }
});



module.exports = router;