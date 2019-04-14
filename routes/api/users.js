const bcrypt = require('bcrypt');
const { users, validate } = require('../../models/user');
const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/',async (req, res) => {
    const user = await users.find();
  res.status(200).json({ data: user });
});

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

  router.post('/create',async (req, res) => {
    try {
        
        const newUser= await users.create(req.body);
        res.json({
          msg: "User was created successfully",
          data: newUser
        });
      } catch (error) {
        console.log(error);
        return res.status(400).send("Error");
      }
    });

      router.put('/update/:id', async(req, res) => {
        try {
            const user = await users.findByIdAndUpdate(
                { _id: req.params.id },
                req.body
              );
              if (!user){
                return res
                  .status(404)
                  .send({ error: "No record with given id" });}
             
             else {
                res.json({ 
                  data:  await users.findById( { _id: req.params.id }),
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
        const user = await users.findByIdAndRemove(id);
       
          if (!user)
            return res
              .status(400)
              .send({ error: "No record with given id" });
          res.json({
            msg: "Deleted successfully",
            data: user});
          }
        else{
            res.json({
                msg: "Deleted successfully",
                data: user
              });
        }
      });

module.exports = router;
