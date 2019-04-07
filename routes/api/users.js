const bcrypt = require('bcrypt');
const { users, validate } = require('../../models/user');
const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
/**  
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    let user = await users.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        user = new users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        res.send(user);
    }
});*/

router.get('/',async (req, res) => {
    const user = await users.find();
  res.status(200).json({ data: user });
});
/** 
router.get('/', (req, res) => {
    users.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving users :' + JSON.stringify(err, undefined, 2)); }
    });
});
/** 
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    users.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving user :' + JSON.stringify(err, undefined, 2)); }
    });
});*/


router.get("/:id", async (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const user = await users.findById(id);
      if (!user)
        return res.status(404).send({ error: "User does not exist" });
      res.json({ data: user });
    } else {
      return res.status(404).send({ error: "User does not exist" });
    }
  });

router.post('/', (req, res) => {
    var user = new users({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password
    });
    user.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Save :' + JSON.stringify(err, undefined, 2)); }
    });
});



module.exports = router;
