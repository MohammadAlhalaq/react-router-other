const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { loginSc } = require('./schema');
const { validSchema } = require('./validate');
const { login } = require('../models/queries');

exports.getLogin = (req, res) => {
  if (req.logedIn) res.redirect('/');
  else res.render('login', { logedOut: !req.logedIn });
};

exports.postLogin = (req, res) => {
  if (req.logedIn) res.send({code: 300, data: req.body}); // home
  else {
    validSchema(req.body, loginSc)
      .then((data) => login(data.email))
      .then((user) => bcrypt.compare(req.body.password, user.rows[0].password)
        .then((isvalid) => {
          if (isvalid) {            
            const {
              userid, name, email
            } = user.rows[0];
            const token = jwt.sign({
              userid, name, email
            }, process.env.PRIVATEKEY);
            return token;
          } else {
            res.send({ code: 402, data: isvalid });
          }
        }))
      .then((tok) => res.send({code: 200, data: tok}))
      .catch((err) => res.send({code: 500, data: err}));
  } // -->>login
};
exports.logout = (req, res) => {
  res.clearCookie('userTry').send({code: 200});
};
