const { schema_update }=require("../models/schema_update")
const validate_update = async (req,res,next)=>{
    console.log(req.body);
    try{
        const value = await schema_update.validateAsync(req.body);
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
 module.exports = { validate_update};