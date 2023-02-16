const pr=require('../models/product')
async function delproduct(req,res)
{
  const ids=req.body
  const response=await pr.deleteMany({_id:{$in:ids}})
  if(response)
  {
    res.send({code:200,message:'deleted products',data:response})
  }
  else{
    res.send({code:404,message:'error'})
  }
}
module.exports={delproduct}