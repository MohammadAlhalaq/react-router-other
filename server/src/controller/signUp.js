const bcrypt = require('bcrypt');
const { signup } = require('../models/queries');
const { validSchema } = require('./validate');
const { signupSc } = require('./schema');

exports.getSignUp = (req, res) => {
  if (req.logedIn) res.send({code: 200 ,data: req.body});
  else res.render('signup', { logedOut: !req.logedIn });
};

exports.postSignUp = (req, res) => {  
  if (req.logedIn) res.send({code: 300, data: req.body});
  else {
    console.log(req.body);
    
    const {
      name, email, password
    } = req.body;

    validSchema(req.body, signupSc)
      .then(() => bcrypt.genSalt(10))
      .then((salt) => bcrypt.hash(password, salt))
      .then((hash) => signup({
        name, email, hash
      }))
      .then(() => res.send({code: 200 ,data: req.body}))
      .catch((err) => res.send({ code: 401, data: err }));
  }
  // --> add user
};
