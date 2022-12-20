const jwt=require('jsonwebtoken');
const {User}=require("../modals/mongoose-model");
const config=require("../config");

const auth= async(req,res,next)=>{
   try{
       const token=req.header('Authorization');
       const decoded= jwt.verify(token,`${config.jwt_token}`);
       const user=await User.findOne({_id:decoded._id,'tokens.token':token})
       if(!user){
           return res.status(404).send({error: "Error during authentication"})
       }
       req.token=token;
       req.user=user;
       next();
   }
   catch(e)
   {
       return res.status(401).send({error:"Unauthorized for this operation"});
   }
}

module.exports=auth;