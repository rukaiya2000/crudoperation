const { schema }=require("../models/schema")
const validate = async (req,res,next)=>{
    console.log(req.body);
    try{
        const value = await schema.validateAsync(req.body);
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
 module.exports = { validate };