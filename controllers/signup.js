const user=require('../models/user')
async function signup(req,res)
{
  const Username=req.body.Username 
  const Password=req.body.Password
  const confirm=req.body.confirm
  const type=req.body.type || USER   
  const contact=req.body.contact
  if(!Username)
  {
    res.send({code:400,message:'name required'})
  }
  else if(!Password)
  {
    res.send({code:400,message:'password required'})
  }
  else{
    const newuser= await new user({Username,Password,confirm,type,contact})
    const saved=newuser.save()
    if(saved)
    {
        res.send({code:200,message:'saved'})
    }
    else{
        res.send({code:404,message:'error'})
    }
  }
}
module.exports={signup}