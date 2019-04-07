var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { subdomain } = require('../../models/subdomainController');



router.get('/getallsubdomains',async (req, res) => {
    const subdomain = await subdomain.find();
  res.status(200).json({ data: subdomain });
});

router.get("/:id", async (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const su = await subdomain.findById(id);
      if (!su)
        return res.status(404).send({ error: "Subdomain does not exist" });
      res.json({ data: su });
    } else {
      return res.status(404).send({ error: "Subdomain does not exist" });
    }
});

router.post('/create', (req, res) => {
    var su = new subdomain({
        name: req.body.name,
        description: req.body.description
    });
    su.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in subdomain Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/update/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  var su = {
      name: req.body.name,
      description: req.body.description,
  };
  subdomain.findByIdAndUpdate(req.params.id, { $set: su }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Subdomain Update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/delete/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  subdomain.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Subdomain Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});


module.exports = router;