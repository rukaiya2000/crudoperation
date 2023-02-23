const Joi = require('joi');

const schema_login = Joi.object({ 
    Email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']} }), 
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  }); 

module.exports={ schema_login }