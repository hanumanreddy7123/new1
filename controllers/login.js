const user=require('../models/user')
const jwt=require('jsonwebtoken')
async function login(req,res)
{
    const name=req.body.Username
    const password=req.body.Password
    // const confirm=req.body.confirm
    if(!name)
    {
        res.send({code:400,message:'name required'})
    }
    else if(!password)
    {
        res.send({code:400,message:'password required'})
    }
    else{
        const exists= await user.findOne({Username:name})
        if(exists)
        {
    
            // res.send({code:200,message:'name found'})
            if(exists.Password === req.body.Password )
            {
                const token=jwt.sign({expAfter:"1hr",Username:exists.Username,Password:exists.Password,type:exists.type},'mykey')
                res.send({code:200,message:'login success' ,token:token,userid:exists._id})
            }
            else{
                res.send({code:400,message:'password not matching'})
            }
        }
        else{
            res.send({code:404,message:'name not found'})
        }
    }
}
module.exports={login}