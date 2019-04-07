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



module.exports = router