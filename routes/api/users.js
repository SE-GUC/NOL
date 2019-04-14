const bcrypt = require('bcrypt');
const { users } = require('../../models/user');
const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
 
// router.post('/postu', async (req, res) => {
//     const { error } = validate(req.body);
//     if (error) {
//         return res.status(400).send(error.details[0].message);
//     }
 
//     let user = await users.findOne({ email: req.body.email });
//     if (user) {
//         return res.status(400).send('That user already exisits!');
//     } else {
//         user = new users({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         });
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(user.password, salt);
//         await user.save();
//         res.send(user);
//     }
// });

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

      // router.put('/:id',async(req,res));{
      //   var id= req.params.id
      //   const updateUser= await userController.update('_id',id,req.body)
      //   if(!updateUser) return res.json({msg:'ID not found'})
      //   if(updateUser.error) return res.status(400).send(updateUser)
      //   return res.json({msg:'user updated successfully',data:updateUser})
      // }






module.exports = router;
