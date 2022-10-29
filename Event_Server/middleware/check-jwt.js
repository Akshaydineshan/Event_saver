
const jwt =require("jsonwebtoken")

module.exports=function(req,res,next){
    
    const token =req.headers['auth-head']
    console.log("token serverdns ",token)
     if(token){
        jwt.verify(token,"secretkey123",(error,dec)=>{
            console.log(dec)
            if(error){
                res.json({
                    success:false,
                    message:"failed to authenification"
                })
            }else{
                req.dec=dec;
                next()
            }
        })
     }else{
        res.json({
            success:false,
            message:"no token provided"
        })
     }
}