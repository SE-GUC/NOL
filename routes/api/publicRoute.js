const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const ObjectId = require('mongoose').Types.ObjectId;
const passport = require("passport");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,  
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.post("/", (req, res) => {
  let User = new User(req.body);
  User.save()
    .then(User => {
      res.status(200).json({'user': 'user in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

router.get("/:id", async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user)
      return res.status(404).send({ error: "User does not exist" });
    res.json({ data: user });
  } else {
    return res.status(404).send({ error: "User does not exist" });
  }
});

router.get('/', (req, res) => {
  User.find(function(err, User){
    if(err){
      console.log(err);
    }
    else {
      res.json(User);
    }
  });
});


router.put('/:id', (req, res, next) => {
  if (ObjectId.isValid(req.params.id)) {
    let updateduser= {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
  }
  User.findOneAndUpdate({ _id: req.params.id }, updateduser, { runValidators: true, context: 'query' })
      .then(olduser => {
          User.findById({ _id: req.params.id })
              .then(newUser => {
                  res.json(newUser)
              })
      })
  }
 
});

router.delete('/:id', function(req, res, next) {
  if (ObjectId.isValid(req.params.id)){
    User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } 
});

module.exports = router;
