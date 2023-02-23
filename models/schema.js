const Joi = require('joi');

const schema = Joi.object({ 
    Email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']} }), 
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    user_name: Joi.string().alphanum().min(3).max(30).required(),
    phone: Joi.number() .min(10),
  }); 

module.exports={ schema }