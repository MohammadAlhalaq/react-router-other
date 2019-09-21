const Joi = require('@hapi/joi');

exports.loginSc = Joi.object().keys({
  email:
  Joi.string()
    .email()
    .invalid('<', '>')
    .required(),
  password:
    Joi.string()
      .min(7).max(35)
      .regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9])/)
      .invalid('<', '>')
      .required(),
});

exports.signupSc = Joi.object().keys({
  name:
    Joi.string()
      .alphanum()
      .invalid('<', '>')
      .min(3)
      .max(30)
      .required(),
  password:
     Joi.string()
       .min(7).max(35)
       .regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9])/)
       .invalid('<', '>')
       .required(),
  confirmPass:
  Joi.any()
    .valid(Joi.ref('password'))
    .required(),
  email: Joi.string()
    .email()
    .invalid('<', '>')
    .required(),

});
