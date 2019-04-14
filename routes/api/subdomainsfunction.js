var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { subdomains } = require('../../models/subdomainController');



router.get('/getallsubdomains',async (req, res) => {
    const subdomain = await subdomains.find();
  res.status(200).json({ data: subdomain });
});

router.get("/:id", async (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const su = await subdomains.findById(id);
      if (!su)
        return res.status(404).send({ error: "Subdomain does not exist" });
      res.json({ data: su });
    } else {
      return res.status(404).send({ error: "Subdomain does not exist" });
    }
});

router.post('/create', async(req, res) => {
  try {
      
      const su= await subdomains.create(req.body);
      res.json({
        msg: "Subdomain created successfully",
        data: su
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send("Error");
    }
});

router.put('/update/:id', async(req, res) => {
  try {
      const su = await subdomains.findByIdAndUpdate(
          { _id: req.params.id },
          req.body
        );
        if (!su){
          return res
            .status(404)
            .send({ error: "Subdomain does not exist" });}
       
       else {
          res.json({ 
            data:  await subdomains.findById( { _id: req.params.id }),
            msg: "Subdomain updated successfully" });
      }
    } catch {
      console.log(error);
      return res.status(404).send({ error: "Subdomain does not exist" });
    }
});

router.delete('/delete/:id',async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
  const su = await subdomains.findByIdAndRemove(id);
 
    if (!su)
      return res
        .status(400)
        .send({ error: "Subdomain does not exist" });
    res.json({
      msg: "Subdomain deleted successfully",
      data: su});
    }
  else{
      res.json({
          msg: "Subdomain deleted successfully",
          data: su
        });
  }
});


module.exports = router;