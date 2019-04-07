var express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;
var { faqs } = require('../../models/FAQcontroller');



router.get('/', async(req, res) => {
    const faq = await faqs.find();
  res.status(200).json({ data: faq });
});

router.get('/:id',async (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        const id = req.params.id;
        const faq = await faqs.findById(id);
        if (!faq)
          return res.status(404).send({ error: "FAQ does not exist" });
        res.json({ data: faq });
      } else {
        return res.status(404).send({ error: "FAQ does not exist" });
      }
});

router.post('/create',async (req, res) => {
    try {
        
        const newFAQ= await faqs.create(req.body);
        res.json({
          msg: "Consultancy Agency was created successfully",
          data: newFAQ
        });
      } catch (error) {
        console.log(error);
        return res.status(400).send("Error");
      }
});

router.put('/:id/update', async(req, res) => {
    try {
        const updatedFAQ = await faqs.findByIdAndUpdate(
            { _id: req.params.id },
            req.body
          );
          if (!updatedFAQ){
            return res
              .status(404)
              .send({ error: "FAQ  does not exist" });}
         
         else {
            res.json({ 
              data:  await faqs.findById( { _id: req.params.id }),
              msg: "FAQ updated successfully" });
        }
      } catch {
        console.log(error);
        return res.status(404).send({ error: "FAQ does not exist" });
      }
});

router.delete('/:id/delete', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    faqs.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in FAQ Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;