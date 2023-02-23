const Joi = require('joi');

const schema_update= Joi.object({ 
    Id: Joi. number() ,
    Email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']} }), 
    user_name: Joi.string().alphanum().min(3).max(30),
    phone: Joi.number() .min(10),
  }); 

module.exports={ schema_update }