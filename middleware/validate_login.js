const { schema_login }=require("../models/schema_login")
const validate_login = async (req,res,next)=>{
    console.log(req.body);
    try{
        const value = await schema_login.validateAsync(req.body);
        next();
    }
    catch(err) {
        console.error(err)
        res.status(400).json({
        success: false,
        message: err.message,
        data: []
    });
}
  }; 
 module.exports = { validate_login };