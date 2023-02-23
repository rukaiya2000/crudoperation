const express = require("express");
const router = express.Router();
const {validate} = require('../middleware/validate')
const { login,readall,read,update,deleteUser,create } = require('../controller/user-controller');
const { validate_login } = require("../middleware/validate_login");
const { validate_update } = require("../middleware/validate_update");


router.post('/login/', validate_login,login);
router.get('/get/:id',read);
router.get('/getall',readall);
router.delete('/delete/:id',deleteUser);
router.post('/create',validate, create);
router.put('/update/:Id',validate_update, update)

 module.exports = router;