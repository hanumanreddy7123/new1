const user=require('../models/user')
async function getcart(req,res)
{
  const userid=req.body.userid
  const data=await user.findOne({_id:userid}).populate('cart')
  console.log(data)
  res.send (data)
}
module.exports={getcart}